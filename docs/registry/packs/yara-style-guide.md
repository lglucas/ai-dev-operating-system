# YARA Style Guide

- **URL:** https://github.com/Neo23x0/YARA-Style-Guide
- **License:** check upstream
- **Status:** active
- **Last reviewed:** 2026-04-30
- **Tags:** #security #malware

## What it is

A style guide for writing readable and maintainable YARA rules — pattern-matching rules used in malware detection, threat hunting, and security research.

## When to install

- Security research projects.
- Malware analysis or threat intelligence tooling.
- Detection engineering teams writing YARA rules.

## When NOT to install

- General SaaS projects.
- Frontend or business-app projects with no malware/threat-hunting surface.

## How to install

```bash
open https://github.com/Neo23x0/YARA-Style-Guide
```

Reference only.

## Fit signals

- Project repository contains `.yar` or `.yara` files.
- Project documentation mentions YARA, threat intel, or malware detection.

## Conflicts and overlaps

- Niche pack — no conflicts.

## Local mapping

None directly — referenced from `docs/security-baseline.md` as advanced reference.

## Notes

Highly specialized. Keep in registry for completeness but do not surface to general projects.
