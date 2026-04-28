# 2026-04-28 — Public Release Polish (v0.2.0)

## Context

The repository was at an inconsistent public-release state:

- README badge said `v0.1.0`, but `CHANGELOG.md` already showed `[0.2.0]`.
- Two parallel directory structures existed: `agents/`, `rules/`, `skills/`, `commands/` at root, AND `.claude/agents/`, `.claude/rules/`, `.claude/skills/`, `.claude/commands/`. The two trees had divergent content (root: 4 agents / 7 skill folders / 2 commands; `.claude/`: 9 agents / 6 skill folders / 5 commands).
- `START-HERE.md` and `WIZARD.md` instructed Claude to read only `.claude/`, leaving the root duplicates orphaned and contradictory.
- Two zombie compatibility documents (`docs/excluded-boringco-material.md`, `docs/import-plan-from-boringco.md`) self-described as "kept for compatibility with earlier repository versions" with no public version to be compatible with.
- No `.gitignore` was committed.
- A working-tree zip artifact (`ai-dev-operating-system-overlay-v5-public-ready.zip`) was deleted but uncommitted.

## Decisions

1. **Canonical structure adopted: `.claude/` only.** Per the official Claude Project Structure (`docs/estrutura_claude.jpeg`, kept private), modular rules, skills, agents, and commands belong inside `.claude/`. The root duplicates were non-canonical.

2. **Migrate-then-delete, not cold delete.** Root contained unique content valuable to the operating system (feature-based-architecture rule, git-workflow rule, secrets/privacy rules, decision-log/feature-scaffold/release-check/secrets-scan/sprint-management skills, sprint-start/sprint-close commands). Each unique file was migrated via `git mv` into `.claude/` to preserve history before the root duplicates were removed.

3. **Version unified to v0.2.0.** Following the project's master versioning rules (v0.MAJOR.PATCH), the wizard introduction warrants a major bump from the initial v0.1.0 public release. Reconciled README badge, release notes file, project template (`templates/project/CLAUDE.md`), and `CHANGELOG.md`. Retroactively documented v0.1.0 in the changelog.

4. **Boringco references kept as transparent attribution** in `README.md`, `ATTRIBUTIONS.md`, `UPSTREAM-SOURCES.md`, and `docs/origin-map.md` — all clearly marked as private/internal reference. The zombie compatibility docs (`excluded-boringco-material.md`, `import-plan-from-boringco.md`) were deleted: their useful content already lives in `docs/public-sanitization.md` and `UPSTREAM-SOURCES.md`.

5. **Personal canonical files gitignored.** `docs/instrucoes-master.md` and `docs/estrutura_claude.jpeg` are personal master references, not for public consumption. Added to `.gitignore` along with `CLAUDE.local.md`, `.claude/settings.local.json`, environment files, archives, build artifacts, and standard IDE/OS files.

6. **Documentation-layers reconciliation.** Two files existed with different scopes and were both retained because they answer different questions: `docs/documentation-layers.md` is the operating-system-layer reference (CLAUDE.md, rules, skills, commands, sprints, changelog, session-log, ADR), and `.claude/rules/documentation-layers.md` is the project-artifact reference used by the wizard (BP, PB, TP, SPRINTS, changelog, session-log, knowledge-base). Updated paths in the docs/ version to point to the canonical `.claude/` runtime.

## Outcome

- 4 root directories removed; 13 unique files migrated into `.claude/` with history preserved.
- 2 zombie docs deleted; 3 empty placeholder directories deleted; 1 stale release notes file deleted.
- Version `0.2.0` unified across README, release notes, template, and changelog.
- `.gitignore` added.
- This session log entry seeds the log with a real example, dogfooding the operating system on its own repository.

## Open questions

- `.github/` is currently empty. PR/issue templates and a basic CI workflow are deferred to a future polish pass.
- `examples/` directory was emptied in this pass; future releases may add at least one concrete generated example (e.g., a sanitized Next.js + Supabase stub) to make the stack-pack story tangible.
