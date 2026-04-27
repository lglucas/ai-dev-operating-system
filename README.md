# AI Dev Operating System

> A practical starter operating system for serious vibe coding and AI-assisted SaaS development.

Stop starting every AI-coded SaaS from zero.

Clone this repo, adapt the project constitution, and start with rules, agents, skills, commands, sprint management, changelog discipline, session logs, security gates, and design workflows already in place.

---

## What this is

**AI Dev Operating System** is an opinionated project starter for building SaaS products with AI coding agents, especially Claude Code and agentic IDE workflows.

It gives you a reusable structure for:

- Project constitution via `CLAUDE.md`
- Modular rules for code, architecture, git, privacy, testing, and security
- Specialized agents for product, engineering, research, copy, coordination, and adversarial review
- Skills for repeatable workflows such as sprint management, feature scaffolding, privacy audit, release checks, and secrets scanning
- Slash-command style workflows for opening/closing sprints, creating features, running audits, and preparing releases
- Changelog discipline
- Sprint documentation
- Session logs to preserve the “why” behind decisions
- Security gates and attribution discipline
- UI/design workflow references for faster product prototyping

This repository was born from a real internal project system and generalized into a reusable public framework.

---

## Who this is for

This repo is for:

- Solo founders building SaaS with AI coding agents
- Small technical teams that want structure without bureaucracy
- Builders using Claude Code, Cursor, Windsurf, Codex, or similar IDE workflows
- Product-minded developers who want sprint, changelog, session-log, rules, skills, and agents from day zero
- People who like vibe coding, but do not want vibe chaos

---

## Core idea

Vibe coding without structure becomes technical debt.

Vibe coding with rules, agents, skills, changelog, sprint docs, and session logs becomes a lean product factory.

This repo is designed to be your **day-zero project operating system**.

---

## Repository structure

```txt
ai-dev-operating-system/
├── README.md
├── UPSTREAM-SOURCES.md
├── ATTRIBUTIONS.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── SECURITY.md
├── .gitattributes
│
├── docs/
│   ├── what-this-repo-is.md
│   ├── origin-map.md
│   ├── philosophy.md
│   ├── documentation-layers.md
│   ├── sprint-system.md
│   ├── agent-system.md
│   ├── skill-system.md
│   ├── design-system-workflow.md
│   ├── security-baseline.md
│   └── stack-packs.md
│
├── templates/
│   ├── project/
│   │   └── CLAUDE.md
│   ├── session-log/
│   └── sprints/
│
├── rules/
│   ├── core/
│   ├── architecture/
│   └── security/
│
├── agents/
├── skills/
├── commands/
├── stack-packs/
│   ├── README.md
│   ├── generic-saas/
│   ├── nextjs-supabase-saas/
│   └── solana/
└── scripts/
```

---

## Documentation layers

This project recommends a clear separation of responsibility:

| Layer | Purpose |
|---|---|
| `CLAUDE.md` | Project constitution and operating instructions |
| `.claude/rules/` | Modular rules the AI must follow |
| `.claude/agents/` | Specialized roles for different kinds of work |
| `.claude/skills/` | Repeatable workflows and procedures |
| `.claude/commands/` | Human-friendly workflow triggers |
| `docs/SPRINTS.md` | Master sprint roadmap and execution state |
| `docs/sprints/` | Per-sprint planning and retrospectives |
| `CHANGELOG.md` | What changed in each version |
| `session-log/` | Why decisions were made in a session |
| `UPSTREAM-SOURCES.md` | Sources, inspirations, specs, and attribution map |

---

## Recommended day-zero setup

1. Clone or copy this repo into your new SaaS project.
2. Adapt `templates/project/CLAUDE.md` into the root `CLAUDE.md`.
3. Copy the relevant rules, agents, skills, and commands into `.claude/`.
4. Create the first sprint document.
5. Create your first session log.
6. Commit the baseline.
7. Start building with an AI coding agent that has context, rules, and workflow discipline.

---

## Credits, inspirations and upstream sources

This project is built as an opinionated operating system for AI-assisted SaaS development.

It was shaped by real-world usage in private projects and by studying the following open-source repositories, specs, and ecosystems.

### Official Claude / Agent Skills foundations

- [anthropics/skills](https://github.com/anthropics/skills) — official public repository for Agent Skills examples and patterns.
- [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) — large-scale Claude Code / agent harness ecosystem with skills, agents, hooks, MCP configs, memory optimization, research workflows, and security scanning.

### UI/UX and design-system workflows

- [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) — UI/UX design intelligence skill for professional interface generation.
- [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) — collection of DESIGN.md files inspired by popular brand design systems.
- [getdesign.md](https://getdesign.md) — CLI-based access point for DESIGN.md-style design system assets.

### Security, audit and hardening references

- [trailofbits/skills](https://github.com/trailofbits/skills) — Trail of Bits Claude Code skills marketplace for security analysis, testing, and secure development workflows.
- [Jacob-Hegy/CIS-Hardening-Guide](https://github.com/Jacob-Hegy/CIS-Hardening-Guide) — CIS hardening guide reference, useful for infrastructure and workstation hardening.
- [Neo23x0/YARA-Style-Guide](https://github.com/Neo23x0/YARA-Style-Guide) — style guide for readable and maintainable YARA rules.
- [gitleaks/gitleaks](https://github.com/gitleaks/gitleaks) — reference for secret scanning workflows.

### Stack-specific packs

- [solanabr/solana-claude](https://github.com/solanabr/solana-claude) — Claude Code configuration pack for expert Solana development, including agents, commands, hooks, rules, skills, and settings.

### Workflow conventions

- [Keep a Changelog](https://keepachangelog.com/) — human-readable changelog format.
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) — structured commit convention.
- [Semantic Versioning](https://semver.org/) — versioning semantics.

For a more detailed attribution map, see [`UPSTREAM-SOURCES.md`](./UPSTREAM-SOURCES.md).

---

## Attribution policy

This project does not claim ownership over upstream ideas, public repos, specs, or tools.

When a concept is inspired by or derived from external work, it should be documented in `UPSTREAM-SOURCES.md` or `ATTRIBUTIONS.md`.

The goal is to build a clean, reusable operating system while respecting original authors and avoiding silent copying.

---

## License

MIT.
