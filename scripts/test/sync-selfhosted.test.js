/**
 * sync-selfhosted.test.js — unit tests for the self-hosted catalogue generator.
 *
 * Version: v0.5.2 · Sprint: v0.5.2 P6
 * Run: node --test scripts/test/
 *
 * Two of these suites exist because of bugs that actually shipped during v0.5.0 PR 4
 * and were only caught by eyeballing the generated output:
 *
 *   1. The macro-category map was built from tag FILE slugs (`note-taking--editors`,
 *      double dash) while software files carry DISPLAY names, whose slug collapses to
 *      a single dash. Equality tests silently never matched — 203 entries landed in
 *      "Outros" and Security showed 7.
 *   2. Sections grouped by `tags[0]`, so an entry tagged
 *      ["Miscellaneous", "Monitoring & Status Pages"] rendered under Miscellaneous
 *      and its monitoring signal vanished from the catalogue.
 *
 * All fixtures are synthetic, in the upstream's real shape.
 */

'use strict';

const { test, describe } = require('node:test');
const assert = require('node:assert/strict');

const { slugifyTag, parseYaml, macroFor } = require('../sync-selfhosted.js');

describe('slugifyTag: nomes de exibição colapsam separadores', () => {
  const cases = [
    ['Note-taking & Editors', 'note-taking-editors'],
    ['Task Management & To-do Lists', 'task-management-to-do-lists'],
    ['Money, Budgeting & Management', 'money-budgeting-management'],
    ['Monitoring & Status Pages', 'monitoring-status-pages'],
    ['Federated Identity & Authentication', 'federated-identity-authentication'],
    ['Communication - Email - Complete Solutions', 'communication-email-complete-solutions'],
    ['Software Development - CI/CD', 'software-development-ci-cd'],
    ['Maps and Global Positioning System (GPS)', 'maps-and-global-positioning-system-gps'],
    ['Password Managers', 'password-managers'],
  ];
  for (const [input, expected] of cases) {
    test(`${input} → ${expected}`, () => assert.equal(slugifyTag(input), expected));
  }

  test('nunca devolve hífen duplo — a causa raiz do bug', () => {
    for (const [input] of cases) assert.ok(!slugifyTag(input).includes('--'), input);
  });

  test('nunca começa nem termina com hífen', () => {
    for (const [input] of cases) assert.ok(!/^-|-$/.test(slugifyTag(input)), input);
  });
});

describe('parseYaml: o schema plano do upstream', () => {
  // CRLF on purpose: the upstream repo checks out with Windows line endings here.
  const fixture = [
    'name: Exemplo',
    'website_url: https://exemplo.test',
    'description: Uma ferramenta de exemplo, com vírgula: e dois-pontos.',
    'licenses:',
    '  - AGPL-3.0',
    '  - MIT',
    'platforms:',
    '  - Docker',
    '  - PHP',
    'tags:',
    '  - Miscellaneous',
    '  - Monitoring & Status Pages',
    'stargazers_count: 4089',
    "updated_at: '2026-07-05'",
    'archived: false',
    'current_release:',
    '  tag: v8.0.1',
    '  published_at: 2026-07-05',
    'commit_history:',
    '  2026-06: 104',
  ].join('\r\n');

  const y = parseYaml(fixture);

  test('escalares', () => {
    assert.equal(y.name, 'Exemplo');
    assert.equal(y.website_url, 'https://exemplo.test');
    assert.equal(y.stargazers_count, '4089');
    assert.equal(y.archived, 'false');
  });

  test('descrição preserva pontuação interna', () => {
    assert.equal(y.description, 'Uma ferramenta de exemplo, com vírgula: e dois-pontos.');
  });

  test('remove aspas simples da data', () => assert.equal(y.updated_at, '2026-07-05'));

  test('listas', () => {
    assert.deepEqual(y.licenses, ['AGPL-3.0', 'MIT']);
    assert.deepEqual(y.platforms, ['Docker', 'PHP']);
    assert.deepEqual(y.tags, ['Miscellaneous', 'Monitoring & Status Pages']);
  });

  test('mapas aninhados são ignorados sem quebrar o parse', () => {
    assert.ok(Array.isArray(y.current_release));
    assert.equal(y.current_release.length, 0);
  });

  test('descrição entre aspas duplas', () => {
    assert.equal(parseYaml('description: "Com aspas duplas."\n').description, 'Com aspas duplas.');
  });

  test('arquivo vazio não explode', () => assert.deepEqual(parseYaml(''), {}));
});

describe('macroFor: classifica pela tag que casou, não pela primeira', () => {
  test('primeira tag genérica não sequestra a entrada', () => {
    // Exactly the shipped bug: Miscellaneous first, real signal second.
    const { id, tag } = macroFor({ tags: ['Miscellaneous', 'Monitoring & Status Pages'] });
    assert.equal(id, 'observabilidade');
    assert.equal(tag, 'Monitoring & Status Pages', 'a seção precisa usar a tag que decidiu o bucket');
  });

  test('tag única e específica', () => {
    assert.equal(macroFor({ tags: ['Password Managers'] }).id, 'seguranca-identidade');
  });

  test('prefixos amplos continuam funcionando', () => {
    assert.equal(macroFor({ tags: ['Communication - IRC'] }).id, 'comunicacao');
    assert.equal(macroFor({ tags: ['Software Development - Testing'] }).id, 'desenvolvimento');
    assert.equal(macroFor({ tags: ['File Transfer - Object Storage & File Servers'] }).id, 'arquivos-backup');
    assert.equal(macroFor({ tags: ['Document Management - E-books'] }).id, 'produtividade');
  });

  test('nomes de exibição com hífen simples casam a lista de igualdade', () => {
    // These are the ones the double-dash bug silently dropped into "Outros".
    assert.equal(macroFor({ tags: ['Note-taking & Editors'] }).id, 'produtividade');
    assert.equal(macroFor({ tags: ['Money, Budgeting & Management'] }).id, 'negocio');
    assert.equal(macroFor({ tags: ['Task Management & To-do Lists'] }).id, 'produtividade');
  });

  test('IA generativa tem nome diferente do slug do arquivo de tag', () => {
    assert.equal(macroFor({ tags: ['Generative Artificial Intelligence (GenAI)'] }).id, 'automacao-ia');
  });

  test('sem tag reconhecida cai em outros', () => {
    assert.equal(macroFor({ tags: ['Miscellaneous'] }).id, 'outros');
    assert.equal(macroFor({ tags: [] }).id, 'outros');
  });
});
