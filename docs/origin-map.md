# Origin Map

This document explains where the main ideas in AI Dev Operating System come from and how they map into this repo.

---

## Summary

| Source | Role in this repo |
|---|---|
| Boring Co internal project system | Real-world validated implementation |
| Anthropic Skills | Official conceptual foundation for skills |
| everything-claude-code | Advanced Claude Code ecosystem reference |
| Trail of Bits Skills | Security workflow reference |
| UI UX Pro Max Skill | UI/UX workflow reference |
| awesome-design-md / getdesign.md | Design-system workflow reference |
| solana-claude | Optional stack-pack reference |
| CIS Hardening Guide | Advanced infrastructure hardening reference |
| YARA Style Guide | Advanced security/rule readability reference |
| Keep a Changelog | Changelog discipline |
| Conventional Commits | Commit discipline |
| Semantic Versioning | Versioning discipline |

---

## Boring Co → AI Dev Operating System

The Boring Co repo validated the structure in a real project:

```txt
CLAUDE.md
.claude/rules/
.claude/agents/
.claude/skills/
.claude/commands/
docs/SPRINTS.md
docs/sprints/
CHANGELOG.md
session-log/
```

This repo generalizes that into a reusable operating system.

### What was generalized

- Project-specific instructions became a generic project constitution template.
- Boring Co rules became reusable core rules.
- Boring Co agents became generic role-based agents.
- Boring Co skills became reusable workflow skills.
- Boring Co sprint docs became a public sprint system.
- Boring Co session logs became a decision-memory pattern.

### What was excluded

- Product strategy
- Market research
- Pricing
- Competitor analysis
- Customer details
- Payment provider specifics
- WhatsApp provider specifics
- Legal strategy specific to the business
- Any private operational material

---

## Anthropic Skills → skill architecture

Anthropic’s public skills repo is the official conceptual anchor for the idea of using skills as reusable capabilities.

Local mapping:

```txt
docs/skill-system.md
skills/
templates/project/CLAUDE.md
```

---

## everything-claude-code → advanced agentic ecosystem

This upstream project inspired the idea that a serious AI development environment can include:

- skills
- agents
- commands
- hooks
- MCP configs
- memory optimization
- research workflows
- security scanning
- external plugin installation

Local mapping:

```txt
skills/external/affaan-everything-claude-code.md
docs/skill-system.md
docs/agent-system.md
```

---

## UI/UX sources → design workflow

The design workflow is inspired by:

- `nextlevelbuilder/ui-ux-pro-max-skill`
- `VoltAgent/awesome-design-md`
- `getdesign.md`

The goal is to make UI/UX a first-class project workflow instead of a final polish step.

Local mapping:

```txt
docs/design-system-workflow.md
future: skills/design-prototype/
future: rules/design/
```

---

## Security sources → security baseline

Security references include:

- Trail of Bits Skills
- Gitleaks
- CIS Hardening Guide
- YARA Style Guide

The goal is not to turn every SaaS project into a malware research lab.

The goal is to give every AI-assisted SaaS project a sane baseline:

- secrets scanning
- dependency review
- secure development prompts
- privacy review
- release gates
- infrastructure hardening references for later stages

Local mapping:

```txt
docs/security-baseline.md
rules/security/
skills/secrets-scan/
future: skills/security-review/
```

---

## solana-claude → stack pack model

`solanabr/solana-claude` is treated as an example of a specialized stack pack.

It is not core to every SaaS project, but it shows how the OS can be extended for a specific ecosystem.

Local mapping:

```txt
stack-packs/solana/README.md
future: rules/stack-specific/solana.md
future: skills/solana-*
```
