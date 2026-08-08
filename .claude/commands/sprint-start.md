---
description: Abre uma sprint — cria a branch, o doc da sprint e o objetivo com DoD. Use quando disser "vamos começar a sprint" ou ao terminar a anterior.
argument-hint: sprint=NN theme="Foundation" dates="YYYY-MM-DD to YYYY-MM-DD"
---

# /sprint-start

Start a new sprint.

## Expected input

```txt
/sprint-start sprint=01 theme="Foundation" dates="YYYY-MM-DD to YYYY-MM-DD"
```

## Actions

1. Confirm sprint metadata.
2. Create sprint branch.
3. Create sprint doc from template.
4. Update current sprint metadata.
5. Commit kickoff.
