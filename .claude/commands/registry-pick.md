---
description: Recomenda packs externos do registry que servem pro projeto atual. Roda duas vezes no wizard — packs de design no 3.1, stack completa no 4.3. Nunca instala nada.
---

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

If arguments are omitted, the skill reads project signals from whatever exists at that point in the wizard — the input contract differs per pass:

| Pass | Lê | NÃO lê |
|---|---|---|
| **3.1** design | `docs/business/BUSINESS-PLAN.md` v0.0.2, `knowledge-base/` | Product Brief e Technical Plan — ainda não existem |
| **4.3** stack | tudo acima + `docs/product/PRODUCT-BRIEF.md`, `docs/technical/TECHNICAL-PLAN.md`, `prototype-lab/`, manifestos (`package.json`, `Anchor.toml`…) | — |

Pedir na passada de design um arquivo que a Fase 3 ainda não produziu trava o wizard sem motivo.

## Actions

1. Invoke the `registry-pick` skill.
2. Read `docs/registry/INDEX.md` and the relevant `packs/<slug>.md` one-pagers.
3. Match project signals against pack tags and fit-signals.
4. Output a prioritized recommendation: must-install / recommended / optional / skipped.
5. Stop before installing — surface install commands but defer execution to the user.

## When to use

- At `WIZARD.md` **stage 3.1** — design-scoped pass, before the Prototype Lab. Output: `docs/technical/registry-pick-design.md`.
- At `WIZARD.md` **stage 4.3** — full stack pass, after the Technical Plan. Output: `docs/technical/registry-pick.md`.
- When a new domain need surfaces mid-build.
- After a new pack is added to `docs/registry/`.

## Cross-references

- Skill: `.claude/skills/registry-pick/SKILL.md`
- Registry: `docs/registry/INDEX.md`
