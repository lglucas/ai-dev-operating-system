# Security Baseline

This repo is not a substitute for professional security review.

It provides a practical security baseline for AI-assisted SaaS development.

---

## Goals

- Prevent secrets from entering the repo.
- Make security checks part of the workflow.
- Add release gates before deployment.
- Make privacy review explicit.
- Encourage secure coding prompts and reviews.
- Credit upstream security references properly.

---

## Recommended baseline

At minimum, every SaaS project should include:

- `.env.example`
- `.gitignore`
- secrets scanning
- dependency audit
- typecheck
- tests
- privacy/data audit for personal data
- release checklist
- changelog
- session log for major security decisions

---

## Upstream inspirations

- https://github.com/trailofbits/skills
- https://github.com/gitleaks/gitleaks
- https://github.com/Jacob-Hegy/CIS-Hardening-Guide
- https://github.com/Neo23x0/YARA-Style-Guide

---

## Recommended local mapping

```txt
.claude/rules/secrets.md
.claude/rules/privacy-audit.md
.claude/skills/secrets-scan/
.claude/skills/privacy-audit/
future: .claude/skills/security-review/
future: docs/infra-hardening.md
```

---

## What belongs in core

Core:

- secret scanning
- dependency awareness
- safe handling of environment variables
- privacy review
- release gates
- secure defaults

Advanced:

- CIS hardening
- YARA rules
- malware detection
- advanced threat modeling
- infrastructure hardening

---

## Principle

Security should not be an afterthought added at launch.

In an AI-assisted project, the security baseline should be present from day zero.
