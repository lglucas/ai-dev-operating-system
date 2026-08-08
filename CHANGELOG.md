# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased] — v0.5.0 in progress

> v0.5.0 is being delivered in four independent PRs. This section accumulates until the last one lands, then gets cut as a release.
>
> - [x] **PR 1** — WIZARD restructured into 5 phases, prototype before spec
> - [ ] **PR 2** — Pitch artifact + "BP/Pitch online?" decision
> - [x] **PR 3** — Skill frontmatter fix + audit
> - [ ] **PR 4** — awesome-selfhosted catalog + managed-vs-self-hosted question

### Fixed — six core wizard skills were invisible to auto-invocation

A `SKILL.md` advertises itself through the `description` field in its YAML frontmatter. Six skills had **no frontmatter at all**, so their entire advertised description was their own H1 title — "Product Brief Skill", "Research Waves Skill", and so on.

They were precisely the six that drive the wizard: `project-genesis`, `research-waves`, `business-plan-impact-review`, `product-brief`, `prototype-lab`, `sprint-roadmap`. The twenty peripheral skills from the v0.3.0 vibe-coder pack all had proper frontmatter. **The oldest and most load-bearing skills were the least discoverable.**

Worst case: five live files instruct Claude to invoke `business-plan-impact-review` by name, while the skill itself could not describe when it applied.

### Changed — every skill description now states trigger conditions

Ten further skills had frontmatter but zero trigger phrases: `cost-watchdog`, `decision-log`, `feature-scaffold`, `os-self-test`, `privacy-audit`, `release-check`, `secrets-discipline`, `secrets-scan`, `sprint-management`, `verify-build-works`.

A description saying "Review features that touch personal data" is accurate and useless. What makes `privacy-audit` fire is `"vou guardar o CPF"` / `"e a LGPD?"`. All 26 descriptions now name conditions, not just behavior.

| Metric | Before | After |
|---|---|---|
| Skills with frontmatter | 20 / 26 | **26 / 26** |
| Skills with trigger phrases | 10 / 26 | **26 / 26** |

### Fixed — three overlapping skill pairs now cross-link both ways

The asymmetry always ran the same direction — the newer skill knew about the older, never the reverse.

- `secrets-discipline` ↔ `secrets-scan` — preventive workflow vs. detection pass. Neither said so; the distinction lived only in `docs/registry/packs/gitleaks.md`.
- `cost-watchdog` ↔ `usage-monitor` — preventive vs. post-launch, despite a v0.3.0 session log claiming they already cross-linked.
- `first-100-users` ↔ `grow-sustainably` — `grow-sustainably` referenced its predecessor in 7 places; `first-100-users` referenced its successor in **zero**, so founders reaching 100 users were never routed forward.

### Changed — `release-check` delegates instead of duplicating

Its checklist said "Lint/build pass" and "Privacy/security review complete" while `verify-build-works`, `secrets-scan`, and `privacy-audit` sat unreferenced. It is now a delegation table naming the responsible skill per check, with blocking vs. warning severity and a `multi-ai-review` escalation for hard-to-reverse releases. Closes an open item from `session-log/2026-05-01-v0.4.3-quick-wins.md:75`.

### Added

- `docs/skill-audit-2026-08-08.md` — full audit of all 26 skills, with the verification script.

### Changed — `docs/skill-system.md` rewritten

Its example table listed `design-prototype` and `security-review`, **neither of which exists**. Replaced with the real inventory of 26 grouped by job, plus a mandatory-frontmatter section explaining why `description` must carry trigger conditions.

### Known gaps, recorded not fixed

- **No `technical-plan` skill.** `product-brief` drives stage 4.1 and `sprint-roadmap` drives 4.4; stage 4.2 has only `WIZARD.md` prose.
- `templates/project/CLAUDE.md:62` advertises `/release-check`, which does not exist in `.claude/commands/`.

### Note on GitHub provenance

Checked, and **no change needed**. 23 of 26 skills are original to this repo. The three with declared upstream inspiration (`multi-ai-review`, `processize`, `grow-sustainably`) already link to registry packs carrying the URLs — the chain is `skill → registry pack → upstream URL`, which keeps license and review status in one place. A per-skill `source:` field was considered and declined as duplication.

### Changed — WIZARD is now 5 phases, and the prototype comes before the spec

**Breaking for anyone referencing stages by number.** The four competing numberings (`README.md` 15 steps, `WIZARD.md` overview 17 items, `WIZARD.md` stage headings `0`–`14`, `docs/wizard/` files `01`–`08`) were unified into one:

| Phase | Stages | Commit tag |
|---|---|---|
| 1 — Largada | 1.1–1.3 | `[STAGE:LARGADA]` |
| 2 — Ideação | 2.1–2.8 | `[STAGE:IDEACAO]` |
| 3 — Protótipo | 3.1–3.3 | `[STAGE:PROTOTIPO]` |
| 4 — Documentação | 4.1–4.4 | `[STAGE:DOCUMENTACAO]` |
| 5 — Chegada | 5.1 | `[STAGE:CHEGADA]` |

- **Prototype Lab moved from last-before-coding to Phase 3** — before the Product Brief and Technical Plan, which are now reverse-engineered from the approved prototype.
- **Fractional stages eliminated.** `Stage 0.5` (detach) → `1.2`. `Stage 11.5` (registry pick) → split into `3.1` (design packs, before prototyping) and `4.3` (stack packs, after the Technical Plan).
- **Phases map 1:1 onto the five commit tags** in `.claude/rules/wizard-stage-tags.md`. No translation table. This also fixes a pre-existing bug: under the old order `PROTOTIPO` came chronologically *after* `DOCUMENTACAO`, so systems inferring progress from tag sequence saw projects moving backwards. The five tag values are unchanged; old commits stay valid.
- **Sprint -1 changed job** from building the prototype to consolidating it into a design system. `docs/sprints/sprint--1-prototype-lab.md` → `docs/sprints/sprint--1-design-system.md`.
- **BP v0.0.2 gained an exit condition** at stage 2.8: it must explicitly state personas, positioning, MVP scope, and the primary user flow, because Phase 3 has no Product Brief to read.

### Added

- `docs/product/DESIGN-DIRECTION.md` as a required Phase 3 artifact — the bridge to Phase 4. Records chosen direction, color tokens, typography scale, spacing, component inventory, screens, the flow as actually clicked, and a mandatory **"implied but never shown"** gaps table (empty states, errors, permissions, long data, offline, mobile, accessibility).
- `templates/product/DESIGN-DIRECTION.template.md`.
- `docs/technical/registry-pick-design.md` as the output of the new design-scoped registry pass.
- `docs/wizard/phase-1-largada.md` … `phase-5-chegada.md` — five phase files replacing the eight `01`–`08` topic files. Includes Technical Plan guidance, which `docs/wizard/` never had.

### Removed

- `docs/wizard/01-ideation.md`, `02-research-waves.md`, `03-business-plan.md`, `04-business-plan-review.md`, `05-product-brief.md`, `06-sprint-planning.md`, `07-prototype-lab.md`, `08-first-coding-sprint.md` — consolidated into the five phase files. Migration table kept in `docs/wizard/README.md`.

### Why

A written spec invents its own completeness: it says "the user manages their projects" and moves on. A prototype forces the question *what does this screen look like when the list is empty?* — and either it was answered or the hole is visible. Phase 4 is now required to record those gaps rather than silently fill them.

The Technical Plan gets a second benefit: its data model is derived from `prototype-lab/shared/mock-data.js`. Mock data written to make three screens look real contains exactly the fields the product displays and nothing speculative.

Phases were chosen over a renumbered flat list because inserting a step into a flat list renumbers everything downstream — which is precisely how `0.5` and `11.5` came to exist. Under phases, insertion only renumbers within one phase, and the five phase names never move.

### Migration notes

- Historical records (`CHANGELOG.md` entries below, `RELEASE-NOTES-v0.4.*.md`, prior session logs) still say "Stage 0.5" / "Stage 11.5". They were deliberately not rewritten — they accurately record what was true at the time.
- `course/` content still references the old ordering and will drift until updated separately.

---

## [0.4.5] — 2026-05-04 — Course vertical: workshop em 3 aulas (Experience Learning) + 2 sistemas planejados

### Added — Vertical educacional `course/`

Pasta `course/` adicionada como **vertical paralela**, claramente separada do OS operacional. Construída como prova viva de que vibe coder com método produz em horas o que time custaria semanas.

- `course/README.md` — manifesto da separação. Quem clona pra projeto pode ignorar/apagar a pasta sem afetar o OS.
- `course/CHANGELOG-COURSE.md` — histórico das decisões pedagógicas (v1 → v3.3) inteiro documentado.
- `course/content/shared/curso-overview.md` — TESE, TAGLINE, ARCO global do curso aplicando os 4 pilares Perestroika (Conteúdo, Forma, Emocional, Estrutural).
- `course/content/aula-1-fundacao/README.md` + `treco/po-de-diamante-po-de-fome.md` — Aula 1 completa (Tagline: "Você não está de muletas, isso aqui é um fucking Gundam!").
- `course/content/aula-2-construcao/README.md` — Aula 2 completa (Tagline: "AI sem contexto é menino no sandbox").
- `course/content/aula-3-soberania/README.md` — Aula 3 completa (Tagline: "Não somos jangada. Somos submarino nuclear pilotado por gente que ouviu a IA").
- `course/sprints/sprint-0-fundacao.md` — Sprint que constrói curso + 2 sistemas + repo demo (~40h em 4–6 semanas).
- `course/systems/trilho-red-team/BRIEF.md` — Sistema 1 (sorteio anônimo de duplas pra red team).
- `course/systems/grand-prix/BRIEF.md` — Sistema 2 (painel ao vivo com carrinhos F1 lendo commits via GitHub API).
- `course/videos/INDEX.md` — placeholder pra futuros vídeos do YouTube.

### Added — Easter egg no OS principal (opt-in)

- `.claude/rules/wizard-stage-tags.md` — convenção opcional `[STAGE:LARGADA|IDEACAO|DOCUMENTACAO|PROTOTIPO|CHEGADA]` em commit messages. Permite rastreamento automático de progresso por sistemas externos. Quem ignora não perde nada.

### Why

Workshop em 3 encontros de 2h aplicando Experience Learning (metodologia open source da Perestroika sob CC BY-SA 4.0) e construído sobre o próprio AI Dev OS. A vertical foi separada propositalmente: quem clona o template pra um projeto não deve confundir material didático com material operacional, mas o curso vive no mesmo repo pra garantir versionamento conjunto e prova viva do método.

### Notes

- v0.4.5 é **patch**, não minor — nenhuma alteração no OS operacional. Apenas adição da nova vertical.
- v0.5.0 segue reservado pras decisões arquiteturais do OS (trust tiers, plugin manifest, parallel sprints, allowlists).

---

## [0.4.4] — 2026-05-04 — Repo hardening: branch protection, GitHub Template, WIZARD Stage 0.5 (detach from OS-origin)

### Added

- `CONTRIBUTING.md` — full PT-BR contribution guide (fork → branch → PR flow), bilingual EN summary at top.
- `.github/ISSUE_TEMPLATE/question.md` — third issue template alongside bug/feature.
- `scripts/detach-os.sh` and `scripts/detach-os.ps1` — interactive, educational scripts to disconnect a derived project from the OS-origin remote (re-init mode or remote-swap mode), with secrets-discipline reminders.
- `.aios-self` — root marker file identifying the OS repo itself (used in combination with origin URL by Stage 0.5).
- `WIZARD.md` Stage 0.5 — "Detach from OS-origin (educate-and-execute)" between Stage 0 and Stage 1. Walks non-dev users through Git remotes, GitHub repo creation, PAT/SSH setup, and `.env`/`.gitignore` discipline.
- `RELEASE-NOTES-v0.4.4.md`.

### Changed

- **GitHub server-side hardening** (out-of-repo, applied via `gh` CLI):
  - Repo marked as **Template** (`gh repo edit --template`) — surfaces "Use this template" button as the recommended path.
  - **Branch protection** on `main` — requires PR, dismisses stale reviews, no force pushes, no deletions, conversation resolution required. `enforce_admins=false` so the maintainer can bypass in emergencies.
- `README.md` — Quick start now leads with "Use this template", with `git clone` collapsed as a clearly-marked fallback that points to `scripts/detach-os.*`. Added explicit "Want to contribute?" section linking `CONTRIBUTING.md`.
- `docs/installation.md` — Section 4 rewritten as Path A ("Use this template", recommended) + Path B (`git clone` with detach instructions).
- `.github/pull_request_template.md` — added checklist line: "PR opened from a fork or feature branch — no direct commits to main".

### Why

A user who follows the prior `git clone` instructions ends up with `origin` pointing to the OS repo, so any `git push` either fails (confusing for non-devs) or, if the user has push access, pollutes the OS repo with their personal project. The combination of (1) branch protection, (2) template flag, and (3) WIZARD Stage 0.5 implements the "no defaults to push" posture that's standard for public template repos (Vercel, shadcn, Cloudflare templates).

The `git clone` path is preserved for advanced users and offline scenarios, but is now clearly second-best.

---

## [0.4.3] — 2026-05-01 — Quick wins: ETHOS, /processize, /grow-sustainably, /multi-ai-review, agents-marketplace tag

Patch release implementing the five quick wins identified in v0.4.2's comparison study against `gstack` and `slavingia/skills`. No architectural changes — those remain deferred to v0.5.

### Added

- `ETHOS.md` — one-page canonical manifesto. 15 principles distilled from the operating contract; every rule, agent, skill, and command must trace back to it.
- `.claude/skills/processize/SKILL.md` + `.claude/commands/processize.md` — codify a manually-validated workflow into a documented, partially-automatable process. Inspired by Sahil Lavingia's "validate-then-automate" principle. Includes a 5-question gate, a 3-stage maturity model, and a `docs/processes/<slug>.md` output template.
- `.claude/skills/grow-sustainably/SKILL.md` + `.claude/commands/grow-sustainably.md` — post-`first-100-users` growth planner. Four pillars (retention → compress what worked → ONE new channel → founder bandwidth), tier-ordered channel taxonomy, hard rules against vanity metrics and channel diffusion, monthly `docs/business/growth-plan-<YYYY-MM>.md` output.
- `.claude/skills/multi-ai-review/SKILL.md` + `.claude/commands/multi-ai-review.md` — cross-review hard-to-reverse decisions through 2–4 independent reviewer roles. Inspired by gstack's `/codex` cross-review concept. Net confidence = MIN of reviewer scores. Three outcomes: Proceed / Modify and re-review / Block.
- `docs/registry/tags/agents-marketplace.md` — new registry tag surfacing curated skill bundles distributed as discrete installable packs (gstack, slavingia-skills, antigravity-awesome-skills, anthropics-skills, everything-claude-code, ruflo, holyclaude, vibeyard, optio, open-design, trailofbits-skills).
- `RELEASE-NOTES-v0.4.3.md`.
- Session log entry: `session-log/2026-05-01-v0.4.3-quick-wins.md`.

### Changed

- `README.md` — new "Quick wins (v0.4.3)" section between the Registry block and the Vibe Coder Pack block; status badge bumped to v0.4.3.
- `docs/registry/INDEX.md` — `Last index update` stamped with v0.4.3; `agents-marketplace` added to the tag-list section.

### Notes

- Architectural changes (plugin manifest, trust tiers enforcement, parallel sprint orchestration, marketplace migration) remain deferred to v0.5; the audit trail lives in `session-log/`.
- These five additions are non-breaking — existing projects pulling v0.4.2 receive new opt-in capabilities; nothing previously available has changed shape.

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
