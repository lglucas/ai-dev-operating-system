---
name: prototype-lab
description: Build three genuinely distinct HTML/CSS/JS prototype directions — brand, color, typography, UI, UX — from BP v0.0.2 and the research, then extract the approved one into docs/product/DESIGN-DIRECTION.md. Runs at WIZARD Phase 3, BEFORE the Product Brief and Technical Plan. Use when the user says "quero ver como vai ficar", "me mostra umas ideias de layout", "qual vai ser a cara do produto?", "que cores a gente usa?", or runs /prototype-lab.
---

# Prototype Lab Skill

Create three distinct HTML/CSS/JS prototype directions using the same mock data.

Runs at **Phase 3** of `WIZARD.md` — before the Product Brief and the Technical Plan, not after.

## Inputs

All prototypes must reflect `BP v0.0.2` (personas, positioning, MVP scope, primary flow) and the research in `knowledge-base/`.

**The Product Brief is NOT an input.** It does not exist yet — Phase 4 derives it from the direction approved here. If you find yourself needing the Product Brief, the thing you actually need is missing from BP v0.0.2; go add it there.

## Rules

- Three directions, genuinely distinct — not three shades of one idea.
- **All three read the same file: `prototype-lab/shared/mock-data.js`.** Not "equivalent data" — the same file. Phase 4.2 derives the Technical Plan's entities from it, so it needs one guaranteed shared source.
- Same core flows across all three, so the comparison is about design and not content.
- Each direction carries an explicit brand hypothesis: palette, typography, density, tone.
- Do not contaminate the production app with prototype code.

## Output

After the user picks a direction, write `docs/product/DESIGN-DIRECTION.md` — tokens, typography scale, spacing, component inventory, screens, the flow as actually clicked, and what was rejected. That file is what Phase 4 reads.
