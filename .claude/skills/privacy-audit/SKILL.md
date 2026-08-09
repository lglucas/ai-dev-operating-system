---
name: privacy-audit
description: Review any feature that collects, stores, processes, exports, or displays personal data — answering the nine questions in `.claude/rules/privacy-audit.md` (what data, why, where, who can access, how controlled, retention, logs, deletion/export, policy impact). Mandatory before merging personal-data changes. Triggers on auth, user profiles, exports, analytics, logging, and when the user says "vou guardar o CPF", "preciso pedir o e-mail", "e a LGPD?", "posso salvar isso do usuário?".
---

# Privacy Audit

## Trigger when

- collecting personal data;
- changing auth, roles, permissions, or RLS;
- exporting data;
- logging user activity;
- adding third-party integrations;
- implementing deletion or retention behavior.

## Output

```txt
Data involved:
Purpose:
Storage:
Access control:
Retention:
Risks:
Required changes before merge:
Verdict: PASS | PASS_WITH_NOTES | BLOCK
```
