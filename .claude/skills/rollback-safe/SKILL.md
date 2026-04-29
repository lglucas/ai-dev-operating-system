---
name: rollback-safe
description: Undo the last AI change without losing user work. Use when the latest AI-applied change broke something, the user says "desfaz", "volta", "undo", "estraga tudo", or after `bug-triage-agent` selects a revert as the safest fix. Designed for vibe coders who don't yet trust git.
---

# Rollback Safe

## When to run this skill

- The user says "desfaz isso" / "volta o que você fez" / "anda pra trás" / "tira essa última mudança".
- `bug-triage-agent` recommends a revert.
- A change just shipped and broke something obvious.
- The user pasted a wrong thing into a config / env file.

## Mental model for the vibe coder

> Pensa numa máquina do tempo do projeto. Cada commit é uma foto do projeto inteiro. "Desfazer" não apaga a foto — ele só te leva pra foto de antes. Se mudar de ideia, você pode voltar pra foto atual a qualquer momento. Nada que você fez se perde.

## Rollback levels (always try the smallest first)

### Level 0 — Nothing committed yet
Use `git restore <file>` for unstaged changes, `git restore --staged <file>` for staged.
Safe and instant.

### Level 1 — Last commit is the bad one
```bash
git revert HEAD --no-edit
```
Creates a new commit that undoes the previous one. History stays linear, nothing lost.

### Level 2 — Several commits to undo
Pick the last good commit hash and:
```bash
git revert <bad-commit>..<HEAD> --no-edit
```
Each bad commit gets its own undo commit.

### Level 3 — Already pushed and remote needs cleaning
Use `git revert` (not `git reset --hard`) so collaborators / CI / Vercel pick up the undo cleanly.

### Level 4 — DO NOT default to this
`git reset --hard <hash>` rewrites local history. Only use after explicitly asking the user, AND backing up untracked files first. Never on a shared branch.

## Pre-flight checklist (mandatory)

Before running ANY rollback command:

1. **Snapshot uncommitted work.**
   ```bash
   git stash push -u -m "rollback-safe-snapshot-$(date +%s)"
   ```
   Even if it looks like "nothing important", stash it. Stashes can be popped back.

2. **Confirm the target.** Show the user the exact commit (hash, message, date) you're about to undo.

3. **Show the blast radius.** List which files will change.

4. **Confirm with the user in plain Portuguese.**
   ```
   Vou voltar o projeto pro estado antes de [commit msg].
   Isso vai mudar [N] arquivos.
   Seu trabalho não-commitado tá guardado e dá pra voltar.
   Posso prosseguir?
   ```

5. **Apply.**

6. **Verify build still works** (use `verify-build-works`).

## After rollback

- Show the user the new commit log (`git log --oneline -5`).
- Tell them: "se quiser voltar, é só me pedir 'desfaz o desfaz' — eu reverto o revert".
- Add a one-liner to `session-log/` explaining why we rolled back.

## Anti-patterns

- ❌ `git reset --hard HEAD~1` without snapshot.
- ❌ `git push --force` to "clean up" remote history on a shared branch.
- ❌ Deleting files manually because "they shouldn't be there" without checking what they were.
- ❌ Skipping the snapshot because "the user has nothing important uncommitted" — you don't know that.

## Output

```
↩️  Rollback safe report

Snapshot: stash@{0} (rollback-safe-snapshot-1714329600) — seu rascunho tá aqui se precisar.
Voltei o projeto pra: 7604d32 ("docs: prepare public release metadata")
Arquivos afetados: 11
Build: ✅ ainda passa
Próximo passo: testar o fluxo que estava quebrando.

Se quiser desfazer esse desfazer: me pede "rebobina o rebobina".
```
