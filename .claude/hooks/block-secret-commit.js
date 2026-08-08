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

const { execFileSync } = require('child_process');
const fs = require('fs');

const PATTERNS = [
  ['OpenAI-style key', /\bsk-[A-Za-z0-9_-]{20,}/],
  ['GitHub personal token', /\bghp_[A-Za-z0-9]{36}\b/],
  ['GitHub fine-grained token', /\bgithub_pat_[A-Za-z0-9_]{50,}/],
  ['AWS access key id', /\bAKIA[0-9A-Z]{16}\b/],
  ['Google API key', /\bAIza[0-9A-Za-z_-]{35}\b/],
  ['Slack token', /\bxox[baprs]-[A-Za-z0-9-]{10,}/],
  ['Private key block', /-----BEGIN (?:[A-Z ]+ )?PRIVATE KEY-----/],
  ['Stripe secret key', /\b[sr]k_live_[A-Za-z0-9]{20,}/],
];

// Staged filenames that should never be committed. `.env.example` is the documented
// exception — it is how the OS tells you which variables exist, without their values.
const FORBIDDEN_FILE = /(^|\/)\.env(\.local|\.production|\.[a-z]+\.local)?$|\.pem$|\.key$|\.p12$|\.pfx$/i;
const ALLOWED_FILE = /(^|\/)\.env\.(example|sample|template)$/i;

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

/** Exported for tests: scan a unified diff and a staged file list, return findings. */
function scan(diff, stagedFiles) {
  const findings = [];

  // 1. Secret-shaped strings in ADDED lines only — removing a leaked key must stay possible.
  let currentFile = '(unknown)';
  for (const line of String(diff || '').split('\n')) {
    const header = line.match(/^\+\+\+ b\/(.+)$/);
    if (header) { currentFile = header[1]; continue; }
    if (!line.startsWith('+') || line.startsWith('+++')) continue;
    for (const [label, re] of PATTERNS) {
      if (re.test(line)) findings.push({ file: currentFile, label });
    }
  }

  // 2. Forbidden files being staged at all.
  for (const f of stagedFiles || []) {
    if (FORBIDDEN_FILE.test(f) && !ALLOWED_FILE.test(f)) {
      findings.push({ file: f, label: 'secret-bearing file staged' });
    }
  }

  // Deduplicate on file+label. The matched value is deliberately never retained.
  const seen = new Set();
  return findings.filter(f => {
    const k = `${f.file}::${f.label}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function isGitCommit(command) {
  return /\bgit\s+(?:-[^\s]+\s+)*commit\b/.test(String(command || ''));
}

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
  const includeUnstaged = /\bcommit\b[^&|;]*\s-[a-zA-Z]*a/.test(command);
  const diff = git(['diff', '--cached', '--unified=0'], cwd)
    + (includeUnstaged ? git(['diff', '--unified=0'], cwd) : '');
  const staged = git(['diff', '--cached', '--name-only'], cwd).split('\n').filter(Boolean);

  const findings = scan(diff, staged);
  if (findings.length === 0) process.exit(0);

  const lines = findings.map(f => `  • ${f.file} — ${f.label}`);

  process.stderr.write(
    `BLOQUEADO: este commit parece conter credencial.\n\n${lines.join('\n')}\n\n` +
    `O que fazer:\n` +
    `  1. Tire o valor do código e ponha numa variável de ambiente.\n` +
    `  2. Confirme que o arquivo real está no .gitignore.\n` +
    `  3. Documente a variável (sem o valor) no .env.example.\n` +
    `  4. Se a chave já foi exposta, ROTACIONE — tirar do commit não desfaz o vazamento.\n\n` +
    `Regra: .claude/rules/secrets.md · Workflow: .claude/skills/secrets-discipline/SKILL.md\n` +
    `Falso positivo? Rode uma vez com AIOS_ALLOW_SECRET_COMMIT=1 e registre o porquê no session-log.\n`
  );
  process.exit(2);
}

module.exports = { scan, isGitCommit, PATTERNS, FORBIDDEN_FILE, ALLOWED_FILE };

if (require.main === module) main();
