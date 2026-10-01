#!/usr/bin/env node
/**
 * run-tests.js — runs every scripts/test/*.test.js on Node's built-in test runner.
 *
 * Purpose: give `npm test` a file list that does not depend on the shell. npm runs scripts
 *          through cmd.exe on Windows, which does not expand globs, and Node only learned
 *          to expand them itself in v21 — so a bare glob failed on Windows with Node 20,
 *          a combination the manifest allows.
 * Version: v0.5.6
 * Sprint:  v0.5.6
 */

'use strict';

const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const dir = path.join(__dirname, 'test');
const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('.test.js'))
  .sort()
  .map((f) => path.join(dir, f));

if (files.length === 0) {
  console.error(`run-tests: nenhum *.test.js em ${dir}`);
  process.exit(1);
}

const run = spawnSync(process.execPath, ['--test', ...files], { stdio: 'inherit' });
process.exit(run.status ?? 1);
