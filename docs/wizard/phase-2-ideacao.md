# Phase 2 — Ideação

**Commit tag:** `[STAGE:IDEACAO]`
**Canonical source:** [`WIZARD.md`](../../WIZARD.md) stages 2.1–2.9

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

**Before leaving stage 2.8**, confirm the BP explicitly states four things: personas, positioning, MVP scope, and the primary user flow. Phase 3 has no Product Brief to lean on, so these four are the **minimum** it can rely on — the research in `knowledge-base/` and the ten strategic questions remain inputs too.

---

## 2.9 — Pitch, and the publication question

Two outputs: `docs/business/PITCH.md` derived from the BP, and an explicit decision about whether either document goes on the public internet.

### The pitch derives, it never adds

Ten sections maximum, every claim already present in BP v0.0.2. If something belongs in the pitch but is missing from the BP, the BP is incomplete — fix it there and re-derive. A pitch that says something the BP does not is how a founder ends up contradicting their own diligence materials.

### The publication question is a suggestion, not a default

Most founders never consider putting the BP online. The wizard's job is to put the option on the table with honest trade-offs and then accept the answer. **"Nada online por enquanto" is a complete answer** and closes the stage.

Three options are offered: everything public, a trimmed public page with the full version gated, or nothing for now.

The case for it: a link beats a PDF attachment, it builds authority, and it lets an investor or large customer qualify themselves without a meeting. The case against: competitors read everything, published numbers become expectations you get held to, and a stale public BP is worse than no public BP.

### The redaction gate

Mandatory if the answer is public or gated. Publishing a Business Plan means publishing whatever is inside it — and several sections should never leave the building: financial projections, unit economics, fundraising status, the internal risk register, supplier terms.

Three carry consequences beyond embarrassment:

- **Personas from real interviews are personal data.** LGPD applies. Run `privacy-audit` before publishing any persona.
- **Competitor teardowns invite retaliation.** Positioning is safe; naming a competitor's specific weakness is not.
- **Published numbers become commitments** that get quoted back during diligence.

### It becomes product surface

If the answer is public or gated, this is no longer a document decision. Routes and navigation land in the Product Brief (4.1); public-vs-gated, auth, `robots.txt` and PDF export land in the Technical Plan (4.2); view analytics are personal data and go through `privacy-audit`; the page becomes a `first-100-users` and `launch-agent` asset.

**Someone must own updating it.** If nobody does, the honest answer is "not now".

Driven by the [`pitch`](../../.claude/skills/pitch/SKILL.md) skill.
