# Phase 2 — Ideação

**Commit tag:** `[STAGE:IDEACAO]`
**Canonical source:** [`WIZARD.md`](../../WIZARD.md) stages 2.1–2.8

---

## Goal

A researched, stress-tested Business Plan the founder actually believes in — `BP v0.0.2`.

---

## 2.1–2.2 — Ideation and the ten questions

The first user response is expected to be incomplete and informal.

Claude extracts structure from it, then returns a polished understanding, a stronger version of the concept, visible risks, and **exactly ten tailored questions**.

Do not ask generic startup questions when the user already provided context. Ask sharper questions that mature the project. Then stop and wait.

---

## 2.3 — Research plan approval

Research does not begin until the user approves the 3-wave plan. Claude presents which agents run, what they look for, and where findings land — and waits for an explicit yes.

---

## 2.4–2.6 — The three waves

| Wave | Agents | Output |
|---|---|---|
| **1** | Competitor Research, Market Research | `knowledge-base/competitors/`, `knowledge-base/market/` |
| **2** | Devil's Advocate, Business/Finance Red Team, Technical/Security Red Team | `docs/business/_review/wave-2-*.md` |
| **3** | Coordinator, Copywriter | `docs/business/_review/wave-3-coordinator.md`, `docs/business/BUSINESS-PLAN.md` v0.0.1 |

Every claim must separate facts, inferences, assumptions, and open questions. Every red team critique must propose a fix, not just an objection.

---

## 2.7 — Human review

`BP v0.0.1` is not final. The user reads it with a notepad and returns corrections by chapter and subchapter, in one long pass.

This is a hard stop. Claude waits.

---

## 2.8 — BP v0.0.2 with impact review

Claude applies the corrections, then runs a second pass checking every change for downstream effects: a price change moves projections, LTV, and positioning; a persona change moves GTM, UX, and MVP scope.

`BP v0.0.2` becomes the contract that Phase 3 builds against.

**Before leaving this phase**, confirm the BP explicitly states four things: personas, positioning, MVP scope, and the primary user flow. Phase 3 has no Product Brief to lean on — these four are its only specification.
