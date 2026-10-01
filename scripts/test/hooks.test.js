/**
 * hooks.test.js — unit tests for the PreToolUse gates and the PostToolUse feedback hook.
 *
 * Version: v0.5.2 · Sprint: v0.5.2 P6
 * Run: node --test scripts/test/
 *
 * All "secrets" below are SYNTHETIC — correct shape, invented value. Nothing here
 * is or ever was a real credential. `AKIAIOSFODNN7EXAMPLE` is AWS's own published
 * documentation placeholder.
 *
 * The regression these tests exist for: an earlier draft matched on prefix alone
 * (`sk-`, `AKIA`), which would have blocked committing `.claude/rules/secrets.md` —
 * the file that documents those very prefixes.
 */

'use strict';

const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const { scan, isGitCommit } = require('../../.claude/hooks/block-secret-commit.js');
const { isProtectedEnvPath } = require('../../.claude/hooks/protect-env-files.js');
const { isLintable, isInside, findBiome } = require('../../.claude/hooks/lint-on-edit.js');

const diffAdding = (file, line) => `+++ b/${file}\n+${line}\n`;

describe('block-secret-commit: deteta credencial com formato completo', () => {
  const cases = [
    ['OpenAI', 'const k = "sk-abcdefghij0123456789XYZQRS";'],
    ['GitHub PAT', 'TOKEN=ghp_ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'],
    ['AWS', 'aws_access_key_id = AKIAIOSFODNN7EXAMPLE'],
    ['Google', 'key: AIzaSyD-ABCDEFGHIJKLMNOPQRSTUVWXYZ01234'],
    ['Slack', 'SLACK=xoxb-1234567890-abcdefghij'],
    ['Stripe', 'STRIPE=sk_live_abcdefghij0123456789'],
    ['chave privada', '-----BEGIN RSA PRIVATE KEY-----'],
  ];
  for (const [label, line] of cases) {
    test(`bloqueia ${label}`, () => {
      const found = scan(diffAdding('src/config.ts', line), []);
      assert.equal(found.length, 1, `${label} deveria ter sido detectado`);
      assert.equal(found[0].file, 'src/config.ts');
    });
  }
});

describe('block-secret-commit: não bloqueia a documentação dos próprios padrões', () => {
  test('a regra secrets.md pode ser commitada', () => {
    const doc = '+++ b/.claude/rules/secrets.md\n+- sk-\n+- ghp_\n+- AKIA\n+- .env\n';
    assert.equal(scan(doc, []).length, 0);
  });

  test('prosa que menciona prefixo passa', () => {
    const prose = diffAdding('README.md', 'Chaves da OpenAI começam com sk- e as da AWS com AKIA.');
    assert.equal(scan(prose, []).length, 0);
  });
});

describe('block-secret-commit: só inspeciona linhas adicionadas', () => {
  test('remover uma chave vazada continua possível', () => {
    const removal = '+++ b/src/config.ts\n-const k = "sk-abcdefghij0123456789XYZQRS";\n';
    assert.equal(scan(removal, []).length, 0);
  });

  test('linha de contexto não dispara', () => {
    const context = '+++ b/src/config.ts\n const k = "sk-abcdefghij0123456789XYZQRS";\n';
    assert.equal(scan(context, []).length, 0);
  });
});

describe('block-secret-commit: arquivos proibidos no stage', () => {
  for (const f of ['.env', '.env.local', '.env.production', 'certs/server.pem', 'id_rsa.key']) {
    test(`bloqueia ${f}`, () => assert.equal(scan('', [f]).length, 1));
  }
  for (const f of ['.env.example', '.env.sample', '.env.template', 'src/index.ts']) {
    test(`permite ${f}`, () => assert.equal(scan('', [f]).length, 0));
  }
});

describe('block-secret-commit: nunca retém o valor casado', () => {
  test('o achado carrega só arquivo e rótulo', () => {
    const secret = 'sk-abcdefghij0123456789XYZQRS';
    const found = scan(diffAdding('src/config.ts', `const k="${secret}";`), []);
    assert.equal(found.length, 1);
    assert.deepEqual(Object.keys(found[0]).sort(), ['file', 'label']);
    assert.ok(!JSON.stringify(found).includes(secret), 'o valor não pode aparecer no achado');
  });
});

describe('block-secret-commit: deduplicação', () => {
  test('mesmo arquivo e mesmo padrão contam uma vez', () => {
    const twice = '+++ b/a.ts\n+sk-abcdefghij0123456789XYZQRS\n+sk-zyxwvutsrq9876543210ABCDEF\n';
    assert.equal(scan(twice, []).length, 1);
  });
});

describe('block-secret-commit: reconhece o comando', () => {
  // The -C case is a real bypass this suite caught: an earlier regex only handled
  // valueless flags, so `git -C dir commit` slipped through the gate entirely.
  const isCommit = [
    'git commit -m "x"',
    'git commit',
    'git   commit  --amend',
    'git -C /tmp commit -am y', // global flag consuming a value
    'git -c user.name=x commit -m y', // -c takes a value too
    'git --git-dir /r/.git commit',
    'cd /projeto && git commit -m y', // segundo segmento do shell
    'git add . && git commit -m y',
  ];
  const isNotCommit = [
    'git status',
    'git push',
    'git commit-tree abc', // subcomando diferente, prefixo igual
    'npm run commit-lint',
    'echo "git commitment"',
    'git log --format=commit',
    '',
  ];
  for (const c of isCommit) test(`é commit: ${c}`, () => assert.equal(isGitCommit(c), true));
  for (const c of isNotCommit) test(`não é commit: ${c || '(vazio)'}`, () => assert.equal(isGitCommit(c), false));
});

describe('protect-env-files: caminhos', () => {
  const B = String.fromCharCode(92); // barra invertida, sem depender do escaping do shell
  const blocked = [
    '/p/.env',
    '/p/.env.local',
    '/p/.env.production',
    `C:${B}p${B}.env`,
    `C:${B}p${B}.env.local`,
    '.env',
  ];
  const allowed = [
    '/p/.env.example',
    '/p/.env.sample',
    '/p/.env.template',
    '/p/.env.dist',
    '/p/src/index.ts',
    '/p/environment.ts',
    '/p/envelope.md',
    '',
  ];

  for (const p of blocked) test(`bloqueia ${JSON.stringify(p)}`, () => assert.equal(isProtectedEnvPath(p), true));
  for (const p of allowed) test(`permite ${JSON.stringify(p)}`, () => assert.equal(isProtectedEnvPath(p), false));
});

// ─────────────────────────────────────────────── lint-on-edit (PostToolUse)

const ROOT = path.join(__dirname, '..', '..');
const LINT_HOOK = path.join(ROOT, '.claude', 'hooks', 'lint-on-edit.js');
const runLintHook = (input, env) =>
  spawnSync(process.execPath, [LINT_HOOK], { input, encoding: 'utf8', env: { ...process.env, ...env } });

describe('lint-on-edit: quais arquivos são verificados', () => {
  for (const p of ['a.js', 'src/x.tsx', 'b.mjs', 'c.cjs', 'package.json', 'x.jsonc', 's.css', 'C:/p/a.ts']) {
    test(`verifica ${p}`, () => assert.equal(isLintable(p), true));
  }
  for (const p of ['README.md', '.env', 'a.py', 'notes.json.bak', '']) {
    test(`ignora ${p || '(vazio)'}`, () => assert.equal(isLintable(p), false));
  }

  test('só olha arquivo dentro do projeto', () => {
    assert.equal(isInside('/p', '/p/src/a.js'), true);
    assert.equal(isInside('/p', 'src/a.js'), true);
    assert.equal(isInside('/p', '/q/a.js'), false);
    assert.equal(isInside('/p', '../a.js'), false);
  });
});

describe('lint-on-edit: falha aberto', () => {
  test('payload malformado não trava a sessão', () => assert.equal(runLintHook('{not json', {}).status, 0));

  // The state of a fresh clone, or of a derived project that never ran `npm install`.
  test('sem Biome instalado, fica em silêncio', () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'aios-lint-'));
    try {
      const file = path.join(dir, 'a.js');
      fs.writeFileSync(file, 'debugger;\n');
      assert.equal(findBiome(dir), null);
      const r = runLintHook(JSON.stringify({ tool_input: { file_path: file } }), { CLAUDE_PROJECT_DIR: dir });
      assert.equal(r.status, 0);
      assert.equal(r.stderr, '');
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});

describe('lint-on-edit: devolve o problema ao agente', () => {
  const skip = findBiome(ROOT) ? false : 'Biome não instalado — rode npm install';
  const fixture = path.join(__dirname, `.lint-fixture-${process.pid}.js`);
  const payload = JSON.stringify({ tool_input: { file_path: fixture } });
  const withFixture = (content, env) => {
    fs.writeFileSync(fixture, content);
    try {
      return runLintHook(payload, { CLAUDE_PROJECT_DIR: ROOT, AIOS_SKIP_LINT_HOOK: '', ...env });
    } finally {
      fs.rmSync(fixture, { force: true });
    }
  };

  test('erro de lint sai com 2 e nomeia o arquivo', { skip }, () => {
    const r = withFixture('debugger;\n');
    assert.equal(r.status, 2);
    assert.match(r.stderr, /lint-fixture/);
  });

  test('arquivo limpo fica em silêncio', { skip }, () => {
    const r = withFixture('module.exports = 1;\n');
    assert.equal(r.status, 0);
    assert.equal(r.stderr, '');
  });

  test('o escape hatch desliga o hook', { skip }, () => {
    assert.equal(withFixture('debugger;\n', { AIOS_SKIP_LINT_HOOK: '1' }).status, 0);
  });
});
