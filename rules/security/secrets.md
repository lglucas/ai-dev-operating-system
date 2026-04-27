# Secrets rule

## Non-negotiable

Never commit secrets.

## Required practices

- Keep real secrets in local environment files or secret managers.
- Keep `.env.example` updated with placeholder values.
- Never paste private keys, API keys, tokens, session cookies, or production credentials into prompts.
- Run a secret scan before release.

## Common patterns to detect

```txt
sk-
ghp_
github_pat_
AKIA
-----BEGIN PRIVATE KEY-----
.env
.pem
.key
```
