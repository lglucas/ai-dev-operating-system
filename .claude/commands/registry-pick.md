# /registry-pick

Recommend external repository packs from the registry that fit the current project.

## Expected input

```txt
/registry-pick
```

Optional arguments:

```txt
/registry-pick stack="<stack>" domain="<domain>" compliance="<compliance>"
```

If arguments are omitted, the skill will read project signals from `docs/business/BUSINESS-PLAN.md`, `docs/product/PRODUCT-BRIEF.md`, `docs/technical/TECHNICAL-PLAN.md`, and the repo manifest files (`package.json`, `Anchor.toml`, etc.).

## Actions

1. Invoke the `registry-pick` skill.
2. Read `docs/registry/INDEX.md` and the relevant `packs/<slug>.md` one-pagers.
3. Match project signals against pack tags and fit-signals.
4. Output a prioritized recommendation: must-install / recommended / optional / skipped.
5. Stop before installing — surface install commands but defer execution to the user.

## When to use

- Right after `WIZARD.md` Stage 11.5 (between Technical Plan and Sprint roadmap).
- When a new domain need surfaces mid-build.
- After a new pack is added to `docs/registry/`.

## Cross-references

- Skill: `.claude/skills/registry-pick/SKILL.md`
- Registry: `docs/registry/INDEX.md`
