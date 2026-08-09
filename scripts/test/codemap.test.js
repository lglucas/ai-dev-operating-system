/**
 * codemap.test.js — unit tests for the CODEMAP generator.
 *
 * Purpose: pin the header-extraction behaviour, because the quality of the whole map
 *          depends on it — a bad describe() produces a map that reads plausibly and
 *          points nowhere.
 * Version: v0.5.3
 * Sprint:  v0.5.3
 *
 * Run: node --test scripts/test/*.test.js
 */

'use strict';

const { test, describe: suite } = require('node:test');
const assert = require('node:assert/strict');

const { describe, clean, CODE_EXT, SKIP_DIR } = require('../codemap.js');

suite('describe: extrai o cabeçalho Purpose que a code-style exige', () => {
  test('bloco JSDoc', () => {
    const f = `/**\n * app.ts — entrypoint.\n *\n * Purpose: boots the server and mounts routers.\n * Version: v0.1.0\n */\n`;
    const r = describe(f);
    assert.equal(r.text, 'boots the server and mounts routers');
    assert.equal(r.missingHeader, false);
  });

  test('comentário de hash (Python, shell)', () => {
    const r = describe(`#!/usr/bin/env python\n# Purpose: normalises the incoming webhook payload.\n# Version: v0.2.0\n`);
    assert.equal(r.text, 'normalises the incoming webhook payload');
    assert.equal(r.missingHeader, false);
  });

  test('Purpose quebrado em duas linhas é reconstituído', () => {
    const f = `/**\n * Purpose: keeps the session alive across tabs, because losing it mid-checkout\n *          is the single worst moment to log someone out.\n * Version: v1.0.0\n */\n`;
    const r = describe(f);
    assert.ok(r.text.includes('across tabs'), r.text);
    assert.ok(r.text.includes('worst moment'), 'a continuação indentada precisa entrar');
    assert.equal(r.missingHeader, false);
  });

  test('Purpose quebrado em duas linhas também em comentário de hash', () => {
    // Regressão: o teste de indentação removia só `*`, então o `#` da segunda linha
    // impedia o match e a continuação era descartada em Python e shell.
    const f = `# Purpose: keeps the retry queue drained\n#          even when the broker is flapping.\n# Version: v1.0.0\n`;
    const r = describe(f);
    assert.ok(r.text.includes('retry queue drained'), r.text);
    assert.ok(r.text.includes('broker is flapping'), 'a continuação com # precisa entrar');
    assert.equal(r.missingHeader, false);
  });

  test('para na chave seguinte, não engole Version', () => {
    const r = describe(`/**\n * Purpose: does one thing.\n * Version: v9.9.9\n * Sprint: 42\n */\n`);
    assert.equal(r.text, 'does one thing');
    assert.ok(!r.text.includes('9.9.9'));
  });
});

suite('describe: fallbacks', () => {
  test('bloco de comentário sem Purpose → usa a primeira frase, mas marca a falta', () => {
    const r = describe(`/**\n * Handles the magic-link login flow end to end.\n */\nexport const x = 1;\n`);
    assert.equal(r.text, 'Handles the magic-link login flow end to end');
    assert.equal(r.missingHeader, true, 'sem Purpose ainda conta como cabeçalho faltando');
  });

  test('comentário de linha', () => {
    const r = describe(`// Wraps the payment provider SDK.\nexport const pay = () => {};\n`);
    assert.equal(r.text, 'Wraps the payment provider SDK');
    assert.equal(r.missingHeader, true);
  });

  test('shebang sozinho não vira descrição', () => {
    const r = describe(`#!/bin/bash\nset -e\necho oi\n`);
    assert.ok(r.text.startsWith('⚠️'), r.text);
    assert.equal(r.missingHeader, true);
  });

  test('arquivo sem comentário nenhum é sinalizado', () => {
    const r = describe(`export const noHeader = true;\n`);
    assert.ok(r.text.includes('sem cabeçalho'));
    assert.equal(r.missingHeader, true);
  });

  test('entrada inválida não derruba o gerador', () => {
    for (const v of [null, undefined, 42, {}]) {
      assert.equal(describe(v).missingHeader, true);
    }
  });
});

suite('clean: a descrição não pode quebrar a tabela Markdown', () => {
  test('escapa pipe', () => {
    assert.ok(clean('reads a | b union').includes('\\|'), 'pipe cru parte a tabela em duas colunas');
  });
  test('colapsa espaço em branco', () => assert.equal(clean('a   b\n\tc'), 'a b c'));
  test('remove ponto final', () => assert.equal(clean('faz coisas.'), 'faz coisas'));
  test('trunca em 160', () => assert.ok(clean('x'.repeat(400)).length <= 160));
});

suite('descoberta de arquivos', () => {
  test('extensões de código cobrem as stacks que o OS mira', () => {
    for (const e of ['.ts', '.tsx', '.js', '.py', '.go', '.rs', '.sql', '.sh', '.vue', '.svelte']) {
      assert.ok(CODE_EXT.has(e), `${e} deveria contar como código`);
    }
  });

  test('markdown e config não entram no mapa', () => {
    for (const e of ['.md', '.json', '.yml', '.png', '.lock']) {
      assert.ok(!CODE_EXT.has(e), `${e} não é código`);
    }
  });

  test('diretórios gerados são ignorados', () => {
    for (const p of ['node_modules/x/i.js', 'dist/a.js', 'build/b.js', '.next/c.js', 'src/vendor/d.js', 'coverage/e.js']) {
      assert.ok(SKIP_DIR.test(p), `${p} deveria ser pulado`);
    }
  });

  test('symlink rastreado não é seguido para fora do repo', () => {
    // collect() lê de ROOT, fixado na carga do módulo, então este caso só dá para
    // exercitar rodando o script inteiro num repo temporário.
    const fs = require('fs');
    const os = require('os');
    const path = require('path');
    const { execFileSync } = require('child_process');

    const base = fs.mkdtempSync(path.join(os.tmpdir(), 'codemap-symlink-'));
    const outside = path.join(base, 'fora.js');
    const repo = path.join(base, 'repo');
    fs.mkdirSync(repo);
    fs.writeFileSync(outside, '// Purpose: CONTEUDO-DE-FORA-DO-REPO\n');
    fs.writeFileSync(path.join(repo, 'real.js'), '// Purpose: fica no mapa\n');

    try {
      fs.symlinkSync(outside, path.join(repo, 'link.js'));
    } catch {
      return; // Windows sem privilégio de symlink — nada a verificar aqui.
    }

    const git = (...a) => execFileSync('git', a, { cwd: repo, stdio: 'pipe' });
    git('init', '-q');
    git('config', 'user.email', 'test@example.com');
    git('config', 'user.name', 'test');
    git('add', '-A');

    execFileSync(process.execPath, [path.join(__dirname, '..', 'codemap.js')], { cwd: repo, stdio: 'pipe' });
    const map = fs.readFileSync(path.join(repo, 'CODEMAP.md'), 'utf8');

    assert.ok(map.includes('real.js'), 'o arquivo real precisa estar no mapa');
    assert.ok(!map.includes('CONTEUDO-DE-FORA-DO-REPO'), 'o conteúdo apontado pelo symlink vazou para o mapa');
  });

  test('caminhos legítimos não são confundidos com gerados', () => {
    // "distribuidor" contém "dist", "outbox" contém "out" — o regex exige limite de path.
    for (const p of ['src/app.ts', 'src/distribuidor/calc.ts', 'src/outbox/queue.ts', 'lib/build-helper.ts']) {
      assert.ok(!SKIP_DIR.test(p), `${p} não deveria ser pulado`);
    }
  });
});
