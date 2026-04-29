# Example — Next.js + Supabase SaaS

Canonical layout for a vibe-coder-friendly SaaS built on top of the AI Dev Operating System.

This is **opinionated documentation**, not a runnable scaffold. The wizard generates the actual code per project, using these conventions.

## Stack

- **Framework:** Next.js (App Router, stable major).
- **Database + Auth:** Supabase (Postgres, RLS, magic-link auth).
- **Styling:** Tailwind CSS.
- **Payments:** Stripe Checkout + webhooks.
- **Email:** Resend.
- **Hosting:** Vercel.
- **AI:** Anthropic Claude (default Sonnet 4.6 / Haiku 4.5; Opus only when justified).

## Layout

```txt
my-saas/
├── CLAUDE.md
├── CLAUDE.local.md           (gitignored)
├── .claude/                  (canonical OS)
├── .env.example
├── .env.local                (gitignored)
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── supabase/
│   ├── config.toml
│   └── migrations/0001_foundation.sql
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                 (landing)
│   │   ├── (auth)/
│   │   │   ├── sign-in/page.tsx
│   │   │   └── auth/callback/route.ts
│   │   ├── (app)/
│   │   │   ├── layout.tsx           (authenticated shell)
│   │   │   └── dashboard/page.tsx
│   │   └── legal/
│   │       ├── privacy/page.tsx
│   │       └── terms/page.tsx
│   ├── features/
│   │   ├── auth/
│   │   │   ├── server/sign-in.ts
│   │   │   ├── server/sign-out.ts
│   │   │   ├── components/auth-form.tsx
│   │   │   ├── schemas.ts
│   │   │   └── index.ts
│   │   └── billing/
│   ├── db/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   ├── admin.ts
│   │   └── types.ts                 (generated)
│   ├── lib/
│   │   ├── utils.ts
│   │   └── audit/log.ts
│   └── middleware.ts
├── docs/
│   ├── product/PRODUCT-BRIEF.md
│   ├── business/BUSINESS-PLAN.md
│   ├── technical/TECHNICAL-PLAN.md
│   ├── SPRINTS.md
│   └── sprints/
├── session-log/
├── knowledge-base/
├── prototype-lab/
└── CHANGELOG.md
```

## Conventions

- **Feature-based architecture:** each domain capability under `src/features/<name>/` with its own server actions, components, schemas, tests.
- **Single re-export per feature:** `src/features/<name>/index.ts` is the public surface; cross-feature imports come from there only.
- **Files under 200 lines** by convention. Split when it grows.
- **File headers:** every code file starts with `@file`, `@concern`, `@version`, `@changelog`.
- **Server-only secrets** never prefixed with `NEXT_PUBLIC_`.
- **DB access:** RLS-first. Service role key only inside `db/admin.ts`.

## How to use this example

This file is reference for what the wizard *generates*. To start a new project:

1. Clone `ai-dev-operating-system` (this repo).
2. Open it in your IDE and run Claude Code.
3. Paste:
   ```txt
   Claude, vamos iniciar um novo projeto. Leia primeiro o arquivo START-HERE.md e siga exatamente as instruções dele.
   ```
4. The wizard runs ideation → research → BP → product brief → technical plan → sprint roadmap → prototype lab → first coding sprint, generating the layout above incrementally.

## Why this stack

- **Vercel + Supabase free tier** carries a project from idea to ~100 users without a paid plan.
- **Magic-link auth** removes the password problem.
- **Stripe Checkout (hosted)** removes PCI scope.
- **Brazilian-friendly:** Stripe BR, Resend, Supabase `sa-east-1` region.

## Related skills and agents

- `deploy-vercel-supabase` — first deploy walkthrough.
- `secrets-discipline` — env-var hygiene.
- `cost-watchdog` — keep this stack within free tiers.
- `bug-triage-agent` — when something breaks.
- `legal-compliance-agent` — Privacy Policy + Terms before going public.
- `launch-agent` — soft / public / closed-beta launch tracks.
- `first-100-users` — early-stage acquisition.
