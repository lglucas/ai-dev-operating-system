# Phase 3 — Protótipo

**Commit tag:** `[STAGE:PROTOTIPO]`
**Canonical source:** [`WIZARD.md`](../../WIZARD.md) stages 3.1–3.3

---

## Goal

The product becomes visible. Brand, color, typography, UI, and UX are decided by looking at three real options, not by describing them.

---

## Why this phase moved

Until v0.4.5 the Prototype Lab ran *after* the Product Brief, the Technical Plan, and the sprint roadmap. That order asks a founder to specify a product they have never seen.

Since v0.5.0 the order is inverted: prototype first, then reverse-engineer the documentation from the direction that gets approved.

**What this buys you:** a written spec invents its own completeness. It says "the user manages their projects" and moves on. A prototype forces the question *what does this screen look like when the list is empty?* — and either you answered it or the gap is visible. Phase 4 is required to record those gaps rather than quietly fill them.

---

## Inputs

| Is an input | Is not an input |
|---|---|
| `BP v0.0.2` — personas, positioning, MVP scope, primary flow | `PRODUCT-BRIEF.md` — does not exist yet |
| `knowledge-base/` — market and competitor research | `TECHNICAL-PLAN.md` — does not exist yet |
| The ten strategic questions and their answers | The sprint roadmap — does not exist yet |

If you find yourself wanting the Product Brief here, the thing you actually want is missing from BP v0.0.2. Go back and add it there.

---

## 3.1 — Design pack pick

A design-scoped pass over `docs/registry/`: UI systems, design-token workflows, component libraries, diagramming, screenshot tooling.

Runs before prototyping because design packs are worthless once the prototype is built. Output: `docs/technical/registry-pick-design.md`.

The full stack-wide pick happens later, at stage 4.3, once the Technical Plan knows the real stack.

---

## 3.2 — Prototype Lab

Three distinct HTML/CSS/JS directions, same mock data, same core flows.

The goal is to compare **design direction**, not content. If the three prototypes differ in what they show, the comparison is worthless — differences must be in how it looks and how it feels to move through.

Each direction carries an explicit brand hypothesis: palette, typography, density, tone, and what kind of company it makes the product look like. `prototype-lab/README.md` states, per direction: who it is for, what it optimizes for, and what it sacrifices.

Prototypes are disposable and never mixed with production source.

---

## 3.3 — Direction approval and design tokens

The user picks one direction, or an explicit combination.

Claude then writes `docs/product/DESIGN-DIRECTION.md`: chosen direction and why, color tokens, typography scale, spacing and density, component inventory, screens that exist, the primary flow as actually clicked, and what was rejected from the other two.

**This file is the bridge to Phase 4.** Without it, the reverse engineering has nothing concrete to read.

Hard stop — Claude waits for explicit approval before entering Phase 4.
