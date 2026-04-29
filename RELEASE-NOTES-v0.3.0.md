# v0.3.0 — Vibe Coder Non-Dev Pack

This release introduces a complete pack of agents, skills, and templates designed for **vibe coders who are not developers** — people building SaaS with AI who need protection, clarity, recovery, cost awareness, launch guidance, and legal baseline, without having to learn dev tooling first.

## Highlights

- **Defensive layer** — preventive habits the OS now applies by default.
- **Active-help layer** — agents and skills that activate when something happens (build breaks, costs spike, ready to launch, legal questions).
- **Real example** — a Next.js + Supabase SaaS reference layout the wizard generates from.
- **CI baseline** — GitHub Actions enforcing canonical structure, no committed secrets/archives/OS junk, and link integrity on all markdown.

## What is new

### Defensive layer

- `.env.example` with vibe-coder inline guidance for every common integration (Anthropic, OpenAI, Supabase, Stripe, Resend, NextAuth, more).
- `CLAUDE.local.md.example` for personal overrides without leaking to the team.
- `.claude/skills/secrets-discipline` — enforces safe handling of API keys, blocks accidental commits.
- `.claude/skills/cost-watchdog` — flags expensive choices (Opus loops, paid tiers, scale-poor DB patterns) before the bill arrives.
- `.claude/skills/plain-portuguese-explainer` — translates jargon and errors into plain Portuguese with non-tech analogies.
- `.claude/skills/daily-standup` — 4-bullet "where we left off" briefing for solo non-dev sessions.
- `.claude/skills/os-self-test` — verifies operating system internal coherence.
- `.github/pull_request_template.md` with OS coherence + vibe-coder impact checklist.
- `.github/ISSUE_TEMPLATE/` bug + feature templates tuned for both devs and non-devs.
- `.github/workflows/ci.yml` enforcing structure, secrets/archives hygiene, and link checking.

### Active-help layer

- `.claude/agents/bug-triage-agent` — first responder when something breaks; categorizes, bisects, proposes safest fix path (revert > patch > refactor).
- `.claude/agents/launch-agent` — coordinates public launch with a pre-launch gate, three launch tracks, and a launch-day script.
- `.claude/agents/legal-compliance-agent` — generates plain-Portuguese first drafts of Privacy Policy, Terms of Service, LGPD/GDPR baseline, refund policy.
- `.claude/skills/rollback-safe` — safely undoes the last AI change without losing user work.
- `.claude/skills/verify-build-works` — smoke-tests build + dev server + golden path before claiming done.
- `.claude/skills/usage-monitor` — tracks real-world cost across LLM providers, hosting, DB, email after launch.
- `.claude/skills/deploy-vercel-supabase` — walks a non-dev through the first Vercel + Supabase production deploy.
- `.claude/skills/first-100-users` — hand-curated outreach playbook to get the first 100 real users without ads.

### Examples

- `examples/nextjs-supabase-saas/README.md` — canonical Next.js + Supabase layout, conventions, free-tier rationale.

### Documentation

- README.md updated to feature the Vibe Coder Non-Dev Pack and link to all new agents and skills.

## Intended audience (refined)

- non-developers building a SaaS with AI;
- solo founders;
- vibe coders who want to ship without learning the dev toolchain;
- Brazilian builders shipping Brazilian-friendly stacks.

## Status

The pack is opinionated and ready to use. Each agent and skill is self-contained — pick what fits your project, ignore what doesn't.
