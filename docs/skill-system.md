# Skill System

Skills are repeatable workflows.

A rule tells the agent what must be true.

A skill tells the agent how to execute a workflow.

---

## Examples

| Skill | Purpose |
|---|---|
| sprint-management | Open, track, and close sprints |
| feature-scaffold | Create a new feature structure |
| privacy-audit | Review data processing and privacy implications |
| secrets-scan | Check for leaked secrets |
| release-check | Validate a release before tagging |
| decision-log | Create a session log for major decisions |
| design-prototype | Guide AI-generated UI using design systems |
| security-review | Run a structured security review |

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
