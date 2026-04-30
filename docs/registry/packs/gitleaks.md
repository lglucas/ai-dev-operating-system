# Gitleaks

- **URL:** https://github.com/gitleaks/gitleaks
- **Default config:** https://github.com/gitleaks/gitleaks/blob/master/config/gitleaks.toml
- **License:** MIT (confirm upstream)
- **Status:** active
- **Last reviewed:** 2026-04-30
- **Tags:** #security #tooling

## What it is

A CLI scanner that detects hard-coded secrets (API keys, tokens, private keys) in git repositories — both in working tree and full history. Works locally and in CI.

## When to install

- Any project that goes public on GitHub.
- Projects with multiple contributors where accidental secret commits are likely.
- Projects entering production or audit phases.
- Repositories that already have suspicious file types (`.env`, `.pem`, `.key` not gitignored).

## When NOT to install

- Throwaway sandboxes that never leave a single machine.
- Repositories where secrets are explicitly stored as test fixtures (use `.gitleaksignore` instead of skipping).

## How to install

```bash
# macOS:
brew install gitleaks

# Or:
go install github.com/gitleaks/gitleaks/v8@latest

# Or pin in a CI workflow:
# https://github.com/gitleaks/gitleaks-action
```

Run before each release and on every PR via CI.

## Fit signals

- Repo will be public or shared externally.
- `.env.example` exists (means real `.env` may slip through).
- Team has had at least one near-miss with a leaked secret.

## Conflicts and overlaps

- Complements `.claude/skills/secrets-scan/` (rule-based) and `.claude/skills/secrets-discipline/` (workflow rules).

## Local mapping

- `.claude/rules/secrets.md`
- `.claude/skills/secrets-scan/SKILL.md`
- `.claude/skills/secrets-discipline/SKILL.md`

## Notes

The default Gitleaks config is the de facto standard for CI secret scanning. Customize `gitleaks.toml` only when you have specific false positives.
