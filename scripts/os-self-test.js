#!/usr/bin/env node
/**
 * os-self-test.js — verifies the AI Dev Operating System is internally coherent.
 *
 * Purpose: the `os-self-test` skill did this, but only when a human or a model
 *          remembered to invoke it — and three session logs record it NOT being run
 *          when it would have helped. As a script it runs in CI, every time.
 * Version: v0.5.2
 * Sprint:  v0.5.2 P3
 *
 * Usage:
 *   node scripts/os-self-test.js           # human-readable report
 *   node scripts/os-self-test.js --quiet   # suppress the pass count
 *
 * Exit 0 = coherent (warnings allowed). Exit 1 = at least one error.
 *
 * Two modes, detected via the `.aios-self` marker:
 *   - OS repo         → checks the OS itself; project artifacts must NOT exist
 *   - derived project → checks the OS is installed correctly inside a real project
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const QUIET = process.argv.includes('--quiet');

const errors = [];
const warnings = [];
const passes = [];

const fail = (check, detail) => errors.push({ check, detail });
const warn = (check, detail) => warnings.push({ check, detail });
const pass = (check) => passes.push(check);

const abs = (p) => path.join(ROOT, p);
const exists = (p) => fs.existsSync(abs(p));
const read = (p) => fs.readFileSync(abs(p), 'utf8');
const isOsRepo = exists('.aios-self');

/** Every .md in the repo, excluding git internals and dependencies. */
function allMarkdown(dir = ROOT, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) allMarkdown(full, out);
    else if (entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

/**
 * True when a directory contains at least one real file, at any depth.
 *
 * Counting directory ENTRIES instead would false-positive on empty leftover folders:
 * this repo has `rules/quality/` and `rules/stack-specific/` sitting empty and untracked,
 * which git never sees but readdir does. CI checks out from git, so the script has to
 * apply the same standard or it fails locally and passes in CI.
 */
function hasFiles(dir) {
  if (!fs.existsSync(dir)) return false;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile()) return true;
    if (entry.isDirectory() && hasFiles(path.join(dir, entry.name))) return true;
  }
  return false;
}

/** Parse a frontmatter block into a flat key→value map. Null when absent. */
function frontmatter(text) {
  if (!text.startsWith('---')) return null;
  const end = text.indexOf('\n---', 3);
  if (end < 0) return null;
  const out = {};
  for (const line of text.slice(3, end).split('\n')) {
    const m = line.match(/^([a-z][a-z-]*):\s*(.*)$/);
    if (m) out[m[1]] = m[2].trim();
  }
  return out;
}

// ─────────────────────────────────────────────── 1. canonical structure

function checkCanonicalStructure() {
  for (const f of ['CLAUDE.md', 'START-HERE.md', 'WIZARD.md', 'README.md', 'CHANGELOG.md', 'LICENSE']) {
    exists(f) ? pass(`arquivo canônico ${f}`) : fail('estrutura', `falta o arquivo canônico ${f}`);
  }
  for (const d of ['agents', 'rules', 'skills', 'commands']) {
    exists(`.claude/${d}`) ? pass(`.claude/${d}`) : fail('estrutura', `falta .claude/${d}`);
    // A populated root-level duplicate means an old layout survived a migration.
    if (exists(d) && exists(`.claude/${d}`) && hasFiles(abs(d))) {
      fail('estrutura', `duplicata na raiz: ./${d} coexiste com .claude/${d}`);
    }
  }
}

// ─────────────────────────────────────────────── 2. runtime frontmatter

function checkRuntimeFrontmatter() {
  const skillsDir = abs('.claude/skills');
  if (fs.existsSync(skillsDir)) {
    for (const entry of fs.readdirSync(skillsDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const rel = `.claude/skills/${entry.name}/SKILL.md`;
      if (!exists(rel)) {
        // A directory under skills/ with no SKILL.md is either a reference folder
        // (must declare itself with a README) or a broken skill.
        if (exists(`.claude/skills/${entry.name}/README.md`)) pass(`skills/${entry.name} (referência)`);
        else fail('skills', `${entry.name}/ não tem SKILL.md nem README.md — skill quebrada?`);
        continue;
      }
      const fm = frontmatter(read(rel));
      if (!fm) { fail('skills', `${entry.name} sem frontmatter — invisível para auto-invocação`); continue; }
      if (!fm.name) fail('skills', `${entry.name} sem chave name:`);
      else if (fm.name !== entry.name) fail('skills', `${entry.name} declara name: ${fm.name} — não bate com o diretório`);
      if (!fm.description) fail('skills', `${entry.name} sem chave description:`);
      else if (!fm.description.includes('"')) warn('skills', `${entry.name} sem frase-gatilho entre aspas na description`);
      else pass(`skill ${entry.name}`);
    }
  }

  for (const [dir, needsName] of [['agents', true], ['commands', false]]) {
    const d = abs(`.claude/${dir}`);
    if (!fs.existsSync(d)) continue;
    for (const f of fs.readdirSync(d)) {
      if (!f.endsWith('.md')) continue;
      const slug = f.replace(/\.md$/, '');
      const fm = frontmatter(read(`.claude/${dir}/${f}`));
      if (!fm) { fail(dir, `${slug} sem frontmatter`); continue; }
      if (needsName && fm.name && fm.name !== slug) fail(dir, `${slug} declara name: ${fm.name}`);
      if (!fm.description) fail(dir, `${slug} sem description:`);
      else pass(`${dir} ${slug}`);
    }
  }
}

// ─────────────────────────────────────────────── 3. relative links

function checkLinks() {
  let broken = 0;
  for (const file of allMarkdown()) {
    const dir = path.dirname(file);
    for (const m of fs.readFileSync(file, 'utf8').matchAll(/\]\(([^)\s]+\.md)(#[^)]*)?\)/g)) {
      if (/^https?:/.test(m[1])) continue;
      if (!fs.existsSync(path.resolve(dir, m[1]))) {
        fail('links', `${path.relative(ROOT, file)} → ${m[1]}`);
        broken++;
      }
    }
  }
  if (broken === 0) pass('todos os links relativos .md resolvem');
}

// ─────────────────────────────────────────────── 4. registry integrity

function checkRegistry() {
  if (!exists('docs/registry/INDEX.md') || !exists('docs/registry/packs')) return;
  const index = read('docs/registry/INDEX.md');
  const packs = fs.readdirSync(abs('docs/registry/packs')).filter(f => f.endsWith('.md'));
  let bad = 0;
  for (const p of packs) {
    if (!index.includes(`packs/${p}`)) { fail('registry', `pack fora do INDEX: ${p}`); bad++; }
  }
  for (const m of index.matchAll(/\]\(packs\/([^)]+\.md)\)/g)) {
    if (!packs.includes(m[1])) { fail('registry', `INDEX aponta pack inexistente: ${m[1]}`); bad++; }
  }
  if (bad === 0) pass(`registry coerente (${packs.length} packs)`);
}

// ─────────────────────────────────────────────── 5. session-log index

function checkSessionLog() {
  if (!exists('session-log/INDEX.md')) { warn('session-log', 'INDEX.md ausente'); return; }
  const index = read('session-log/INDEX.md');
  const entries = fs.readdirSync(abs('session-log')).filter(f => /^\d{4}-\d{2}-\d{2}-.+\.md$/.test(f));
  let bad = 0;
  for (const e of entries) {
    if (!index.includes(e)) { fail('session-log', `entrada não indexada: ${e}`); bad++; }
  }
  if (bad === 0) pass(`session-log indexado (${entries.length} entradas)`);
}

// ─────────────────────────────────────────────── 6. hooks wired and present

function checkHooks() {
  if (!exists('.claude/settings.json')) { warn('hooks', 'settings.json ausente'); return; }
  let cfg;
  try { cfg = JSON.parse(read('.claude/settings.json')); }
  catch (e) { fail('hooks', `settings.json inválido: ${e.message}`); return; }

  const declared = JSON.stringify(cfg.hooks || {});
  let bad = 0;
  for (const m of declared.matchAll(/hooks\/([a-z-]+\.js)/g)) {
    if (!exists(`.claude/hooks/${m[1]}`)) { fail('hooks', `settings.json referencia hook inexistente: ${m[1]}`); bad++; }
  }
  if (!cfg.hooks) warn('hooks', 'nenhum hook configurado — o OS fica sem enforcement mecânico');
  else if (bad === 0) pass('hooks declarados existem no disco');

  // A hook on disk that nothing wires up is dead code.
  if (exists('.claude/hooks')) {
    for (const f of fs.readdirSync(abs('.claude/hooks'))) {
      if (f.endsWith('.js') && !declared.includes(f)) warn('hooks', `${f} existe mas não está em settings.json`);
    }
  }
}

// ─────────────────────────────────────────────── 7. gitignore hygiene

function checkGitignore() {
  if (!exists('.gitignore')) { fail('gitignore', 'ausente'); return; }
  const gi = read('.gitignore');
  const required = [['.env', /^\.env$/m], ['node_modules/', /node_modules/], ['CLAUDE.local.md', /CLAUDE\.local\.md/]];
  let bad = 0;
  for (const [label, re] of required) {
    if (!re.test(gi)) { fail('gitignore', `não ignora ${label}`); bad++; }
  }
  if (bad === 0) pass('gitignore cobre .env, node_modules, CLAUDE.local.md');
}

// ─────────────────────────────────────────────── 8. codemap wiring

function checkCodemap() {
  if (!exists('scripts/codemap.js')) { fail('codemap', 'scripts/codemap.js ausente — a camada não tem gerador'); return; }
  pass('gerador do codemap presente');

  if (isOsRepo) {
    // The OS ships the machinery; the derived project owns the map.
    if (exists('CODEMAP.md')) warn('codemap', 'CODEMAP.md existe no repo do OS — deveria ser só o template');
    if (!exists('templates/project/CODEMAP.template.md')) fail('codemap', 'falta templates/project/CODEMAP.template.md');
    else pass('template do codemap presente');
    return;
  }

  if (!exists('CODEMAP.md')) warn('codemap', 'CODEMAP.md ainda não existe — rode `node scripts/codemap.js`');
  else pass('CODEMAP.md presente');
}

// ─────────────────────────────────────────────── 9. plugin manifest freshness

// The manifest advertises a version and component counts to anyone installing this
// as a plugin. Nothing consumed those numbers, so they silently drifted a whole
// release behind — it shipped "0.5.2 / 27 skills" while the repo was at 0.5.3 / 28.
function checkPluginManifest() {
  if (!isOsRepo) return; // derived projects ship no plugin manifest
  if (!exists('.claude-plugin/plugin.json')) { warn('plugin', 'sem .claude-plugin/plugin.json'); return; }

  let manifest;
  try { manifest = JSON.parse(read('.claude-plugin/plugin.json')); }
  catch { fail('plugin', 'plugin.json não é JSON válido'); return; }

  const latest = (read('CHANGELOG.md').match(/^##\s*\[(\d+\.\d+\.\d+)\]/m) || [])[1];
  if (!latest) warn('plugin', 'não achei a versão mais recente no CHANGELOG');
  else if (manifest.version !== latest) fail('plugin', `plugin.json diz ${manifest.version}, CHANGELOG diz ${latest}`);
  else pass(`plugin.json na versão do CHANGELOG (${latest})`);

  const skills = fs.existsSync(path.join(ROOT, '.claude/skills'))
    ? fs.readdirSync(path.join(ROOT, '.claude/skills'), { withFileTypes: true })
        .filter(d => d.isDirectory() && exists(`.claude/skills/${d.name}/SKILL.md`)).length
    : 0;
  const claimed = (String(manifest.description || '').match(/(\d+)\s+skills/) || [])[1];
  if (claimed && Number(claimed) !== skills) fail('plugin', `description anuncia ${claimed} skills, existem ${skills}`);
  else if (claimed) pass(`plugin.json anuncia as ${skills} skills que existem`);
}

// ─────────────────────────────────────────────── 10. project artifacts

function checkProjectArtifacts() {
  const artifacts = [
    'docs/business/BUSINESS-PLAN.md',
    'docs/product/PRODUCT-BRIEF.md',
    'docs/technical/TECHNICAL-PLAN.md',
    'docs/SPRINTS.md',
  ];
  if (isOsRepo) {
    // The OS repo ships templates, not a filled-in project.
    for (const a of artifacts) {
      if (exists(a)) warn('artefatos', `${a} existe no repo do OS — deveria ser só template?`);
    }
    pass('modo repo-do-OS: artefatos de projeto corretamente ausentes');
  } else {
    for (const a of artifacts) {
      if (!exists(a)) warn('artefatos', `${a} ainda não existe (normal se o wizard não chegou nessa fase)`);
    }
  }
}

// ─────────────────────────────────────────────── report

function main() {
  checkCanonicalStructure();
  checkRuntimeFrontmatter();
  checkLinks();
  checkRegistry();
  checkSessionLog();
  checkHooks();
  checkGitignore();
  checkCodemap();
  checkPluginManifest();
  checkProjectArtifacts();

  console.log(`\nos-self-test — modo: ${isOsRepo ? 'repo do AI Dev OS' : 'projeto derivado'}\n`);

  if (!QUIET && passes.length) console.log(`✅ ${passes.length} verificações passaram`);

  if (warnings.length) {
    console.log(`\n🟡 ${warnings.length} aviso(s):`);
    for (const w of warnings) console.log(`   [${w.check}] ${w.detail}`);
  }
  if (errors.length) {
    console.log(`\n❌ ${errors.length} erro(s):`);
    for (const e of errors) console.log(`   [${e.check}] ${e.detail}`);
    console.log('\nVeredito: INCOERENTE\n');
    process.exit(1);
  }
  console.log(`\nVeredito: COERENTE${warnings.length ? ' (com avisos)' : ''}\n`);
}

module.exports = { frontmatter, allMarkdown };

if (require.main === module) main();
