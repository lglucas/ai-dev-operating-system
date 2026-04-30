# Antigravity Awesome Skills

- **URL:** https://github.com/sickn33/antigravity-awesome-skills
- **License:** MIT (code) + CC BY 4.0 (docs)
- **Status:** active (35.8k stars, v10.8.0 released 2026-04-29, 150+ contributors)
- **Last reviewed:** 2026-04-30
- **Tags:** #ecosystem #agents #tooling

## What it is

A massive installable library of 1,441+ reusable skill playbooks for AI coding assistants — Claude Code, Cursor, Codex CLI, Gemini CLI, and the Antigravity platform. Provides an npm installer, role-based bundles, hosted web UI, browsable catalog, and selective installation by category, risk level, or tags.

## When to install

- Project uses Claude Code, Cursor, or another AI coding agent and wants a deep library of pre-built playbooks.
- Teams that want to selectively adopt skills (planning, implementation, testing, security review, infra) without building from scratch.
- Multi-IDE / multi-agent shops needing a portable skills layer.

## When NOT to install

- First-time Claude Code users — 1,441 playbooks is overwhelming; start with this OS's built-in skills first.
- Compliance-sensitive projects without time to audit each playbook individually.
- Single-purpose projects where 5–10 hand-curated skills suffice.

## How to install

```bash
npx antigravity-awesome-skills
```

Tool-specific installers available for Claude Code, Cursor, Codex CLI, Gemini CLI, Antigravity.

## Fit signals

- Repo uses Claude Code or another supported agent.
- Team wants a single source of truth for skill installation across IDEs.
- Project velocity is bottlenecked by reinventing common AI-assisted workflows.

## Conflicts and overlaps

- Heavy overlap with `everything-claude-code` (broader but Claude-Code-only) and `ruflo` (orchestration-heavy). Antigravity is the most multi-IDE-portable.
- Pairs with `gstack` (gstack is a curated 23-skill team; Antigravity is a 1,441-skill marketplace).

## Notes

Multi-framework — even works with the Antigravity platform itself. Audit individual skills before adopting because the surface area is enormous. Use risk-level filters to start safe.
