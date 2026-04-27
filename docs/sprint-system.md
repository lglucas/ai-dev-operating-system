# Sprint system

A sprint is a short execution container with explicit goals, quality gates, and closure ritual.

## Lifecycle

1. Open sprint from `main`.
2. Create sprint branch.
3. Create sprint document.
4. Define objectives, non-goals, risks, agents, skills, and DoD.
5. Execute feature branches into the sprint branch.
6. Run coordinator review.
7. Run adversarial review when risk is meaningful.
8. Update changelog.
9. Close sprint, tag version, and merge.

## Recommended branch pattern

```txt
sprint-XX-topic
feat/topic-name
fix/bug-name
chore/task-name
docs/topic-name
```

## Recommended release pattern

```txt
v0.SPRINT.PATCH
sprint-XX
```
