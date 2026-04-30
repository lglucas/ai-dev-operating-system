# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
