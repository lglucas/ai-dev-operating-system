# 2026-05-09 — Registry additions (14 new packs + 3 refreshes)

## Why this session

User dropped a list of 17 GitHub repos discovered through social-media browsing and asked for them to be analyzed and added to `docs/registry/` with proper documentation, categorized to fit cleanly with existing entries. Default workflow chosen: **rapid analysis (1-pager per repo)** + **dedicated branch** (`chore/registry-additions-2026-05-09` from `main`, leaving Sprint 0 PR #9 untouched).

This is exactly the workflow the registry was designed for — see `feat/external-repo-registry-v0.4.0` rationale (April 2026): "Phase 2: continuous stream of newly discovered repos with minimal friction."

## What was done

### New packs (14)

All written under `docs/registry/packs/` using the standard one-pager template:

| Slug | Why it's interesting |
|------|----------------------|
| `mirothinker` | Open-source deep-research agent (Qwen + MCP), 8.2k stars |
| `understand-anything` | Multi-platform plugin turning codebases into queryable knowledge graphs, 13.7k stars |
| `agent-skills-eval` | Empirical A/B test runner for AI agent skills (judge-model grading) |
| `isomiddleearth` | Reference Next.js 16 / React 19 / Zustand isometric editor |
| `crawlee` | Production web scraping for LLM/RAG ingestion (Apify), 23.1k stars, Apache-2.0 |
| `openhuman` | Personal AI agent with 118+ integrations, Rust + TS, beta |
| `locally-uncensored` | Local-first chat / image / video / coding agent, Tauri v2 + React 19 |
| `agent-exchange` | Marketplace infrastructure for AI agents (10 Go services, ad-tech-style auctions) |
| `claude-code-harness` | Plan→Work→Review→Release harness for Claude Code, Go-native v4 "Hokage" |
| `jeweledtech-agentic-framework` | Multi-department business orchestration (15+ agents, 87 n8n workflows) |
| `quran-database` | MySQL Quran dataset (text + multiple translations; license pending upstream verification) |
| `cryptpad` | E2E-encrypted collaborative office suite (privacy-first), AGPL-3.0 |
| `googleworkspace-cli` | **Official** Google Workspace CLI (Rust), bundles 100+ SKILL.md files |
| `ascii-draw` | Desktop ASCII diagram drawing tool (GTK4 + Python) |

### Refreshed (3 already existed in registry)

- `fincept-terminal` → Stars 18.3k → 20.5k, last reviewed bumped
- `auto-research-claw` → Stars 11.8k → 12k, last reviewed bumped
- `ruflo` → Stars 34.1k → 47.7k, version 3.6.10 → 3.6.30, last reviewed bumped

### INDEX and tag wiring

- `docs/registry/INDEX.md`: 14 new rows added in alphabetical position; 3 existing rows refreshed; "Last index update" line bumped to 2026-05-09.
- `docs/registry/tags/ai.md` — added 4 packs (mirothinker, understand-anything, crawlee, locally-uncensored).
- `docs/registry/tags/agents-marketplace.md` — added googleworkspace-cli (qualifies as bundled SKILL.md collection).
- `docs/registry/tags/data-engineering.md` — added crawlee.
- `docs/registry/tags/design.md` — added isomiddleearth, ascii-draw.
- `docs/registry/tags/ecosystem.md` — added understand-anything, claude-code-harness.
- `docs/registry/tags/learning.md` — added quran-database.
- `docs/registry/tags/productivity.md` — added 4 packs (understand-anything, openhuman, cryptpad, googleworkspace-cli).
- `docs/registry/tags/research.md` — added mirothinker, quran-database.
- `docs/registry/tags/security.md` — added cryptpad.

## Decisions worth preserving

1. **MiroThinker is NOT MiroShark.** Same family of "Miro"-prefixed projects but different orgs (`MiroMindAI` vs `aaronjmars`) and different problems (research agent vs synthetic-crowd simulation). Both kept as separate packs with cross-references in their respective Notes sections.

2. **`googleworkspace-cli` got the `agents-marketplace` tag** even though it's primarily a CLI tool. Reason: ships with **100+ bundled SKILL.md files** (40+ for Gmail/Drive/Docs/Calendar/Sheets alone), which qualifies under the agents-marketplace definition ("opinionated, curated, delivered as a discrete bundle, often with a single author/org signal"). Google as the official maintainer is a strong author signal.

3. **`isomiddleearth` license is unstated upstream** — added the pack with explicit "view-only reference until upstream clarifies" warning. Tolkien IP is also flagged in Notes.

4. **`quran-database` introduces `#dataset` tag** as metadata-only (no `tags/dataset.md` file yet). Other packs use ad-hoc tags like `#tooling`, `#infra`, `#experimental`, `#malware`, `#origin` without dedicated tag files — same pattern. If the registry accumulates more datasets, promote `#dataset` to a proper tag file.

5. **Copyleft-licensed packs flagged consistently** — `cryptpad` (AGPL-3.0), `locally-uncensored` (AGPL-3.0), `openhuman` (GPL-3.0), `fincept-terminal` (AGPL+commercial) all carry explicit license warnings in their Notes. Vibe-coders may bundle without realizing — the warnings are deliberate.

6. **Refresh-only for the 3 already-cataloged repos** — bumped "Last reviewed" + version/star numbers in pack file and INDEX. Did not rewrite content; the original analyses remain valid.

## Branch / PR plan

- Branch: `chore/registry-additions-2026-05-09` from `main`.
- Single commit covering all additions + refreshes + index/tag wiring.
- PR target: `main`. Independent of Sprint 0 PR #9 (no overlap).

## Skipped / open items

- **No new tag files created** for `#dataset`, `#tooling`, `#agents`, `#infra`, `#experimental`, `#ecosystem` (some already exist as files, some don't). Current ad-hoc pattern preserved.
- **Did not run `os-self-test`** — could be done after merge to validate cross-references are intact.
- **No update to `WIZARD.md` or `registry-pick` skill** — none needed since the new packs are discoverable through INDEX + tags via the existing surface.
