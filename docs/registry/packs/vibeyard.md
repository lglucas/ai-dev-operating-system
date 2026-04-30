# Vibeyard

- **URL:** https://github.com/elirantutia/vibeyard
- **License:** MIT
- **Status:** active (750 stars, v0.2.31 April 2026, 20 releases)
- **Last reviewed:** 2026-04-30
- **Tags:** #ecosystem #productivity #tooling

## What it is

An **Electron-based IDE** designed specifically for managing AI coding agents. Runs multiple agent sessions in parallel within a single interface — each with its own pseudo-terminal (PTY). Real-time cost and token tracking, session resumption, P2P session sharing with encrypted connections (read-only / read-write modes, PIN authentication). Supports Claude Code, OpenAI Codex CLI, and Gemini CLI as a unified workspace.

Author: Eliran Tutia (@elirantutia).

## When to install

- Solo developer or small team running many parallel AI agent sessions.
- Need cost / token visibility across sessions in real time.
- Pair-programming with someone remote via P2P session sharing.
- Want a desktop UI on top of multiple agent CLIs.

## When NOT to install

- Single-session workflows — overkill.
- Teams that don't need cost telemetry per session.
- Compliance-sensitive contexts (Electron app + bundled CLIs require audit).

## How to install

```bash
npm i -g vibeyard
vibeyard
```

## Fit signals

- Project routinely runs 3+ concurrent agent sessions.
- Team values real-time cost monitoring + context window visualization.
- Cross-machine pair programming is a workflow.

## Conflicts and overlaps

- Overlaps with `holyclaude` (containerized agent env) and `gstack` (Conductor parallel sessions). Vibeyard is desktop-IDE-shaped; HolyClaude is browser/Docker; gstack runs inside Claude Code.
- `usage-monitor` skill in this OS covers cost tracking too — Vibeyard's strength is per-session live telemetry.

## Notes

Swarm-mode grid view is a notable feature — useful when running 5–10 sessions on different tickets. Embedded browser tab with DOM inspection is convenient but adds attack surface; verify before installing on sensitive repos. Light/dark themes with live terminal re-theming.
