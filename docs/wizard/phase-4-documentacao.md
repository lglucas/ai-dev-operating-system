# Phase 4 — Documentação

**Commit tag:** `[STAGE:DOCUMENTACAO]`
**Canonical source:** [`WIZARD.md`](../../WIZARD.md) stages 4.1–4.4

---

## Goal

Reverse-engineer the formal documentation from the approved prototype, then plan the execution.

---

## The method: read, don't invent

This phase does not design the product. The product was designed in Phase 3. This phase reads `docs/product/DESIGN-DIRECTION.md` and `prototype-lab/<chosen>/` and writes down what is already there — **plus everything the prototype implies but does not show.**

That second part is the whole point. A prototype has three screens; a real product has those three screens plus empty states, error states, permission failures, loading, offline, and the long tail of what happens when the data is ugly. The prototype makes their absence visible. This phase is required to list them as gaps, not to quietly invent answers.

---

## 4.1 — Product Brief

`docs/product/PRODUCT-BRIEF.md` — the operational product document used by agents and developers. Not investor copy; that is the Business Plan's job.

Contains: one-liner, personas, jobs to be done, user flows, MVP, Phase 1, Phase 2, non-goals, activation moment, retention loop, monetization logic, trust/compliance requirements, UX tone, product risks.

Reverse-engineering checks specific to the new order:

- Every screen in the approved prototype appears here, or is explicitly marked as cut.
- The user flow section matches the flow that was actually clickable.
- UX tone comes from `DESIGN-DIRECTION.md`, not from imagination.
- Implied-but-unshown behavior is listed as a gap.

---

## 4.2 — Technical Plan

`docs/technical/TECHNICAL-PLAN.md` — stack, rationale, architecture assumptions, data model, auth model, API conventions, security baseline, privacy/compliance baseline, testing strategy, CI/CD, environment variables, deployment assumptions, risks, open questions.

The data model is derived from the entities visible in `prototype-lab/shared/mock-data.js`. Mock data written to make three screens look real is a surprisingly honest first schema — it contains exactly the fields the product actually displays, and nothing speculative.

No alpha/beta stack unless the user explicitly accepts it.

---

## 4.3 — Stack pack pick

The second registry pass, now across the whole catalog, because the stack is finally known.

Output: `docs/technical/registry-pick.md`, with packs sorted into must-install / recommended / optional / skipped-and-why. The skill never installs anything — the user decides.

---

## 4.4 — Sprint roadmap

`docs/SPRINTS.md` plus the individual sprint files. Target 14–20 sprints. Sequencing and clarity matter more than time accuracy.

Each sprint carries objective, DoD, deliverables, agents, skills, security gates, tests, risks, dependencies, expected artifacts, and changelog/session-log requirements.

**Sprint -1 changed job.** It used to build the prototype. The prototype now exists before this roadmap is written, so Sprint -1 consolidates the approved prototype and `DESIGN-DIRECTION.md` into a real design system — tokens, components, layout primitives — that Sprint 1 builds on.
