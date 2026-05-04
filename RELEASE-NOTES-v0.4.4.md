# RELEASE NOTES — v0.4.4

**Date:** 2026-05-04
**Theme:** Repo hardening — branch protection, GitHub Template, WIZARD Stage 0.5 (detach from OS-origin)

---

## TL;DR

Closed a critical governance gap: a user following the prior `git clone` instructions ended up with `origin` still pointing to the OS repo, risking accidental commits/pushes into our public repository. v0.4.4 implements the standard "public template repo" posture used by Vercel, shadcn, Cloudflare templates and similar projects.

Three layers, all live:

1. **Branch protection on `main`** (server-side) — no direct push, no force push, no deletion, requires PR.
2. **GitHub Template flag** (server-side) — `Use this template` button surfaces the right path for new users.
3. **WIZARD Stage 0.5** (in-repo) — educational + executable detach for users who fall back to `git clone`.

Plus: `CONTRIBUTING.md`, PR template hardening, new question issue template, and a new bilingual contribution flow.

---

## Why this exists

Real-world failure mode (observed 2026-05-03): a vibe-coder cloned this repo to start a derived project. They ran the WIZARD, made commits, ran `git push` — and the commits landed in the OS repo because `origin` was never detached.

This is exactly the scenario branch protection prevents, and exactly what GitHub's "Use this template" workflow was designed for. v0.4.4 closes both ends.

---

## What's in this release

### Server-side (GitHub) — applied via `gh` CLI

- `gh repo edit lglucas/ai-dev-operating-system --template`
- `gh api -X PUT repos/lglucas/ai-dev-operating-system/branches/main/protection`:
  - `required_pull_request_reviews.required_approving_review_count = 0` (PR required, but solo-maintainer-friendly)
  - `dismiss_stale_reviews = true`
  - `allow_force_pushes = false`
  - `allow_deletions = false`
  - `required_conversation_resolution = true`
  - `enforce_admins = false` (maintainer can bypass for emergencies)

### In-repo additions

| File | What it is |
|---|---|
| `CONTRIBUTING.md` | Full PT-BR guide with bilingual EN summary. Fork → branch → PR flow. Plain-language for first-time contributors. |
| `.github/ISSUE_TEMPLATE/question.md` | Third issue template alongside bug/feature, in PT-BR. |
| `scripts/detach-os.sh` | Educational, interactive Bash script (Linux/macOS). Diagnoses origin, explains in plain Portuguese why we detach, offers 2 modes (re-init or remote-swap), reminds about `.env`/`.gitignore`/PAT. |
| `scripts/detach-os.ps1` | Same as above for Windows PowerShell. |
| `.aios-self` | Root marker identifying the OS repo. Used by Stage 0.5 + scripts in combination with the origin URL to distinguish "OS itself" from "derived project". |
| `RELEASE-NOTES-v0.4.4.md` | This file. |

### In-repo edits

| File | What changed |
|---|---|
| `WIZARD.md` | New Stage 0.5 between Stage 0 and Stage 1 — "Detach from OS-origin (educate-and-execute)". Detection logic + 3 user paths (run script / swap origin / no GitHub repo yet). |
| `README.md` | Quick start now leads with "Use this template" (recommended path); `git clone` is collapsed under `<details>` as fallback with detach instructions. New "Want to contribute?" pointer to CONTRIBUTING.md. Status badge bumped to v0.4.4. |
| `docs/installation.md` | Section 4 rewritten as Path A (template, recommended) + Path B (clone, with mandatory detach). |
| `.github/pull_request_template.md` | Added checklist: "PR opened from fork or feature branch — no direct commits to main". |
| `CHANGELOG.md` | v0.4.4 entry. |

---

## Migration / impact for existing projects

If you forked or cloned an earlier version, nothing breaks. The new files are additive. If you later want to refresh a derived project against the OS upstream (cherry-picking improvements), the workflow remains the same — see `docs/registry/` for upstream sync patterns.

If you are a contributor: from now on, all PRs must come from a fork or a feature branch — direct commits to `main` are blocked by branch protection. This change applies to the maintainer too.

---

## What v0.4.4 does NOT do

- Does NOT educate users on creating a GitHub account from scratch end-to-end (the WIZARD Stage 0.5 covers the create-new-repo step but assumes account exists). The forthcoming **workshop** (deferred — see RELEASE-NOTES-v0.4.3.md v0.5 architectural deferrals + new "workshop" line item) will cover that gap with video.
- Does NOT solve the "Use this template doesn't honor `.gitattributes export-ignore`" problem. The `.aios-self` marker may travel to derived repos via the template — Stage 0.5's detection logic is designed to work despite this (combines marker presence with origin URL).
- Does NOT migrate the OS to a Claude Code plugin manifest (still v0.5).

---

## Verification checklist

- [x] `gh repo view lglucas/ai-dev-operating-system --json isTemplate` returns `{"isTemplate":true}`.
- [x] `gh api repos/lglucas/ai-dev-operating-system/branches/main/protection` returns active protection.
- [x] `scripts/detach-os.sh` exists and is executable (`-rwxr-xr-x`).
- [x] `scripts/detach-os.ps1` exists.
- [x] `.aios-self` exists at repo root.
- [x] `WIZARD.md` contains "## Stage 0.5 — Detach from OS-origin".
- [x] `README.md` quick-start leads with "Use this template".
- [x] `docs/installation.md` Section 4 has Path A + Path B.
- [x] `CONTRIBUTING.md` has full PT-BR fork-PR flow.
- [x] `.github/pull_request_template.md` has the no-direct-commit-to-main checklist line.
- [x] `CHANGELOG.md` and this file present and dated.

---

## Next

Workshop scoping (deferred from v0.4.3 quick-wins discussion). v0.5 architectural decisions remain open: trust tiers, plugin manifest, parallel sprints, allowlists, registry-of-registries.

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
