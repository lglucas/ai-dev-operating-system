# /multi-ai-review

Cross-review a hard-to-reverse decision through 2–4 independent reviewer roles, reconcile disagreements, and decide proceed / modify / block before committing.

## Expected input

```txt
/multi-ai-review
```

Optional arguments:

```txt
/multi-ai-review artifact="<path or short name>" blast="<reversible|cosmetic|financial|customer-trust|P0>" reviewers="<role1,role2,...>"
```

If arguments are omitted, the skill reads the current diff / branch state and asks for the missing fields. The skill will not proceed without an explicit blast-radius statement.

## Actions

1. Invoke the `multi-ai-review` skill (`.claude/skills/multi-ai-review/SKILL.md`).
2. Pick at least 2 reviewer roles. Default: devil's advocate + technical/security red team. Add more for higher blast radius.
3. Dispatch reviewers in parallel; each answers the same 4 questions (concern, failure mode, alternative, confidence 0–10).
4. Reconcile: agreed concerns, disagreements, net confidence (= MIN of individual scores).
5. Decide: Proceed / Modify and re-review / Block.
6. Log via the `decision-log` skill into `session-log/`.

## When to use

- Architecture, auth, data model, payments.
- Migrations or anything irreversible without a backup restore.
- Pricing/packaging changes.
- Public legal/compliance text (Privacy Policy, ToS, refund, LGPD/GDPR).
- Deploy gates with non-trivial rollback.
- Adopting a new external `#agents-marketplace` skill bundle.
- The user says "isso é importante" / "não posso errar aqui" / "double-check isso".

## When NOT to use

- Routine edits, refactors, bug fixes with tests.
- Reversible UI tweaks.
- Internal-only docs.

## Cross-references

- Skill: `.claude/skills/multi-ai-review/SKILL.md`
- Principle: [`ETHOS.md`](../../ETHOS.md) item 15.
- Existing reviewer agents: `.claude/agents/devils-advocate-agent.md`, `.claude/agents/technical-security-red-team-agent.md`, `.claude/agents/business-red-team-agent.md`.
- Often paired with: `/processize`, `/grow-sustainably`, `release-check`, `privacy-audit`, `business-plan-impact-review`.
