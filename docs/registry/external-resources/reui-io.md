# reui.io

- **URL:** https://reui.io
- **Type:** external resource (not installable as a single package; components copy-pasted into projects)
- **License:** MIT (core library) + paid Pro tier
- **Status:** active (live site)
- **Last reviewed:** 2026-04-30
- **Tags:** #design

## What it offers

The largest free and open-source collection of shadcn/ui components for React and Tailwind CSS — 1,003+ reusable, production-ready UI components built on shadcn/ui primitives. Compatible with all shadcn create styles, supports Base UI and Radix UI variants, and offers MIT-licensed core plus a paid Pro tier with exclusive components.

## When to consult

- Stack uses React + Tailwind CSS + shadcn/ui.
- WIZARD Stage 13 (Prototype Lab) and beyond — accelerate UI build with proven components.
- Need data-grid, kanban, file-upload, or filter components without reinventing them.

## When NOT to consult

- Stack doesn't use Tailwind / shadcn / React.
- Project requires fully custom design that wouldn't reuse community components.

## How to use

Visit reui.io, browse components, copy code into the project (shadcn-style — no install, copy-paste). Pro tier requires a paid account with waitlist for early-bird pricing.

## Fit signals

- `package.json` includes `tailwindcss`, `shadcn`, or `@radix-ui/*`.
- Project is a Next.js / React dashboard or admin tool.
- Speed-to-market is a priority.

## Conflicts and overlaps

- Complementary to `awesome-design-md` (design system) and `ui-ux-pro-max` (exploration).

## Notes

MIT core is safe for commercial use. Pro tier — review the license before bundling Pro components into a public product. Components are copy-paste, so they live inside your repo and require manual update tracking.
