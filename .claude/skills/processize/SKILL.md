---
name: processize
description: Turn a manually-validated workflow into a documented, repeatable, and partially-automatable process. Use AFTER a task has been done at least 3 times by hand and is showing signs of repetition. Inspired by Sahil Lavingia's principle "do it manually until it works, then processize." Activated when the user says "tô fazendo isso toda semana", "vamos automatizar?", "isso já cansou", or after `daily-standup` flags repeated manual work.
---

# Processize

Codify a process AFTER you have validated it manually. Never automate a workflow that is still being discovered. Automation locks in whatever you point it at — including the bugs.

---

## Mindset

> "If you automate before validating, you scale the wrong thing. If you process-ize after validating 3+ times, you've earned the right to compress."
> — paraphrased from Sahil Lavingia, *The Minimalist Entrepreneur*

Three-stage maturity:

1. **Manual** — first 1–3 times. Pure improvisation. Goal: learn what the process actually is.
2. **Documented** — 3rd to ~10th time. Same human, written checklist, no automation. Goal: prove the steps are stable.
3. **Processized** — 10th+ time. Checklist + AI assist + selective automation. Goal: compress the predictable parts, leave judgment with the human.

Skipping straight from 1 to 3 is the most expensive bug in vibe coding.

---

## When to invoke

- User says "tô fazendo isso toda semana" / "isso já cansou" / "deve ter um jeito mais rápido".
- User says "vamos automatizar isso?" — invoke FIRST to check it has been validated 3+ times.
- `daily-standup` skill flags the same manual task across 3+ sessions.
- Post-launch operations work that is repeating: weekly user outreach, content publishing, retention checks, billing reconciliation.
- Before introducing any cron, scheduled job, webhook, or AI loop that codifies a workflow.

## When NOT to invoke

- The task has been done fewer than 3 times.
- The task changes shape every time it runs (still in discovery).
- The user wants to *redesign* the process, not codify it — use brainstorming or `prototype-lab` instead.
- The task is a one-off (e.g. "set up the Stripe account") — write a session log, not a process.

---

## The 5-question gate

Before producing a process document, the skill MUST get answers to these. Ask them one at a time if missing:

1. **How many times has this been done manually?** (< 3 → stop, do it manually a few more times.)
2. **Did it produce the desired outcome the last 3 times?** (no → not yet ready; debug the manual version first.)
3. **Which steps are identical every time?** (these are the automation candidates.)
4. **Which steps require human judgment?** (these stay manual or become AI-assisted.)
5. **What would happen if the automated version ran wrong for a week without anyone noticing?** (defines the safety net.)

If question 5 has a P0 answer (sends emails to customers, charges cards, deletes data), the process MUST include a circuit breaker, a sample size limit, and a notification.

---

## Output format

Generate `docs/processes/<slug>.md` with this structure:

```markdown
# Process — <name>

**Status:** documented · partially-automated · fully-automated
**Owner:** <human name>
**Last validated manually:** <YYYY-MM-DD>
**Run frequency:** <weekly / per-customer / on-event>
**Failure blast radius:** <none / cosmetic / financial / customer-trust / P0>

## Trigger

What event or condition starts this process.

## Steps

| # | Step | Mode | Notes |
|---|------|------|-------|
| 1 | ... | manual / AI-assisted / automated | ... |
| 2 | ... | ... | ... |

## Inputs

What you need before starting.

## Outputs

What this process produces. Where it lives.

## Quality gates

What "done correctly" looks like. How to verify.

## Failure modes

The 2–3 most likely ways this breaks. Detection + recovery for each.

## Automation boundary

Which steps are safe to automate today. Which require more validation runs first. Why.

## Circuit breakers (if any step is automated)

- Daily/weekly cap on runs.
- Required notification on every Nth run or on any error.
- Manual approval gate for actions with non-trivial blast radius.

## Change log

| Date | Change | Why |
|------|--------|-----|
```

---

## Hand-off rules

- The skill **never** builds the automation itself. It produces the document. Implementation is a sprint task.
- The first automated version of any process MUST run alongside the manual version for at least 2 cycles before the manual version is retired.
- Any step with `Failure blast radius: financial` or higher requires `/multi-ai-review` before automation.
- Processes that touch personal data trigger `privacy-audit`.

---

## Examples

### Example 1 — first-100-users outreach

- Manual runs: 12 times (week-over-week).
- Stable steps: pull list, write personalized DM, log response, update CRM.
- Judgment steps: choosing tone, deciding when to follow up.
- Automatable today: list pull, CRM logging.
- NOT automatable yet: the DM body. Save for v2 once tone is calibrated.

### Example 2 — billing reconciliation

- Manual runs: 4 times.
- Stable steps: download Stripe CSV, match against Supabase user table, flag orphans.
- Failure blast radius: `financial` — circuit breaker required if automated.
- Recommended: AI-assist for the matching step, human signoff for the flag-and-resolve step.

---

## Cross-references

- Principle: [`ETHOS.md`](../../../ETHOS.md) item 13.
- Pre-condition: `daily-standup` flagged repetition.
- Often paired with: `cost-watchdog` (automation can quietly increase API spend), `privacy-audit` (if personal data is involved), `/multi-ai-review` (financial blast radius).
- Inspired by: [`docs/registry/packs/slavingia-skills.md`](../../../docs/registry/packs/slavingia-skills.md).
