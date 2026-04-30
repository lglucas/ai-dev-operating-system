# External Resources

Curated **non-installable** references — websites, galleries, design inspiration sources, and live tools that complement the OS but are not GitHub repositories you vendor or `npm install`.

These are tracked here so the WIZARD and `/registry-pick` can suggest them at the right moment (e.g. UI exploration phase, copywriting needs, design system enforcement).

## How this differs from `packs/`

- `packs/<slug>.md` — installable GitHub repositories (skills, libraries, frameworks, stack-packs).
- `external-resources/<slug>.md` — websites, galleries, courses hosted off-GitHub, live SaaS tools.

Same one-pager schema with one extra field: `Type: external resource (not installable)`.

## Adding a new external resource

1. Create `external-resources/<slug>.md` from the same template documented in `docs/registry/README.md`, plus `Type: external resource (not installable)`.
2. Add a row to the **External resources** section of `docs/registry/INDEX.md`.
3. Add the slug to the relevant `docs/registry/tags/<tag>.md` files.
