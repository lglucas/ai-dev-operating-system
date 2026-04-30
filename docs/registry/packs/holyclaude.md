# HolyClaude

- **URL:** https://github.com/coderluii/holyclaude
- **License:** MIT
- **Status:** active (2.1k stars, 14 releases, latest April 2026)
- **Last reviewed:** 2026-04-30
- **Tags:** #ecosystem #tooling #stack-pack

## What it is

A **containerized development environment** that bundles Claude Code CLI, a web UI (CloudCLI), a headless browser with Chromium, **seven AI coding CLIs** (Claude Code, Gemini, OpenAI Codex, Cursor, TaskMaster, Junie, OpenCode), and 50+ developer tools into a single Docker image. One `docker compose up` gets you a fully configured coding workstation accessible via web browser. Authenticates with existing Claude subscriptions (Max/Pro) or Anthropic API keys.

## When to install

- Want Claude Code in a browser without setting up the IDE locally.
- Need multiple AI CLI providers in one environment.
- Containerized / reproducible workstations across machines.
- Cloud / VPS / remote-development workflows.

## When NOT to install

- Already happy with local Claude Code + IDE setup.
- Compliance-sensitive contexts requiring known/audited tool surface (50+ tools is a lot to vet).
- Pure web-app projects without the need for a containerized workstation.

## How to install

```bash
git clone https://github.com/coderluii/holyclaude.git
cd holyclaude
docker compose up -d
# Access at http://localhost:3001
```

Bind-mounted volumes preserve credentials and code across rebuilds. s6-overlay handles process management (auto-restart, graceful shutdown).

## Fit signals

- Team works across multiple machines or wants browser-accessible dev env.
- Project requires Playwright + Xvfb for browser automation.
- Multi-provider AI CLI setup needed.

## Conflicts and overlaps

- Different shape from skill-bundles like `gstack`, `slavingia-skills`, `antigravity-awesome-skills` — HolyClaude is **infrastructure** (Docker image), not skills.
- Pairs naturally with any of those bundles installed inside the container.

## Notes

Single maintainer (CoderLuii) with daily commits. Verify the 7 bundled CLIs match the actual versions you need (each has its own auth + cost surface). Bind-mounted credentials need careful `.gitignore` discipline — don't commit `.holyclaude/` volumes.
