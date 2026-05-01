---
name: grow-sustainably
description: Plan post-first-100-users growth without burning out the founder, the budget, or the user base. Pairs with `first-100-users` (which gets you to 100); this skill takes you from 100 to ~1000 sustainably. Activated when the user says "já tenho 100 usuários, e agora?", "como cresço sem queimar dinheiro?", "o WhatsApp 1-a-1 não escala mais".
---

# Grow Sustainably

`first-100-users` is conversation-driven. Beyond 100, conversations alone don't scale. But the answer is NOT to dump money into ads. The answer is to compress what worked, plug retention holes, and add ONE honest distribution channel at a time.

This skill protects against the three classic post-100 failures:
1. **Founder burnout** — trying to keep the 1-a-1 cadence past the personal limit.
2. **Vanity acquisition** — buying signups that never activate.
3. **Channel diffusion** — running 5 channels at 20% effort instead of 1 channel at 100%.

---

## Pre-conditions

This skill assumes:

- ~100+ active users (active = completed the aha-moment + returned in 7d).
- Some retention data exists (week-1, week-4 returning users).
- At least one acquisition pattern that worked manually (a specific community, a specific cold outreach script, a specific content theme).
- Cost telemetry exists (`usage-monitor` running) — otherwise scaling will quietly bankrupt the OPEX.

If any pre-condition is missing, the skill stops and routes to: `first-100-users` (under 100), `usage-monitor` (no cost telemetry), or `daily-standup` (no retention data captured).

---

## The four pillars (run in order, never in parallel)

### Pillar 1 — Retention before acquisition

A leaky bucket grows slower with more water. Before adding any new acquisition channel:

- Plot week-1 and week-4 retention.
- If week-4 retention < 20%, **do not scale acquisition**. Fix activation/onboarding first.
- Identify the top 3 reasons inactive users gave (or you suspect) for not returning. Fix the top one first.
- If retention is healthy (≥30% at week-4), proceed to Pillar 2.

### Pillar 2 — Compress what already worked

Look at the first 100. Where did they actually come from?

- Tag each of the 100 with **one** acquisition source.
- Sort by source. Take the top source.
- Ask: what made it work? Was it the channel itself, the message, the timing, or the founder's personal voice?
- Codify the answer with `/processize` — now is the right time, you have ~12+ manual reps.
- The output is a documented playbook for that single source. Run it deliberately, with light AI assist, until it plateaus.

### Pillar 3 — Add ONE new channel deliberately

Only when Pillar 2 plateaus (≥4 weeks of flat or declining yield):

- Pick exactly **one** new channel. Not two. Not "a content stack."
- Define a 30-day experiment with a single primary metric (active users from this channel by day 30).
- Cap the budget. If money is involved, set a hard ceiling and a circuit breaker.
- After 30 days: keep, kill, or extend by another 30 days. Never default-renew.

### Pillar 4 — Founder bandwidth check

Run this **weekly** during scaling:

| Signal | Threshold |
|--------|-----------|
| Hours per week on the product | < 50 |
| Manual user-touchpoints per week | < 3h |
| Days since last full day off | < 14 |
| Days since last conversation with a real user | < 7 |

If any signal trips, scaling stops until it's fixed. A burned founder kills more startups than slow growth.

---

## Channels, in rough efficiency order

Order is the median for a B2B / B2C-prosumer SaaS in early stage. Adjust to context.

| Tier | Channel | Cost | Compounding | Best when |
|------|---------|------|-------------|-----------|
| 1 | Word-of-mouth (NPS-driven invite) | ~0 | Yes | Strong activation, real value moments |
| 1 | Niche community presence | low | Yes | Persona is concentrated in <5 communities |
| 2 | Long-form content (1 channel) | low | Yes | Founder writes/records well; problem is narratable |
| 2 | Cold outreach (handcrafted, < 20/day) | low | No | Persona is on LinkedIn / X with searchable filters |
| 3 | Programmatic SEO | medium | Yes (slow) | Repeatable structured pages, query volume validated |
| 3 | Newsletter sponsorship in niche newsletters | medium | No | First channel hit a ceiling; AOV is high enough |
| 4 | Paid ads (Google, Meta, X) | high | No | Retention proven, channels above hit a ceiling, finance allows runway burn |
| 4 | Influencer placement | high | Mixed | Persona is parasocial; founder won't appear themselves |

Always exhaust Tier 1 before Tier 2. Always exhaust Tier 2 before Tier 3. Never skip to Tier 4 without a written justification reviewed via `/multi-ai-review`.

---

## Hard rules

- **No new paid channel without `usage-monitor` running.** Cost surprise = death.
- **No vanity metrics in the dashboard.** Track active users, not signups. Track retention, not impressions.
- **No "agência de growth" before 1k MRR or 1k active users**, whichever comes first. Founder owns growth in this phase.
- **Cap automated outreach at 50/day**, even after `/processize`. Past that, deliverability and reputation collapse.
- **Any pricing or packaging change** triggers `business-plan-impact-review`.

---

## Output format

Generate `docs/business/growth-plan-<YYYY-MM>.md`:

```markdown
# Growth Plan — <month>

**Active users (start of month):** <n>
**Week-4 retention:** <%>
**Top acquisition source last 30d:** <source> (<n> users)
**Founder bandwidth signals:** <green / yellow / red>

## Pillar 1 — Retention diagnosis

- Week-1 retention: <%>
- Week-4 retention: <%>
- Top 3 churn reasons: ...
- Action this month: ...

## Pillar 2 — Compress what worked

- Source: <source>
- Codified playbook: <link to docs/processes/...>
- Yield trend: ...

## Pillar 3 — New channel experiment (if any)

- Channel: <single channel>
- Hypothesis: ...
- Primary metric: ...
- Budget cap: ...
- 30-day decision date: <YYYY-MM-DD>

## Pillar 4 — Founder bandwidth

- Hours/week on product: ...
- Manual touchpoints/week: ...
- Days since full day off: ...
- Days since last user conversation: ...

## Hard rules check

- [ ] usage-monitor running
- [ ] Dashboard tracks active users + retention (not signups + impressions)
- [ ] No paid channel without justification + `/multi-ai-review`

## Decisions for next month

- ...
```

---

## Cross-references

- Principle: [`ETHOS.md`](../../../ETHOS.md) item 14.
- Predecessor skill: [`first-100-users`](../first-100-users/SKILL.md).
- Pairs with: [`processize`](../processize/SKILL.md), [`usage-monitor`](../usage-monitor/SKILL.md), [`cost-watchdog`](../cost-watchdog/SKILL.md), [`business-plan-impact-review`](../business-plan-impact-review/SKILL.md).
- Inspired by: [`docs/registry/packs/slavingia-skills.md`](../../../docs/registry/packs/slavingia-skills.md), [`docs/registry/packs/gstack.md`](../../../docs/registry/packs/gstack.md).
