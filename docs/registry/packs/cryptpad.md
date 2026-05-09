# CryptPad

- **URL:** https://github.com/cryptpad/cryptpad
- **License:** AGPL-3.0
- **Status:** active (7.6k stars)
- **Last reviewed:** 2026-05-09
- **Tags:** #productivity #security

## What it is

A complete **end-to-end encrypted collaborative office suite**: real-time collaborative documents, spreadsheets, presentations, forms, whiteboards, and code editors. The server only sees encrypted blobs — even a compromised server cannot read user content. Self-hostable with Docker.

Effectively the privacy-first answer to Google Workspace / Office 365 — collaboration without trusting the host with plaintext.

## When to install

- Privacy-sensitive teams (legal, medical, journalism, activism, regulated industries).
- Self-hosted alternative to Google Docs / Office that the team can audit.
- Collaboration where the threat model includes "the server operator" (insider risk).
- Studying a working real-world implementation of E2E-encrypted real-time collaboration.

## When NOT to install

- Need every Google/Office feature on day one — feature parity is not the goal.
- Mobile-first workflows — desktop browser is the primary surface.
- Cannot self-host and don't want to use the public CryptPad instance.
- AGPL-3.0 conflicts with your distribution model.

## How to install

```bash
git clone https://github.com/cryptpad/cryptpad
cd cryptpad
docker compose up
# or follow upstream for native install
```

Or use the public hosted instance at [https://cryptpad.fr](https://cryptpad.fr) for personal use.

## Fit signals

- Project handles confidential client data and needs E2E-encrypted collaboration.
- Compliance regime requires demonstrable data minimization at the host level.
- Threat model includes server-operator compromise.
- Team is comfortable self-hosting Node.js services.

## Conflicts and overlaps

- Functional overlap with Google Workspace / Office 365 — but trust model is fundamentally different (E2E encryption).
- Composes with `cis-hardening-guide` (server hardening for the self-host).
- See [`tags/security.md`](../tags/security.md) for related packs.

## Notes

- ⚠️ **AGPL-3.0** — strong copyleft, network-use clause applies if you self-host with modifications.
- E2E encryption is real, not marketing — verified by external audits in the past. Still: review threat model assumptions for your specific use case.
- Active maintenance, well-known project (XWiki SAS / French security ecosystem origins).
- Performance scales well for small teams; large-org deployments need careful sizing.
