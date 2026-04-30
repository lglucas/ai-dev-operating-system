# ST3GG

- **URL:** https://github.com/elder-plinius/st3gg
- **License:** AGPL-3.0 (free for individuals/research/OSS; commercial licensing required)
- **Status:** active (1.3k stars, 568+ tests, 100+ encoding techniques)
- **Last reviewed:** 2026-04-30
- **Tags:** #security #tooling

## What it is

An all-in-one steganography suite that hides secret data in images, audio, documents, and network packets using 100+ encoding techniques. Runs 100% client-side in browsers or as a Python CLI/TUI/WebUI. Dual-use: red teams simulate data exfiltration; blue teams scan for hidden payloads via the bundled ALLSIGHT analysis engine (120+ detection tools).

## When to install

- Security research, CTF, penetration testing, incident response, AI safety projects.
- DLP/SIEM testing — simulate exfiltration vectors to validate detection.
- Any project that needs steganography either for offensive testing or defensive analysis.

## When NOT to install

- General SaaS / business apps — out of scope.
- Frontend-only or product-engineering projects.
- Production systems that handle user data — never use steganography on real PII without explicit legal review.

## How to install

```bash
pip install stegg
# Or with all extras:
pip install stegg[all]
```

## Fit signals

- Project deals with malware analysis, threat hunting, or red-team simulation.
- Codebase contains `.yar`/`.yara` files (pairs with `yara-style-guide`).
- Compliance scope includes data-exfiltration testing (e.g. DLP validation).

## Conflicts and overlaps

- Complements `yara-style-guide` (detection rules) and `trailofbits-skills` (security review).
- Niche: most projects in the registry will never need this.

## Notes

AGPL-3.0 means commercial-product use requires the upstream commercial license — review with legal before bundling. Treat the AI Agent (Reveal/Conceal modes) as advanced tooling, not casual install.
