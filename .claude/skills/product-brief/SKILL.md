---
name: product-brief
description: Write docs/product/PRODUCT-BRIEF.md by reverse-engineering the approved prototype — every screen, the flow as actually clicked, and the gaps the prototype implied but never showed (empty states, errors, permissions, offline). Runs at WIZARD stage 4.1, after BP v0.0.2 and after a prototype direction is approved in Phase 3. Use when the user asks "o que exatamente a gente vai construir?", "quais telas o MVP tem?", "o que fica de fora?".
---

# Product Brief Skill

Runs at **Phase 4.1** of `WIZARD.md`.

Use after BP v0.0.2 is accepted **and** a prototype direction has been approved in Phase 3.

Create `docs/product/PRODUCT-BRIEF.md` as the operational product document. Not investor copy — that is the Business Plan's job.

## Method: reverse engineering, not invention

The product was designed in Phase 3. This skill reads `docs/product/DESIGN-DIRECTION.md` and `prototype-lab/<chosen>/` and writes down what is already there.

Required checks:

- Every screen in the approved prototype appears in the brief, or is explicitly marked as cut.
- The user flow section matches the flow that was actually clickable in the prototype.
- UX tone is derived from `DESIGN-DIRECTION.md`, not invented.
- **Anything the prototype implied but never showed — empty states, errors, permissions, offline, edge cases — is listed as a gap, not silently filled in.**

That last check is the reason the prototype comes first. A written spec invents its own completeness; a prototype makes the holes visible.

## Contents

One-liner, personas, jobs to be done, user flows, MVP, Phase 1, Phase 2, non-goals, activation moment, retention loop, monetization logic, trust/compliance requirements, UX tone, product risks.
