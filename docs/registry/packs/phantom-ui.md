# Phantom-UI

- **URL:** https://github.com/aejkatappaja/phantom-ui
- **License:** MIT
- **Status:** active (341 stars, v0.9.0 April 2026, 16 releases)
- **Last reviewed:** 2026-04-30
- **Tags:** #design #tooling

## What it is

A Web Component that automatically generates **skeleton loading screens by measuring your real UI at runtime**. Wraps actual content and overlays animated shimmer placeholders at the exact position of text, images, and other elements — eliminating the need to maintain separate skeleton components. Framework-agnostic (works with React, Vue, Svelte, Angular, Solid, Qwik, etc.) with 4 animation modes (shimmer, pulse, breathe, solid) and ~8kb gzipped bundle.

## When to install

- Project has perceived-performance bottlenecks during initial render.
- Lists / dashboards / data-heavy UIs that benefit from skeleton states.
- Multi-framework codebases (one skeleton component for all stacks).
- Projects where maintaining hand-written skeletons is a chore.

## When NOT to install

- Pure backend / CLI projects.
- Static sites with instant render.
- Strict CSP environments that block Web Components.

## How to install

```bash
npm install @aejkatappaja/phantom-ui
```

## Fit signals

- Frontend stack uses any modern framework (React/Vue/Svelte/Angular/Solid/Qwik).
- Project has dashboards, data tables, or feed-style UIs.
- Lighthouse perceived-performance score is a tracked metric.

## Conflicts and overlaps

- Niche — no real overlap with other registry packs.
- Pairs with `nellavio` (dashboard starter) and `reui-io` (component library) — Phantom-UI handles the skeleton layer those don't auto-generate.

## Notes

Structure-aware via DOM traversal + `getBoundingClientRect()`. Auto-re-measures on layout changes (ResizeObserver + MutationObserver). Includes SSR pre-hydration CSS to prevent content flash. Useful detail: `data-shimmer-ignore` and `data-shimmer-width` attributes give fine-grained control without forking the component.
