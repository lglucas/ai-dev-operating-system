# Wizard Documentation

This directory expands the Project Genesis Wizard.

The canonical flow is `WIZARD.md` at the repository root. These files help Claude follow the process without simplifying it.

## Files

One file per phase, matching the 5 phases in `WIZARD.md` and the 5 commit tags in `.claude/rules/wizard-stage-tags.md`.

| File | Phase | Commit tag |
|---|---|---|
| [`phase-1-largada.md`](phase-1-largada.md) | Largada — detach, repo comprehension, opening | `[STAGE:LARGADA]` |
| [`phase-2-ideacao.md`](phase-2-ideacao.md) | Ideação — 10 questions, 3 research waves, BP v0.0.2 | `[STAGE:IDEACAO]` |
| [`phase-3-prototipo.md`](phase-3-prototipo.md) | Protótipo — brand, color, UI, UX in 3 directions | `[STAGE:PROTOTIPO]` |
| [`phase-4-documentacao.md`](phase-4-documentacao.md) | Documentação — Brief + Technical Plan reverse-engineered, roadmap | `[STAGE:DOCUMENTACAO]` |
| [`phase-5-chegada.md`](phase-5-chegada.md) | Chegada — Sprint 0 / Sprint 1 | `[STAGE:CHEGADA]` |

## Renamed in v0.5.0

This directory used to hold eight topic files numbered `01`–`08`, which was a fourth competing numbering alongside `README.md`, `WIZARD.md`'s overview, and `WIZARD.md`'s stage headings. They were consolidated into the five phase files above.

| Old file | Now in |
|---|---|
| `01-ideation.md`, `02-research-waves.md`, `03-business-plan.md`, `04-business-plan-review.md` | `phase-2-ideacao.md` |
| `05-product-brief.md`, `06-sprint-planning.md` | `phase-4-documentacao.md` |
| `07-prototype-lab.md` | `phase-3-prototipo.md` |
| `08-first-coding-sprint.md` | `phase-5-chegada.md` |
| *(did not exist)* | Technical Plan, now covered in `phase-4-documentacao.md` |
