# 2026-04-30 — External Repo Registry framework (v0.4.0)

## Context

The OS already had three docs covering external sources:

- `UPSTREAM-SOURCES.md` — origin/audit map of what built the OS.
- `ATTRIBUTIONS.md` — author + summary attribution list.
- `docs/origin-map.md` — narrative of how each source influenced the framework.

But there was no place to answer the question:

> "For THIS project, which external repos should I install on top of the OS?"

The user observed that social-media discovery surfaces 3–5 interesting repos every day for many different project shapes. Centralizing them in a curated, on-demand catalog turns the OS into a project-agnostic launchpad — instead of a one-size-fits-all template.

## Decision

Introduce `docs/registry/` as a new first-class layer of the OS:

- `README.md` — how the registry works + one-pager template.
- `INDEX.md` — sortable master table.
- `packs/<slug>.md` — one one-pager per repo (license, status, fit signals, install, conflicts).
- `tags/<tag>.md` — auxiliary tag-grouped indexes.

Cross-link from `UPSTREAM-SOURCES.md` and `ATTRIBUTIONS.md` so the separation of concerns is explicit:

- **Origin/audit** = `UPSTREAM-SOURCES.md` (what built this OS).
- **Installable catalog** = `docs/registry/` (what you can plug into a project).

## Why a separate folder, not just an expanded UPSTREAM-SOURCES.md?

- Different audiences. UPSTREAM-SOURCES answers "where did the OS come from?" — useful for audits, license review, attribution. The registry answers "what should I install for this project?" — useful for the WIZARD and for daily decisions.
- Different cadence. UPSTREAM-SOURCES grows slowly (only when something genuinely shaped the OS). The registry grows daily (every interesting repo the user finds).
- Different schema. UPSTREAM-SOURCES is prose-heavy origin narrative. Registry packs need structured fields (status, license, last reviewed, fit signals, conflicts).

## Wiring into the WIZARD

Added Stage 11.5 in `WIZARD.md`: after the Technical Plan, the WIZARD invokes `/registry-pick` (skill: `.claude/skills/registry-pick/`) which scans project signals and recommends a prioritized list of packs.

The skill never installs — it shortlists and surfaces install commands. The user decides.

## Why a skill + command, not a hardcoded WIZARD step?

- The skill works outside the WIZARD too. The user can re-run `/registry-pick` mid-build when a new need surfaces (compliance, design system, malware analysis).
- The skill is idempotent. Adding a new pack later and re-running it produces an updated recommendation without touching the WIZARD.
- Keeps the WIZARD lean — it just delegates.

## Conflict-resolution model

Each pack one-pager lists `Conflicts and overlaps`. The skill uses these to pick between competing packs based on project context (e.g. greenfield design → `ui-ux-pro-max` for exploration; established brand → `awesome-design-md` for enforcement).

## Status fields

Three statuses defined: `active` / `experimental` / `archived`. The skill never recommends `archived` packs. `experimental` packs are recommended with a warning.

## Open questions deferred

- Should the registry support per-project pinning (e.g. "this project locked `gitleaks@v8`")? Not in v0.4.0 — version pinning lives in each project's manifest, not in the OS.
- Should there be an automated upstream-license check? Not yet — license is documented manually per pack and re-reviewed during `Last reviewed` updates.
- Should the registry support stack-pack composition (e.g. "if Solana + Next.js, install both packs and resolve conflicts")? Out of scope for v0.4.0; for now the skill outputs both and lets the user decide.

## What ships in v0.4.0

- `docs/registry/` — full structure with 10 packs migrated from `UPSTREAM-SOURCES.md`.
- `.claude/skills/registry-pick/SKILL.md` — recommendation skill.
- `.claude/commands/registry-pick.md` — slash command entry point.
- `WIZARD.md` Stage 11.5 — wiring into the genesis flow.
- Cross-links in `UPSTREAM-SOURCES.md` and `ATTRIBUTIONS.md`.
- README badge bumped to v0.4.0; new README section explaining the registry.
- `RELEASE-NOTES-v0.4.0.md` and `CHANGELOG.md` updated.

## Next session candidates

- User to bring net-new repos discovered via social media; add via the established template.
- Consider tag growth: `#tooling`, `#observability`, `#fintech`, `#healthtech`, `#agents-marketplace`.
- Consider an `os-self-test` extension that validates registry coherence (every INDEX row has a packs file; every tag in a pack exists as a tag index).
