# Phase 1 — Largada

**Commit tag:** `[STAGE:LARGADA]`
**Canonical source:** [`WIZARD.md`](../../WIZARD.md) stages 1.1–1.3

---

## Goal

The user ends this phase with a repository that belongs to them, is detached from the OS origin, and is safe to commit to.

---

## 1.1 — Repository comprehension

Claude reads the operating system before doing anything else: `START-HERE.md`, `README.md`, `CLAUDE.md`, `WIZARD.md`, `.claude/`, and this directory.

The success criterion is that Claude can state what the OS expects of it — not that it read the files.

No code. No scaffolding. No "let me just set up the project structure first."

---

## 1.2 — Detach from OS-origin

The single most common way a new user damages something is pushing their project into the public OS repo, or hitting "permission denied" and not understanding why.

This stage intercepts before the first commit. It is educational as much as mechanical: the user should leave it understanding what `origin` is, not just having run a script.

Skipped automatically when running inside the AI Dev OS repo itself. See `WIZARD.md` stage 1.2 for the full detection table and the three paths offered to the user.

---

## 1.3 — Friendly opening

One question, deliberately open:

```txt
Me fale sobre teu projeto.
```

The user is not expected to answer well. Phase 2 exists to fix that.
