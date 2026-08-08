---
name: pitch
description: Derive a 10-section pitch from BP v0.0.2 into docs/business/PITCH.md, then ask the founder whether the BP and Pitch should live online inside the product (/pitch, /investors) — running a redaction gate over what must never go public. Runs at WIZARD stage 2.9. Use when the user says "preciso de um pitch", "vou apresentar pra investidor", "quero pôr o BP no site", "dá pra deixar isso público?", "como resumo tudo isso em 10 slides?".
---

# Pitch

Two jobs, in order: compress the Business Plan into something a person will sit through, then decide — explicitly — whether it goes on the public internet.

Runs at **WIZARD stage 2.9**, after BP v0.0.2 is accepted and before Phase 3.

---

## Job 1 — Write the pitch

Source: `docs/business/BUSINESS-PLAN.md` v0.0.2. Template: `templates/business/PITCH.template.md`. Output: `docs/business/PITCH.md`.

**The pitch derives from the BP. It never adds to it.**

If a claim belongs in the pitch but is not in the BP, that is a signal the BP is incomplete — go back and fix the BP, then re-derive. A pitch that says something the BP does not is how founders end up contradicting their own diligence materials.

Ten sections maximum. If it does not fit, the problem is the argument, not the format.

---

## Job 2 — Ask the publication question

**This is a suggestion, not a default.** Most founders never consider putting the BP online. The skill's job is to put the option on the table with honest trade-offs and then accept whatever the user decides. "Not now" is a complete, valid answer.

Present all three options:

| Option | What it means |
|---|---|
| **(a) Tudo público** | BP + Pitch on a public URL, indexed |
| **(b) Público enxuto + completo gated** | Trimmed public page; full version behind login or a secret link |
| **(c) Nada online por enquanto** | Decide again after launch |

State both sides. Do not sell it.

**In favor:** a link beats a PDF attachment; builds authority; lets an investor, partner, or large customer qualify themselves without a meeting; kills the problem of a stale version circulating.

**Against:** competitors read everything, including what you consider an advantage; published numbers become expectations you get held to; it requires maintenance, and a stale public BP is worse than none; several sections cannot go out at all.

---

## The redaction gate

Mandatory when the answer is (a) or (b). Publishing a Business Plan means publishing whatever is inside it.

| Usually safe | Do NOT publish without explicit, considered approval |
|---|---|
| Problem and solution narrative | Financial projections, burn, runway |
| Positioning and differentiation | Unit economics — CAC, LTV, margins |
| Market context with **public** sources | Pricing not yet announced |
| Personas, generalized | Personas traceable to a real interviewee |
| Directional roadmap | Dated delivery commitments |
| Team and mission | Fundraising status, valuation, cap table |
| Metrics you will stand behind | Internal risk register |
| — | Supplier and partner terms |
| — | Competitor teardown naming specific weaknesses |

Three rows carry consequences beyond embarrassment:

1. **Personas from real interviews are personal data.** "Marina, 34, gerente de clínica em Porto Alegre" is an LGPD problem when Marina is someone you actually interviewed. Invoke [`privacy-audit`](../privacy-audit/SKILL.md) before publishing any persona or team entry.
2. **Competitor teardowns invite legal and PR retaliation.** "We are the one that does X" is positioning. "Their onboarding is broken" is a liability.
3. **Published numbers become commitments.** A projection on a public page gets quoted back during diligence, months later, when it is no longer true.

Get row-by-row sign-off. Record it in the redaction table inside `PITCH.md` — Phase 4 builds the page from that table.

---

## Route the downstream consequences

If the answer is (a) or (b), this stops being a document decision and becomes product surface. Record it so later phases pick it up:

| Consequence | Lands in | When |
|---|---|---|
| Routes (`/pitch`, `/investors`), navigation placement | Product Brief | stage 4.1 |
| Public vs. gated, auth model, `robots.txt`, SEO, PDF export | Technical Plan | stage 4.2 |
| Analytics on who views the page — **personal data** | [`privacy-audit`](../privacy-audit/SKILL.md) | before shipping |
| The page as acquisition and credibility asset | [`first-100-users`](../first-100-users/SKILL.md), `launch-agent` | post-launch |
| Who maintains it and how often | `PITCH.md` maintenance owner field | now |

The last row is the one that gets skipped. An unowned public BP goes stale in a quarter. If nobody owns it, the honest answer is (c).

---

## Outputs

```txt
docs/business/PITCH.md
session-log/<YYYY-MM-DD>-pitch-and-publication-decision.md
```

The session-log entry must record **which option was chosen and why** — including a "not now", which is the answer most likely to be revisited later.

---

## Re-run when

- The BP changes materially — the pitch is derived, so it drifts. [`business-plan-impact-review`](../business-plan-impact-review/SKILL.md) should flag this.
- The founder's audience changes (accelerator application, then investors, then enterprise buyers).
- A previously-deferred publication decision comes back up, typically around launch.

## Related

- Source document: `docs/business/BUSINESS-PLAN.md`
- Template: `templates/business/PITCH.template.md`
- Gate before publishing: [`privacy-audit`](../privacy-audit/SKILL.md)
- Hard-to-reverse call? [`multi-ai-review`](../multi-ai-review/SKILL.md) — publishing is very hard to un-publish.
