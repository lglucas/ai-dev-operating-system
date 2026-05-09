# Iso Middle Earth

- **URL:** https://github.com/hasanharman/isomiddleearth
- **License:** check upstream (not explicitly stated)
- **Status:** reference-only until upstream license is explicit (553 stars)
- **Last reviewed:** 2026-05-09
- **Tags:** #design #tooling

## What it is

An interactive isometric world-builder set in Tolkien's Middle-earth. Users design custom landscapes across seven realms by placing terrain tiles and character overlays, with export. Built as a Next.js 16 + React 19 + TypeScript + Tailwind app using Radix UI primitives and Zustand state management.

Useful as a **reference implementation** of a polished interactive Next.js app with a tile-based editor and Radix UI patterns — beyond its pure entertainment value.

## When to install

- Studying a clean Next.js 16 / React 19 / Zustand reference implementation.
- Building a tile-based editor or any grid-canvas UI — copy patterns rather than reinvent.
- Need inspiration for a polished isometric or game-like web UI.
- Looking for Radix UI + Tailwind composition patterns at scale.

## When NOT to install

- No Next.js / React in the stack.
- Looking for a generic art tool — this is Tolkien-themed; assets and lore are domain-specific.
- License clarity matters and you cannot wait for upstream clarification.

## How to install

```bash
git clone https://github.com/hasanharman/isomiddleearth
cd isomiddleearth
pnpm install && pnpm dev
```

## Fit signals

- `package.json` includes `next@16`, `react@19`, `zustand`, `@radix-ui/*`, `tailwindcss@4`.
- Project needs an interactive grid/tile editor.
- Designer / dev wants a strong reference for "polished isometric web UI."

## Conflicts and overlaps

- Pure visual/UX inspiration overlap with `tegaki` (drawing) and `ascii-draw` (ASCII canvas).
- Reference-implementation overlap with `nellavio` (stack-pack) — Nellavio gives a stack template, IsoMiddleEarth shows a deployed app at scale.

## Notes

- ⚠️ **License not explicitly stated** in README at last review. Treat as "view-only reference" until upstream clarifies — do not copy-paste production code without confirming a permissive license.
- Tolkien IP — Middle-earth assets and naming are Estate-protected; do not lift visuals into commercial work.
- Strong tech-stack fit if you're already on the Next.js 16 / React 19 / Tailwind 4 / Zustand wave.
