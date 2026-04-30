# Release Notes — v0.4.2

**Date:** 2026-04-30
**Theme:** Registry batch 3 — 10 packs + 1 external resource (incl. slavingia-skills, AutoResearchClaw, Kronos)

---

## Summary

Patch release expanding the External Repo Registry with 10 GitHub packs and 1 external SaaS (sci-bot.site, the academic-research entry the user asked us to capture even without a public API). Three of the additions are flagged ⭐.

Registry total: 47 → **57 packs** + **6 external resources**.

---

## What's new

### ⭐ Highlighted additions

- **[`slavingia-skills`](docs/registry/packs/slavingia-skills.md)** — Sahil Lavingia's (Gumroad founder) 10-skill plugin codifying *The Minimalist Entrepreneur*. 8.4k stars. Strong author signal alongside `gstack`. Complementary to our genesis WIZARD.
- **[`auto-research-claw`](docs/registry/packs/auto-research-claw.md)** — autonomous academic-paper pipeline (8 phases / 23 stages, OpenAlex + Semantic Scholar + arXiv citations, sandboxed experiments, NeurIPS/ICML/ICLR LaTeX export). 11.8k stars. The most paper-output-focused entry in the registry.
- **[`kronos`](docs/registry/packs/kronos.md)** — first open-source foundation model for financial candlesticks. AAAI 2026 accepted. 22.3k stars. Pairs with `tradingagents` and `vibe-trading`.

### Other additions

- **[`holyclaude`](docs/registry/packs/holyclaude.md)** — containerized Claude Code env bundling 7 AI CLIs + headless browser + 50+ tools (Docker).
- **[`optio`](docs/registry/packs/optio.md)** — Jonathan Wiggins' self-hosted k8s-based ticket-to-PR workflow orchestration.
- **[`vibeyard`](docs/registry/packs/vibeyard.md)** — Electron IDE for managing many parallel AI agent sessions with cost telemetry.
- **[`diagram-design`](docs/registry/packs/diagram-design.md)** — editorial-quality diagrams (Cathryn Lavery). Direct alternative to `fireworks-tech-graph`.
- **[`app-store-screenshots`](docs/registry/packs/app-store-screenshots.md)** — App Store + Play Store screenshot generator.
- **[`phantom-ui`](docs/registry/packs/phantom-ui.md)** — auto-generated skeleton loaders via Web Components.
- **[`miroshark`](docs/registry/packs/miroshark.md)** — swarm intelligence simulation engine (synthetic crowd reactions; AGPL-3.0).

### External resource

- **[`sci-bot`](docs/registry/external-resources/sci-bot.md)** — AI research assistant grounded in Sci-Hub papers. No API; contact via /contact form. Jurisdictional / legal caveats flagged.

---

## Comparison highlight: `slavingia/skills` + `gstack` vs this OS

User explicitly asked for this side-by-side. Summary (full version was delivered in chat):

- **Both** are opinionated curated skill bundles for Claude Code.
- **`slavingia/skills`** is a **linear domain-specific business playbook** (10 skills, book-derived).
- **`gstack`** is a **23-role virtual engineering team** with multi-AI cross-review, real-browser testing, parallel sprints, GBrain knowledge DB, trust tiers, prompt-injection defense.
- **This OS** is a **meta-framework**: genesis WIZARD, multi-agent research waves, documentation layers, sprint discipline, registry of 57 external packs, prototype-lab, vibe-coder non-dev pack, legal/privacy baseline.

**Quick wins identified for follow-up sprints (still v0.4.x territory):**
1. Add a `/processize` skill (Sahil concept — automate manual after validating manually).
2. Add a `/grow-sustainably` skill for post-first-100-users phase.
3. Create root `ETHOS.md` distilling golden rules.
4. Add `/multi-ai-review` skill (gstack `/codex` concept).
5. Add `agents-marketplace` tag to better surface skill-bundle packs.

**Architectural changes deferred to v0.5:**
- Migration to official Claude Code Plugins marketplace install path.
- Trust tiers + allowlists model for skills.
- Real-browser testing automation (Playwright + anti-bot stealth).
- Persistent knowledge DB consultable across sessions (GBrain-like).
- Parallel sprint orchestration (Conductor-like).

---

## Updated tag indexes

`ai`, `design`, `ecosystem`, `fintech`, `foundations`, `learning`, `ml`, `productivity`, `research`. INDEX.md timestamp now `v0.4.2`.

---

## How to use

```bash
git pull origin main
git checkout v0.4.2
```

Inside any project:

```txt
/registry-pick
```

The skill auto-discovers the new packs.

---

## Credits

Pack research conducted via direct WebFetch of upstream READMEs and live repo metadata. No invented data.
