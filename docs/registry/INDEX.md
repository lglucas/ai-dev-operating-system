# External Repo Registry — Master Index

Catalog of every external repository tracked by this OS as **installable on demand** per project.

For how the registry works, see [`README.md`](README.md).
For per-pack detail, click the slug in the first column.

Last index update: 2026-04-30

---

## Master table

| Slug | Name | Tags | Status | License | Last reviewed |
|------|------|------|--------|---------|---------------|
| [`anthropics-skills`](packs/anthropics-skills.md) | Anthropic Skills | `foundations` | active | MIT | 2026-04-30 |
| [`everything-claude-code`](packs/everything-claude-code.md) | everything-claude-code | `ecosystem` `tooling` | active | check upstream | 2026-04-30 |
| [`ui-ux-pro-max`](packs/ui-ux-pro-max.md) | UI UX Pro Max Skill | `design` | active | check upstream | 2026-04-30 |
| [`awesome-design-md`](packs/awesome-design-md.md) | VoltAgent awesome-design-md | `design` | active | check upstream | 2026-04-30 |
| [`trailofbits-skills`](packs/trailofbits-skills.md) | Trail of Bits Skills | `security` | active | check upstream | 2026-04-30 |
| [`solana-claude`](packs/solana-claude.md) | Solana Claude | `stack-pack` `web3` | active | check upstream | 2026-04-30 |
| [`cis-hardening-guide`](packs/cis-hardening-guide.md) | CIS Hardening Guide | `security` `infra` | active | check upstream | 2026-04-30 |
| [`yara-style-guide`](packs/yara-style-guide.md) | YARA Style Guide | `security` `malware` | active | check upstream | 2026-04-30 |
| [`gitleaks`](packs/gitleaks.md) | Gitleaks | `security` `tooling` | active | MIT | 2026-04-30 |
| [`boringco`](packs/boringco.md) | Boring Co (origin) | `origin` | archived | private | 2026-04-30 |

---

## Specs and conventions (linked references, not repos to install)

These are documentation references, not installable packs. They are tracked here for completeness and so the WIZARD can point to them.

| Reference | URL | Used as |
|-----------|-----|---------|
| Keep a Changelog | https://keepachangelog.com/ | Changelog discipline |
| Conventional Commits | https://www.conventionalcommits.org/en/v1.0.0/ | Commit convention |
| Semantic Versioning | https://semver.org/ | Release tagging |

---

## How to filter

- **Need security packs?** See [`tags/security.md`](tags/security.md).
- **Need design packs?** See [`tags/design.md`](tags/design.md).
- **Need stack-specific packs?** See [`tags/stack-pack.md`](tags/stack-pack.md).
- **Need foundational references?** See [`tags/foundations.md`](tags/foundations.md).

---

## Adding a new pack

1. Pick a slug — lowercase, hyphenated, matches repo name when possible.
2. Create `packs/<slug>.md` from the template in [`README.md`](README.md#one-pager-template).
3. Add a row to the table above (alphabetical or grouped by domain — pick what reads best).
4. Add the slug to every relevant `tags/<tag>.md` file.
5. Cross-link in `UPSTREAM-SOURCES.md` only if the pack also influenced the OS itself.
