#!/usr/bin/env node
/**
 * lint-on-edit.js — PostToolUse hook. Runs Biome on the file Claude just wrote and hands
 * the problems back to it.
 *
 * Purpose: close the feedback loop at the edit instead of at the CI. Without this, the
 *          agent learns about a lint or format error one push later, from a red check.
 * Version: v0.5.6
 * Sprint:  v0.5.6
 *
 * Why this is feedback and not a gate: the PreToolUse hooks block because a leaked secret
 * cannot be undone. A lint error can, so this hook never blocks and never rewrites the
 * file — rewriting behind the agent's back makes its next Edit fail on stale content.
 *
 * Contract: reads the PostToolUse JSON payload on stdin. Exit 0 says nothing; exit 2 shows
 *           stderr to Claude. The tool call has already happened either way.
 *
 * Fails open when Biome is not installed (`npm install` never ran), so a fresh clone or a
 * derived project on another stack behaves exactly as it did before this hook existed.
 *
 * Escape hatch: AIOS_SKIP_LINT_HOOK=1 (documented in .claude/hooks/README.md).
 */

'use strict';

const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const LINTABLE = /\.([cm]?[jt]sx?|jsonc?|css)$/i;
const MAX_OUTPUT = 4000;

/** Exported for tests. True for the file types Biome checks in this repo. */
function isLintable(filePath) {
  return LINTABLE.test(String(filePath || ''));
}

/** Exported for tests. True when filePath sits inside projectDir. */
function isInside(projectDir, filePath) {
  const rel = path.relative(path.resolve(projectDir), path.resolve(projectDir, filePath));
  return rel !== '' && !rel.startsWith('..') && !path.isAbsolute(rel);
}

/** Exported for tests. Path to the locally installed Biome entry point, or null. */
function findBiome(projectDir) {
  const bin = path.join(projectDir, 'node_modules', '@biomejs', 'biome', 'bin', 'biome');
  return fs.existsSync(bin) ? bin : null;
}

function readStdin() {
  try {
    return fs.readFileSync(0, 'utf8');
  } catch {
    return '';
  }
}

function main() {
  if (process.env.AIOS_SKIP_LINT_HOOK === '1') process.exit(0);

  let payload = {};
  try {
    payload = JSON.parse(readStdin() || '{}');
  } catch {
    process.exit(0); // fail open on a malformed payload
  }

  const projectDir = process.env.CLAUDE_PROJECT_DIR || payload?.cwd || process.cwd();
  const filePath = payload?.tool_input?.file_path || '';
  if (!isLintable(filePath) || !isInside(projectDir, filePath)) process.exit(0);
  if (!fs.existsSync(path.resolve(projectDir, filePath))) process.exit(0);

  const biome = findBiome(projectDir);
  if (!biome) process.exit(0);

  const rel = path.relative(projectDir, path.resolve(projectDir, filePath));
  const run = spawnSync(
    process.execPath,
    [biome, 'check', '--no-errors-on-unmatched', '--colors=off', '--max-diagnostics=20', rel],
    { cwd: projectDir, encoding: 'utf8', timeout: 20000 },
  );

  // A crash or a timeout in the linter is not the agent's mistake — stay quiet.
  if (run.error || run.status === null || run.status === 0) process.exit(0);

  const output = `${run.stdout || ''}${run.stderr || ''}`.trim().slice(0, MAX_OUTPUT);
  process.stderr.write(
    `LINT: o Biome encontrou problemas em ${rel}, que você acabou de editar.\n\n${output}\n\n` +
      `O arquivo foi gravado — isto é aviso, não bloqueio. Corrija antes de seguir:\n` +
      `  • formatação: npx biome check --write ${rel}\n` +
      `  • lint: ajuste o código; não afrouxe o biome.json para passar.\n`,
  );
  process.exit(2);
}

module.exports = { isLintable, isInside, findBiome, LINTABLE };

if (require.main === module) main();
