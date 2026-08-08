# Skill audit — 2026-08-08

Full review of all 26 skills in `.claude/skills/`, answering three questions:

1. Can Claude actually find each skill when it is needed?
2. Do any two skills overlap without saying so?
3. Where does each skill come from, and is that attribution reachable?

Companion to [`skill-system.md`](skill-system.md), which explains what a skill *is*. This document records what the skills *were*, as of this date.

---

## Finding 1 — Six skills were invisible to auto-invocation

`SKILL.md` files declare themselves through YAML frontmatter. The `description` field is what Claude reads to decide whether a skill applies. With no frontmatter, the harness falls back to the H1 heading.

Six skills had no frontmatter at all. Their entire advertised description was their own title:

| Skill | Description Claude saw before | Body length |
|---|---|---|
| `business-plan-impact-review` | "Business Plan Impact Review Skill" | 7 lines |
| `product-brief` | "Product Brief Skill" | 24 lines |
| `project-genesis` | "Project Genesis Skill" | 21 lines |
| `prototype-lab` | "Prototype Lab Skill" | 22 lines |
| `research-waves` | "Research Waves Skill" | 7 lines |
| `sprint-roadmap` | "Sprint Roadmap Skill" | 17 lines |

**These are the six core wizard skills.** Every phase of the Project Genesis Wizard is driven by one of them. The twenty peripheral skills — added later in the v0.3.0+ vibe-coder pack — all had proper frontmatter with Portuguese trigger phrases.

The oldest and most important skills were the invisible ones.

### Worst case: `business-plan-impact-review`

Five live files instruct Claude to invoke it by name — `grow-sustainably/SKILL.md:100,161`, `multi-ai-review/SKILL.md:19,145`, `commands/multi-ai-review.md:49`, `commands/grow-sustainably.md:25,44`, `README.md:221`. Other skills were routing work to a skill that could not describe itself.

**Fixed.** All 26 now carry `name` and `description`.

---

## Finding 2 — Ten skills had no trigger phrases

A description that states what a skill *does* is not the same as one that states when to *reach for it*. The user of this OS is a Brazilian vibe coder who types in Portuguese; a skill with no Portuguese trigger phrase effectively waits to be called by name.

Ten of the twenty frontmattered skills had zero quoted trigger phrases:

`cost-watchdog`, `decision-log`, `feature-scaffold`, `os-self-test`, `privacy-audit`, `release-check`, `secrets-discipline`, `secrets-scan`, `sprint-management`, `verify-build-works`

Six of those ten are the v0.2.0-era originals, recognizable by body length: `secrets-scan` (14 lines), `decision-log` (17), `release-check` (25), `privacy-audit` (28), `feature-scaffold` (30), `sprint-management` (33). The vibe-coder pack skills run 60–162 lines with rich triggers. **Two generations of skill authorship, never reconciled.**

### Evidence this had a real cost

`os-self-test` exists to validate OS coherence. Three separate session logs record that it *was not run* when it should have been:

- `session-log/2026-04-30-registry-framework-v0.4.0.md:77`
- `session-log/2026-05-09-registry-additions.md:74`
- `session-log/2026-08-08-v0.5.0-wizard-5-phases.md:103`

A verification skill nobody remembers to invoke is a verification skill that does not exist.

**Fixed.** All 26 descriptions now carry trigger phrases. 26/26 verified.

---

## Finding 3 — Overlapping pairs, documented one-way or not at all

| Pair | Relationship | Was it stated? |
|---|---|---|
| `secrets-discipline` ↔ `secrets-scan` | preventive workflow vs. detection pass | **Neither said so.** The distinction existed only in `docs/registry/packs/gitleaks.md:49` — an external pack file. |
| `cost-watchdog` ↔ `usage-monitor` | preventive vs. post-launch tracking | **One-way.** `usage-monitor` linked back; `cost-watchdog` did not — despite `session-log/2026-04-28-vibe-coder-pack-v0.3.0.md:15` claiming they "cross-link to each other". |
| `first-100-users` ↔ `grow-sustainably` | 0→100 vs. 100→1000 | **One-way, badly.** `grow-sustainably` referenced its predecessor in 7 places; `first-100-users` referenced its successor in **zero**. A founder who reached 100 users was never routed forward. |

**Fixed.** All three pairs now state the relationship from both sides.

---

## Finding 4 — `release-check` did not delegate

`release-check` listed "Lint/build pass" and "Privacy/security review complete when applicable" as manual checklist items, while `verify-build-works`, `secrets-scan`, and `privacy-audit` existed to do exactly those things — unreferenced.

An open item from `session-log/2026-05-01-v0.4.3-quick-wins.md:75` — *"Optionally cross-link `/multi-ai-review` from existing release-gate skills"* — had also never been actioned.

**Fixed.** The checklist is now a delegation table naming the responsible skill per check, with blocking vs. warning severity, plus a `multi-ai-review` escalation for hard-to-reverse releases.

---

## Finding 5 — GitHub provenance is present, via the registry

The question was whether skills carry references to their upstream GitHub repos.

**23 of 26 skills are original to this repository** and have no upstream to credit. Three have declared inspiration, and all three already link to a registry pack that carries the URL:

| Skill | Links to | Which contains |
|---|---|---|
| `multi-ai-review` | `docs/registry/packs/gstack.md` | `https://github.com/garrytan/gstack` |
| `processize` | `docs/registry/packs/slavingia-skills.md` | `https://github.com/slavingia/skills` |
| `grow-sustainably` | both of the above | both URLs |

**This is working as designed and needs no change.** The pattern is `skill → registry pack → upstream URL`, which keeps license and review status in one place rather than duplicating URLs across skill files. Repo-wide attribution additionally lives in `ATTRIBUTIONS.md`, `UPSTREAM-SOURCES.md`, and `docs/origin-map.md`.

A per-skill `source:` frontmatter field was considered and **declined** — it would duplicate the registry with no added reachability.

---

## Coverage gaps found but NOT fixed

These are real findings that were out of scope for this pass. Recorded so they are not rediscovered later.

### There is no `technical-plan` skill

Every other Phase 4 artifact has a driving skill:

| Artifact | Skill |
|---|---|
| `PRODUCT-BRIEF.md` | `product-brief` ✅ |
| `SPRINTS.md` | `sprint-roadmap` ✅ |
| `TECHNICAL-PLAN.md` | **none** ❌ |

This mirrors a gap that existed in `docs/wizard/` until v0.5.0 PR 1, which had files for the Product Brief and sprint planning but none for the Technical Plan. The Technical Plan is currently produced by `WIZARD.md` stage 4.2 prose alone.

### `templates/project/CLAUDE.md:62` advertises a command that does not exist

It lists `/release-check` in its command table. `.claude/commands/` contains eleven commands; `release-check.md` is not among them. Either the command should be created or the template row removed.

### `docs/skill-system.md` example table is stale

Lines 14–22 list eight illustrative skills, including `design-prototype` and `security-review` — **neither exists** in `.claude/skills/`. The table predates the current inventory.

---

## Final state

| Metric | Before | After |
|---|---|---|
| Skills with frontmatter | 20 / 26 | **26 / 26** |
| Skills with trigger phrases | 10 / 26 | **26 / 26** |
| Overlapping pairs documented both ways | 0 / 3 | **3 / 3** |
| `release-check` delegating to sibling skills | no | **yes** |

Verification command:

```bash
for f in .claude/skills/*/SKILL.md; do
  d=$(awk '/^---$/{c++; next} c==1 && /^description:/{print}' "$f")
  q=$(( $(echo "$d" | grep -o '"' | wc -l) / 2 ))
  [ "$q" -eq 0 ] && echo "no trigger: $(basename $(dirname $f))"
done
```
