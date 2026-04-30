# System Design Primer

- **URL:** https://github.com/donnemartin/system-design-primer
- **License:** MIT (code) + CC-BY 4.0 (text)
- **Status:** active (346k stars, ongoing community contributions)
- **Last reviewed:** 2026-04-30
- **Tags:** #learning #foundations

## What it is

A comprehensive educational repository teaching large-scale system architecture and interview preparation. Covers scalability principles, database design, caching strategies, load balancing, CAP theorem, message queues, and 8 worked-out system design interview problems. Reference material — not installable software.

## When to consult

- WIZARD Stage 11 (Technical Plan) — sanity-check architecture decisions against established patterns.
- Onboarding non-developer founders to system-design vocabulary.
- Before scaling decisions (sharding, queueing, caching strategy).
- Interview preparation for technical hires.

## When NOT to consult

- Already past system-design fundamentals — this is foundational, not advanced.
- Projects where managed platforms (Vercel/Supabase/Render) abstract these concerns away.

## How to use

Browse the markdown directly on GitHub or download the Anki flashcard decks (`.apkg`) for spaced-repetition learning. No install needed.

```bash
git clone --depth 1 https://github.com/donnemartin/system-design-primer.git
```

## Fit signals

- TECHNICAL-PLAN.md is being drafted and architecture decisions are pending.
- Project will scale beyond a single managed-platform deployment.
- Team needs a shared vocabulary for distributed-systems trade-offs.

## Conflicts and overlaps

- Complementary to `microsoft-ai-for-beginners` and other learning resources — this is system-design-specific.

## Notes

Reference material, not a runtime dependency. Cite specific sections in TECHNICAL-PLAN rather than vendoring the repo.
