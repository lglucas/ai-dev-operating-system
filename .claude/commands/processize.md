# /processize

Codify a manually-validated workflow into a documented, partially-automatable process. Validate-then-automate, never the reverse.

## Expected input

```txt
/processize
```

Optional arguments:

```txt
/processize task="<short name of the workflow>" runs="<number of times done manually>"
```

If arguments are omitted, the skill asks for them via the 5-question gate.

## Actions

1. Invoke the `processize` skill (`.claude/skills/processize/SKILL.md`).
2. Run the 5-question validation gate.
3. If gate passes, generate `docs/processes/<slug>.md` from the skill's output template.
4. Hand off any required follow-up: `privacy-audit` (personal data), `/multi-ai-review` (financial blast radius), `cost-watchdog` (planned automation).
5. Stop before implementing automation — defer to a sprint task.

## When to use

- A task has been done manually 3+ times and is repeating.
- The user asks "vamos automatizar isso?" — `/processize` runs FIRST to check readiness.
- `daily-standup` flagged the same manual chore across 3+ sessions.
- Before scheduling a cron, webhook, or autonomous agent loop that codifies a workflow.

## When NOT to use

- Task has been done fewer than 3 times — keep doing it manually.
- One-off task — write a session log, not a process.
- The task is still being discovered (changes shape each run) — use brainstorming or `prototype-lab`.

## Cross-references

- Skill: `.claude/skills/processize/SKILL.md`
- Principle: [`ETHOS.md`](../../ETHOS.md) item 13.
- Often paired with: `/multi-ai-review`, `privacy-audit`, `cost-watchdog`.
