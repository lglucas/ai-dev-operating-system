/**
 * instruction-drift.test.js — unit tests for the instruction-drift detector.
 *
 * Purpose: pin what counts as a dangling reference and what does not, because a noisy
 *          check gets switched off and a silent one lets the template's dead command
 *          table survive another release.
 * Version: v0.5.5
 * Sprint:  v0.5.5
 *
 * Run: node --test scripts/test/*.test.js
 */

'use strict';

const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const {
  danglingCommands, danglingAgents, danglingStages, expandRange, pinnedModels,
  wizardHeadings, instructionFiles, scanRepo,
} = require('../instruction-drift.js');

describe('danglingCommands', () => {
  const known = new Set(['sprint-start', 'release-check']);
  test('comando inexistente em backticks é pego', () => {
    assert.deepEqual(danglingCommands('| `/feature-new` | Scaffold |', known), ['feature-new']);
  });
  test('comando ou skill existente passa', () => {
    assert.deepEqual(danglingCommands('rode `/sprint-start` e depois `/release-check`', known), []);
  });
  test('allowlist: comando externo e rota de produto', () => {
    assert.deepEqual(danglingCommands('`/codex` e a rota `/investors`', known), []);
  });
  test('caminho de API não é comando', () => {
    assert.deepEqual(danglingCommands('`/v1/organizations/usage_report`', known), []);
  });
});

describe('danglingAgents', () => {
  const known = new Set(['technical-security-red-team-agent']);
  test('agente renomeado é pego', () => {
    assert.deepEqual(danglingAgents('use o security-agent', known), ['security-agent']);
  });
  test('nome completo existente passa', () => {
    assert.deepEqual(danglingAgents('`technical-security-red-team-agent`', known), []);
  });
  test('"multi-agent" é palavra, não agente', () => {
    assert.deepEqual(danglingAgents('Use multi-agent review when relevant.', known), []);
  });
});

describe('danglingStages', () => {
  const headings = wizardHeadings('## 2.4 — A\n## 2.5 — B\n## 2.6 — C\n## 4.1 — D\n');
  test('estágio existente passa, nos dois idiomas', () => {
    assert.deepEqual(danglingStages('Runs at WIZARD stage 2.5 and estágio 4.1', headings), []);
  });
  test('intervalo confere as duas pontas', () => {
    assert.deepEqual(danglingStages('stages 2.4–2.7', headings), ['2.7']);
  });
  test('Phase N.N também é estágio', () => {
    assert.deepEqual(danglingStages('Runs at **Phase 4.4**', headings), ['4.4']);
  });
  test('buraco no meio do intervalo é pego', () => {
    const gap = wizardHeadings('## 2.4 — A\n## 2.6 — C\n');
    assert.deepEqual(danglingStages('stages 2.4–2.6', gap), ['2.5']);
  });
});

describe('expandRange', () => {
  test('mesma fase expande todos os estágios', () => {
    assert.deepEqual(expandRange('2.4', '2.6'), ['2.4', '2.5', '2.6']);
  });
  test('fases diferentes ou intervalo invertido ficam só nas pontas', () => {
    assert.deepEqual(expandRange('2.9', '3.1'), ['2.9', '3.1']);
    assert.deepEqual(expandRange('2.6', '2.4'), ['2.6', '2.4']);
  });
  test('estágio sozinho', () => {
    assert.deepEqual(expandRange('3.2'), ['3.2']);
  });
});

describe('pinnedModels', () => {
  test('pega geração fixada em prosa e em ID', () => {
    assert.deepEqual(pinnedModels('use Sonnet 4.6 ou claude-opus-4-7'), ['Sonnet 4.6', 'claude-opus-4-7']);
  });
  test('nome de tier sem versão passa', () => {
    assert.deepEqual(pinnedModels('prefira o tier Haiku ou Sonnet; Opus só se justificar'), []);
  });
});

describe('scanRepo', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'drift-'));
  const put = (rel, text) => {
    fs.mkdirSync(path.dirname(path.join(root, rel)), { recursive: true });
    fs.writeFileSync(path.join(root, rel), text);
  };
  put('.claude/agents/coordinator-agent.md', '---\nname: coordinator-agent\n---\n');
  put('.claude/commands/sprint-start.md', '---\ndescription: x\n---\n');
  put('.claude/skills/release-check/SKILL.md', '---\nname: release-check\n---\n');
  put('.claude/skills/external/README.md', 'reference folder, not a skill\n');
  put('.claude/agents/notes.txt', 'not an agent\n');
  put('docs/guide.md', 'invoke `/external` here\n');
  put('WIZARD.md', '## 2.5 — Red team\n');
  // The defect as it shipped in templates/project/CLAUDE.md until v0.5.5.
  put('templates/project/CLAUDE.md', '| security-agent | x |\n| `/feature-new` | x |\n| `/release-check` | x |\n');
  put('CHANGELOG.md', 'removed `/old-command` and old-agent\n');
  put('session-log/2026-08-08-x.md', 'mentions ghost-agent\n');
  put('docs/skill-audit-2026-08-08.md', 'lists `/feature-new`\n');

  const { dangling, pinned } = scanRepo(root);
  const refs = dangling.map(d => `${d.file} ${d.ref}`);

  test('reproduz o defeito do template', () => {
    assert.ok(refs.includes('templates/project/CLAUDE.md security-agent'), refs.join('\n'));
    assert.ok(refs.includes('templates/project/CLAUDE.md /feature-new'), refs.join('\n'));
  });
  test('pasta de referência sem SKILL.md não é comando invocável', () => {
    assert.ok(refs.includes('docs/guide.md /external'), refs.join('\n'));
  });
  test('skill existente invocada como /nome não é defeito', () => {
    assert.ok(!refs.some(r => r.endsWith('/release-check')));
  });
  test('histórico e registros datados ficam fora', () => {
    assert.ok(!refs.some(r => /CHANGELOG|session-log|skill-audit/.test(r)), refs.join('\n'));
    const files = instructionFiles(root).map(f => path.basename(f));
    assert.ok(!files.includes('CHANGELOG.md'));
    assert.ok(!files.includes('skill-audit-2026-08-08.md'));
  });
  test('sem modelos fixados no fixture', () => {
    assert.deepEqual(pinned, []);
  });
});
