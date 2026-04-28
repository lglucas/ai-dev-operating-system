# Git workflow rule

## Commit convention

Use Conventional Commits:

```txt
<type>[optional scope]: <description>
```

Common types:

- `feat`
- `fix`
- `docs`
- `chore`
- `refactor`
- `test`
- `ci`

## Branches

```txt
sprint-XX-topic
feat/topic-name
fix/bug-name
chore/task-name
docs/topic-name
```

## Merge discipline

- Feature branches merge into the active sprint branch.
- Sprint branch merges into `main` only after sprint closure.
- Release tags are created from `main` after merge.
