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
node scripts/codemap.js           # regenerate with any code change — the map records line counts
node scripts/codemap.js --check   # CI runs this and fails if the map is stale
```

If a file's line in the map is unhelpful, the defect is in that file's `Purpose:` header. Fix the header and regenerate — never edit `CODEMAP.md` by hand.

## Checking your work

```bash
npm install     # once — without it the lint hook stays silent and the git pre-commit is not wired
npm test        # tests
npm run lint    # Biome: lint + format check (`npm run format` fixes)
```

Run them before calling a change done. A `PostToolUse` hook already runs Biome on each file you edit and reports back; CI runs both.

`package.json` and `biome.json` came with the AI Dev OS. They are this project's starting manifest, not a second one:

- Rename the package — `os-self-test` warns while it is still called `ai-dev-operating-system`.
- When the stack is chosen in Phase 4, **merge** its scripts and dependencies into this `package.json`. Do not let a scaffolder overwrite it.
- Extend `npm test` to run the project's own tests alongside `scripts/test/`.
- A stack with its own linter may replace Biome. Keep `npm run lint` pointing at whatever replaces it, so the CI and `os-self-test` stay wired — and **adapt the two hooks**, which call Biome directly: `.claude/hooks/lint-on-edit.js` and `scripts/pre-commit.js`. Without Biome on disk both skip the lint silently, even when `npm run lint` works.

## Agents

| Agent | Use when |
|---|---|
| coordinator-agent | Final consistency review |
| dev-product-agent | Implementation and technical product decisions |
| research-agent | External research or benchmarking |
| devils-advocate-agent | Stress-test assumptions before release |
| copywriter-agent | Copy, messaging, docs, landing pages |
| technical-security-red-team-agent | Security, privacy, secrets, access control |

## Commands and skills

| Command or skill | Purpose |
|---|---|
| `/sprint-start` | Start a new sprint |
| `/sprint-close` | Close sprint, update changelog, prepare tag |
| `feature-scaffold` skill | Scaffold a new feature |
| `privacy-audit` skill | Run personal-data and compliance review |
| `release-check` skill | Run pre-release quality gate |
| `decision-log` skill | Create decision memory |

## Current sprint

See `docs/sprints/`.
