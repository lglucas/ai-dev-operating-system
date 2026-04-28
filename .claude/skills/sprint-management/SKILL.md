---
name: sprint-management
description: Manage sprint lifecycle: open sprint, maintain sprint branch/docs, close sprint, update changelog, and prepare tags.
---

# Sprint Management

## Open sprint

1. Confirm sprint number, theme, duration, and objectives.
2. Ensure `main` is clean and up to date.
3. Create `sprint-XX-topic` branch.
4. Create `docs/sprints/sprint-XX-topic.md` from template.
5. Update project constitution/current sprint metadata.
6. Commit kickoff.

## During sprint

- Use feature branches for isolated work.
- Merge into sprint branch.
- Keep sprint doc updated with scope changes and delivered work.
- Use session logs for important decisions.

## Close sprint

1. Confirm all intended work is merged or explicitly deferred.
2. Run tests and quality gates.
3. Invoke coordinator review.
4. Invoke adversarial review for meaningful releases.
5. Update changelog.
6. Update sprint doc with final status and retrospective.
7. Merge sprint branch into `main`.
8. Tag release.
