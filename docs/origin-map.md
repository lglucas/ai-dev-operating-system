# Origin Map

This document explains where the AI Dev Operating System structure comes from and how each source influences the public framework.

---

## Core idea

The repository was created from a practical observation:

> AI-assisted SaaS development works much better when the project starts with rules, agents, skills, documentation layers, research workflows, changelog discipline, sprint planning, and session logs before coding begins.

The public repo turns that workflow into a reusable starting point.

---

## Practical origin

The workflow was first validated in internal/private SaaS development work, including a project operating system with:

- `CLAUDE.md` as project constitution;
- `.claude/rules/` as modular operating rules;
- `.claude/agents/` as specialized AI roles;
- `.claude/skills/` as reusable workflows;
- `.claude/commands/` as command entry points;
- `CHANGELOG.md` for versioned history;
- `docs/SPRINTS.md` for execution planning;
- `session-log/` for decision memory.

Reference: https://github.com/lglucas/boringco *(private/internal project reference; may not be publicly accessible)*.

Project-specific business data was not imported.

---

## Public source categories

### Official Claude / skills foundations

- Anthropic Skills: https://github.com/anthropics/skills

Used as official conceptual reference for reusable Agent Skills.

---

### Agentic workflow expansion

- everything-claude-code: https://github.com/affaan-m/everything-claude-code

Used as inspiration for advanced Claude Code workflows, external skills, hooks, agents, memory, MCP patterns, and security scanning.

---

### UI/UX and design workflows

- UI UX Pro Max Skill: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- VoltAgent awesome-design-md: https://github.com/VoltAgent/awesome-design-md
- getdesign.md: https://getdesign.md

Used as inspiration for Prototype Lab, design-system-based prompting, and three-direction UI exploration.

---

### Security and review workflows

- Trail of Bits Skills: https://github.com/trailofbits/skills
- Gitleaks: https://github.com/gitleaks/gitleaks
- CIS Hardening Guide: https://github.com/Jacob-Hegy/CIS-Hardening-Guide
- YARA Style Guide: https://github.com/Neo23x0/YARA-Style-Guide

Used as inspiration for security review habits, secret scanning, hardening awareness, and advanced security references.

---

### Stack-specific packs

- Solana Claude: https://github.com/solanabr/solana-claude

Used as an example of how this operating system can be extended into specialized stack packs.

---

### Workflow conventions

- Keep a Changelog: https://keepachangelog.com/
- Conventional Commits: https://www.conventionalcommits.org/en/v1.0.0/
- Semantic Versioning: https://semver.org/

Used for changelog, commit, and release discipline.
