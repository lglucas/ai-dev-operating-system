/**
 * sensor-wiring.test.js — unit tests for the sensor wiring check.
 *
 * Purpose: pin the two severities — a missing sensor is an error in the OS repo and a
 *          warning in a derived project — and the "exists but never gates" class.
 * Version: v0.5.6
 * Sprint:  v0.5.6
 *
 * Run: npm test
 */

'use strict';

const { test, describe } = require('node:test');
const assert = require('node:assert/strict');

const { evaluate } = require('../sensor-wiring.js');

const pkg = (over = {}) =>
  JSON.stringify({
    name: 'meu-saas',
    scripts: { test: 'node --test', lint: 'biome check .', prepare: 'git config core.hooksPath .husky' },
    devDependencies: { '@biomejs/biome': '2.5.15' },
    ...over,
  });
const settings = JSON.stringify({ hooks: { PostToolUse: [{ matcher: 'Write', hooks: [] }] } });
const wired = (over = {}) => ({
  pkgText: pkg(),
  lintConfig: 'biome.json',
  lockfile: 'package-lock.json',
  settingsText: settings,
  ciText: 'run: npm test\nrun: npm run lint\n',
  preCommit: true,
  isOsRepo: true,
  ...over,
});

describe('sensor-wiring: tudo ligado', () => {
  test('não produz erro nem aviso', () => {
    const r = evaluate(wired());
    assert.deepEqual(r.errors, []);
    assert.deepEqual(r.warnings, []);
    assert.equal(r.passes.length, 7);
  });
});

describe('sensor-wiring: pre-commit do git', () => {
  test('sem .husky/pre-commit: erro no repo do OS, aviso no derivado', () => {
    assert.match(evaluate(wired({ preCommit: false })).errors[0], /pre-commit/);
    const derived = evaluate(wired({ preCommit: false, isOsRepo: false }));
    assert.deepEqual(derived.errors, []);
    assert.ok(derived.warnings.some((w) => w.includes('pre-commit')));
  });

  // The hook file alone does nothing: git only runs it once core.hooksPath points there.
  test('hook presente sem script prepare avisa', () => {
    const r = evaluate(wired({ pkgText: pkg({ scripts: { test: 'node --test', lint: 'biome check .' } }) }));
    assert.deepEqual(r.errors, []);
    assert.ok(r.warnings.some((w) => w.includes('prepare')));
  });
});

describe('sensor-wiring: sensor ausente', () => {
  const cases = [
    ['package.json ausente', { pkgText: null }, /package\.json ausente/],
    ['sem script test', { pkgText: pkg({ scripts: { lint: 'biome check .' } }) }, /sem script "test"/],
    [
      'placeholder do npm init',
      { pkgText: pkg({ scripts: { test: 'echo "Error: no test specified"', lint: 'biome check .' } }) },
      /sem script "test"/,
    ],
    ['sem script lint', { pkgText: pkg({ scripts: { test: 'node --test' } }) }, /sem script "lint"/],
    ['lint sem configuração', { lintConfig: null }, /não há configuração de linter/],
  ];
  for (const [label, over, re] of cases) {
    test(`${label}: erro no repo do OS`, () => {
      const r = evaluate(wired(over));
      assert.equal(r.errors.length, 1);
      assert.match(r.errors[0], re);
    });
    test(`${label}: só aviso no projeto derivado`, () => {
      const r = evaluate(wired({ ...over, isOsRepo: false }));
      assert.deepEqual(r.errors, []);
      assert.ok(r.warnings.some((w) => re.test(w)));
    });
  }

  test('package.json inválido é erro nos dois modos', () => {
    assert.equal(evaluate(wired({ pkgText: '{', isOsRepo: false })).errors.length, 1);
  });
});

describe('sensor-wiring: sensor que existe e não barra nada', () => {
  test('CI que não roda o lint avisa', () => {
    const r = evaluate(wired({ ciText: 'run: npm test\n' }));
    assert.deepEqual(r.errors, []);
    assert.ok(r.warnings.some((w) => w.includes('npm run lint')));
  });

  test('sem CI nenhum, não cobra o CI', () => {
    assert.deepEqual(evaluate(wired({ ciText: null })).warnings, []);
  });

  test('sem hook PostToolUse avisa', () => {
    const r = evaluate(wired({ settingsText: JSON.stringify({ hooks: { PreToolUse: [] } }) }));
    assert.ok(r.warnings.some((w) => w.includes('PostToolUse')));
  });

  test('dependência sem lockfile avisa', () => {
    assert.ok(evaluate(wired({ lockfile: null })).warnings.some((w) => w.includes('lockfile')));
  });

  test('sem dependências, lockfile não é cobrado', () => {
    const r = evaluate(wired({ pkgText: pkg({ devDependencies: {} }), lockfile: null }));
    assert.deepEqual(r.warnings, []);
  });
});

describe('sensor-wiring: herança do manifesto', () => {
  const inherited = pkg({ name: 'ai-dev-operating-system' });

  test('projeto derivado com o nome do OS avisa', () => {
    const r = evaluate(wired({ pkgText: inherited, isOsRepo: false }));
    assert.ok(r.warnings.some((w) => w.includes('renomeie')));
  });

  test('o mesmo nome no repo do OS é o esperado', () => {
    assert.deepEqual(evaluate(wired({ pkgText: inherited })).warnings, []);
  });
});
