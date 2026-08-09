# awesome-selfhosted

- **URL:** https://github.com/awesome-selfhosted/awesome-selfhosted
- **Data repo:** https://github.com/awesome-selfhosted/awesome-selfhosted-data
- **Website:** https://awesome-selfhosted.net
- **License:** CC-BY-SA 3.0 Unported (the list data — confirm upstream)
- **Status:** active
- **Last reviewed:** 2026-08-08
- **Tags:** #infra #tooling #reference

## What it is

A community-maintained catalogue of **1.346 open-source projects you can host yourself** instead of subscribing to a third-party SaaS, organized under 95 functional tags. The human-readable list is generated from `awesome-selfhosted-data`, where each project is one YAML file carrying name, description, licence, platforms, tags, stars, and release activity.

Automated workflows upstream check for dead links and unmaintained projects, so the data decays more slowly than a typical awesome-list.

## When to install

You do not install this one — **it is already vendored** into this OS at [`docs/selfhosted/`](../../selfhosted/README.md), because the WIZARD needs it available offline at stage 4.2.

Go to the upstream when:

- The local shortlist does not cover your category and you want the current state rather than our snapshot.
- You want to check whether a project was removed for being unmaintained or insecure.
- You want to contribute a project back.

## When NOT to install

- Never as a dependency. It is a catalogue, not code.
- Do not copy tables out of it into an MIT-licensed project without carrying the CC-BY-SA attribution — see the licence note below.

## How to use

```bash
# Refresh the local mirror in this repo:
node scripts/sync-selfhosted.js

# Or browse the local copy:
#   docs/selfhosted/shortlist-saas.md   ← start here
#   docs/selfhosted/INDEX.md            ← all 12 categories
```

## Fit signals

- The Technical Plan (stage 4.2) is choosing between managed platforms and self-hosting.
- The project has data-residency or LGPD constraints that make a third-party SaaS awkward.
- Projected third-party subscription cost is material relative to the project's budget.
- The founder already operates a server, so the marginal cost of one more service is low.

## Conflicts and overlaps

- **Not the same thing as `docs/registry/`.** This registry answers "what do I install *inside* my project"; the self-hosted catalogue answers "what do I run *instead of* paying a SaaS".
- Pairs with `cost-watchdog` (compares projected cost of both paths) and `privacy-audit` (data residency).

## Local mapping

- `docs/selfhosted/README.md` — licence carve-out, how the mirror works
- `docs/selfhosted/shortlist-saas.md` — curated per SaaS category
- `docs/selfhosted/INDEX.md` + `docs/selfhosted/catalog/` — generated, 1.346 entries
- `scripts/sync-selfhosted.js` — regenerator
- `WIZARD.md` stage 4.2 — where the managed-vs-self-hosted question is asked

## Notes

⚠️ **Licence is share-alike.** The list data is CC-BY-SA 3.0, not MIT like the rest of this OS. Redistributing it — modified or not — requires keeping the same licence and the attribution. That is why the mirror lives in its own directory with an explicit carve-out.

⚠️ **Coverage is uneven exactly where a SaaS founder looks first.** Nine tags are orphaned upstream (the tag file exists, no project references it): Backup, Federated Identity & Authentication, Identity Management, Monitoring & Status Pages, CI/CD, FaaS & Serverless, Static Site Generators, VPN, Distributed Filesystems. Keycloak, MinIO, Supabase, Uptime Kuma, Coolify, WireGuard, restic, Hugo and Jenkins are all absent. This follows from the upstream scope — self-hosted *network services and web applications*, not build tools, CLIs or protocol implementations.

⚠️ **Not everything listed is open source.** Upstream maintains a non-free licence list (`BUSL-1.1`, `SSPL-1.0`, `Elastic-2.0`, `Commons-Clause`, `FSL-1.1-MIT`, `CC-BY-NC-*`, `⊘ Proprietary`) and tags entries accordingly — 70 entries are proprietary. Around 39% of the catalogue is AGPL or GPL.
