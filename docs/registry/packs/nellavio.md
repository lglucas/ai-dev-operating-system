# Nellavio ⭐

- **URL:** https://github.com/nellavio/nellavio
- **License:** MIT
- **Status:** active (305 stars, v2.0.1 April 2026, 18 releases, 217 commits)
- **Last reviewed:** 2026-04-30
- **Tags:** #stack-pack #design

## What it is

A comprehensive **Next.js dashboard starter** for SaaS products, internal tools, and admin panels. Ships with 18 pre-built pages, 90+ UI components built on shadcn/ui + Radix primitives, full Better-Auth integration (login/register/password reset), RBAC (admin/editor/viewer roles), multi-language support (next-intl), TanStack Table v8 with filtering/sorting, FullCalendar.io with drag-and-drop, dark/light themes, and pre-configured security headers (CSP, HSTS, X-Frame-Options).

The standout feature: **dual-mode operation** — runs standalone with mock data (no infra setup needed) or connects to an optional Node.js backend with GraphQL + Better-Auth admin API for full-stack production deployment. Authored by `matt765` and actively maintained.

## When to install

- **Building a SaaS dashboard, admin panel, or internal tool with Next.js.** Direct fit.
- WIZARD Stage 13 (Prototype Lab) — start with mock data, upgrade to real backend later.
- Vibe-coders who want a production-grade starting point without choosing 90+ component libraries from scratch.
- Teams that need RBAC, i18n, and security headers configured correctly out of the box.

## When NOT to install

- Marketing sites or landing pages — overkill for non-app surfaces.
- Mobile-first products (this is web-dashboard-first).
- Teams already committed to a different framework (Remix, SvelteKit, Astro).
- Projects that don't need RBAC or auth.

## How to install

```bash
git clone https://github.com/nellavio/nellavio.git my-saas-dashboard
cd my-saas-dashboard
npm install
npm run dev
# Open http://localhost:3000
```

## Fit signals

- TECHNICAL-PLAN.md commits to Next.js + Tailwind + shadcn/ui.
- Project includes dashboards, admin pages, or RBAC requirements.
- Team values "start mock, deploy real" workflow.
- Internationalization or accessibility is on the roadmap.

## Conflicts and overlaps

- **Direct alternative to** `examples/nextjs-supabase-saas/` reference layout shipped with this OS — Nellavio is more opinionated and feature-complete; the example is a minimal canonical layout.
- Pairs with `reui-io` (1,003+ shadcn/ui components) — Nellavio uses shadcn primitives, so reui components drop in cleanly.
- Pairs with `ui-ux-pro-max` and `awesome-design-md` (design exploration / brand layer over Nellavio's components).

## Notes

- **Better-Auth** is the auth library (not NextAuth/Clerk). Verify it fits your provider strategy before committing.
- **Optional GraphQL backend** — if you skip it, the dashboard runs on mock data forever (useful for demos).
- 90+ components + 18 pages = significant surface area. Consider trimming what you don't use to reduce bundle size before production.
- Storybook included — good developer experience but adds repo size; remove if not used.
- 305 stars is modest compared to other registry packs, but **production-readiness signals** (security headers, RBAC, i18n, CI/CD via GitHub Actions, Storybook) are unusually strong for a starter at that star count.
