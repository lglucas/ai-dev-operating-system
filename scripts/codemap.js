#!/usr/bin/env node
/**
 * codemap.js — generates and verifies CODEMAP.md, the file-level map of a project.
 *
 * Purpose: let an AI locate the right file without reading every file. Pairs with the
 *          200-line limit in .claude/rules/code-style.md — small files plus a one-line
 *          index means the agent reads a map instead of a codebase.
 * Version: v0.5.3
 * Sprint:  v0.5.3
 *
 * Usage:
 *   node scripts/codemap.js            # write/refresh CODEMAP.md
 *   node scripts/codemap.js --check    # verify only; exit 1 if out of date (CI)
 *
 * This maps the DERIVED project's code, not the AI Dev OS itself. Inside the OS repo
 * (detected via `.aios-self`) it exits 0 without doing anything — the OS ships the
 * machinery, the project owns the map.
 *
 * File discovery uses `git ls-files`: it respects .gitignore and skips untracked files,
 * so build output and stray local folders never enter the map.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = process.cwd();
const CHECK = process.argv.includes('--check');
const OUT = path.join(ROOT, 'CODEMAP.md');

const CODE_EXT = new Set([
  '.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx', '.vue', '.svelte', '.astro',
  '.py', '.rb', '.go', '.rs', '.java', '.kt', '.swift', '.php', '.cs',
  '.sql', '.sh', '.ps1',
]);

// Generated or vendored directories — mapping them adds noise, not signal.
const SKIP_DIR = /(^|\/)(node_modules|dist|build|out|coverage|\.next|\.turbo|vendor|__pycache__)(\/|$)/;

const isOsRepo = fs.existsSync(path.join(ROOT, '.aios-self'));

const clean = (s) => String(s).replace(/\s+/g, ' ').replace(/\|/g, '\\|').replace(/\.$/, '').trim().slice(0, 160);

/** Tracked files only. Untracked scratch files are not part of the project. */
function trackedFiles() {
  try {
    return execFileSync('git', ['ls-files'], { cwd: ROOT, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 })
      .split('\n').filter(Boolean);
  } catch {
    return [];
  }
}

/**
 * Pull the one-line core description out of a file.
 *
 * Priority follows what `.claude/rules/code-style.md` already asks for: a
 * purpose/version/sprint header. Everything after is a fallback, and a file with none
 * of them is reported as a gap — so the codemap enforces the header rule as a by-product.
 */
function describe(text) {
  if (typeof text !== 'string') return { text: '⚠️ ilegível', missingHeader: true };
  const head = text.split('\n').slice(0, 40);

  // 1. The documented convention: "Purpose: ...", possibly wrapped across lines.
  const pi = head.findIndex(l => /^\s*(?:[*#/;-]+\s*)?Purpose\s*:/i.test(l));
  if (pi >= 0) {
    let s = head[pi].replace(/^\s*(?:[*#/;-]+\s*)?Purpose\s*:\s*/i, '');
    for (let i = pi + 1; i < head.length; i++) {
      const stripped = head[i].replace(/^\s*(?:[*#/;-]+\s*)?/, '');
      if (!stripped.trim() || /^(Version|Sprint|Usage|Contract|Note)\s*:/i.test(stripped)) break;
      if (/^\s{2,}/.test(head[i].replace(/^\s*\*/, ''))) s += ' ' + stripped.trim();
      else break;
    }
    return { text: clean(s), missingHeader: false };
  }

  // 2. First sentence of a leading block comment or docstring.
  const block = text.match(/^(?:#!.*\n)?\s*(?:\/\*\*?|"""|''')([\s\S]{0,600}?)(?:\*\/|"""|''')/);
  if (block) {
    const first = block[1].split('\n').map(l => l.replace(/^\s*\*\s?/, '').trim()).find(l => l.length > 3);
    if (first) return { text: clean(first), missingHeader: true };
  }

  // 3. First line comment that is not a shebang.
  const line = head.find(l => /^\s*(\/\/|#)\s*\S/.test(l) && !/^\s*#!/.test(l));
  if (line) return { text: clean(line.replace(/^\s*(\/\/|#)\s*/, '')), missingHeader: true };

  return { text: '⚠️ sem cabeçalho — adicione purpose/version/sprint', missingHeader: true };
}

function collect() {
  const rows = [];
  for (const rel of trackedFiles()) {
    if (SKIP_DIR.test(rel)) continue;
    if (!CODE_EXT.has(path.extname(rel))) continue;
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) continue;
    const content = fs.readFileSync(abs, 'utf8');
    const { text, missingHeader } = describe(content);
    rows.push({ rel, dir: path.dirname(rel), lines: content.split('\n').length, text, missingHeader });
  }
  rows.sort((a, b) => a.rel.localeCompare(b.rel, 'en'));
  return rows;
}

function render(rows) {
  const byDir = {};
  for (const r of rows) (byDir[r.dir] ||= []).push(r);

  const over = rows.filter(r => r.lines > 200);
  const noHeader = rows.filter(r => r.missingHeader);

  let md = `# CODEMAP

Todo arquivo de código do projeto, com uma linha sobre o núcleo de cada um.

**Existe para a IA achar o arquivo certo sem ler todos.** Junto com o limite de 200 linhas de [\`code-style\`](.claude/rules/code-style.md), é o que mantém a leitura barata: arquivos curtos e um índice dizendo onde olhar.

> 🤖 **Gerado** por \`node scripts/codemap.js\`. Não edite à mão — a próxima geração sobrescreve. Para melhorar uma descrição, melhore o cabeçalho \`Purpose:\` do arquivo.

| | |
|---|---|
| Arquivos mapeados | **${rows.length}** |
| Acima de 200 linhas | ${over.length ? `**${over.length}** ⚠️` : '0'} |
| Sem cabeçalho \`Purpose:\` | ${noHeader.length ? `**${noHeader.length}** ⚠️` : '0'} |

`;

  if (over.length) {
    md += `## ⚠️ Acima do limite de 200 linhas\n\nA regra diz "under 200 lines where practical". Estes passaram — vale checar se dá pra separar:\n\n`;
    md += over.map(r => `- \`${r.rel}\` — ${r.lines} linhas`).join('\n') + '\n\n';
  }

  md += `---\n\n`;
  for (const dir of Object.keys(byDir).sort()) {
    md += `## \`${dir === '.' ? '(raiz)' : dir + '/'}\`\n\n| Arquivo | Núcleo | Linhas |\n|---|---|---:|\n`;
    md += byDir[dir].map(r => `| [\`${path.basename(r.rel)}\`](${r.rel}) | ${r.text} | ${r.lines} |`).join('\n');
    md += '\n\n';
  }

  md += `---\n\n## Manutenção\n\nRegenere sempre que criar, remover ou renomear arquivo de código:\n\n\`\`\`bash\nnode scripts/codemap.js\n\`\`\`\n\nO CI roda \`node scripts/codemap.js --check\` e **falha se este arquivo estiver desatualizado**. Um codemap velho é pior que nenhum: a IA confia nele e pula a leitura.\n`;

  return md;
}

function main() {
  if (isOsRepo) {
    console.log('codemap: repo do AI Dev OS — pulado.');
    console.log('  O CODEMAP mapeia o código do projeto derivado, não o do próprio OS.');
    process.exit(0);
  }

  const rows = collect();
  if (rows.length === 0) {
    console.log('codemap: nenhum arquivo de código rastreado ainda — nada a mapear.');
    process.exit(0);
  }

  const next = render(rows);
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;

  if (CHECK) {
    if (current === next) {
      console.log(`codemap: em dia (${rows.length} arquivos).`);
      process.exit(0);
    }
    console.error(current === null
      ? 'codemap: CODEMAP.md não existe. Rode `node scripts/codemap.js`.'
      : 'codemap: CODEMAP.md está desatualizado. Rode `node scripts/codemap.js` e commite.');
    process.exit(1);
  }

  fs.writeFileSync(OUT, next);
  console.log(`codemap: ${rows.length} arquivos mapeados em CODEMAP.md`);
  const over = rows.filter(r => r.lines > 200).length;
  const noHeader = rows.filter(r => r.missingHeader).length;
  if (over) console.log(`  ⚠️  ${over} acima de 200 linhas`);
  if (noHeader) console.log(`  ⚠️  ${noHeader} sem cabeçalho Purpose:`);
}

module.exports = { describe, clean, collect, render, CODE_EXT, SKIP_DIR };

if (require.main === module) main();
