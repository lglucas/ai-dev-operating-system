---
name: secrets-discipline
description: Enforce safe handling of API keys, tokens, passwords, and any other secret in the project. Run when adding integrations, before commits, or when the user pastes a value that looks like a credential.
---

# Secrets Discipline

## When to run this skill

- The user is adding a new integration (Stripe, Supabase, OpenAI, etc.).
- The user pastes a string that looks like a secret (long random, starts with `sk_`, `pk_`, `re_`, etc.).
- Before any commit if any file in the changeset contains an `=` followed by a long opaque string.
- The user says "vou colocar a chave" / "where do I put my key".

## Rules

1. **Never paste real secrets into source code.** Always use `process.env.X` (or framework equivalent).
2. **Always update `.env.example`** when introducing a new env var. The example file documents the existence of the variable, not its value.
3. **Never commit `.env`, `.env.local`, `.env.production`.** They are gitignored — verify before commit.
4. **Server-only secrets must stay server-only.** In Next.js, anything starting with `NEXT_PUBLIC_` is shipped to the browser. If it's a secret, do NOT prefix it.
5. **One secret, one env var.** Don't reuse the same key for unrelated services.
6. **Rotate after exposure.** If a secret was committed at any point (even in a deleted file), rotate it. Git history retains it.

## Vibe coder explanation

> Secrets are like the keys to your house. The `.env` file is the keychain you keep at home. The `.env.example` is the description of what keys you need (front door, garage, mailbox) without showing what they look like. When you share your project on GitHub, you share the description — never the actual keys.

## Workflow

1. Identify all secret-like values in the proposed change.
2. Confirm each is referenced via `process.env.X` (or equivalent).
3. Confirm `.env.example` documents each new variable with a comment explaining purpose.
4. Confirm `.env`, `.env.local` are in `.gitignore`.
5. Run a quick scan: search for accidental literal API keys (regex: `sk_[a-zA-Z0-9]{20,}`, `pk_[a-zA-Z0-9]{20,}`, `re_[a-zA-Z0-9]{20,}`, `AIza[a-zA-Z0-9\-_]{35}`).
6. If any literal secret is found in a tracked file, stop and ask the user to rotate.

## Output

```
✅ secrets-discipline check
- New variables documented in .env.example: STRIPE_WEBHOOK_SECRET
- No literal secrets in source code
- .gitignore covers .env files
- Server-only vars not exposed via NEXT_PUBLIC_

⚠️  If you committed a real key earlier, rotate it now in the provider dashboard.
```
