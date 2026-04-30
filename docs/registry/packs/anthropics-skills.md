# Anthropic Skills

- **URL:** https://github.com/anthropics/skills
- **License:** MIT (confirm at upstream before vendoring)
- **Status:** active
- **Last reviewed:** 2026-04-30
- **Tags:** #foundations

## What it is

Official Anthropic repository of Agent Skills examples and patterns. The canonical reference for how Claude Code skills are structured, what fits a `SKILL.md`, and how skills compose.

## When to install

- Any project using Claude Code as the primary coding agent.
- Projects that plan to author their own skills.
- Teams onboarding new developers to the Claude Code ecosystem.

## When NOT to install

- Projects that do not use Claude Code or Agent Skills at all.

## How to install

Reference upstream — do not vendor wholesale.

```bash
# Browse, do not clone into the project unless you actually need a specific skill copied:
open https://github.com/anthropics/skills
```

If you want a specific skill, copy it under `.claude/skills/<skill-name>/` with attribution in the SKILL frontmatter.

## Fit signals

- Project includes `.claude/skills/`.
- Team is writing or maintaining custom skills.
- AI Dev OS WIZARD is in use.

## Conflicts and overlaps

- Conceptual overlap with `everything-claude-code` (broader ecosystem) — this one is the canonical, official reference; the other is an opinionated expansion.

## Local mapping

This OS conceptually mirrors the structure (`.claude/skills/<name>/SKILL.md`).

## Notes

Always confirm license and contributor terms upstream before copying any skill content into a project.
