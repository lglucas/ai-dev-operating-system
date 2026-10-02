/**
 * git-command.js — reads a shell command line for what it does with git.
 *
 * Purpose: tell the commit gate whether a command runs `git commit`, in which directory,
 *          and whether it stages tracked changes on the way.
 * Version: unreleased (after v0.5.6)
 * Sprint:  secret-gate audit, 2026-10-02
 *
 * This is text parsing, and a shell has more ways to say something than any parser of
 * its text will cover: a git alias or a command built in a variable gets past it. That
 * is why scripts/pre-commit.js runs the same scan from git itself.
 */

'use strict';

const path = require('node:path');

// Global git flags that consume the NEXT token as their value. Without this list,
// `git -C /tmp commit` reads as "git, -C, then /tmp" and the commit is missed: a bypass.
const VALUE_FLAGS = new Set(['-C', '-c', '--git-dir', '--work-tree', '--namespace', '--exec-path', '--config-env']);

const GIT_BIN = /(^|[\\/])git(\.exe)?$/i; // `git`, `/usr/bin/git`, `git.exe`

// One pass yields separators and words. A quoted run stays inside its word, so the
// parentheses in `git -C "/tmp/project (1)" commit` do not split the command.
const SEP = '&&|\\|\\||\\$\\(|[;|&(){}`\\n]';
const LEX = new RegExp(`${SEP}|(?:[^\\s"';|&(){}\`$]|\\$(?!\\()|"[^"]*"|'[^']*')+`, 'g');
const IS_SEP = new RegExp(`^(?:${SEP})$`);
const unquote = (token) => token.replace(/^(["'])(.*)\1$/, '$2');

/** Every `git commit` in the text, with the directory it runs in (`cd` and `-C`). */
function lexCommits(text) {
  const tokens = text.match(LEX) || [];
  const commits = [];
  let base = '.';
  for (let g = 0; g < tokens.length; g++) {
    const atStart = g === 0 || IS_SEP.test(tokens[g - 1]);
    if (atStart && tokens[g] === 'cd' && tokens[g + 1] && !IS_SEP.test(tokens[g + 1])) base = unquote(tokens[g + 1]);
    if (!GIT_BIN.test(unquote(tokens[g]))) continue;

    let dir = '.';
    for (let i = g + 1; i < tokens.length && !IS_SEP.test(tokens[i]); i++) {
      const t = tokens[i];
      if (VALUE_FLAGS.has(t)) {
        if (t === '-C') dir = unquote(tokens[i + 1] || '.');
        i++;
        continue;
      } // flag + separate value
      if (t.startsWith('-')) continue; // valueless flag or --flag=value
      // First non-flag token is the subcommand. Only a match counts —
      // `git add . && git commit` must not be dismissed on the first call.
      if (t === 'commit') commits.push([base, dir]); // resolved later: either may be absolute
      break;
    }
  }
  return commits;
}

/**
 * Read twice: as written, and with quotes flattened — so `bash -c "git commit"` is seen
 * too. The second read errs towards scanning: `echo "git commit"` triggers a scan that
 * finds nothing.
 */
function commits(command) {
  const raw = String(command || '');
  return [...lexCommits(raw), ...lexCommits(raw.replace(/["'`]/g, ' '))];
}

/** True when the command runs `git commit` anywhere. */
const isGitCommit = (command) => commits(command).length > 0;

/**
 * Directories to scan: the session's own, plus wherever a `cd` or `git -C` sends the
 * commit. Scanning only `cwd` would read the wrong repository for `git -C other commit`.
 */
function commitDirs(command, cwd) {
  return [...new Set([cwd, ...commits(command).map(([base, dir]) => path.resolve(cwd, base, dir))])];
}

/** True for `git commit -a` / `-am` / `--all`, which stage tracked changes at commit time. */
const commitsAll = (command) => /\bcommit\b[^&|;]*\s(?:--all\b|-[a-zA-Z]*a)/.test(String(command || ''));

module.exports = { isGitCommit, commitDirs, commitsAll };
