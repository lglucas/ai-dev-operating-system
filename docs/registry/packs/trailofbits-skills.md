# Trail of Bits Skills

- **URL:** https://github.com/trailofbits/skills
- **License:** check upstream
- **Status:** active
- **Last reviewed:** 2026-04-30
- **Tags:** #security

## What it is

Security-focused Claude Code skills marketplace from Trail of Bits, a respected security research firm. Skills cover code review, secure coding, testing, vulnerability analysis, and adversarial patterns.

## When to install

- Projects handling sensitive data (PII, PHI, payments, auth).
- Compliance-sensitive products (LGPD, GDPR, HIPAA, PCI).
- Web3 / smart contract projects.
- Any project entering production with real users.

## When NOT to install

- Toy or hackathon projects with no security surface.
- Internal-only tools with no sensitive data.

## How to install

```bash
open https://github.com/trailofbits/skills
```

Install upstream — review each skill individually before adopting since security workflows are opinionated and project-specific.

## Fit signals

- Project has authentication or authorization logic.
- Project handles user data, payments, or external integrations.
- Compliance review is on the roadmap.

## Conflicts and overlaps

- Overlaps with `everything-claude-code` security skills — TOB is more conservative and review-focused.

## Local mapping

Conceptually inspired the `.claude/skills/secrets-scan/`, `.claude/skills/privacy-audit/`, and `.claude/skills/secrets-discipline/` workflows.

## Notes

Trail of Bits has a strong reputation in security research; their skills are credible defaults for security-sensitive projects.
