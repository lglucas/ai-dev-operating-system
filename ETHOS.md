# ETHOS — AI Dev Operating System

**Status:** v0.4.3 · canonical · short by design.

This file is the one-page manifesto of the OS. Every rule, agent, skill, and command in this repository must trace back to one of these principles. If a future change cannot be defended against ETHOS, the change is wrong, not ETHOS.

For the full operating contract see [`CLAUDE.md`](CLAUDE.md). For the modular versions of these rules see [`.claude/rules/`](.claude/rules/).

---

## 1. Context before code

Do not code before context. The WIZARD is not a suggestion — ideation, research, business plan, product brief, technical plan, and sprint roadmap come first. AI coding agents that start from chaos produce chaos.

## 2. Memory is a feature

Decision memory lives in [`session-log/`](session-log/). Why-decisions outlast what-decisions. A repo without session logs is a repo where every future session relearns the same lessons.

## 3. Documentation layers are not interchangeable

Business plan ≠ product brief ≠ technical plan ≠ sprints ≠ changelog ≠ session log. Each answers one question. Mixing them collapses the system.

## 4. Source-backed or labeled

No invented facts in market, competitor, legal, pricing, regulatory, or compliance claims. Separate facts, inferences, assumptions, and open questions. If something is a guess, label it as a guess.

## 5. Red team is mandatory

Multi-agent review is not optional ceremony. Devil's advocate, technical-security red team, and business red team exist because solo reasoning ships solo blind spots.

## 6. Human review is non-negotiable for material decisions

BP v0.0.1 → human review → BP v0.0.2. The human is in the loop, not the audience. The OS does not ship business plans, pricing, or legal documents without a human signoff line.

## 7. Stable by default

Use stable technology by default; alpha/beta requires explicit acceptance. Boring stack, exciting product.

## 8. Secrets never in repo

`.env` examples only. Real keys live in environment variables and secret managers. A leaked secret is a P0 incident, not a cleanup task.

## 9. Privacy is a design input, not a polish step

Personal data triggers a privacy review *before* implementation. LGPD/GDPR baseline is part of day-zero scaffolding, not a launch checklist.

## 10. Modularity over cleverness

Code files under 200 lines where practical. Feature-based architecture over technical-layer architecture. A feature should be removable without unrelated breakage.

## 11. The OS is project-agnostic

This repo does not assume Next.js, Supabase, Solana, or any specific stack. Stack-specific guidance lives in the External Repo Registry ([`docs/registry/`](docs/registry/)) and is opt-in per project.

## 12. Vibe coders are first-class

Non-developers building SaaS with AI are the primary user. The OS protects them with defensive layers (`secrets-discipline`, `cost-watchdog`, `plain-portuguese-explainer`) and helps them with active layers (`bug-triage-agent`, `launch-agent`, `legal-compliance-agent`, `first-100-users`).

## 13. Process before automation

Validate manually, then automate. Automating a broken process scales the breakage. See: [`/processize`](.claude/commands/processize.md).

## 14. Sustainable growth over vanity metrics

Acquisition theater (signups that never used the product) is not progress. The first 100 users are conversations, not impressions. Post-100, growth is retention × honest reach. See: [`/grow-sustainably`](.claude/commands/grow-sustainably.md).

## 15. Multi-perspective review for high-stakes decisions

For architecture, security, and business calls with hard-to-reverse blast radius, get a second AI opinion (different model family or different agent role) before committing. See: [`/multi-ai-review`](.claude/commands/multi-ai-review.md).

---

## What ETHOS is not

- ETHOS is not a tutorial — see [`START-HERE.md`](START-HERE.md).
- ETHOS is not a specification — see [`CLAUDE.md`](CLAUDE.md) and [`.claude/rules/`](.claude/rules/).
- ETHOS is not exhaustive — it is the *minimum* every contributor and every agent must internalize.

If a rule conflicts with ETHOS, ETHOS wins. If reality conflicts with ETHOS, the rule changes — but only after a session log entry explains why.
