# Google Workspace CLI (`gws`)

- **URL:** https://github.com/googleworkspace/cli
- **License:** Apache-2.0
- **Status:** active (26k stars)
- **Last reviewed:** 2026-05-09
- **Tags:** #agents #productivity #tooling #agents-marketplace

## What it is

The **official Google Workspace CLI** — a unified command-line tool covering Drive, Gmail, Calendar, Sheets, Docs, Chat, and Admin APIs. Built explicitly for "humans and AI agents" with structured JSON output, auto-pagination, and **100+ bundled `SKILL.md` files** (40+ for Gmail/Drive/Docs/Calendar/Sheets workflows alone).

Written in Rust (98%) for fast startup and clean install. Distributed via npm and Nix flakes.

## When to install

- Project automates Google Workspace and you don't want to wire 6 separate Google APIs by hand.
- AI agent workflows that read/write Workspace content (email triage, doc generation, calendar ops).
- Want a curated `SKILL.md` library you can drop into Claude Code / Cursor / Copilot CLI.
- Need stable, structured JSON output instead of brittle screen-scraping.

## When NOT to install

- Project has no Google Workspace surface.
- Need server-side service-account flows only (CLI is human-auth-first; check OAuth model fits).
- Strict enterprise IT policy prohibits third-party CLIs over Workspace data.

## How to install

```bash
npm install -g @googleworkspace/cli
gws auth login
```

Or via Nix flake — see upstream README.

## Fit signals

- Project includes `everything-claude-code:google-workspace-ops` skill or similar Workspace automation.
- Replacing brittle Apps Script / Zapier / point-tool integrations with a stable CLI.
- Building an inbox-triage, doc-pipeline, or calendar-bot agent.

## Conflicts and overlaps

- Composes with `everything-claude-code:google-workspace-ops`, `chief-of-staff` agent, `email-ops` skill — `gws` is the underlying engine, those skills are the orchestration layer.
- Overlaps with `agentic-inbox` (Cloudflare-based email triage) — different host (Cloudflare Workers vs local CLI).
- Strong `agents-marketplace` candidate because of the bundled 100+ SKILL.md files — see [`tags/agents-marketplace.md`](../tags/agents-marketplace.md).

## Notes

- ✅ **Official Google Workspace tool** — strong vendor signal, long-term maintenance expected.
- Apache-2.0 — safe for commercial use with attribution.
- 26k stars — top-tier ecosystem signal.
- The "built for AI agents" framing is real: structured output, deterministic flags, no interactive prompts.
- Use as the primary integration layer instead of writing custom Google API client code.
