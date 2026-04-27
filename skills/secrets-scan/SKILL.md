---
name: secrets-scan
description: Scan project changes for secrets, credentials, unsafe env handling, and accidental private data leaks.
---

# Secrets Scan

## Checklist

- No `.env` committed.
- `.env.example` contains placeholders only.
- No API keys, tokens, private keys, cookies, or production credentials in code/docs/prompts.
- No logs exposing secrets or personal data.
- CI/CD secrets are referenced by environment name, not literal value.
