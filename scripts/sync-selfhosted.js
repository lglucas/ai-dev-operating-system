#!/usr/bin/env node
/**
 * sync-selfhosted.js — regenerates docs/selfhosted/ from awesome-selfhosted-data.
 *
 * Purpose: keep a local, navigable mirror of the full self-hosted catalogue so the
 *          WIZARD (stage 4.2) can offer self-hosted alternatives without a network call.
 * Version: v0.5.0
 * Sprint:  v0.5.0 PR 4
 *
 * Upstream: https://github.com/awesome-selfhosted/awesome-selfhosted-data
 * Licence:  the DATA is CC-BY-SA 3.0 Unported. Generated files carry the attribution
 *           header that licence requires. This script itself is MIT, like the rest of the OS.
 *
 * Usage:
 *   node scripts/sync-selfhosted.js              # clones upstream into a temp dir
 *   node scripts/sync-selfhosted.js <data-dir>   # uses an existing local clone
 *
 * Regenerates:   docs/selfhosted/INDEX.md, docs/selfhosted/catalog/*.md
 * Never touches: docs/selfhosted/README.md, shortlist-saas.md, gaps.md (all hand-curated)
 */

'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const UPSTREAM = 'https://github.com/awesome-selfhosted/awesome-selfhosted-data.git';
const REPO = path.resolve(__dirname, '..');
const OUT = path.join(REPO, 'docs', 'selfhosted');
const CATALOG = path.join(OUT, 'catalog');

// ---------------------------------------------------------------- data source

function resolveDataDir() {
  const given = process.argv[2];
  if (given) {
    const p = path.resolve(given);
    if (!fs.existsSync(path.join(p, 'software'))) {
      console.error(`error: ${p} does not look like awesome-selfhosted-data (no software/ dir)`);
      process.exit(1);
    }
    console.log(`using existing clone: ${p}`);
    return p;
  }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ash-data-'));
  console.log(`cloning ${UPSTREAM} …`);
  execFileSync('git', ['clone', '--depth', '1', '--quiet', UPSTREAM, tmp], { stdio: 'inherit' });
  return tmp;
}

// ------------------------------------------- minimal YAML reader (flat schema)
// The upstream schema is flat: scalars, string lists, and two nested maps we skip.
// Verified against the full dataset: no multiline scalars, no anchors, no flow style.

function unquote(s) {
  s = s.trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1).replace(/''/g, "'").replace(/\\"/g, '"');
  }
  return s;
}

function parseYaml(text) {
  const out = {};
  let key = null;
  for (const line of text.split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const top = line.match(/^([a-z_]+):(.*)$/);
    if (top) {
      key = top[1];
      const rest = top[2].trim();
      out[key] = rest === '' ? [] : unquote(rest);
      continue;
    }
    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && key && Array.isArray(out[key])) out[key].push(unquote(item[1]));
    // deeper indentation (current_release, commit_history) is intentionally ignored
  }
  return out;
}

// ------------------------------------- 95 upstream tags -> 12 macro-categories

const MACRO = [
  ['comunicacao', 'Comunicação',
    'Email, chat, fórum, videoconferência, XMPP, IRC, SIP, newsletters, feed readers.',
    t => t.startsWith('communication') || t === 'feed-readers'],

  ['arquivos-backup', 'Arquivos e backup',
    'Sincronização, object storage, gerenciadores de arquivo, P2P, backup, arquivamento digital.',
    t => t.startsWith('file-transfer') || t === 'backup' || t.startsWith('archiving')],

  ['midia', 'Mídia',
    'Streaming de áudio e vídeo, galerias de foto, gestão de biblioteca, videovigilância, jogos.',
    t => t.startsWith('media') || t === 'photo-galleries' || t === 'video-surveillance'
      || t === 'video_surveillance' || t.startsWith('games')],

  ['produtividade', 'Produtividade e conhecimento',
    'Notas, wikis, gestão documental, suítes de escritório, tarefas, bookmarks, calendário, dashboards.',
    t => ['note-taking-editors', 'knowledge-management-tools', 'wikis', 'office-suites',
      'bookmarks-and-link-sharing', 'pastebins', 'task-management-to-do-lists', 'time-tracking',
      'personal-dashboards', 'recipe-management', 'travel-organization', 'groupware'].includes(t)
      || t.startsWith('document-management') || t.startsWith('calendar-contacts')],

  ['negocio', 'Negócio e operações',
    'CRM, e-commerce, ERP, estoque, RH, finanças, ticketing, agendamento, eventos.',
    t => ['customer-relationship-management-crm', 'e-commerce', 'resource-planning',
      'inventory-management', 'human-resources-management-hrm', 'money-budgeting-management',
      'ticketing', 'booking-and-scheduling', 'conference-management', 'manufacturing',
      'community-supported-agriculture-csa', 'polls-and-events'].includes(t)],

  ['desenvolvimento', 'Desenvolvimento',
    'CI/CD, API management, IDEs, testes, low-code, serverless, feature flags, geradores estáticos, bancos de dados.',
    t => t.startsWith('software-development') || t === 'static-site-generators' || t === 'database-management'],

  ['infraestrutura', 'Infraestrutura e rede',
    'DNS, proxy, VPN, servidores web, acesso remoto, IoT, painéis de self-hosting.',
    t => ['dns', 'proxy', 'vpn', 'web-servers', 'network-utilities', 'remote-access',
      'self-hosting-solutions', 'internet-of-things-iot'].includes(t)],

  ['seguranca-identidade', 'Segurança e identidade',
    'Gerenciadores de senha, SSO, identidade federada, gestão de identidade.',
    t => ['password-managers', 'federated-identity-authentication', 'identify-management',
      'identity-management'].includes(t)],

  ['observabilidade', 'Observabilidade e busca',
    'Monitoramento, status pages, analytics, motores de busca.',
    t => ['monitoring-status-pages', 'analytics', 'search-engines'].includes(t)],

  ['conteudo', 'Conteúdo e publicação',
    'CMS, blogs, encurtadores de URL, plataformas de curso.',
    t => ['content-management-systems-cms', 'blogging-platforms', 'url-shorteners',
      'learning-and-courses'].includes(t)],

  ['automacao-ia', 'Automação e IA',
    'Automação de fluxos e IA generativa auto-hospedada.',
    t => t === 'automation' || t.startsWith('generative-a')],

  ['outros', 'Outros',
    'Mapas e GPS, saúde, genealogia, e o balde "Miscellaneous" do upstream.',
    () => true],
];

// Software files carry tag DISPLAY names ("Note-taking & Editors"); the tags/ directory
// carries file slugs ("note-taking--editors"). Slugifying the display name collapses runs
// of separators to a single dash, so both sides must be canonicalised the same way or
// equality tests silently never match.
const slugifyTag = name => name.toLowerCase()
  .replace(/&/g, '-').replace(/\+/g, '-')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/-{2,}/g, '-')
  .replace(/^-+|-+$/g, '');

// ---------------------------------------------------------------------- load

function load(dataDir) {
  const dir = path.join(dataDir, 'software');
  const entries = [];
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.yml')) continue;
    const y = parseYaml(fs.readFileSync(path.join(dir, f), 'utf8'));
    entries.push({
      name: y.name || f.replace(/\.yml$/, ''),
      description: String(y.description || '').replace(/\|/g, '\\|').trim(),
      licenses: Array.isArray(y.licenses) ? y.licenses : [],
      platforms: Array.isArray(y.platforms) ? y.platforms : [],
      tags: Array.isArray(y.tags) ? y.tags : [],
      website: y.website_url || '',
      source: y.source_code_url || '',
      stars: y.stargazers_count ? parseInt(y.stargazers_count, 10) : null,
      archived: String(y.archived) === 'true',
    });
  }
  entries.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase(), 'en'));
  return entries;
}

// Returns { id, tag } — the macro-category AND the upstream tag that put it there.
// Grouping sections by tags[0] instead would bury entries: something tagged
// ["Miscellaneous", "Monitoring & Status Pages"] would render under "Miscellaneous"
// and the monitoring signal would vanish from the catalogue entirely.
const macroFor = e => {
  for (const t of e.tags) {
    const s = slugifyTag(t);
    for (const [id, , , test] of MACRO) {
      if (id !== 'outros' && test(s)) return { id, tag: t };
    }
  }
  return { id: 'outros', tag: e.tags[0] || 'Miscellaneous' };
};

// -------------------------------------------------------------------- render

const ATTRIBUTION = `> **Fonte:** [awesome-selfhosted/awesome-selfhosted-data](https://github.com/awesome-selfhosted/awesome-selfhosted-data) · **Licença:** [CC-BY-SA 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/) · **Autores:** [AUTHORS](https://github.com/awesome-selfhosted/awesome-selfhosted-data/blob/master/AUTHORS) upstream.
> Arquivo **gerado** por \`scripts/sync-selfhosted.js\`. Não edite à mão — as edições se perdem na próxima sincronização.`;

function row(e) {
  const link = e.website || e.source;
  const nm = link ? `[${e.name}](${link})` : e.name;
  const lic = e.licenses.length ? e.licenses.join(', ') : '—';
  const plat = e.platforms.length
    ? e.platforms.slice(0, 4).join(', ') + (e.platforms.length > 4 ? '…' : '')
    : '—';
  const stars = e.stars != null ? `${(e.stars / 1000).toFixed(1)}k` : '—';
  return `| ${nm}${e.archived ? ' ⚠️' : ''} | ${e.description} | ${lic} | ${plat} | ${stars} |`;
}

function render(entries) {
  fs.mkdirSync(CATALOG, { recursive: true });

  const buckets = Object.fromEntries(MACRO.map(([id]) => [id, []]));
  for (const e of entries) {
    const { id, tag } = macroFor(e);
    e.sectionTag = tag;
    buckets[id].push(e);
  }

  for (const [id, title, blurb] of MACRO) {
    const list = buckets[id];
    const byTag = {};
    for (const e of list) (byTag[e.sectionTag] ||= []).push(e);

    let md = `# Self-hosted — ${title}\n\n${blurb}\n\n**${list.length} projetos** nesta categoria.\n\n${ATTRIBUTION}\n\n[← Voltar ao índice](../INDEX.md) · [Shortlist SaaS](../shortlist-saas.md)\n\n---\n\n`;
    for (const t of Object.keys(byTag).sort()) {
      md += `## ${t}\n\n| Projeto | O que é | Licença | Plataforma | ⭐ |\n|---|---|---|---|---|\n`;
      md += byTag[t].map(row).join('\n') + '\n\n';
    }
    fs.writeFileSync(path.join(CATALOG, `${id}.md`), md);
  }

  let idx = `# Catálogo self-hosted — índice

Espelho navegável do **awesome-selfhosted**: **${entries.length} projetos** de código aberto que você pode hospedar por conta própria, agrupados em ${MACRO.length} categorias.

Para escolher o que usar num projeto novo, comece pela [**shortlist SaaS**](shortlist-saas.md) — as categorias que um fundador de SaaS de fato substitui. Este índice é o acervo completo, para quando a shortlist não cobre o caso.

${ATTRIBUTION}

---

## Categorias

| Categoria | Projetos | O que tem dentro |
|---|---:|---|
`;
  for (const [id, title, blurb] of MACRO) {
    idx += `| [${title}](catalog/${id}.md) | ${buckets[id].length} | ${blurb} |\n`;
  }
  idx += `\n**Total: ${entries.length} projetos.**\n\n---\n\n## Como regenerar\n\n\`\`\`bash\nnode scripts/sync-selfhosted.js\n\`\`\`\n\nO script clona o upstream, lê os arquivos YAML e reescreve \`INDEX.md\` e \`catalog/\`. O \`README.md\` e a \`shortlist-saas.md\` são curados à mão e **não** são sobrescritos.\n\n---\n\n## Legenda\n\n- **⭐** — estrelas no GitHub quando disponíveis. Sinal de tração, não de qualidade.\n- **⚠️** — o upstream marcou o projeto como arquivado. Não adote sem verificar.\n- **Licença** — copyleft (AGPL, GPL) impõe obrigações se você distribuir modificações. Ver a nota de licenças no [README](README.md).\n`;

  fs.writeFileSync(path.join(OUT, 'INDEX.md'), idx);
  return buckets;
}

// ----------------------------------------------------------------------- run

function main() {
  const dataDir = resolveDataDir();
  const entries = load(dataDir);
  const buckets = render(entries);

  console.log(`\ngenerated ${entries.length} entries into docs/selfhosted/`);
  for (const [id, title] of MACRO) console.log(`  ${String(buckets[id].length).padStart(4)}  ${title}`);
}

// Exported for scripts/test/. The guard matters: without it, importing this module
// would run resolveDataDir() and clone the upstream repo as a side effect of a test.
module.exports = { slugifyTag, parseYaml, macroFor, MACRO };

if (require.main === module) main();
