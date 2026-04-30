# Diagram Design

- **URL:** https://github.com/cathrynlavery/diagram-design
- **License:** check upstream (not specified in README)
- **Status:** active (2.1k stars, recent activity)
- **Last reviewed:** 2026-04-30
- **Tags:** #design #ai #tooling

## What it is

A Claude Code skill that generates 14 types of **editorial-quality diagrams** as self-contained HTML + SVG files: architecture, flowchart, sequence, state machine, ER, timeline, swimlane, quadrant, nested, tree, layers, Venn, pyramid, and 2×2 matrix. Auto-onboards a brand by analyzing your website (extracts dominant palette and font stack). Three rendering variants per diagram (minimal light, minimal dark, full editorial) with built-in WCAG AA contrast verification.

Tagline: "No Figma. No generic rounded boxes."

## When to install

- WIZARD Stage 11 (Technical Plan) needs architecture + sequence + ER diagrams.
- Pitch decks, BP appendices, marketing materials with on-brand visuals.
- Projects that prioritize editorial-quality output over speed.
- Teams without dedicated designers but with brand discipline.

## When NOT to install

- Projects with strict design systems already enforced manually.
- Projects that need throwaway diagrams (overkill).
- Backend / CLI-only projects with no visual artifacts.

## How to install

```bash
git clone git@github.com:cathrynlavery/diagram-design.git ~/code/diagram-design
ln -s ~/code/diagram-design/skills/diagram-design ~/.claude/skills/diagram-design
```

Alternative (Claude Code marketplace):

```
/plugin marketplace add cathrynlavery/diagram-design
/plugin install diagram-design@diagram-design
```

## Fit signals

- TECHNICAL-PLAN.md or BUSINESS-PLAN.md needs polished diagrams.
- Brand identity already exists (palette + typography to extract).
- Pitch / investor materials in roadmap.

## Conflicts and overlaps

- **Direct alternative to** `fireworks-tech-graph` — the latter is more programmatic-style (7 visual styles, AI/agent-pattern vocabulary); diagram-design is more editorial / brand-aware.
- Pairs with `awesome-design-md` (design-system-as-prompt) and `ui-ux-pro-max` (UI exploration).

## Notes

⚠️ License **not explicitly stated** in upstream README — confirm before vendoring or distributing. Progressive-disclosure architecture keeps Claude's context efficient (relevant for long sessions).
