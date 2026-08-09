# CLAUDE.md — AI Dev Operating System

This file defines how Claude Code and other AI coding agents should behave inside this repository.

The purpose of this repo is to provide a day-zero operating system for AI-assisted SaaS development: rules, agents, skills, commands, documentation layers, sprint system, changelog discipline, session logs, security gates, and prototype workflows.

---

## Golden rules

1. Do not code before context.
2. Use `START-HERE.md` and `WIZARD.md` for new projects. Prototype (Phase 3) before specifying (Phase 4).
3. Keep documentation layers separate.
4. Preserve decision memory in `session-log/`.
5. Human review is mandatory for BP v0.0.1 before BP v0.0.2.
6. Use multi-agent review when relevant.
7. No invented facts in market, competitor, legal, pricing, or regulatory claims.
8. Use separation of concerns and keep code files under 200 lines where practical.
9. Generated code files should include purpose/version/sprint headers.
10. Use stable dependencies by default; avoid alpha/beta unless explicitly accepted.

---

## Required generated artifacts for a new project

Listed in the order the wizard produces them:

```txt
knowledge-base/README.md                (Phase 2)
docs/business/BUSINESS-PLAN.md          (Phase 2)
docs/business/PITCH.md                  (Phase 2)
prototype-lab/README.md                 (Phase 3)
docs/product/DESIGN-DIRECTION.md        (Phase 3)
docs/product/PRODUCT-BRIEF.md           (Phase 4)
docs/technical/TECHNICAL-PLAN.md        (Phase 4)
docs/SPRINTS.md                         (Phase 4)
CHANGELOG.md
session-log/INDEX.md
session-log/YYYY-MM-DD-project-genesis.md
```

---

## Project Genesis Wizard

The canonical wizard is `WIZARD.md`. It runs in **5 phases**:

| Phase | Name | Produces |
|---|---|---|
| 1 | Largada | detached repo, project intro |
| 2 | Ideação | research, red team, BP v0.0.2 |
| 3 | Protótipo | brand, color, UI, UX — three clickable directions, one approved, and `docs/product/DESIGN-DIRECTION.md` written as the bridge into Phase 4 |
| 4 | Documentação | Product Brief + Technical Plan reverse-engineered from the prototype, then the roadmap |
| 5 | Chegada | Sprint 0 / Sprint 1 |

Do not simplify it. Do not skip phases.

**Phase 3 runs before Phase 4, deliberately.** The prototype is built from BP v0.0.2 and the research; the Product Brief and Technical Plan are then derived from the approved prototype. Never write the Product Brief first and prototype against it — that is the old order and it was inverted on purpose in v0.5.0.

Do not move to code before all of Phase 1–4 is complete and approved.
