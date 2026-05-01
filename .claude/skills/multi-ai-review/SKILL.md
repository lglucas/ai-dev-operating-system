---
name: multi-ai-review
description: Get a second (and third) AI opinion on hard-to-reverse decisions. Runs the same prompt through different agent roles or model families in parallel, then reconciles disagreements. Inspired by gstack's `/codex` cross-review pattern. Activated for architecture decisions, security-sensitive code, pricing/packaging changes, deploy gates, legal-adjacent text, or any decision the user flags as "não dá pra desfazer fácil".
---

# Multi-AI Review

Solo reasoning ships solo blind spots. For decisions with hard-to-reverse blast radius, get at least one independent reviewer with a different prior and explicitly reconcile disagreements before committing.

This is **not** ceremony. It is the cheapest mistake-prevention you can buy in an AI-assisted workflow: minutes of compute against hours-to-days of cleanup.

---

## When to invoke

Mandatory:
- Architecture decisions touching auth, data model, or payments.
- Migrations, schema changes, or anything irreversible without a backup restore.
- Pricing or packaging changes (also triggers `business-plan-impact-review`).
- Public-facing legal/compliance text (Privacy Policy, Terms, refund policy, LGPD/GDPR statements).
- Any deploy gate where rollback is non-trivial.
- Adoption of a new external skill bundle (`#agents-marketplace` packs).
- The user explicitly says "isso é importante" / "não posso errar aqui" / "double-check isso".

Optional but recommended:
- New feature spec right before sprint commitment.
- Naming a public-facing thing you can't easily rename later (product name, API endpoint, slug).
- Choosing between two non-trivially-different stacks.

Skip:
- Routine code edits, refactors, bug fixes with tests.
- Reversible UI tweaks.
- Internal-only docs.

---

## Reviewer roles (pick at least 2)

The skill orchestrates multiple reviewers, each with a distinct lens. The user picks the relevant 2–4 per decision. Default set in **bold**.

| Role | Lens | Existing agent (if any) |
|------|------|-------------------------|
| **Devil's advocate** | "Why is this wrong?" | `.claude/agents/devils-advocate-agent.md` |
| **Technical/security red team** | "How does this break or get exploited?" | `.claude/agents/technical-security-red-team-agent.md` |
| **Business red team** | "Why does this not make business sense?" | `.claude/agents/business-red-team-agent.md` |
| Privacy/compliance | "Where does this leak personal data or trip LGPD/GDPR?" | uses `privacy-audit` skill |
| Cost watchdog | "Where does this silently get expensive?" | uses `cost-watchdog` skill |
| Plain-Portuguese reader | "Would a non-dev customer understand this?" | uses `plain-portuguese-explainer` skill |
| Independent model | Same prompt, different model family (e.g. Sonnet ↔ Opus, or external `/codex`) | external |

Always include at least one reviewer whose model family OR agent role is different from the agent that produced the artifact. Same-model self-review is weaker than independent review.

---

## Procedure

1. **Frame the decision artifact.** Provide the reviewers with: the decision/spec/diff, the explicit blast-radius statement, and the alternatives considered.
2. **Dispatch reviewers in parallel.** Each reviewer answers the same 4 questions:
   - What is your single biggest concern?
   - What is the most likely failure mode?
   - What is one alternative that should also be considered?
   - On a 0–10 scale, how confident are you the proposed direction is correct?
3. **Collect raw outputs verbatim.** Do not pre-summarize.
4. **Reconcile disagreements.** Produce a reconciliation note that lists:
   - Where reviewers agreed (treat as locked-in concerns).
   - Where reviewers disagreed (require human judgment).
   - Net confidence (lowest individual score, not the average).
5. **Decide.** Three possible outcomes:
   - **Proceed** — all reviewers ≥7 confidence, no unresolved high-severity disagreement.
   - **Modify and re-review** — one or more concerns require artifact change; re-run with the modified artifact.
   - **Block** — at least one reviewer ≤4 confidence on a hard-to-reverse aspect. Decision needs more research, alternatives, or human deliberation.
6. **Log in `session-log/`.** Always log the reconciliation, even (especially) for "Proceed" — future-you needs to know the decision was reviewed.

---

## Output format

```markdown
## Multi-AI Review — <decision name>

**Date:** <YYYY-MM-DD>
**Decision artifact:** <link to spec / diff / file>
**Blast radius:** <reversible / cosmetic / financial / customer-trust / P0>
**Reviewers:** <list of roles>

### Raw reviewer outputs

#### <Reviewer 1 role>
- Biggest concern: ...
- Most likely failure mode: ...
- Alternative: ...
- Confidence: <0–10>

#### <Reviewer 2 role>
...

### Reconciliation

- **Agreed concerns:** ...
- **Disagreements requiring human judgment:** ...
- **Net confidence (min):** <0–10>

### Decision

- [ ] Proceed
- [ ] Modify and re-review (next iteration: <YYYY-MM-DD>)
- [ ] Block

### Action items

- ...

### Cross-link

- Session log entry: `session-log/<date>-<slug>.md`
```

---

## Anti-patterns (will fail the review)

- **Same-model echo chamber.** Asking the same Claude-Opus instance "are you sure?" is not multi-AI review.
- **Average-the-confidence.** Net confidence is the **minimum** of individual scores, not the mean. The most worried reviewer represents the least-explored failure mode.
- **Ignore the dissent.** A reviewer scoring 4 with a specific concern is more valuable than three reviewers scoring 9 with vague approval.
- **Run after committing.** Review BEFORE the irreversible action. Post-hoc review is a session log, not a gate.
- **Skip the log.** A review that wasn't logged didn't happen, from the perspective of the next session.

---

## Cost guardrails

Each reviewer is a separate model invocation. For cost-conscious projects:

- Default to 2 reviewers, escalate to 4 only for P0 blast radius.
- Prefer existing in-repo agents (`devils-advocate-agent`, `technical-security-red-team-agent`, `business-red-team-agent`) over spawning external models for routine cases.
- Use `cost-watchdog` to verify the cumulative review cost is within the project's monthly LLM budget, especially if the skill is invoked >5x/week.

---

## Cross-references

- Principle: [`ETHOS.md`](../../../ETHOS.md) item 15.
- Existing reviewer agents: [`.claude/agents/devils-advocate-agent.md`](../../agents/devils-advocate-agent.md), [`.claude/agents/technical-security-red-team-agent.md`](../../agents/technical-security-red-team-agent.md), [`.claude/agents/business-red-team-agent.md`](../../agents/business-red-team-agent.md).
- Logging: [`decision-log`](../decision-log/SKILL.md) skill.
- Often paired with: `/processize` (financial blast radius), `/grow-sustainably` (paid channel), `release-check` (deploy gate), `privacy-audit`, `business-plan-impact-review`.
- Inspired by: [`docs/registry/packs/gstack.md`](../../../docs/registry/packs/gstack.md) (`/codex` multi-AI cross-review concept).
