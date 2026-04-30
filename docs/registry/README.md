# External Repo Registry

A curated catalog of trusted external repositories that can plug into a project running on the AI Dev Operating System.

This is **not** a list of dependencies pre-installed in the OS.
This is a **shelf of vetted options** that the WIZARD, an agent, or you can pick from depending on the project being built.

---

## Purpose

The OS itself stays lean.
But every project is different — a Solana SaaS, a Next.js B2C product, a security-heavy compliance tool, a design-led prototype — each benefits from different external skills, agents, plugins, hardening guides, or stack-specific packs.

This registry exists so that, depending on the project:

- the WIZARD can recommend packs at project genesis,
- an agent can suggest a pack when a relevant need shows up,
- the user can browse the catalog manually before committing to a stack.

---

## Files in this directory

| File | Purpose |
|------|---------|
| `README.md` | This file — how the registry works |
| `INDEX.md` | Master table of every pack, its status, tags, and license |
| `packs/<name>.md` | One-pager per repo (what, when, install, license, fit, conflicts) |
| `tags/<tag>.md` | Auxiliary indexes grouped by tag (`security`, `design`, `web3`…) |

---

## How to use the registry

### During a new project (`/project-start` or WIZARD)

1. Identify the project stack and constraints.
2. Open `INDEX.md` and filter by tag (e.g. `#solana #saas`).
3. Read the relevant `packs/<name>.md` one-pagers.
4. Decide which packs to install for THIS project.
5. Install only what is needed — never the whole catalog.

### During development

When a need appears (e.g. "I want better security review skills"):

1. Search `INDEX.md` for the relevant tag.
2. Read the pack's one-pager to confirm fit.
3. Install upstream as documented in the one-pager.

### Adding a new pack

When a new external repo is worth tracking:

1. Create `packs/<repo-slug>.md` using the template below.
2. Add a row to `INDEX.md`.
3. Add the slug to the relevant `tags/<tag>.md` files.
4. If the pack is also a conceptual source for THIS OS, cross-link in `UPSTREAM-SOURCES.md`.

---

## One-pager template

Each pack file follows this shape:

```markdown
# <Repo Name>

- **URL:** https://github.com/<org>/<repo>
- **License:** MIT / Apache-2.0 / proprietary / unknown
- **Status:** active | experimental | archived
- **Last reviewed:** YYYY-MM-DD
- **Tags:** #saas #security #design #web3 #foundations #conventions

## What it is

One paragraph. Plain language. What the repo does and what kind of project it serves.

## When to install

Bullet list of project shapes that benefit. Be concrete.

## When NOT to install

Bullet list of project shapes where this pack adds noise or conflicts.

## How to install

Concrete commands or links. Prefer "install upstream" over "vendor here".
If vendoring is needed, point to the local mapping.

## Fit signals

- Stack signals: e.g. `package.json` mentions `@solana/web3.js`.
- Domain signals: e.g. project deals with PHI / PII / payments.
- Workflow signals: e.g. team needs structured design exploration.

## Conflicts and overlaps

Other packs in this registry that overlap or conflict.
What to choose between them and why.

## Local mapping (optional)

If this OS already references the pack somewhere, list the paths.

## Notes

Anything else worth knowing — known caveats, maintainer reputation, last release cadence.
```

---

## Conventions

### Tags

Use lowercase, hyphenated, prefixed with `#` in prose, plain in tables.

Common tags so far:

- `#foundations` — official Anthropic / Claude Code references
- `#ecosystem` — broad agentic / harness expansions
- `#design` — UI/UX, design systems, prototyping
- `#security` — security review, hardening, secret scanning, malware rules
- `#stack-pack` — stack-specific (Solana, Next.js, etc.)
- `#conventions` — specs (Keep a Changelog, Conventional Commits, SemVer)
- `#tooling` — CLI tools, scanners

### Status

- `active` — recommended, reviewed, maintained upstream
- `experimental` — interesting but unproven; install with care
- `archived` — kept for reference; do not install

### License

Spell out the license. If unknown or proprietary, flag it. Never recommend installing a pack with unclear license.

### Last reviewed

ISO date. Update when you re-validate the pack still fits the OS.

---

## Relationship to other docs

- `UPSTREAM-SOURCES.md` (root) — origin map: what was used to BUILD this OS.
- `ATTRIBUTIONS.md` (root) — author, summary attribution list.
- `docs/origin-map.md` — narrative of how each source influenced the OS.
- `docs/registry/` (this folder) — catalog of repos installable per project.

A repo can appear in BOTH the upstream-sources map AND the registry — that just means it inspired this OS *and* is also worth installing on top of certain projects. Cross-link both when this happens.
