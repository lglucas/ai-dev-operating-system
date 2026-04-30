# Agentic Inbox (Cloudflare)

- **URL:** https://github.com/cloudflare/agentic-inbox
- **License:** Apache 2.0
- **Status:** active (1.9k stars, 11 commits — early but Cloudflare-maintained)
- **Last reviewed:** 2026-04-30
- **Tags:** #productivity #agents #stack-pack

## What it is

A self-hosted email client running on Cloudflare Workers with built-in AI agent capabilities. Full email client (compose, threading, folders, search, attachments) with per-mailbox isolation via Durable Objects + SQLite. AI agent has 9 email tools (read, search, draft) with auto-draft generation requiring explicit user confirmation.

## When to install

- Project is a personal-productivity tool centered on email.
- Need self-hosted email AI without sending data to third-party LLM SaaS.
- Already on the Cloudflare stack (Workers, Email Routing, R2, Workers AI).

## When NOT to install

- Non-Cloudflare deployments.
- Project doesn't involve email.
- Need a hardened multi-tenant email service (this is per-user mailbox isolation, not enterprise multi-tenant).

## How to install

```bash
git clone https://github.com/cloudflare/agentic-inbox.git
cd agentic-inbox
npm install
npm run dev
```

Production requires Cloudflare Access authentication.

## Fit signals

- Project is a personal email assistant or inbox automation tool.
- Already deploying on Cloudflare Workers.

## Conflicts and overlaps

- Stack-pack — only relevant if Cloudflare Workers is the deployment target.

## Notes

Auto-draft generation requires explicit confirmation — good privacy default. Watch upstream for production-readiness signals (only 11 commits at review time).
