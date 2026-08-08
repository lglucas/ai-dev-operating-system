# Wizard Flow Rule

The Project Genesis Wizard must not be simplified.

The canonical flow is [`WIZARD.md`](../../WIZARD.md). It runs in **5 phases**, and none may be skipped:

| Phase | Must include |
|---|---|
| **1 — Largada** | repository comprehension, detach from OS-origin, friendly opening |
| **2 — Ideação** | raw ideation, ten strategic questions, research plan approval, Wave 1 (market + competitors), Wave 2 (red team), Wave 3 (consolidation), BP v0.0.1, human review, BP v0.0.2 with impact review |
| **3 — Protótipo** | design pack pick, Prototype Lab with three distinct directions, direction approval, design tokens extracted to `docs/product/DESIGN-DIRECTION.md` |
| **4 — Documentação** | Product Brief, Technical Plan, stack pack pick, sprint roadmap |
| **5 — Chegada** | Sprint 0 / Sprint 1 |

## Ordering rules that are not negotiable

1. **Phase 3 runs before Phase 4.** The prototype is built from BP v0.0.2 and the research — never from a Product Brief, which does not exist yet.
2. **Phase 4 is reverse engineering, not invention.** The Product Brief and Technical Plan must be derived from the approved prototype and `DESIGN-DIRECTION.md`. Anything the prototype implies but does not show must be recorded as a gap, not filled in silently.
3. **Coding waits for Phase 5.** No production code before BP v0.0.2, the prototype direction, the Product Brief, the Technical Plan, and the sprint roadmap are all approved.

## Referring to stages

Use the phase as the handle: "Phase 3", "we're in Phase 4". Stage numbers (`3.2`, `4.1`) order steps inside a phase and may shift when a step is inserted. Phase names do not shift.

Do not reintroduce fractional stages. If a new step is needed, add it as an integer stage inside the phase it belongs to.
