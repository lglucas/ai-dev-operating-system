# CLAUDE.md — Project Constitution

> Main instructions for AI coding agents in this repository.
> Personal overrides should go in `CLAUDE.local.md` and remain gitignored.

**Version:** 0.0.1  
**Current sprint:** Sprint 0  
**Last updated:** YYYY-MM-DD

## What this project is

Describe the product in 3-5 lines.

## Non-negotiable rules

1. Read before editing: before modifying a file, understand its role, dependencies, and impact.
2. Separation of concerns: keep code files small and focused.
3. No hardcoded secrets or environment-specific values.
4. Keep `.env.example` updated with every new environment variable.
5. Use Conventional Commits.
6. Document important decisions in session logs or ADRs.
7. Features that touch personal data must pass a privacy/security review.
8. Changes must pass the relevant quality gate before merge.

## Repository structure

```txt
project/
├── CLAUDE.md
├── CLAUDE.local.md
├── .claude/
│   ├── settings.json
│   ├── commands/
│   ├── rules/
│   ├── skills/
│   └── agents/
├── docs/
├── session-log/
├── CODEMAP.md
├── CHANGELOG.md
└── src/
```

## Finding code

Read `CODEMAP.md` **before** grepping or opening files — it lists every code file with one line about its core, so you locate the right file with one read instead of several.

It is generated, not written by hand:

```bash
node scripts/codemap.js           # regenerate after adding, removing or renaming a code file
node scripts/codemap.js --check   # CI runs this and fails if the map is stale
```

If a file's line in the map is unhelpful, the defect is in that file's `Purpose:` header. Fix the header and regenerate — never edit `CODEMAP.md` by hand.

## Agents

| Agent | Use when |
|---|---|
| coordinator-agent | Final consistency review |
| dev-product-agent | Implementation and technical product decisions |
| research-agent | External research or benchmarking |
| devils-advocate-agent | Stress-test assumptions before release |
| copywriter-agent | Copy, messaging, docs, landing pages |
| security-agent | Security, privacy, secrets, access control |

## Commands

| Command | Purpose |
|---|---|
| `/sprint-start` | Start a new sprint |
| `/sprint-close` | Close sprint, update changelog, prepare tag |
| `/feature-new` | Scaffold a new feature |
| `/privacy-check` | Run personal-data and compliance review |
| `/release-check` | Run pre-release quality gate |
| `/session-log` | Create decision memory |

## Current sprint

See `docs/sprints/`.
