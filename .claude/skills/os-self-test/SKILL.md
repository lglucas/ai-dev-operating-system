---
name: os-self-test
description: Verify the AI Dev Operating System is in a coherent state inside a project. Detects missing canonical files, broken cross-references, version drift, gitignore gaps, stale paths after a migration, and orphaned artifacts. Run after major edits to the OS or before opening a new sprint.
---

# OS Self-Test

## When to run this skill

- After the user manually edited the OS (rules, agents, skills, commands).
- Before opening a new sprint.
- Before tagging a release.
- When something feels off ("Claude tá agindo estranho").

## Checks

### 1. Canonical structure present

- [ ] `CLAUDE.md` at root
- [ ] `START-HERE.md` at root
- [ ] `WIZARD.md` at root
- [ ] `.claude/` directory with `agents/`, `rules/`, `skills/`, `commands/`
- [ ] No duplicate `agents/`, `rules/`, `skills/`, `commands/` at root

### 2. Required artifacts (if a project is in progress)

- [ ] `docs/product/PRODUCT-BRIEF.md`
- [ ] `docs/business/BUSINESS-PLAN.md`
- [ ] `docs/technical/TECHNICAL-PLAN.md`
- [ ] `docs/SPRINTS.md`
- [ ] `CHANGELOG.md`
- [ ] `session-log/INDEX.md`

### 3. Version consistency

- [ ] README badge version matches latest `RELEASE-NOTES-vX.Y.Z.md`
- [ ] CHANGELOG top entry version matches release notes
- [ ] `templates/project/CLAUDE.md` version is a placeholder (`0.0.1`), not a real OS version

### 4. Gitignore baseline

- [ ] `.env` and friends ignored
- [ ] `node_modules/` ignored
- [ ] `CLAUDE.local.md` ignored
- [ ] `*.zip` and archive patterns ignored
- [ ] Personal canonical references (e.g. `docs/instrucoes-master.md`) ignored

### 5. Cross-reference integrity

- [ ] No reference to deleted paths (`agents/`, `rules/`, `skills/`, `commands/` at root)
- [ ] No reference to stale release notes
- [ ] All README links resolve to existing files

### 6. Skill / agent header sanity

- [ ] Every `SKILL.md` has frontmatter with `name` and `description`
- [ ] Every agent file has clear "use when" guidance
- [ ] No skill or agent references a deleted command

## Output format

```
🩺 OS Self-Test — [date]

Canonical structure:    ✅
Required artifacts:     ⚠️  3 of 6 present (project may be early — OK if pre-coding)
Version consistency:    ✅
Gitignore baseline:     ✅
Cross-reference scan:   ❌ 2 issues found:
  • docs/foo.md links to deleted skills/secrets-scan/
  • README badge points to RELEASE-NOTES-v0.1.0.md (deleted)
Skill / agent headers:  ✅

Action needed: fix the 2 cross-reference issues above before next sprint.
```

## Implementation note

When asked to run, Claude should:
1. Glob the canonical paths.
2. Grep for deleted-path references using known migration mappings.
3. Read the README badge URL and verify the file exists.
4. Read CHANGELOG top entry and compare versions.
5. Produce the report above with specific line numbers for any failures.
