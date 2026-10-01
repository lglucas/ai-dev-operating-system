#!/usr/bin/env node
/**
 * pre-commit.js — git pre-commit hook: the secret gate and the lint, outside Claude Code.
 *
 * Purpose: the PreToolUse gate only sees commits Claude makes. A commit from a terminal or
 *          an editor skipped it entirely. This runs the same scan from git itself.
 * Version: v0.5.6
 * Sprint:  v0.5.6
 *
 * Wired by `.husky/pre-commit`; the `prepare` script points git at that folder on
 * `npm install`. There is no husky dependency — the folder name is only the convention.
 *
 * Exit 0 lets the commit through; exit 1 stops it. Fails open outside a git repository.
 * Escape hatch: AIOS_ALLOW_SECRET_COMMIT=1 for the secret scan, the same variable the
 * PreToolUse gate honours (documented in .claude/hooks/README.md).
 */

'use strict';

const { execFileSync, spawnSync } = require('node:child_process');
const { scan } = require('../.claude/hooks/block-secret-commit.js');
const { findBiome } = require('../.claude/hooks/lint-on-edit.js');

function git(args) {
  try {
    return execFileSync('git', args, {
      encoding: 'utf8',
      maxBuffer: 20 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'ignore'],
    });
  } catch {
    return '';
  }
}

/** True when nothing staged looks like a credential. Never prints the matched value. */
function secretsOk() {
  if (process.env.AIOS_ALLOW_SECRET_COMMIT === '1') return true;

  const staged = git(['diff', '--cached', '--name-only']).split('\n').filter(Boolean);
  const findings = scan(git(['diff', '--cached', '--unified=0']), staged);
  if (findings.length === 0) return true;

  process.stderr.write(
    `BLOQUEADO: este commit parece conter credencial.\n\n` +
      `${findings.map((f) => `  • ${f.file} — ${f.label}`).join('\n')}\n\n` +
      `Tire o valor do código, ponha numa variável de ambiente e documente-a no .env.example.\n` +
      `Se a chave já foi exposta, ROTACIONE — tirar do commit não desfaz o vazamento.\n\n` +
      `Regra: .claude/rules/secrets.md\n` +
      `Falso positivo? Rode uma vez com AIOS_ALLOW_SECRET_COMMIT=1 e registre o porquê no session-log.\n`,
  );
  return false;
}

/** True when Biome accepts the staged files, or is not installed. */
function lintOk() {
  const biome = findBiome(process.cwd());
  if (!biome) return true; // `npm install` never ran — nothing to lint with

  const run = spawnSync(process.execPath, [biome, 'check', '--staged', '--no-errors-on-unmatched'], {
    stdio: 'inherit',
  });
  // A crash in the linter is not a reason to stop a commit.
  if (run.error || run.status === null || run.status === 0) return true;

  process.stderr.write(`\nLint falhou nos arquivos staged. Corrija com \`npm run format\` e adicione de novo.\n`);
  return false;
}

function main() {
  process.exit(secretsOk() && lintOk() ? 0 : 1);
}

module.exports = { secretsOk, lintOk };

if (require.main === module) main();
