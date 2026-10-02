#!/usr/bin/env node
/**
 * block-secret-commit.js — PreToolUse hook. Blocks `git commit` when the staged
 * diff contains something shaped like a real credential, or stages a secret file.
 *
 * Purpose: turn golden rule #9 ("never hardcode secrets") from a request into a guarantee.
 *          The `secrets-scan` skill finds leaks when invoked; this stops them at the commit.
 * Version: v0.5.2
 * Sprint:  v0.5.2 P1
 *
 * Contract: reads the PreToolUse JSON payload on stdin. Exit 0 allows the tool call;
 *           exit 2 blocks it and shows stderr to Claude.
 *
 * Escape hatch: AIOS_ALLOW_SECRET_COMMIT=1 (documented in .claude/hooks/README.md).
 *
 * NOTE ON PATTERNS: these require the full token shape, not just the prefix. The repo's
 * own `.claude/rules/secrets.md` documents `sk-`, `AKIA` and friends as literal text — a
 * prefix match would block committing the very rule that defines the patterns.
 */

'use strict';

const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const { isProtectedEnvPath } = require('./protect-env-files.js');

// The generic rule's value: 24+ opaque characters with a letter AND a digit, so that
// `STRIPE_SECRET_KEY=your_secret_key_goes_here` stays a placeholder.
const OPAQUE = '(?=[A-Za-z0-9+/_=-]*\\d)(?=[A-Za-z0-9+/_=-]*[A-Za-z])[A-Za-z0-9+/_=-]{24,}';
const SECRET_NAME = '[A-Z0-9_]*(?:SECRET|TOKEN|PASSWORD|API_KEY|PRIVATE_KEY|SERVICE_ROLE_KEY)[A-Z0-9_]*';

const PATTERNS = [
  ['OpenAI-style key', /\bsk-[A-Za-z0-9_-]{20,}/],
  ['GitHub personal token', /\bghp_[A-Za-z0-9]{36}\b/],
  ['GitHub fine-grained token', /\bgithub_pat_[A-Za-z0-9_]{50,}/],
  ['AWS access key id', /\bAKIA[0-9A-Z]{16}\b/],
  ['Google API key', /\bAIza[0-9A-Za-z_-]{35}\b/],
  ['Slack token', /\bxox[baprs]-[A-Za-z0-9-]{10,}/],
  ['Private key block', /-----BEGIN (?:[A-Z ]+ )?PRIVATE KEY-----/],
  ['Stripe secret key', /\b[sr]k_live_[A-Za-z0-9]{20,}/],
  ['Stripe webhook secret', /\bwhsec_[A-Za-z0-9+/=]{24,}/],
  ['Supabase secret key', /\bsb_secret_[A-Za-z0-9_-]{20,}|\bsbp_[A-Za-z0-9]{30,}/],
  ['Resend API key', /\bre_(?=[A-Za-z0-9_]*\d)[A-Za-z0-9_]{24,}\b/],
  // Supabase's anon and service_role keys are both JWTs; neither belongs in a literal.
  ['JWT', /\beyJ[A-Za-z0-9_-]{10,}\.eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/],
  // The backstop for secrets with no prefix at all (NEXTAUTH_SECRET is plain base64).
  ['opaque value in a secret-named variable', new RegExp(`\\b${SECRET_NAME}\\s*[:=]\\s*["'\`]?${OPAQUE}`)],
];

// Staged filenames that should never be committed. What counts as a real env file is
// decided in one place, protect-env-files.js; `.env.example` and other templates pass.
const KEY_FILE = /\.(pem|key|p12|pfx)$/i;
const isForbiddenFile = (file) => isProtectedEnvPath(file) || KEY_FILE.test(file);

function readStdin() {
  try {
    return fs.readFileSync(0, 'utf8');
  } catch {
    return '';
  }
}

function git(args, cwd) {
  try {
    return execFileSync('git', args, { cwd, encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 });
  } catch {
    return '';
  }
}

/**
 * Staged paths, minus deletions. Without the filter, `git rm .env` — the fix for a
 * committed secret file — would be blocked as "secret-bearing file staged".
 * Shared with scripts/pre-commit.js so both entry points list files the same way.
 */
function stagedFiles(cwd) {
  return git(['diff', '--cached', '--name-only', '--diff-filter=d'], cwd).split('\n').filter(Boolean);
}

/** Exported for tests: scan a unified diff and a staged file list, return findings. */
function scan(diff, stagedFiles) {
  const findings = [];

  // 1. Secret-shaped strings in ADDED lines only — removing a leaked key must stay possible.
  let currentFile = '(unknown)';
  for (const line of String(diff || '').split('\n')) {
    const header = line.match(/^\+\+\+ b\/(.+)$/);
    if (header) {
      currentFile = header[1];
      continue;
    }
    if (!line.startsWith('+') || line.startsWith('+++')) continue;
    // One finding per line: the first match wins, and the generic rule is last in the list.
    const hit = PATTERNS.find(([, re]) => re.test(line));
    if (hit) findings.push({ file: currentFile, label: hit[0] });
  }

  // 2. Forbidden files being staged at all.
  for (const f of stagedFiles || []) {
    if (isForbiddenFile(f)) {
      findings.push({ file: f, label: 'secret-bearing file staged' });
    }
  }

  // Deduplicate on file+label. The matched value is deliberately never retained.
  const seen = new Set();
  return findings.filter((f) => {
    const k = `${f.file}::${f.label}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

// Global git flags that consume the NEXT token as their value. Without this list,
// `git -C /tmp commit` reads as "git, -C, then /tmp" and the commit is missed: a bypass.
const VALUE_FLAGS = new Set(['-C', '-c', '--git-dir', '--work-tree', '--namespace', '--exec-path', '--config-env']);

const GIT_BIN = /(^|[\\/])git(\.exe)?$/i; // `git`, `/usr/bin/git`, `git.exe`
const QUOTE_AWARE = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g; // keeps `-c "user.name=A B"` as one value
const splitShell = (s) => s.split(/&&|\|\||\$\(|[;|&(){}\n]/);

/** True when a `git` token in the segment has `commit` as its subcommand. */
function hasCommit(segment, tokenRe) {
  const tokens = segment.match(tokenRe) || [];
  for (let g = 0; g < tokens.length; g++) {
    if (!GIT_BIN.test(tokens[g])) continue;
    for (let i = g + 1; i < tokens.length; i++) {
      const t = tokens[i];
      if (VALUE_FLAGS.has(t)) {
        i++;
        continue;
      } // flag + separate value
      if (t.startsWith('-')) continue; // valueless flag or --flag=value
      // First non-flag token is the subcommand. Only a match ends the search —
      // `git add . && git commit` must not be dismissed on the first segment.
      if (t === 'commit') return true;
      break;
    }
  }
  return false;
}

/**
 * True when the command runs `git commit` in any segment.
 * Token-based rather than regex-based so that global flags with values are handled.
 *
 * Read twice: as written, and with quotes flattened — so `bash -c "git commit"` and
 * `$(git commit)` are seen too. The second read errs towards scanning: `echo "git commit"`
 * triggers a scan that finds nothing. Still best-effort — a git alias or `$G commit` gets
 * past it, which is why scripts/pre-commit.js runs the same scan from git itself.
 */
function isGitCommit(command) {
  const raw = String(command || '');
  const flat = raw.replace(/["'`]/g, ' ');
  return splitShell(raw).some((s) => hasCommit(s, QUOTE_AWARE)) || splitShell(flat).some((s) => hasCommit(s, /\S+/g));
}

/** True for `git commit -a` / `-am` / `--all`, which stage tracked changes at commit time. */
const commitsAll = (command) => /\bcommit\b[^&|;]*\s(?:--all\b|-[a-zA-Z]*a)/.test(String(command || ''));

function main() {
  if (process.env.AIOS_ALLOW_SECRET_COMMIT === '1') process.exit(0);

  let payload = {};
  try {
    payload = JSON.parse(readStdin() || '{}');
  } catch {
    process.exit(0); // a malformed payload is not the user's problem — fail open
  }

  const command = payload?.tool_input?.command || '';
  if (!isGitCommit(command)) process.exit(0);

  const cwd = payload?.cwd || process.cwd();

  // `git commit -a` stages tracked modifications at commit time, so also inspect unstaged.
  const diff =
    git(['diff', '--cached', '--unified=0'], cwd) + (commitsAll(command) ? git(['diff', '--unified=0'], cwd) : '');
  const findings = scan(diff, stagedFiles(cwd));
  if (findings.length === 0) process.exit(0);

  const lines = findings.map((f) => `  • ${f.file} — ${f.label}`);

  process.stderr.write(
    `BLOQUEADO: este commit parece conter credencial.\n\n${lines.join('\n')}\n\n` +
      `O que fazer:\n` +
      `  1. Tire o valor do código e ponha numa variável de ambiente.\n` +
      `  2. Confirme que o arquivo real está no .gitignore.\n` +
      `  3. Documente a variável (sem o valor) no .env.example.\n` +
      `  4. Se a chave já foi exposta, ROTACIONE — tirar do commit não desfaz o vazamento.\n\n` +
      `Regra: .claude/rules/secrets.md · Workflow: .claude/skills/secrets-discipline/SKILL.md\n` +
      `Falso positivo? Rode uma vez com AIOS_ALLOW_SECRET_COMMIT=1 e registre o porquê no session-log.\n`,
  );
  process.exit(2);
}

module.exports = { scan, stagedFiles, isGitCommit, commitsAll, isForbiddenFile, PATTERNS };

if (require.main === module) main();
