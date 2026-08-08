---
name: secrets-scan
description: Scan project changes for leaked secrets, credentials, unsafe env handling, and accidental private data. This is the DETECTION pass over what is already in the tree; `secrets-discipline` is the preventive workflow that stops it happening. Run before every commit, before every release (invoked by `release-check`), and when the user says "vazou alguma chave aí?", "isso tá seguro pra subir?", "esqueci alguma senha no código?".
---

# Secrets Scan

## Checklist

- No `.env` committed.
- `.env.example` contains placeholders only.
- No API keys, tokens, private keys, cookies, or production credentials in code/docs/prompts.
- No logs exposing secrets or personal data.
- CI/CD secrets are referenced by environment name, not literal value.
