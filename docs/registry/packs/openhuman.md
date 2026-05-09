# OpenHuman

- **URL:** https://github.com/tinyhumansai/openhuman
- **License:** GPL-3.0
- **Status:** active beta (506 stars)
- **Last reviewed:** 2026-05-09
- **Tags:** #agents #productivity #tooling

## What it is

A "personal AI super intelligence" — an open-source agentic assistant that integrates into daily workflows. Ships with **118+ third-party integrations** (Gmail, Notion, GitHub, Slack, Calendar, etc.), persistent memory management ("Memory Tree"), token-compression ("TokenJuice"), multi-channel communication, and supports local AI via Ollama or cloud providers.

Built primarily in Rust + TypeScript. Runs as a desktop + CLI app.

## When to install

- Want a self-hosted alternative to closed personal assistants (Claude Desktop, ChatGPT Tasks, Pi).
- Need broad integration coverage across personal tools without writing each connector by hand.
- Privacy-sensitive personal use — Ollama backend keeps everything local.
- Building a "second brain" with persistent memory across sessions and tools.

## When NOT to install

- Production multi-user SaaS — this is a personal-use harness, not a multi-tenant platform.
- GPL-3.0 is a problem for your distribution model — review carefully if bundling.
- You only need 1-2 integrations — overkill, build them directly.
- Beta-tier reliability is unacceptable.

## How to install

```bash
git clone https://github.com/tinyhumansai/openhuman
cd openhuman
# Follow upstream — Rust toolchain + npm for the TS workspace
```

Desktop installers may also be published; check upstream releases.

## Fit signals

- Personal productivity automation is in scope.
- Team is comfortable running Rust binaries locally.
- Need multi-channel comms (email + chat + tasks) routed through one agent.
- Already using Ollama or local LLM stacks.

## Conflicts and overlaps

- Heavy overlap with `optio` (K8s ticket-to-PR workflow) — different focus (Optio = team ops, OpenHuman = personal ops).
- Overlap with `agentic-inbox` (Cloudflare-based email triage) — agentic-inbox is server-side / scoped to inbox; OpenHuman is desktop / general-purpose.
- Composes with `everything-claude-code:chief-of-staff` agent (multi-channel triage) and `everything-claude-code:email-ops` skill.

## Notes

- ⚠️ **GPL-3.0** — strong copyleft. Forking and redistributing modifications requires same license. Personal use is fine; commercial bundling needs careful review.
- Beta — APIs and integrations may shift. Track upstream releases.
- Memory Tree + TokenJuice are interesting primitives for any agent harness — even if you don't adopt OpenHuman wholesale, study these patterns.
