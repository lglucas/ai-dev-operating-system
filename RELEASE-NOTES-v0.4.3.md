# Release Notes — v0.4.3

**Date:** 2026-05-01
**Theme:** Quick wins from the v0.4.2 comparison study — ETHOS manifesto, three new cross-cutting skills, and a `#agents-marketplace` registry tag.

---

## Summary

A small, fully non-breaking patch release that ships the five quick wins identified during v0.4.2's side-by-side comparison against `gstack` and `slavingia/skills`. No architectural changes; those remain deferred to v0.5.

---

## What's new

### `ETHOS.md` — one-page canonical manifesto

[`ETHOS.md`](ETHOS.md) distills the operating contract into 15 numbered principles every contributor and every agent must internalize. Every rule, agent, skill, and command in this OS must trace back to one of them. Conflicts with ETHOS are bugs, not edge cases.

### `/processize` — validate-then-automate

[`/processize`](.claude/commands/processize.md) (skill: [`processize`](.claude/skills/processize/SKILL.md)) takes a manually-validated workflow and produces `docs/processes/<slug>.md`: a documented, partially-automatable process with a 5-question readiness gate, a 3-stage maturity model (manual → documented → processized), explicit automation boundaries, and circuit breakers for any step with financial-or-higher blast radius.

Inspired by Sahil Lavingia's *Minimalist Entrepreneur* principle: do it manually until it works, then process-ize.

### `/grow-sustainably` — post-100 growth planning

[`/grow-sustainably`](.claude/commands/grow-sustainably.md) (skill: [`grow-sustainably`](.claude/skills/grow-sustainably/SKILL.md)) is the explicit successor to `first-100-users`. It plans the 100 → 1000 phase via four sequential pillars:

1. **Retention before acquisition** — leaky-bucket gate; do not scale acquisition with week-4 retention < 20%.
2. **Compress what already worked** — codify the top single source via `/processize`.
3. **Add ONE new channel deliberately** — 30-day experiment, single primary metric, hard budget cap.
4. **Founder bandwidth check** — run weekly; trip any signal and scaling pauses.

Hard rules against vanity metrics, channel diffusion, and unaudited paid spend. Tier-ordered channel taxonomy from word-of-mouth (Tier 1) to paid ads (Tier 4). Monthly output: `docs/business/growth-plan-<YYYY-MM>.md`.

### `/multi-ai-review` — cross-model adversarial review

[`/multi-ai-review`](.claude/commands/multi-ai-review.md) (skill: [`multi-ai-review`](.claude/skills/multi-ai-review/SKILL.md)) orchestrates 2–4 independent reviewer roles through the same decision artifact, then reconciles disagreements before any irreversible action. Three outcomes: **Proceed**, **Modify and re-review**, **Block**.

Key design choices:

- **Net confidence = MIN of individual scores**, not average. The most worried reviewer represents the least-explored failure mode.
- **At least one reviewer with a different lens** (different agent role OR different model family) is mandatory.
- **Always log to `session-log/`** — even on Proceed; future-you needs the audit trail.

Inspired by `gstack`'s `/codex` cross-review concept, integrated with this OS's existing devil's-advocate / technical-security / business red-team agents.

### `#agents-marketplace` — new registry tag

[`docs/registry/tags/agents-marketplace.md`](docs/registry/tags/agents-marketplace.md) surfaces packs that are *bundled marketplaces* in their own right (curated skill collections distributed as a single installable unit), distinct from `#foundations` (canonical) and `#ecosystem` (broad expansions). Initial members: `gstack`, `slavingia-skills`, `antigravity-awesome-skills`, `anthropics-skills`, `everything-claude-code`, `ruflo`, `holyclaude`, `vibeyard`, `optio`, `open-design`, `trailofbits-skills`.

The tag also encodes a conflict-resolution playbook for the case when two marketplace packs are installed in the same project.

---

## What was deferred to v0.5

Reaffirming the deferral list from v0.4.2 — these are architectural, not quick wins:

- Migration to the official Claude Code Plugins marketplace install path (no plugin manifest exists today).
- Trust tiers + allowlists model for skills (currently documentation only, not enforced).
- Real-browser testing automation (Playwright + anti-bot stealth).
- Persistent knowledge DB consultable across sessions (GBrain-like).
- Parallel sprint orchestration (Conductor-like).
- Resolution of `WIZARD.md` hardcoded paths incompatible with plugin mode.
- Resolution of `/recall` infrastructure decisions.
- Registry-of-registries vs marketplace conventions reconciliation.

The audit trail for these lives in `session-log/` and the OS memory; sequencing requires human input from the maintainer.

---

## How to use

```bash
git pull origin main
git checkout v0.4.3
```

Inside any project:

```txt
/processize
/grow-sustainably
/multi-ai-review
/registry-pick
```

Or browse the manifesto:

```txt
cat ETHOS.md
```

---

## Credits

The five additions trace back to the v0.4.2 comparison-study delivered in chat (not as a session log) for `slavingia/skills` and `gstack` against this OS. No invented data — every external concept cited above was authored by its respective creators (Sahil Lavingia, Garry Tan / YC).
