# gstack ⭐

- **URL:** https://github.com/garrytan/gstack
- **License:** MIT
- **Status:** active (87.3k stars, 252 commits on main, rolling updates)
- **Last reviewed:** 2026-04-30
- **Tags:** #ecosystem #agents #foundations

## What it is

gstack transforms Claude Code into a **virtual engineering team of 23 specialized agents** — CEO, Designer, Eng Manager, Release Manager, QA, Security Officer, and more — each exposed as a slash command (`/office-hours`, `/plan-ceo-review`, `/plan-eng-review`, `/design-review`, `/review`, `/qa`, `/ship`, `/land-and-deploy`, `/browse`, `/cso`, `/retro`, `/pair-agent`).

Each skill feeds output into the next: `/office-hours` writes design docs that downstream skills consume. Built and used in production by Garry Tan (President & CEO of Y Combinator), who reports shipping 3 services and 40+ features in 60 days while running YC full-time. The repo's manifesto is explicit: AI-written code is normalized; productivity is measured by logical lines (AI-inflation-normalized), not raw LOC.

## When to install

- **Direct alignment with the AI Dev OS philosophy.** gstack codifies the "structured methodology over blank prompts" principle this OS already lives by.
- Solo founders or technical CEOs who ship product themselves and want a virtual team of reviewers/QA/security/release.
- Vibe-coders building SaaS who want **taste-driven design exploration** (`/design-shotgun` → `/design-html`) and **production safety** (real-browser testing, multi-AI review, prompt-injection defense).
- Teams already using Claude Code who want parallel-sprint orchestration (Conductor, 10–15 concurrent sessions).

## When NOT to install

- Non-Claude-Code environments without significant adaptation effort (gstack's portability claims cover Codex/Cursor/Kiro/Hermes but Claude Code is the first-class target).
- Compliance-sensitive contexts that can't audit 23 skills + GBrain (custom persistent knowledge DB) in time.
- Tiny scripts / one-off prototypes — overkill.

## How to install

30-second install via Claude Code prompt:

```bash
# Inside Claude Code:
"Install gstack from https://github.com/garrytan/gstack"
# (Clones to ~/.claude/skills/gstack and runs ./setup)
```

Team mode available with auto-update. Cross-platform (Bun v1.0+ runtime, Node.js fallback on Windows for Playwright). Uninstall script provided.

## Fit signals

- Project uses Claude Code as the primary IDE.
- Solo founder / technical CEO / staff engineer setup.
- Sprints follow design → build → ship cadence.
- Team values production-grade testing (real browser, not simulation).

## Conflicts and overlaps

- **Strong overlap with this AI Dev OS itself** — both are opinionated frameworks for AI-assisted SaaS development. They can coexist: the OS provides the WIZARD + project genesis + sprint discipline; gstack provides the in-sprint virtual-team execution layer.
- Overlaps with `everything-claude-code`, `antigravity-awesome-skills`, and `ruflo` on the "pile of skills" axis. gstack is more **opinionated and curated** (23 named roles vs. 1,441 marketplace).

## Local mapping

If installed alongside this OS, gstack lives at `~/.claude/skills/gstack/` (Claude Code global) — separate from this repo's `.claude/skills/`. Document explicitly in TECHNICAL-PLAN.md if both are in use to avoid skill-name collisions.

## Notes

- **Author credibility:** Garry Tan (YC President) — strongest single-author signal in the registry.
- **Manifesto in `ETHOS.md`:** "Boil the Lake, Search Before Building, three layers of knowledge." Worth reading before installing.
- **Multi-AI cross-review (`/codex` for OpenAI second opinion, `/pair-agent` for cross-vendor coordination)** — useful when single-model bias is a risk.
- **Telemetry via Supabase** — open-source-friendly but verify what's emitted before installing on sensitive repos.
- 175 open issues + 317 PRs at review time — active but check for breaking changes between updates.
