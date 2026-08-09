# Skill System

Skills are repeatable workflows.

A rule tells the agent what must be true.

A skill tells the agent how to execute a workflow.

---

## The 28 skills, by job

Current inventory. For the full audit of how discoverable each one is, see [`skill-audit-2026-08-08.md`](skill-audit-2026-08-08.md).

**Wizard core** — one per phase of `WIZARD.md`:

| Skill | Stage | Purpose |
|---|---|---|
| `project-genesis` | all | Drive the full 5-phase wizard |
| `research-waves` | 2.4–2.6 | Market, competitor, red team, consolidation |
| `business-plan-impact-review` | 2.8 | Check BP changes for downstream impact |
| `pitch` | 2.9 | Derive the pitch; decide if BP/Pitch go public |
| `prototype-lab` | 3.2 | Three visual directions, then design tokens |
| `product-brief` | 4.1 | Reverse-engineer the brief from the prototype |
| `sprint-roadmap` | 4.4 | 14–20 sprint roadmap |
| `registry-pick` | 3.1 + 4.3 | Recommend external packs (design pass, stack pass) |

> There is no `technical-plan` skill. Stage 4.2 is currently driven by `WIZARD.md` prose alone — see the audit's coverage-gap section.

**Build and ship:**

| Skill | Purpose |
|---|---|
| `feature-scaffold` | Create a feature-based folder structure |
| `sprint-management` | Open, track, and close sprints |
| `verify-build-works` | Smoke-test build, dev server, main flow |
| `rollback-safe` | Undo the last AI change without losing work |
| `codemap` | Regenerate `CODEMAP.md`; read it to locate code without reading code |
| `deploy-vercel-supabase` | First production deploy |
| `release-check` | Pre-release gate, delegating to the skills below |

**Safety and compliance:**

| Skill | Purpose |
|---|---|
| `secrets-discipline` | Preventive — safe credential handling |
| `secrets-scan` | Detection — find what already leaked |
| `privacy-audit` | Personal-data review against the nine questions |
| `multi-ai-review` | Second opinion on hard-to-reverse decisions |

**Money and growth:**

| Skill | Purpose |
|---|---|
| `cost-watchdog` | Preventive — flag expensive choices before they ship |
| `usage-monitor` | Reactive — track real spend after launch |
| `first-100-users` | 0 → 100 users, no ads |
| `grow-sustainably` | 100 → 1000 without burning out |

**Working with a vibe coder:**

| Skill | Purpose |
|---|---|
| `daily-standup` | 4-bullet "where we left off" briefing |
| `plain-portuguese-explainer` | Translate jargon into actionable Portuguese |
| `decision-log` | Record why a decision was made |
| `processize` | Codify a manually-validated workflow |
| `os-self-test` | Verify the OS is internally coherent |

## Paired skills

Three pairs cover the same territory from opposite ends. Each states the relationship in its own description, so invoking one surfaces the other:

| Preventive / early | Reactive / late |
|---|---|
| `secrets-discipline` | `secrets-scan` |
| `cost-watchdog` | `usage-monitor` |
| `first-100-users` | `grow-sustainably` |

## Frontmatter is mandatory

Every `SKILL.md` must open with YAML frontmatter:

```yaml
---
name: skill-name
description: What it does, when to reach for it, and the Portuguese phrases that should trigger it.
---
```

Without `description`, the harness falls back to the H1 heading — which means the skill is effectively invisible unless called by name. The `description` is the only thing Claude reads when deciding whether a skill applies, so it must contain **trigger conditions**, not just a summary of behavior.

---

## Recommended skill file structure

```txt
.claude/skills/
└── skill-name/
    ├── SKILL.md
    └── assets/
```

`SKILL.md` should explain:

1. Purpose
2. When to use
3. Inputs
4. Steps
5. Outputs
6. Validation checklist
7. Related rules
8. Related agents
9. Failure modes

---

## Local vs external skills

This repo separates:

- local skills, which are included here
- external skills, which are credited and linked
- optional plugin skills, which should be installed from upstream

Do not vendor third-party skill repos unless the license and attribution are clear.

---

## Core principle

Skills should reduce repeated prompting.

Instead of explaining the sprint close process every time, create a skill.

Instead of explaining security review every time, create a skill.

Instead of explaining how to log a decision every time, create a skill.
