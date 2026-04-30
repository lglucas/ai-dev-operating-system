# CIS Hardening Guide

- **URL:** https://github.com/Jacob-Hegy/CIS-Hardening-Guide
- **License:** check upstream
- **Status:** active
- **Last reviewed:** 2026-04-30
- **Tags:** #security #infra

## What it is

A reference guide for hardening infrastructure and workstations following CIS (Center for Internet Security) benchmarks. Covers OS-level, network-level, and configuration-level hardening practices.

## When to install

- Infrastructure-heavy projects (self-hosted services, on-prem deployments).
- Compliance projects (SOC 2, ISO 27001, government work).
- Teams managing their own servers or workstations.

## When NOT to install

- Pure SaaS projects on managed platforms (Vercel, Supabase, Render).
- Frontend-only projects.
- Projects too early-stage to need hardening.

## How to install

```bash
open https://github.com/Jacob-Hegy/CIS-Hardening-Guide
```

Reference only — do not vendor. Use as a checklist when planning infra security.

## Fit signals

- Project includes Dockerfile + production deployment scripts.
- Team manages its own VMs, kubernetes, or bare metal.
- Compliance audit is on the roadmap.

## Conflicts and overlaps

- Complementary to `trailofbits-skills` (application-level vs. infra-level security).

## Local mapping

None directly — referenced from `docs/security-baseline.md` and `SECURITY.md` as advanced reference.

## Notes

Not part of the default SaaS app template. Mark as advanced reference until the project actually owns infrastructure.
