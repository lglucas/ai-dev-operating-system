/**
 * instruction-drift.js — finds instruction text that points at things that no longer exist.
 *
 * Purpose: catch references in instruction files (CLAUDE.md, templates, skills, agents,
 *          WIZARD) to agents, commands and wizard stages that do not exist, and model
 *          generations pinned in prose. A written audit found the template's dead command
 *          table in 2026-08 and it survived until 2026-09 — findings nobody checks rot.
 * Version: v0.5.5
 * Sprint:  v0.5.5
 *
 * Used by scripts/os-self-test.js (check 11). Pure functions are exported for tests.
 */

'use strict';

const fs = require('node:fs');
const path = require('node:path');

// Tokens that look like references but name something outside this repo, each with a reason.
const ALLOWED_COMMANDS = new Set([
  'codex',     // gstack's external cross-review command, cited by multi-ai-review
  'investors', // product route the pitch skill may create, not a Claude command
]);
const ALLOWED_AGENT_WORDS = new Set([
  'multi-agent', // ordinary word ("multi-agent review"), not an agent name
]);

/** Backticked `/name` references to commands or skills that do not exist. */
function danglingCommands(text, known) {
  const out = [];
  for (const m of text.matchAll(/`\/([a-z][a-z0-9-]*)`/g)) {
    if (!known.has(m[1]) && !ALLOWED_COMMANDS.has(m[1])) out.push(m[1]);
  }
  return out;
}

/** `something-agent` names that are not files in .claude/agents/. */
function danglingAgents(text, known) {
  const out = [];
  for (const m of text.matchAll(/\b([a-z]+(?:-[a-z]+)*-agent)\b/g)) {
    if (!known.has(m[1]) && !ALLOWED_AGENT_WORDS.has(m[1])) out.push(m[1]);
  }
  return out;
}

/** "2.4"–"2.6" → 2.4, 2.5, 2.6 within one phase; a cross-phase range keeps only its ends. */
function expandRange(from, to) {
  if (!to) return [from];
  const [pa, a] = from.split(".").map(Number);
  const [pb, b] = to.split(".").map(Number);
  if (pa !== pb || b < a) return [from, to];
  return Array.from({ length: b - a + 1 }, (_, i) => `${pa}.${a + i}`);
}

/** "stage 2.5", "stages 2.4–2.6", "Phase 4.1", "estágio 3.1" pointing at a missing WIZARD heading. */
function danglingStages(text, headings) {
  const out = [];
  const re = /\b(?:stages?|phase|estágios?|fase)\s+(\d\.\d+)(?:\s*[–-]\s*(\d\.\d+))?/gi;
  for (const m of text.matchAll(re)) {
    for (const s of expandRange(m[1], m[2])) if (!headings.has(s)) out.push(s);
  }
  return out;
}

/** Model generations pinned in prose ("Sonnet 4.6", "claude-opus-4-7") — they rot silently. */
function pinnedModels(text) {
  const re = /\b(?:Opus|Sonnet|Haiku|Fable|Mythos)\s+\d+(?:\.\d+)?\b|\bclaude-(?:opus|sonnet|haiku|fable)-\d[\w-]*/g;
  return [...text.matchAll(re)].map(m => m[0]);
}

/** Stage numbers that exist as `## N.N —` headings in WIZARD.md. */
function wizardHeadings(wizardText) {
  return new Set([...wizardText.matchAll(/^## (\d\.\d+) —/gm)].map(m => m[1]));
}

const DATED = /\d{4}-\d{2}-\d{2}/;          // dated files are records, not instructions
const HISTORY = /^(CHANGELOG|RELEASE-NOTES)/;

/** The instruction surface: root docs, .claude/, templates/, docs/wizard/, top-level docs/. */
function instructionFiles(root) {
  const out = [];
  const add = (f) => { const b = path.basename(f); if (!DATED.test(b) && !HISTORY.test(b)) out.push(f); };
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const f = path.join(dir, e.name);
      if (e.isDirectory()) walk(f);
      else if (e.name.endsWith('.md')) add(f);
    }
  };
  const flat = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.isFile() && e.name.endsWith('.md')) add(path.join(dir, e.name));
    }
  };
  flat(root);
  flat(path.join(root, 'docs'));
  for (const d of ['.claude', 'templates', 'docs/wizard']) walk(path.join(root, d));
  return out;
}

// Only real targets count: command and agent .md files, and skill dirs that hold a SKILL.md.
// A reference folder such as skills/external/ has only a README and cannot be invoked.
const mdNames = (dir) => fs.existsSync(dir)
  ? fs.readdirSync(dir).filter(f => f.endsWith('.md')).map(f => f.slice(0, -3)) : [];
const skillNames = (dir) => fs.existsSync(dir)
  ? fs.readdirSync(dir).filter(d => fs.existsSync(path.join(dir, d, 'SKILL.md'))) : [];

/** Scan the repo. Returns { dangling: [{file, kind, ref}], pinned: [{file, ref}] }. */
function scanRepo(root) {
  const commands = new Set([
    ...mdNames(path.join(root, '.claude/commands')),
    ...skillNames(path.join(root, '.claude/skills')), // skills are invocable as /name too
  ]);
  const agents = new Set(mdNames(path.join(root, '.claude/agents')));
  const wizard = path.join(root, 'WIZARD.md');
  const headings = fs.existsSync(wizard) ? wizardHeadings(fs.readFileSync(wizard, 'utf8')) : null;

  const dangling = [];
  const pinned = [];
  for (const f of instructionFiles(root)) {
    const file = path.relative(root, f).replace(/\\/g, '/');
    const text = fs.readFileSync(f, 'utf8');
    for (const ref of danglingCommands(text, commands)) dangling.push({ file, kind: 'comando', ref: `/${ref}` });
    for (const ref of danglingAgents(text, agents)) dangling.push({ file, kind: 'agente', ref });
    if (headings) for (const ref of danglingStages(text, headings)) dangling.push({ file, kind: 'estágio', ref });
    for (const ref of pinnedModels(text)) pinned.push({ file, ref });
  }
  return { dangling, pinned };
}

module.exports = {
  danglingCommands, danglingAgents, danglingStages, expandRange, pinnedModels,
  wizardHeadings, instructionFiles, scanRepo,
};
