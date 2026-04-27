# Stack Packs

Stack packs are optional extensions for specific ecosystems.

The core repo should remain generic enough for SaaS projects.

Stack packs can add ecosystem-specific rules, agents, skills, commands, and templates.

---

## Current planned packs

```txt
stack-packs/
├── generic-saas/
├── nextjs-supabase-saas/
└── solana/
```

---

## Generic SaaS

The default mindset:

- web app
- auth
- billing
- dashboard
- public landing
- admin area
- user settings
- email
- database
- privacy/security baseline

---

## Next.js + Supabase SaaS

Recommended when the project uses:

- Next.js App Router
- TypeScript
- Tailwind
- Supabase Auth
- Supabase Postgres
- Supabase Storage
- Postgres RLS
- API routes/server actions

---

## Solana

Inspired by:

- https://github.com/solanabr/solana-claude

Should remain optional.

Recommended when the project involves:

- Solana programs
- Anchor
- Pinocchio
- SPL tokens
- wallets
- dApps
- web3 security constraints

---

## Rule

Do not overload the core OS with stack-specific complexity.

Core should be usable by any serious SaaS builder.

Stack packs should extend the OS when the technology requires specialized guidance.
