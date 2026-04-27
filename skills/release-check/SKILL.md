---
name: release-check
description: Pre-release gate for tests, docs, changelog, privacy, security, and sprint closure.
---

# Release Check

## Required checks

- Tests pass.
- Lint/build pass.
- Changelog updated.
- Sprint doc updated.
- Session logs or ADRs created for important decisions.
- Privacy/security review complete when applicable.
- Coordinator review complete.

## Output

```txt
Release candidate:
Blocking issues:
Warnings:
Verdict: RELEASE | RELEASE_WITH_NOTES | BLOCK
```
