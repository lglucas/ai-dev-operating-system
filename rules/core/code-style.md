# Code style rule

## Goal

Keep code understandable for humans and AI agents.

## Rules

- Prefer small files with a single responsibility.
- Avoid unrelated refactors while solving a task.
- Add a short file header to source files when the project requires it.
- Do not duplicate business logic across features.
- Use explicit names over clever abbreviations.
- When changing public behavior, update tests and docs.

## File-size guideline

As a default, keep source files under 200 lines where practical. This is a maintainability heuristic, not a documentation limit.

The guideline applies to code files such as:

- `.ts`
- `.tsx`
- `.js`
- `.jsx`
- `.css`
- `.sql`

It does not apply to:

- changelogs;
- sprint docs;
- session logs;
- reports;
- rules;
- agents;
- skills;
- knowledge-base documents.
