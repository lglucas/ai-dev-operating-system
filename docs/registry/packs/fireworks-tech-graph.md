# Fireworks Tech Graph

- **URL:** https://github.com/yizhiyanhua-ai/fireworks-tech-graph
- **License:** MIT
- **Status:** active (5.1k stars, 33 commits, growing)
- **Last reviewed:** 2026-04-30
- **Tags:** #design #ai #tooling

## What it is

A skill that converts natural-language descriptions into production-ready SVG and PNG technical diagrams. Generates polished visualizations for architecture, data flows, UML, and AI/Agent system patterns — with semantic shape vocabulary (LLM shapes, hexagon agents, cylinder DBs) and 7 visual styles (Flat Icon, Dark Terminal, Blueprint, Notion Clean, Glassmorphism, Claude Official, OpenAI Official).

## When to install

- WIZARD Stage 11 (Technical Plan) — auto-generate architecture diagrams.
- Pitch decks, investor materials, and BP appendices that need visual systems.
- Projects with AI/Agent architecture worth visualizing (RAG, multi-agent, tool-call flows).

## When NOT to install

- Backend-only or CLI-only projects with no visual artifacts.
- Projects that already have strict brand-locked diagram styles to enforce manually.

## How to install

```bash
npx skills add yizhiyanhua-ai/fireworks-tech-graph
```

## Fit signals

- TECHNICAL-PLAN.md, BUSINESS-PLAN.md, or PRODUCT-BRIEF.md need architecture diagrams.
- Project includes RAG, multi-agent, or tool-call patterns worth diagramming.
- Pitch deck or investor docs in roadmap.

## Conflicts and overlaps

- Complementary to `ui-ux-pro-max` (UI exploration) and `awesome-design-md` (design system as prompt).

## Notes

Output requires `rsvg-convert` for high-resolution PNG export. Style choice affects perceived professionalism — match the project's brand context.
