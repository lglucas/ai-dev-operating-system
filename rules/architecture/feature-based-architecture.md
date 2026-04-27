# Feature-based architecture

Organize product code by feature, not by technical layer.

Recommended shape:

```txt
src/features/feature-name/
├── components/
├── actions/
├── api/
├── db/
├── hooks/
├── schemas/
├── tests/
└── index.ts
```

A feature should be understandable and removable with minimal impact on unrelated features.

## Avoid

- giant global `components/` folders;
- cross-feature hidden dependencies;
- shared abstractions created before repetition is proven;
- refactors that change unrelated features during a focused task.
