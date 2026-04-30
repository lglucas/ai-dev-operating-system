# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.4.2] — 2026-04-30 — Registry batch 3 (10 packs + 1 external + comparison study)

Patch release expanding the External Repo Registry with 10 packs and 1 external SaaS. Includes a side-by-side comparison of `slavingia/skills` and `gstack` against this OS (delivered in chat; summarized in release notes). Registry total: 47 → 57 packs + 6 external resources.

### Added

- ⭐ `docs/registry/packs/slavingia-skills.md` — Sahil Lavingia's Minimalist Entrepreneur 10-skill plugin (`foundations` `learning` `ecosystem`).
- ⭐ `docs/registry/packs/auto-research-claw.md` — autonomous academic paper pipeline (`ai` `research` `agents`).
- ⭐ `docs/registry/packs/kronos.md` — foundation model for financial candlesticks, AAAI 2026 (`ai` `ml` `fintech` `research`).
- `docs/registry/packs/holyclaude.md` — containerized Claude Code env with 7 AI CLIs (`ecosystem` `tooling` `stack-pack`).
- `docs/registry/packs/optio.md` — k8s ticket-to-PR orchestration (`ecosystem` `agents` `tooling` `infra`).
- `docs/registry/packs/vibeyard.md` — Electron IDE for parallel AI agent sessions (`ecosystem` `productivity` `tooling`).
- `docs/registry/packs/diagram-design.md` — editorial-quality diagrams skill (`design` `ai` `tooling`).
- `docs/registry/packs/app-store-screenshots.md` — App Store + Play Store screenshot generator (`design` `tooling`).
- `docs/registry/packs/phantom-ui.md` — auto-generated skeleton loaders Web Component (`design` `tooling`).
- `docs/registry/packs/miroshark.md` — swarm intelligence simulation engine; AGPL-3.0 (`ai` `agents` `research` `experimental`).
- `docs/registry/external-resources/sci-bot.md` — AI research assistant grounded in Sci-Hub papers (`research` `ai`).
- `RELEASE-NOTES-v0.4.2.md`.

### Changed

- `docs/registry/INDEX.md` — 10 new pack rows + 1 external row; "Last index update" stamped with v0.4.2.
- Tag indexes updated: `ai`, `design`, `ecosystem`, `fintech`, `foundations`, `learning`, `ml`, `productivity`, `research`.
- `README.md` — status badge bumped to v0.4.2.

### Notes

- Comparison study of `slavingia/skills` + `gstack` vs this OS delivered in-chat; summary in `RELEASE-NOTES-v0.4.2.md`.
- 5 quick wins identified for follow-up v0.4.x sprints (`/processize`, `/grow-sustainably`, `ETHOS.md`, `/multi-ai-review`, `#agents-marketplace` tag).
- Architectural changes (plugin marketplace migration, trust tiers, browser automation, GBrain-like DB, Conductor-like parallel sprints) deferred to v0.5.

---

## [0.4.1] — 2026-04-30 — Registry batch 2 (7 new packs)

Patch release expanding the External Repo Registry with 7 reviewed packs. Registry total: 40 → 47 packs.

### Added

- ⭐ `docs/registry/packs/gstack.md` — Garry Tan's 23-agent virtual engineering team for Claude Code (`ecosystem` `agents` `foundations`).
- ⭐ `docs/registry/packs/tradingagents.md` — TauricResearch multi-agent LLM trading framework on LangGraph (`fintech` `agents` `ai` `research`). Paper-backed (arXiv:2412.20138).
- ⭐ `docs/registry/packs/nellavio.md` — Next.js dashboard starter with 90+ shadcn components, Better-Auth, RBAC, i18n, dual-mode (`stack-pack` `design`).
- `docs/registry/packs/antigravity-awesome-skills.md` — 1,441+ skill playbooks across multiple AI coding agents (`ecosystem` `agents` `tooling`).
- `docs/registry/packs/tegaki.md` — Animated handwriting from any font, multi-framework (`design` `tooling`).
- `docs/registry/packs/open-design.md` — Local-first AI design generation across 10 coding-agent CLIs (`design` `ai` `ecosystem`).
- `docs/registry/packs/unity-mcp.md` — MCP bridge to Unity Engine for game/3D dev (`stack-pack` `agents` `tooling`).
- `RELEASE-NOTES-v0.4.1.md`.

### Changed

- `docs/registry/INDEX.md` — 7 new rows in master table; "Last index update" stamped with v0.4.1.
- Tag indexes updated: `ai`, `design`, `ecosystem`, `fintech`, `foundations`, `research`, `stack-pack`.
- `README.md` — status badge bumped to v0.4.1.

---

## [0.4.0] — 2026-04-30 — External Repo Registry framework

This version turns the OS into a project-agnostic launchpad by introducing a **curated, on-demand catalog of external repository packs**. Instead of pre-installing every community pack, the OS now ships a registry of trusted, vetted repos that the WIZARD recommends per project based on stack, domain, compliance, and team familiarity.

### Added

- `docs/registry/` — new first-class layer of the OS:
  - `docs/registry/README.md` — how the registry works + one-pager template + conventions.
  - `docs/registry/INDEX.md` — sortable master table.
  - `docs/registry/packs/` — 10 one-pagers (anthropics-skills, everything-claude-code, ui-ux-pro-max, awesome-design-md, trailofbits-skills, solana-claude, cis-hardening-guide, yara-style-guide, gitleaks, boringco).
  - `docs/registry/tags/` — auxiliary tag indexes (security, design, foundations, stack-pack, ecosystem).
- `.claude/skills/registry-pick/SKILL.md` — reads the registry and outputs a prioritized recommendation (must / recommended / optional / skipped) for the current project. Never installs.
- `.claude/commands/registry-pick.md` — slash command entry point for the skill.
- `WIZARD.md` Stage 11.5 — registry-pick step between Technical Plan and Sprint roadmap; required output `docs/technical/registry-pick.md`.
- `RELEASE-NOTES-v0.4.0.md`.
- Session log entry: `session-log/2026-04-30-registry-framework-v0.4.0.md`.

### Changed

- `UPSTREAM-SOURCES.md` and `ATTRIBUTIONS.md` now cross-link to `docs/registry/` and clarify the separation of concerns: origin/audit (UPSTREAM) vs. installable catalog (registry).
- `README.md` features the External Repo Registry on the front page; status badge bumped to v0.4.0.
- `WIZARD.md` overview updated to include Stage 11.5; total stages bumped from 16 to 17.

---

## [0.3.0] — 2026-04-28 — Vibe Coder Non-Dev Pack

This version introduces the **Vibe Coder Non-Dev Pack**: a coordinated set of agents, skills, and templates focused on protecting, guiding, and unblocking non-developers building SaaS with AI.

### Added — Defensive layer (Phase 1)

- `.env.example` with vibe-coder-friendly inline guidance for every common integration.
- `CLAUDE.local.md.example` for personal overrides without leaking to the team.
- `.claude/skills/secrets-discipline` — safe handling of API keys, blocks accidental commits.
- `.claude/skills/cost-watchdog` — flags expensive technical choices before they ship.
- `.claude/skills/plain-portuguese-explainer` — translates jargon and errors into plain Portuguese.
- `.claude/skills/daily-standup` — 4-bullet "where we left off" briefing for solo non-dev sessions.
- `.claude/skills/os-self-test` — verifies the OS is internally coherent.
- `.github/pull_request_template.md` with OS coherence + vibe-coder impact checklist.
- `.github/ISSUE_TEMPLATE/` bug + feature templates tuned for both devs and non-devs.
- `.github/workflows/ci.yml` enforcing canonical structure, hygiene, and link integrity.

### Added — Active-help layer (Phase 2)

- `.claude/agents/bug-triage-agent` — first responder when something breaks.
- `.claude/agents/launch-agent` — coordinates public launch with a pre-launch gate and 3 launch tracks.
- `.claude/agents/legal-compliance-agent` — Privacy Policy, Terms, LGPD/GDPR baseline drafts.
- `.claude/skills/rollback-safe` — safely undoes the last AI change.
- `.claude/skills/verify-build-works` — smoke-test ladder for build + dev server + golden path.
- `.claude/skills/usage-monitor` — tracks cost across LLM, hosting, DB, email after launch.
- `.claude/skills/deploy-vercel-supabase` — first Vercel + Supabase production deploy walkthrough.
- `.claude/skills/first-100-users` — early-stage acquisition playbook without paid ads.
- `examples/nextjs-supabase-saas/README.md` — canonical Next.js + Supabase layout reference.
- `RELEASE-NOTES-v0.3.0.md`.
- Vibe Coder Non-Dev Pack session log entry.

### Changed

- `README.md` features the Vibe Coder Non-Dev Pack on the front page and links to all new agents and skills; status badge bumped to v0.3.0.

---

## [0.2.0] — 2026-04-28 — Project Genesis Wizard + Public Release Polish

### Added

- `START-HERE.md` as the single first file Claude reads.
- `WIZARD.md` as the canonical Project Genesis Wizard.
- Detailed wizard documentation under `docs/wizard/`.
- Skills under `.claude/skills/`: project-genesis, research-waves, business-plan-impact-review, product-brief, sprint-roadmap, prototype-lab, sprint-management, feature-scaffold, decision-log, release-check, secrets-scan, privacy-audit, external (affaan-everything-claude-code).
- Specialized agents under `.claude/agents/`: coordinator, devils-advocate, dev-product, research, business-red-team, technical-security-red-team, copywriter, market-research, competitor-research.
- Slash commands under `.claude/commands/`: project-start, research-waves, bp-review, sprint-plan, prototype-lab, sprint-start, sprint-close.
- Modular rules under `.claude/rules/`: golden-rules, code-style, documentation-layers, research-discipline, wizard-flow, security-baseline, git-workflow, feature-based-architecture, secrets, privacy-audit.
- Product, business, technical, knowledge-base, prototype-lab, and session-log scaffolding.
- `.gitignore` covering personal canonical files, environment files, archives, and IDE/OS artifacts.
- `RELEASE-NOTES-v0.2.0.md`.
- Public release polish session log entry under `session-log/`.

### Changed

- Migrated all rules, skills, agents, and commands from non-canonical root directories into `.claude/`, matching the official Claude Project Structure.
- Reconciled version metadata across README badge, release notes, and `templates/project/CLAUDE.md`.
- Updated `docs/documentation-layers.md` paths to reference the canonical `.claude/` runtime.
- Updated `UPSTREAM-SOURCES.md` to reflect new canonical paths.

### Removed

- Root `agents/`, `rules/`, `skills/`, `commands/` directories (non-canonical duplicates of `.claude/`).
- `docs/excluded-boringco-material.md` and `docs/import-plan-from-boringco.md` (zombie compatibility shims; useful content already lives in `docs/public-sanitization.md` and `UPSTREAM-SOURCES.md`).
- `RELEASE-NOTES-v0.1.0.md` (superseded by v0.2.0; history preserved in this changelog).
- Empty placeholder directories: `examples/nextjs-supabase-saas/`, `rules/quality/`, `rules/stack-specific/`.
- `ai-dev-operating-system-overlay-v5-public-ready.zip` (archives are not part of the repo; covered by `.gitignore`).

---

## [0.1.0] — 2026-04-27 — Initial public release

### Added

- Initial AI Dev Operating System repository structure.
- Documentation layers scaffolding: product, business, technical, sprints, changelog, session-log, knowledge-base.
- Public attribution and upstream source mapping (`UPSTREAM-SOURCES.md`, `ATTRIBUTIONS.md`, `docs/origin-map.md`).
- Security policy (`SECURITY.md`) and public sanitization notes (`docs/public-sanitization.md`).
- Installation guide (`docs/installation.md`).
- LICENSE (MIT).
