/**
 * pre-commit.test.js — integration tests for the git pre-commit hook.
 *
 * Purpose: prove the hook stops a staged credential in a real git repository, and gets
 *          out of the way everywhere else.
 * Version: v0.5.6
 * Sprint:  v0.5.6
 *
 * Run: npm test
 *
 * The "secret" is SYNTHETIC and assembled at runtime, so this file never contains a
 * credential-shaped string and can itself be committed through the gate it tests.
 */

'use strict';

const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { execFileSync, spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const HOOK = path.join(__dirname, '..', 'pre-commit.js');
const FAKE_KEY = ['AKIA', 'IOSFODNN7', 'EXAMPLE'].join(''); // AWS's documentation placeholder

/** Runs fn inside a throwaway directory, optionally a git repo with `files` staged. */
function inTempDir({ gitRepo, files = {} }, fn) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'aios-precommit-'));
  try {
    if (gitRepo) execFileSync('git', ['init', '-q'], { cwd: dir });
    for (const [name, content] of Object.entries(files)) fs.writeFileSync(path.join(dir, name), content);
    if (gitRepo && Object.keys(files).length) execFileSync('git', ['add', '-A'], { cwd: dir });
    return fn(dir);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

const runHook = (cwd, env = {}) =>
  spawnSync(process.execPath, [HOOK], {
    cwd,
    encoding: 'utf8',
    env: { ...process.env, AIOS_ALLOW_SECRET_COMMIT: '', ...env },
  });

describe('pre-commit: credencial no stage', () => {
  const files = { 'config.js': `const k = '${FAKE_KEY}';\n` };

  test('para o commit e nomeia o arquivo, sem ecoar o valor', () => {
    inTempDir({ gitRepo: true, files }, (dir) => {
      const r = runHook(dir);
      assert.equal(r.status, 1);
      assert.match(r.stderr, /config\.js/);
      assert.ok(!r.stderr.includes(FAKE_KEY), 'o valor não pode aparecer na mensagem');
    });
  });

  test('o escape hatch libera', () => {
    inTempDir({ gitRepo: true, files }, (dir) => {
      assert.equal(runHook(dir, { AIOS_ALLOW_SECRET_COMMIT: '1' }).status, 0);
    });
  });

  test('um .env staged para o commit mesmo sem credencial dentro', () => {
    inTempDir({ gitRepo: true, files: { '.env': 'PORT=3000\n' } }, (dir) => {
      assert.equal(runHook(dir).status, 1);
    });
  });
});

describe('pre-commit: sai do caminho', () => {
  test('stage limpo passa', () => {
    inTempDir({ gitRepo: true, files: { 'index.js': 'module.exports = 1;\n' } }, (dir) => {
      assert.equal(runHook(dir).status, 0);
    });
  });

  // Removing a committed secret file is the fix, not the offence.
  test('remover um .env rastreado continua possível', () => {
    inTempDir({ gitRepo: true, files: { '.env': 'PORT=3000\n' } }, (dir) => {
      const identity = ['-c', 'user.name=test', '-c', 'user.email=test@example.com'];
      execFileSync('git', [...identity, 'commit', '-q', '-m', 'seed'], { cwd: dir });
      execFileSync('git', ['rm', '-q', '.env'], { cwd: dir });
      assert.equal(runHook(dir).status, 0);
    });
  });

  test('fora de um repositório git, falha aberto', () => {
    inTempDir({ gitRepo: false, files: { 'config.js': `const k = '${FAKE_KEY}';\n` } }, (dir) => {
      assert.equal(runHook(dir).status, 0);
    });
  });
});
