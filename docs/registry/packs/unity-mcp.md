# Unity-MCP

- **URL:** https://github.com/ivanmurzak/unity-mcp
- **License:** Apache-2.0
- **Status:** active (2.5k stars, 138 releases, v0.67.3 April 2026)
- **Last reviewed:** 2026-04-30
- **Tags:** #stack-pack #agents #tooling

## What it is

Bridges AI language models to **Unity Engine** via the Model Context Protocol (MCP). Enables AI agents (Claude, Cursor, GitHub Copilot, Gemini, Windsurf) to automate game-dev tasks — creating GameObjects, handling assets, scripting, debugging — both in the editor and at runtime within compiled games. Exposes 100+ built-in MCP Tools and supports custom tool creation via single-line C# attributes.

## When to install

- Project is a Unity game or interactive 3D experience.
- Team wants AI-assisted scene management, asset handling, scripting, or testing.
- Building runtime AI features (NPC behavior, in-game debugging assistant).
- Multi-agent setups already using MCP.

## When NOT to install

- Non-Unity projects.
- Pure web / SaaS / non-game projects.
- Teams unfamiliar with MCP — read the MCP spec first.

## How to install

```bash
npm install -g unity-mcp-cli
unity-mcp-cli install-plugin ./MyUnityProject
```

Local MCP Server (binary or Docker) mediates communication between AI client and Unity instance via HTTP or stdio transport.

## Fit signals

- `Assets/`, `ProjectSettings/`, `Packages/` folders or Unity `.csproj` files present.
- Team uses Claude / Cursor / Copilot / Gemini and wants Unity automation.
- Project includes runtime AI features (NPCs, game-state debugging).

## Conflicts and overlaps

- Pure stack-pack for Unity; no overlap with other registry packs.
- Pairs naturally with multi-agent orchestration (`ruflo`, `everything-claude-code`) when the agent layer is already AI-driven.

## Notes

Apache-2.0 license is permissive for commercial use. Custom-tool creation via C# attributes is the killer feature — extends the MCP surface without leaving the engine. Verify Docker transport options if deploying to CI / cloud-build pipelines.
