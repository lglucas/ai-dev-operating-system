---
name: verify-build-works
description: Smoke-test that the project still builds, the dev server starts, and the main user flow loads after a change. Run after every non-trivial edit, after a rollback, before a commit, and before pushing to remote.
---

# Verify Build Works

## When to run this skill

- After applying a fix from `bug-triage-agent`.
- After a `rollback-safe` operation.
- Before any commit larger than a single docs change.
- Before pushing to remote.
- Before opening a PR.
- Before tagging a release.

## Verification ladder (run all that apply, in order)

### Step 1 — Static checks (cheap, fast)

```bash
npm run typecheck
npm run lint
```

Stop and report at first failure. Don't continue if static layer is broken.

### Step 2 — Build

```bash
npm run build
```

If build fails, hand off to `bug-triage-agent`.

### Step 3 — Dev server starts

```bash
npm run dev
```

Confirm: process alive after 15s, HTTP 200 on `http://localhost:<port>/`, no fatal stderr.

### Step 4 — Smoke test the golden path

For UI: load homepage + most critical authenticated page.
For API: hit `GET /health` (or main endpoint) → 2xx.

```bash
npm run test:smoke   # if exists
```

### Step 5 — Visual sanity (UI only)

- Open the affected page in a real browser.
- Confirm change is visible and not regressed.
- Confirm at least one adjacent feature didn't break.

## Output format

```
🧪 verify-build-works

Step 1 — Static checks:    ✅ typecheck OK, lint OK
Step 2 — Build:            ✅ build succeeded in 14s
Step 3 — Dev server:       ✅ ready on :3000, GET / → 200
Step 4 — Smoke tests:      ⚠️  no test:smoke script — skipped
Step 5 — Visual sanity:    ✅ home renders, login renders

Verdict: SAFE TO COMMIT.
```

If any step fails:

```
🧪 verify-build-works — ❌ FAIL at Step 2 (build)

Erro principal: src/features/auth/sign-in.ts(23,7): TS2322 ...

Próximo passo: invoco o bug-triage-agent.
```

## Tone for the vibe coder

> Antes de avisar que terminou, eu sempre testo. Se algo está quebrado, eu falo agora — não na frente do primeiro usuário.

## Do NOT

- Don't claim success without running the steps.
- Don't suppress errors with `|| true`.
- Don't skip step 3 because "build passed".
- Don't run destructive commands (DB migrations, file deletions) as part of verification.
