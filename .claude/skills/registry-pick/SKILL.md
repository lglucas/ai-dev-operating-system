---
name: registry-pick
description: Recommend external repo packs from docs/registry/ that fit a project's stack, domain, and constraints. Use during /project-start (after the Technical Plan), when the user asks "que repos eu deveria usar?", or whenever a new need (security review, design system, deploy guidance) appears mid-build.
---

# Registry Pick

Read `docs/registry/INDEX.md` and `docs/registry/packs/*.md`, match the project's signals against pack tags and fit-signals, and produce a short, opinionated recommendation.

This skill does NOT install anything. It shortlists what is worth installing for THIS project.

---

## When to invoke

- During WIZARD Stage 11.5 (after Technical Plan, before Sprint roadmap).
- When the user asks "que repos eu uso aqui?", "tem algum pack pra X?", "que skill externa ajuda nisso?".
- When a new domain need surfaces mid-build (compliance, design system, malware analysis, web3 integration).
- After adding a new pack to the registry, to retest the recommendation for the current project.

---

## Inputs the skill needs

Before recommending, gather these from the project:

| Signal | Source | Example |
|--------|--------|---------|
| Stack | `package.json`, `Anchor.toml`, `requirements.txt`, `Gemfile`, `Cargo.toml` | `@solana/web3.js` → web3/Solana |
| Domain | `docs/business/BUSINESS-PLAN.md`, `docs/product/PRODUCT-BRIEF.md` | "PHI" → healthcare, "pagamentos" → fintech |
| Compliance | `docs/technical/TECHNICAL-PLAN.md` security/privacy section | LGPD, GDPR, HIPAA, PCI |
| UI surface | Product Brief, prototype-lab presence | mobile, dashboard, B2C web |
| Public/private | repo metadata, deploy intent | public GitHub → enables `gitleaks` |
| Team familiarity | user statement | "primeira vez com Claude Code" → start with `#foundations` only |

If signals are missing, ask 2–3 targeted questions BEFORE recommending. Never invent stack details.

---

## Procedure

1. **Read** `docs/registry/INDEX.md` to enumerate available packs.
2. **Score** each pack against the project signals (stack match, domain match, compliance match, team-readiness fit).
3. **Filter** out packs whose `When NOT to install` matches the project shape.
4. **Resolve conflicts** using the `Conflicts and overlaps` section in each one-pager (pick one of overlapping packs based on context).
5. **Order** by priority: `must-install` → `recommended` → `optional` → `skip-for-now`.
6. **Output** a short recommendation table + rationale + install commands copied from each pack one-pager.
7. **Defer** install execution to the user (this skill never runs `git clone` / `npm install` itself).

---

## Output format

```markdown
## Registry recommendation for <project name>

Project signals detected:
- Stack: <e.g. Next.js + Supabase>
- Domain: <e.g. SaaS B2B compliance>
- Compliance: <e.g. LGPD>
- UI: <e.g. dashboard + landing>
- Public repo: <yes/no>

### Must install

| Pack | Why for this project | How |
|------|----------------------|-----|
| `<slug>` | <one sentence> | `<install command>` |

### Recommended

| Pack | Why | How |
|------|-----|-----|
| ... | ... | ... |

### Optional

| Pack | Why | How |
|------|-----|-----|
| ... | ... | ... |

### Skipped (and why)

- `<slug>` — <reason from `When NOT to install`>

### Open questions before installing

- ...
```

---

## Rules

- **Never invent packs.** Only recommend slugs that exist in `docs/registry/INDEX.md`.
- **Never install.** Show the user the install command from the pack one-pager and stop.
- **Cite the one-pager.** Every recommendation links back to `docs/registry/packs/<slug>.md`.
- **Never recommend `archived` packs.**
- **Flag missing license info.** If a pack has `License: check upstream`, surface that as an open question.
- **Re-run after changes.** If the Technical Plan or Product Brief changes, re-invoke the skill.

---

## Adding new packs

When the user says "encontrei um repo novo, adiciona aí":

1. Open the upstream URL.
2. Confirm license, status, and active maintenance.
3. Pick a slug (lowercase, hyphenated).
4. Create `docs/registry/packs/<slug>.md` from the template in `docs/registry/README.md`.
5. Add a row to `docs/registry/INDEX.md`.
6. Add the slug to relevant `docs/registry/tags/<tag>.md` files.
7. If the pack also influenced this OS itself, cross-link in `UPSTREAM-SOURCES.md`.
8. Re-run this skill against the current project to see if the new pack changes the recommendation.

---

## Cross-references

- Registry root: `docs/registry/README.md`
- Master table: `docs/registry/INDEX.md`
- Tags: `docs/registry/tags/`
- Origin/audit map: `UPSTREAM-SOURCES.md`
