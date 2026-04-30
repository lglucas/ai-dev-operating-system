# Release Notes — v0.4.1

**Date:** 2026-04-30
**Theme:** Registry batch 2 — 7 new packs (incl. gstack, TradingAgents, Nellavio)

---

## Summary

Patch release expanding the External Repo Registry with 7 carefully reviewed packs across agentic ecosystems, design tooling, fintech research, and stack packs. Three of the additions are flagged ⭐ as standout-quality entries.

Registry total: 40 → 47 packs.

---

## What's new

### ⭐ Highlighted additions

- **[`gstack`](docs/registry/packs/gstack.md)** — Garry Tan's (YC President) opinionated 23-agent virtual engineering team for Claude Code. 87.3k stars. Codifies "structured methodology over blank prompts" — direct alignment with this OS's philosophy. Tags: `ecosystem` `agents` `foundations`.
- **[`tradingagents`](docs/registry/packs/tradingagents.md)** — TauricResearch's multi-agent LLM trading framework with structured agent debates (Fundamentals / Sentiment / News / Technical / Bull / Bear / Trader / Risk Manager / Portfolio Manager). LangGraph-based, paper-backed (arXiv:2412.20138). 57.5k stars. Research/simulation only. Tags: `fintech` `agents` `ai` `research`.
- **[`nellavio`](docs/registry/packs/nellavio.md)** — Next.js dashboard starter with 90+ shadcn/ui components, full Better-Auth + RBAC + i18n, dual-mode (mock data ↔ real backend). Production-readiness signals unusually strong for a starter. Tags: `stack-pack` `design`.

### Other additions

- **[`antigravity-awesome-skills`](docs/registry/packs/antigravity-awesome-skills.md)** — 1,441+ skill playbooks across Claude Code, Cursor, Codex CLI, Gemini CLI, Antigravity. The largest multi-IDE skill marketplace in the registry. Tags: `ecosystem` `agents` `tooling`.
- **[`tegaki`](docs/registry/packs/tegaki.md)** — Animated handwriting from any font (React/Svelte/Vue/SolidJS/Astro). For hero sections and personalized branding moments. Tags: `design` `tooling`.
- **[`open-design`](docs/registry/packs/open-design.md)** — Local-first, open-source alternative to Claude Design across 10 coding-agent CLIs. 31 skills + 72 brand design systems. Tags: `design` `ai` `ecosystem`.
- **[`unity-mcp`](docs/registry/packs/unity-mcp.md)** — MCP bridge to Unity Engine. 100+ built-in tools, custom tools via C# attributes, runtime + editor support. Tags: `stack-pack` `agents` `tooling`.

### Tag indexes updated

- `tags/ai.md` — added open-design, tradingagents
- `tags/design.md` — added open-design, tegaki, nellavio
- `tags/ecosystem.md` — added ruflo (was missing), antigravity-awesome-skills, gstack, open-design
- `tags/fintech.md` — added tradingagents
- `tags/foundations.md` — added gstack
- `tags/research.md` — added tradingagents
- `tags/stack-pack.md` — added unity-mcp, nellavio, agentic-inbox

### INDEX.md

Master table updated with 7 new rows; "Last index update" annotated as `2026-04-30 (v0.4.1 — registry batch 2)`.

---

## Why this matters

Two of the highlighted additions reshape what the registry is good for:

- **`gstack`** is the closest external pack to this OS's own philosophy — both encode opinionated SaaS-shipping methodology. They can coexist (this OS handles project genesis + WIZARD; gstack handles in-sprint virtual-team execution).
- **`tradingagents`** is the most academically-grounded fintech pack in the registry. It complements `vibe-trading` (broad market coverage) and `autohedge` (experimental real-money) along the research/maturity/risk axes — the three together now form a coherent fintech tier.

`nellavio` is recommended whenever a project commits to Next.js + Tailwind + shadcn/ui and needs a dashboard scaffold — it pairs cleanly with `reui-io` (1,003+ shadcn components).

---

## Migration

No migration needed. Purely additive — no existing packs changed, no tags removed.

---

## How to use

```bash
git pull origin main
git checkout v0.4.1
```

Inside any project running this OS:

```txt
/registry-pick
```

The skill auto-discovers the new packs via `docs/registry/INDEX.md`.

---

## Credits

Pack research conducted via direct WebFetch of upstream READMEs and live repo metadata at review time. No invented data — every license, status, and feature claim traces to the source.
