---
name: feature-scaffold
description: Create a feature-based folder structure (components, actions, api, db, hooks, schemas, tests) plus an initial implementation plan, following `.claude/rules/feature-based-architecture.md`. Use when starting a new product feature during a coding sprint, and when the user says "vamos criar a tela de X", "quero adicionar tal funcionalidade", "onde eu coloco esse arquivo?", "como organizo isso?".
---

# Feature Scaffold

Use when starting a new product feature.

## Steps

1. Define feature name and user-facing outcome.
2. Identify data touched and privacy/security implications.
3. Create feature folder.
4. Add tests or test plan.
5. Add README or implementation note when useful.
6. Register feature in sprint doc.

## Suggested structure

```txt
src/features/feature-name/
├── components/
├── actions/
├── api/
├── db/
├── schemas/
├── tests/
└── index.ts
```
