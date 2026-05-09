# Locally Uncensored

- **URL:** https://github.com/purpledoubled/locally-uncensored
- **License:** AGPL-3.0
- **Status:** active (376 stars)
- **Last reviewed:** 2026-05-09
- **Tags:** #ai #tooling

## What it is

Standalone desktop app (Tauri v2 + React 19 + Tailwind 4 + Rust) for running AI workloads — chat, image generation, video generation, coding agent — **entirely on the user's machine** with no cloud dependency or telemetry. Supports 20+ AI providers including Ollama, LM Studio, vLLM, KoboldCpp, llama.cpp, LocalAI, Jan, plus optional cloud (OpenAI, Anthropic) when wanted.

Use case is "local-first AI" — privacy, offline use, no API bills, no content moderation gates.

## When to install

- Privacy-sensitive workflows (legal review, medical drafts, sensitive research) where cloud LLMs are off-limits.
- Offline development environments (air-gapped, on-plane, restricted networks).
- Want one desktop app that unifies chat / image / video / code agent across multiple local backends.
- Studying a clean Tauri v2 + React 19 reference implementation.

## When NOT to install

- No local GPU or modest hardware — local image/video gen needs serious VRAM.
- Need multi-user / shared deployment — this is desktop-single-user.
- AGPL-3.0 incompatible with your distribution plans.
- "Uncensored" is a compliance concern in your jurisdiction or vertical (regulated industries, public sector).

## How to install

Download the platform installer from upstream releases (Windows `.exe`, macOS, Linux) or build from source:

```bash
git clone https://github.com/purpledoubled/locally-uncensored
cd locally-uncensored
pnpm install && pnpm tauri build
```

## Fit signals

- Project requires offline / air-gapped LLM use.
- Team already runs Ollama, LM Studio, or vLLM locally.
- Stack uses Rust + Tauri or you're considering them — strong reference.

## Conflicts and overlaps

- Overlap with `openhuman` (also local-first personal agent) — OpenHuman is integration-heavy; Locally Uncensored is generation-heavy.
- Composes with any of the local LLM serving packs (it's a frontend, they're backends).

## Notes

- ⚠️ **AGPL-3.0** — same caveats as other AGPL packs. Personal/internal use is safe; redistribution as modified SaaS triggers the network-use clause.
- ⚠️ "Uncensored" framing — review what you're generating. The app removes provider-side moderation; you remain legally responsible for outputs in your jurisdiction.
- Tauri v2 + React 19 + Tailwind 4 is a clean reference stack.
