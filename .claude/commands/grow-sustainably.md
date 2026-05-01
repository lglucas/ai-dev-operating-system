# /grow-sustainably

Plan post-first-100-users growth without burning out the founder, the budget, or the user base.

## Expected input

```txt
/grow-sustainably
```

Optional arguments:

```txt
/grow-sustainably active_users="<n>" w4_retention="<%>" top_source="<source>"
```

If arguments are omitted, the skill reads `docs/business/BUSINESS-PLAN.md`, the most recent `growth-plan-*.md` (if any), and asks for the missing pre-conditions.

## Actions

1. Invoke the `grow-sustainably` skill (`.claude/skills/grow-sustainably/SKILL.md`).
2. Verify the four pre-conditions (100+ active users, retention data, one acquisition pattern that worked, `usage-monitor` running).
3. Run the four pillars in order: Retention → Compress what worked → ONE new channel → Founder bandwidth.
4. Generate `docs/business/growth-plan-<YYYY-MM>.md`.
5. Hand off any required follow-up: `/processize` (codify the source that worked), `/multi-ai-review` (any paid channel), `business-plan-impact-review` (pricing/packaging change).

## When to use

- The product has 100+ active users and the 1-a-1 cadence is hitting personal limits.
- The user says "como cresço sem queimar dinheiro?" / "ninguém mais responde minhas DMs" / "vou rodar ads?".
- Monthly growth review during the 100 → 1000 phase.

## When NOT to use

- Under 100 active users — use [`first-100-users`](../skills/first-100-users/SKILL.md) instead.
- Looking for a paid-ads playbook — this skill is intentionally conservative about ads. They are a Tier 4 channel here.
- Looking for "growth hacks" — the skill rejects vanity metrics and channel diffusion by design.

## Cross-references

- Skill: `.claude/skills/grow-sustainably/SKILL.md`
- Principle: [`ETHOS.md`](../../ETHOS.md) item 14.
- Predecessor: [`first-100-users`](../skills/first-100-users/SKILL.md).
- Often paired with: `/processize`, `/multi-ai-review`, `usage-monitor`, `business-plan-impact-review`.
