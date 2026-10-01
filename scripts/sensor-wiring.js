/**
 * sensor-wiring.js — checks that the feedback sensors are wired, not just present.
 *
 * Purpose: verify the repo has a standard test entry point, a linter with its config, a
 *          lockfile, a feedback hook, a git pre-commit, and a CI that actually runs them. The tests existed
 *          for two releases with no `npm test` to find them by — a sensor nobody can
 *          discover is a sensor the agent does not run.
 * Version: v0.5.6
 * Sprint:  v0.5.6
 *
 * Used by scripts/os-self-test.js (check 12). `evaluate` is pure and exported for tests.
 */

'use strict';

const fs = require('node:fs');
const path = require('node:path');

const OS_PACKAGE_NAME = 'ai-dev-operating-system';
const LINT_CONFIGS = ['biome.json', 'biome.jsonc', 'eslint.config.js', 'eslint.config.mjs', '.eslintrc.json'];
const LOCKFILES = ['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock', 'bun.lock', 'bun.lockb'];

/**
 * Pure. Takes what was read from disk, returns { errors, warnings, passes } as strings.
 *
 * In the OS repo a missing sensor is an error: this is what every derived project inherits.
 * In a derived project it is a warning — the project may have moved to another stack, and
 * a self-test that fails on a legitimate choice gets switched off.
 */
function evaluate({ pkgText, lintConfig, lockfile, settingsText, ciText, preCommit, isOsRepo }) {
  const out = { errors: [], warnings: [], passes: [] };
  const missing = (msg) => (isOsRepo ? out.errors : out.warnings).push(msg);

  if (pkgText == null) {
    missing('package.json ausente — sem ponto de entrada padrão para teste e lint');
    return out;
  }
  let pkg;
  try {
    pkg = JSON.parse(pkgText);
  } catch (e) {
    out.errors.push(`package.json inválido: ${e.message}`);
    return out;
  }

  const scripts = pkg.scripts || {};
  if (!scripts.test || scripts.test.includes('no test specified')) missing('package.json sem script "test"');
  else out.passes.push('npm test definido');

  if (!scripts.lint) missing('package.json sem script "lint"');
  else if (!lintConfig) missing('script "lint" existe, mas não há configuração de linter na raiz');
  else out.passes.push(`linter configurado (${lintConfig})`);

  const hasDeps = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies }).length > 0;
  if (hasDeps && !lockfile)
    out.warnings.push('há dependências e nenhum lockfile commitado — instalação não reproduzível');
  else if (hasDeps) out.passes.push(`lockfile presente (${lockfile})`);

  if (!isOsRepo && pkg.name === OS_PACKAGE_NAME) {
    out.warnings.push(`package.json ainda se chama "${OS_PACKAGE_NAME}" — renomeie para o seu projeto`);
  }

  let feedbackHooks = [];
  try {
    feedbackHooks = JSON.parse(settingsText || '{}').hooks?.PostToolUse || [];
  } catch {
    // An unparseable settings.json is reported by the hooks check; nothing to add here.
  }
  // A matcher entry with no command runs nothing, however registered it looks.
  const runsSomething = feedbackHooks.some((entry) => (entry?.hooks || []).some((h) => h?.command));
  if (!runsSomething) {
    out.warnings.push('nenhum hook PostToolUse — o agente só descobre erro de lint no CI');
  } else out.passes.push('hook de feedback (PostToolUse) registrado');

  // The PreToolUse gate only sees commits Claude makes; the git hook covers everyone else.
  if (!preCommit) missing('sem .husky/pre-commit — commit feito fora do Claude Code não passa pelo scan de segredo');
  else if (!/hooksPath/.test(scripts.prepare || '')) {
    out.warnings.push('.husky/pre-commit existe, mas nenhum script "prepare" aponta o git para ele');
  } else out.passes.push('pre-commit do git ligado');

  // A sensor that exists but never gates is decoration. Skipped when there is no CI at all.
  if (ciText != null) {
    for (const [command, script] of [
      ['npm test', scripts.test],
      ['npm run lint', scripts.lint],
    ]) {
      if (!script) continue;
      if (ciText.includes(command)) out.passes.push(`CI roda ${command}`);
      else out.warnings.push(`o CI não roda "${command}" — o sensor existe e não barra nada`);
    }
  }
  return out;
}

const readIf = (file) => (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null);
const firstExisting = (root, names) => names.find((n) => fs.existsSync(path.join(root, n))) || null;

/** Reads the inputs from disk and evaluates them. */
function checkSensors(root, isOsRepo) {
  const wfDir = path.join(root, '.github', 'workflows');
  const ciText = fs.existsSync(wfDir)
    ? fs
        .readdirSync(wfDir)
        .filter((f) => /\.ya?ml$/.test(f))
        .map((f) => fs.readFileSync(path.join(wfDir, f), 'utf8'))
        .join('\n')
    : null;

  return evaluate({
    pkgText: readIf(path.join(root, 'package.json')),
    lintConfig: firstExisting(root, LINT_CONFIGS),
    lockfile: firstExisting(root, LOCKFILES),
    settingsText: readIf(path.join(root, '.claude', 'settings.json')),
    ciText,
    preCommit: fs.existsSync(path.join(root, '.husky', 'pre-commit')),
    isOsRepo,
  });
}

module.exports = { evaluate, checkSensors, OS_PACKAGE_NAME, LINT_CONFIGS, LOCKFILES };
