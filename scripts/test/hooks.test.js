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
const { execFileSync, spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const { scan, isGitCommit, commitDirs, commitsAll } = require('../../.claude/hooks/block-secret-commit.js');
const { isProtectedEnvPath, envWriteTargets } = require('../../.claude/hooks/protect-env-files.js');
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

// The formats of the providers `.env.example` itself lists. An external audit (2026-10-02)
// showed none of them matched: a Supabase service_role key is a JWT, NEXTAUTH_SECRET is
// bare base64. Assembled at runtime so this file never holds a credential-shaped line.
describe('block-secret-commit: formatos da stack documentada', () => {
  const body = 'a1B2c3D4e5F6g7H8i9J0k1L2m3N4o5P6';
  const cases = [
    ['JWT (Supabase service_role)', ['eyJ', 'hbGciOiJIUzI1NiJ9.', 'eyJ', 'yb2xlIjoic2VydmljZSJ9.', body].join('')],
    ['Stripe webhook secret', `whsec${'_'}${body}`],
    ['Supabase secret key', `sb_secret${'_'}${body}`],
    ['Supabase access token', `sbp${'_'}${body}`],
    ['Resend', `re${'_'}${body}`],
    ['NEXTAUTH_SECRET sem prefixo', `NEXTAUTH_SECRET${'='}${body}`],
    ['segredo entre aspas em código', `const API_KEY ${'='} "${body}";`],
    ['segredo em YAML', `  DB_PASSWORD${':'} ${body}`],
  ];
  for (const [label, line] of cases) {
    test(`bloqueia ${label}`, () => assert.ok(scan(diffAdding('src/config.ts', line), []).length >= 1));
  }

  const harmless = [
    'NEXTAUTH_SECRET=                 # generate: openssl rand -base64 32',
    'STRIPE_SECRET_KEY=your_stripe_secret_key_goes_here',
    'const API_KEY = process.env.OPENAI_API_KEY;',
    'GITHUB_TOKEN: $' + '{{ secrets.GITHUB_TOKEN }}',
    'NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop1234.supabase.co',
    'retry_count_before_giving_up_on_the_request = 3',
  ];
  for (const line of harmless) {
    test(`deixa passar: ${line.slice(0, 40)}`, () => assert.equal(scan(diffAdding('a.ts', line), []).length, 0));
  }

  test('o .env.example real não dispara', () => {
    const lines = fs.readFileSync(path.join(ROOT, '.env.example'), 'utf8').split('\n');
    const asDiff = `+++ b/.env.example\n${lines.map((l) => `+${l}`).join('\n')}\n`;
    assert.deepEqual(scan(asDiff, ['.env.example']), []);
  });
});

describe('block-secret-commit: não bloqueia a documentação dos próprios padrões', () => {
  test('a regra secrets.md pode ser commitada', () => {
    const doc = '+++ b/.claude/rules/secrets.md\n+- sk-\n+- ghp_\n+- AKIA\n+- .env\n';
    assert.equal(scan(doc, []).length, 0);
  });

  // The hand-written sample above once hid a real defect: secrets.md carried a literal
  // private-key header, which the gate matches. Read the actual files instead.
  test('nenhum arquivo de instrução real dispara o gate', () => {
    const files = [path.join(ROOT, 'CLAUDE.md')];
    const walk = (dir) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (entry.name.endsWith('.md')) files.push(full);
      }
    };
    walk(path.join(ROOT, '.claude'));

    for (const file of files) {
      const rel = path.relative(ROOT, file).replace(/\\/g, '/');
      const asDiff = `+++ b/${rel}\n${fs
        .readFileSync(file, 'utf8')
        .split('\n')
        .map((line) => `+${line}`)
        .join('\n')}\n`;
      assert.deepEqual(scan(asDiff, []), [], `${rel} seria barrado pelo próprio gate`);
    }
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
  // `.env.development` and friends were the gap: the list named stages one by one, and
  // the standard Next.js/Vite ones were not on it.
  const forbidden = [
    '.env',
    '.env.local',
    '.env.production',
    '.env.development',
    '.env.staging',
    '.env.test',
    '.env.prod',
    '.env.development.local',
    'apps/web/.env.staging',
    'certs/server.pem',
    'id_rsa.key',
  ];
  for (const f of forbidden) {
    test(`bloqueia ${f}`, () => assert.equal(scan('', [f]).length, 1));
  }
  const fine = ['.env.example', '.env.sample', '.env.template', '.env.dist', '.env.local.example', 'src/index.ts'];
  for (const f of fine) {
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
    // Nested and quoted forms — each of these walked past the gate before.
    'bash -c "git commit -m x"',
    "sh -c 'git add . && git commit -m x'",
    'echo $(git commit -m x)',
    '(git commit -m x)',
    '/usr/bin/git commit -m x',
    'git.exe commit -m x',
    'git -c "user.name=A B" commit -m x', // quoted value with a space
    'git add .\ngit commit -m x',
    'git add . & git commit -m x',
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

  // `-a` stages tracked edits at commit time, so the unstaged diff has to be read too.
  for (const c of ['git commit -a', 'git commit -am x', 'git commit --all -m x', 'bash -c "git commit -am x"']) {
    test(`inclui o diff não staged: ${c}`, () => assert.equal(commitsAll(c), true));
  }
  for (const c of ['git commit -m x', 'git commit --amend', 'git commit --allow-empty -m x']) {
    test(`só o staged: ${c}`, () => assert.equal(commitsAll(c), false));
  }

  // Separators inside quotes are part of the argument, not the end of the command.
  test('parênteses entre aspas não partem o comando', () => {
    assert.equal(isGitCommit('git -C "/tmp/project (1)" commit -m x'), true);
  });
});

// The scan has to read the repository the commit happens in, which is not always `cwd`.
describe('block-secret-commit: em qual repositório', () => {
  const at = (...parts) => path.resolve('/p', ...parts);
  const cases = [
    ['git commit -m x', [at()]],
    ['git -C other commit -m x', [at(), at('other')]],
    ['cd other && git commit -m x', [at(), at('other')]],
    ['cd a && git -C b commit', [at(), at('a', 'b')]],
    ['git -C "my repo (1)" commit', [at(), at('my repo (1)')]],
    ['bash -c "git -C other commit -m x"', [at(), at('other')]],
  ];
  for (const [command, dirs] of cases) {
    test(command, () => assert.deepEqual(commitDirs(command, at()), dirs));
  }
});

describe('block-secret-commit: o hook de ponta a ponta', () => {
  const HOOK = path.join(__dirname, '..', '..', '.claude', 'hooks', 'block-secret-commit.js');
  const identity = ['-c', 'user.name=test', '-c', 'user.email=test@example.com'];
  const run = (command, cwd) =>
    spawnSync(process.execPath, [HOOK], {
      input: JSON.stringify({ tool_input: { command }, cwd }),
      encoding: 'utf8',
      env: { ...process.env, AIOS_ALLOW_SECRET_COMMIT: '' },
    });
  const withRepo = (fn) => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'aios-gate-'));
    try {
      execFileSync('git', ['init', '-q'], { cwd: dir });
      return fn(dir);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  };

  // `commit -a` picks up tracked edits that were never staged — content and filename.
  test('commit -a vê um .env rastreado e só modificado', () => {
    withRepo((dir) => {
      fs.writeFileSync(path.join(dir, '.env.local'), 'PORT=3000\n');
      execFileSync('git', ['add', '-f', '.env.local'], { cwd: dir });
      execFileSync('git', [...identity, 'commit', '-q', '--no-verify', '-m', 'seed'], { cwd: dir });
      fs.writeFileSync(path.join(dir, '.env.local'), 'PORT=4000\n');

      assert.equal(run('git commit -m x', dir).status, 0, 'sem -a o arquivo não entra no commit');
      const r = run('git commit -am x', dir);
      assert.equal(r.status, 2);
      assert.match(r.stderr, /\.env\.local/);
    });
  });

  test('git -C lê o repositório do commit, não o da sessão', () => {
    withRepo((repo) => {
      const elsewhere = fs.mkdtempSync(path.join(os.tmpdir(), 'aios-elsewhere-'));
      try {
        fs.writeFileSync(path.join(repo, '.env.staging'), 'PORT=3000\n');
        execFileSync('git', ['add', '-f', '.env.staging'], { cwd: repo });
        assert.equal(run(`git -C "${repo}" commit -m x`, elsewhere).status, 2);
        assert.equal(run('git commit -m x', elsewhere).status, 0);
      } finally {
        fs.rmSync(elsewhere, { recursive: true, force: true });
      }
    });
  });
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
    '/p/.env.development',
    '/p/.env.development.local', // two suffixes — the write gate missed this one
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

describe('protect-env-files: escrita pelo shell', () => {
  const writes = [
    ['echo KEY=x > .env', '.env'],
    ['echo KEY=x >> .env.development', '.env.development'],
    ['echo KEY=x >.env.local', '.env.local'],
    ['printf "K=x" > "apps/web/.env.staging"', 'apps/web/.env.staging'],
    ['echo KEY=x | tee .env', '.env'],
    ['echo KEY=x | tee -a .env.production', '.env.production'],
    ['echo KEY=x > "my project/.env"', 'my project/.env'], // a quoted path with a space
    ['echo KEY=x | tee out.log .env.development', '.env.development'], // tee writes every operand
    ['bash -c "echo KEY=x > .env"', '.env'],
  ];
  for (const [command, target] of writes) {
    test(`bloqueia: ${command}`, () => assert.deepEqual(envWriteTargets(command), [target]));
  }
  const reads = ['cat .env', 'echo KEY= > .env.example', 'npm test > out.log 2>&1', 'git rm .env', ''];
  for (const command of reads) {
    test(`permite: ${command || '(vazio)'}`, () => assert.deepEqual(envWriteTargets(command), []));
  }
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
