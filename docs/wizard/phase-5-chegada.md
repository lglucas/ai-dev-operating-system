# Phase 5 — Chegada

**Commit tag:** `[STAGE:CHEGADA]`
**Canonical source:** [`WIZARD.md`](../../WIZARD.md) stage 5.1

---

## Goal

Real code, in the real app.

---

## 5.1 — Start coding only after approval

Coding starts only after the user approves all five of:

1. `BP v0.0.2`
2. The prototype direction (`DESIGN-DIRECTION.md`)
3. `PRODUCT-BRIEF.md`
4. `TECHNICAL-PLAN.md`
5. The sprint roadmap

The first implementation sprint must follow `.claude/rules/` — feature-based architecture, code style, secrets, security baseline, git workflow.

### `CODEMAP.md` starts here

Phase 5 is the first phase with code, so it is the first phase with a codemap. The placeholder shipped with the project stops being a placeholder the moment Sprint 0 lands a real file:

```bash
node scripts/codemap.js
```

Commit the generated map alongside the code that produced it. Regenerate whenever anything the map records changes: the file list, a `Purpose:` header, or a line count — and since the map stores exact counts, that means most edits. CI runs `--check` and fails on drift, because a stale map is worse than no map: the agent trusts it, skips reading, and acts on stale information.

The map is only as good as the `Purpose:` headers that the `code-style` rule already requires. A file without one shows up flagged — fix the header, not the map.

---

## What Phase 5 inherits

By the time code starts, the project already has a validated business case, a chosen visual direction with extracted tokens, a product spec whose gaps are named rather than hidden, a technical plan whose data model came from real mock data, and a sequenced roadmap.

That is the point of the four phases before it. The wizard is slow at the start so that this phase is not.
