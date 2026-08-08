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

const fs = require('fs');

const REAL_ENV = /(^|[\\/])\.env(\.[A-Za-z0-9_-]+)?$/i;
const TEMPLATE_ENV = /(^|[\\/])\.env\.(example|sample|template|dist)$/i;

/** Exported for tests. True when the path is a real env file, not a template. */
function isProtectedEnvPath(filePath) {
  const p = String(filePath || '');
  if (!p) return false;
  if (TEMPLATE_ENV.test(p)) return false;
  return REAL_ENV.test(p);
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

  const filePath = payload?.tool_input?.file_path || payload?.tool_input?.notebook_path || '';
  if (!isProtectedEnvPath(filePath)) process.exit(0);

  process.stderr.write(
    `BLOQUEADO: escrita em arquivo de ambiente real (${filePath}).\n\n` +
    `Neste OS, o .env real é do usuário — o agente não escreve nele.\n\n` +
    `O que fazer em vez disso:\n` +
    `  1. Adicione a variável ao .env.example, com valor placeholder e um comentário do que é.\n` +
    `  2. Peça ao usuário para preencher o valor real no .env dele, fora do chat.\n` +
    `  3. Nunca peça a chave colada na conversa — ela fica no histórico.\n\n` +
    `Regra: .claude/rules/secrets.md · Workflow: .claude/skills/secrets-discipline/SKILL.md\n` +
    `Precisa mesmo escrever? Rode uma vez com AIOS_ALLOW_ENV_WRITE=1.\n`
  );
  process.exit(2);
}

module.exports = { isProtectedEnvPath, REAL_ENV, TEMPLATE_ENV };

if (require.main === module) main();
