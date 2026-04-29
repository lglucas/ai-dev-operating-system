---
name: cost-watchdog
description: Flag potentially expensive technical choices BEFORE they are committed. Watch for AI model selection, hosting tier upgrades, third-party services with metered pricing, and DB patterns that explode with scale.
---

# Cost Watchdog

## When to run this skill

- Before introducing any third-party service (LLM provider, DB, queue, monitoring, search, image, email).
- Before suggesting a paid tier of any service the user is currently on free tier of.
- When proposing model selection (Claude Opus vs Sonnet vs Haiku, GPT-4 vs 4o-mini, etc.).
- When implementing patterns that scale poorly: N+1 queries, polling loops, full-text scans, unbounded retries.
- When the user says "está caro" / "está cobrando demais" / "fiquei sem créditos".

## Cost flags to watch

### LLM costs

- **Default to Claude Haiku 4.5 or Sonnet 4.6** for routine work. Use Opus only for tasks that justify it (deep reasoning, business strategy, architecture).
- **Always cache prompts** that have a stable system prefix (saves up to 90% of input tokens).
- **Loops are dangerous.** If a feature calls the LLM in a loop, calculate worst case before shipping.
- **Streaming + early termination** when user might stop reading.

### Hosting

- Vercel Hobby (free) is fine until ~100 users. Pro ($20/mo) only when you hit limits.
- Supabase Free tier: 500 MB DB, 1 GB storage, 50K monthly active users. Plenty for prototypes.
- Don't enable database point-in-time recovery before paying users exist.

### Database patterns

- Unbounded SELECT without pagination → flag.
- Realtime subscriptions on noisy tables → flag.
- Full-table scans in serverless functions → flag (cold-start tax + bandwidth).

### Third-party services

- Stripe: percentage-based, no flag below revenue.
- Resend: 3K emails/month free. Flag transactional volume design.
- PostHog free tier: 1M events/mo. Flag if event firing in loops.
- Sentry free: 5K errors/mo. Flag noisy retry catch blocks.

## Vibe coder explanation

> Cloud services are like a cab meter. Some run flat-rate (you pay even idle), some run per-trip (per request), some are free up to a limit then suddenly expensive. Before you ship, I'll show you which meter is running and what the worst-case bill looks like if your idea goes viral.

## Output

```
💰 cost-watchdog flags

[HIGH]  Using Claude Opus inside a loop that may run 50+ times per user action.
        Estimated cost: $0.45 per user action. At 1000 users/day = $13,500/month.
        Suggest: switch to Sonnet 4.6 ($0.06/action) or Haiku 4.5 ($0.01/action).

[MED]   Realtime Supabase subscription on `messages` table without filter.
        Will fire on every insert across all users.
        Suggest: filter by chat_id.

[OK]    Stripe checkout: percentage-based, no fixed cost.
[OK]    Vercel deploy: still on Hobby free tier.
```
