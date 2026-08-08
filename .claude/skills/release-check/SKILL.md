---
name: release-check
description: Pre-release gate covering tests, build, docs, changelog, privacy, security, and sprint closure. Delegates to `verify-build-works`, `secrets-scan`, and `privacy-audit` rather than re-checking by hand. Run before tagging a release, before closing a sprint, before a first deploy, and when the user says "tá pronto pra lançar?", "posso subir isso?", "fecha a versão", "dá pra publicar?".
---

# Release Check

## Required checks

Do not re-implement checks that already have a skill. Delegate, then record the verdict.

| Check | Delegate to | Blocking? |
|---|---|---|
| Tests pass | project test runner | yes |
| Build + dev server + main flow load | [`verify-build-works`](../verify-build-works/SKILL.md) | yes |
| No leaked secrets or credentials | [`secrets-scan`](../secrets-scan/SKILL.md) | yes |
| Personal-data changes reviewed | [`privacy-audit`](../privacy-audit/SKILL.md) | yes, when applicable |
| Changelog updated | — | yes |
| Sprint doc updated | [`sprint-management`](../sprint-management/SKILL.md) | yes |
| Session logs or ADRs for important decisions | [`decision-log`](../decision-log/SKILL.md) | warning |
| OS structure still coherent | [`os-self-test`](../os-self-test/SKILL.md) | warning |
| Coordinator review complete | `coordinator-agent` | yes |

For a hard-to-reverse release decision (first public launch, pricing change shipping with the release, irreversible migration), run [`multi-ai-review`](../multi-ai-review/SKILL.md) before issuing a verdict.

## Output

```txt
Release candidate:
Blocking issues:
Warnings:
Verdict: RELEASE | RELEASE_WITH_NOTES | BLOCK
```
