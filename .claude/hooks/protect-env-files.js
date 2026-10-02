#!/usr/bin/env node
/**
 * protect-env-files.js — PreToolUse hook. Stops Claude writing into real `.env` files.
 *
 * Purpose: the OS position is that real secrets live in the user's local environment and
 *          the agent maintains `.env.example` instead. This enforces that split.
 * Version: v0.5.2
 * Sprint:  v0.5.2 P1
 *
 * Why separate from block-secret-commit.js: that hook guards the commit; this one guards
 * the write. A `.env` can be written and never committed and still leak — through a log,
 * a screenshot, or a paste into the chat.
 *
 * Contract: reads the PreToolUse JSON payload on stdin. Exit 0 allows the tool call;
 *           exit 2 blocks it and shows stderr to Claude.
 *
 * Escape hatch: AIOS_ALLOW_ENV_WRITE=1 (documented in .claude/hooks/README.md).
 */

'use strict';

const fs = require('node:fs');

// THE definition of "real env file" for the whole OS: `.env` plus any number of suffixes
// (`.env.staging`, `.env.development.local`), unless the last one marks a template.
// block-secret-commit.js imports it, and os-self-test.js checks `.gitignore` against it.
// An earlier version enumerated names per gate, and each gate had a different list.
const REAL_ENV = /(^|[\\/])\.env(\.[A-Za-z0-9_-]+)*$/i;
const TEMPLATE_ENV = /(^|[\\/])\.env(\.[A-Za-z0-9_-]+)*\.(example|sample|template|dist)$/i;

/** True when the path is a real env file, not a template. */
function isProtectedEnvPath(filePath) {
  const p = String(filePath || '');
  if (!p) return false;
  if (TEMPLATE_ENV.test(p)) return false;
  return REAL_ENV.test(p);
}

/**
 * Real env files a shell command writes through a redirect or `tee`.
 * Best-effort: a shell has endless ways to write a file (`cp`, `sed -i`, a script), and
 * this reads only the two an agent reaches for. The commit gate is what stops the leak.
 */
function envWriteTargets(command) {
  const text = String(command || '');
  // A word is a quoted run or a bare one, so `> "my project/.env"` stays one path.
  const word = `"[^"]*"|'[^']*'|[^\\s;|&<>()"']+`;
  const words = [];
  for (const m of text.matchAll(new RegExp(`>>?\\s*(${word})`, 'g'))) words.push(m[1]);
  // `tee` writes every operand, not just the first: `tee out.log .env`.
  for (const m of text.matchAll(/\btee\b([^;|&<>()\n]*)/g)) {
    words.push(...(m[1].match(new RegExp(word, 'g')) || []).filter((w) => !w.startsWith('-')));
  }
  return words.map((w) => w.replace(/^(["'])(.*)\1$/, '$2')).filter(isProtectedEnvPath);
}

function readStdin() {
  try {
    return fs.readFileSync(0, 'utf8');
  } catch {
    return '';
  }
}

function main() {
  if (process.env.AIOS_ALLOW_ENV_WRITE === '1') process.exit(0);

  let payload = {};
  try {
    payload = JSON.parse(readStdin() || '{}');
  } catch {
    process.exit(0); // fail open on a malformed payload
  }

  // Write/Edit carry a path; Bash and PowerShell carry a command.
  const input = payload?.tool_input || {};
  const edited = input.file_path || input.notebook_path || '';
  const filePath = isProtectedEnvPath(edited) ? edited : envWriteTargets(input.command)[0];
  if (!filePath) process.exit(0);

  process.stderr.write(
    `BLOQUEADO: escrita em arquivo de ambiente real (${filePath}).\n\n` +
      `Neste OS, o .env real é do usuário — o agente não escreve nele.\n\n` +
      `O que fazer em vez disso:\n` +
      `  1. Adicione a variável ao .env.example, com valor placeholder e um comentário do que é.\n` +
      `  2. Peça ao usuário para preencher o valor real no .env dele, fora do chat.\n` +
      `  3. Nunca peça a chave colada na conversa — ela fica no histórico.\n\n` +
      `Regra: .claude/rules/secrets.md · Workflow: .claude/skills/secrets-discipline/SKILL.md\n` +
      `Precisa mesmo escrever? Rode uma vez com AIOS_ALLOW_ENV_WRITE=1.\n`,
  );
  process.exit(2);
}

module.exports = { isProtectedEnvPath, envWriteTargets, REAL_ENV, TEMPLATE_ENV };

if (require.main === module) main();
