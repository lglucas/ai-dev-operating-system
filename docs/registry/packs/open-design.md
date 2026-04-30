# Open Design (Nexu)

- **URL:** https://github.com/nexu-io/open-design
- **License:** Apache-2.0
- **Status:** active (7.9k stars, 887 forks, daily component updates)
- **Last reviewed:** 2026-04-30
- **Tags:** #design #ai #ecosystem

## What it is

A local-first, open-source alternative to Claude Design that enables **AI-assisted design generation across 10 coding-agent CLIs** (Claude Code, Codex, Cursor, Gemini CLI, etc.). Generates web prototypes, mobile apps, decks, and design documents using 31 built-in skills and 72 brand design systems. Includes a sandboxed iframe preview, HTML/PDF/PPTX export, SQLite-backed project persistence, and a "five-dimensional self-critique" pre-emission validation gate.

## When to install

- WIZARD Stage 13 (Prototype Lab) — strong fit for AI-assisted three-direction UI exploration.
- Projects that want design generation without sending data to Claude Design or other hosted services.
- Teams with multiple coding-agent CLIs that want to swap AI models per design task.
- Imports Claude Design exports — useful migration path for projects that started there.

## When NOT to install

- Projects with locked-in design systems already enforced manually.
- Backend-only or non-visual projects.
- Teams unwilling to run a local daemon + Node server.

## How to install

```bash
git clone https://github.com/nexu-io/open-design.git
cd open-design
pnpm install
pnpm tools-dev run web
```

Deployable to Vercel or runs locally via daemon + Node server.

## Fit signals

- Project includes UI surfaces (web, mobile, dashboards, decks).
- Team wants local-first / privacy-friendly design generation.
- WIZARD Prototype Lab phase or design-heavy iteration.

## Conflicts and overlaps

- Strong overlap with `ui-ux-pro-max` (UI exploration skill) and `awesome-design-md` (design-system-as-prompt). Open Design bundles both concepts into one local-first tool.
- Pairs with `fireworks-tech-graph` (technical diagrams) and `hyperframes` (video).

## Notes

Apache-2.0 makes this safe for commercial use. SQLite-backed project persistence with real filesystem access for agents — verify what folders the daemon can read/write before granting access on sensitive repos. The "five-dimensional self-critique" gate is notable for reducing low-quality output before it reaches the user.
