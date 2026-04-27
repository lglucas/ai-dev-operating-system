# Import Plan from Boring Co

This document tracks what should be imported, generalized, adapted, or excluded from the original Boring Co project system.

---

## Import almost directly

- Project constitution pattern
- Modular rules pattern
- Agent frontmatter pattern
- Skill folder structure
- Command workflow pattern
- Sprint management pattern
- Changelog discipline
- Session-log structure
- Coordinator review pattern
- Devil's Advocate review pattern

---

## Generalize before importing

- LGPD rules → privacy-audit rules
- Multitenancy rules → generic multi-tenant isolation
- API conventions → generic API conventions
- cPanel deploy → deployment checklist examples
- module toggle → feature flag/module flag system
- business plan update → strategy/update workflow
- persona flow → user/persona journey workflow

---

## Exclude from the public OS

- Boring Co business strategy
- Pricing
- Market research
- Competitor research
- Specific founders, customers, partners, or influencers
- Specific payment provider setup
- Specific WhatsApp provider setup
- Specific legal strategy
- Any private operational material

---

## Still worth importing later

- `coo-agent`
- `copywriter-agent`
- `commands/feature-new`
- `commands/lgpd-check` as `privacy-check`
- `commands/module-toggle` as `feature-flag`
- `commands/persona-flow` as `journey-flow`
- `rules/testing`
- `rules/i18n`
- `rules/api-conventions`
- `rules/multitenancy`
- `skills/module-flag-system`
- `skills/multi-tenant-test`
- `skills/design-prototype`
- `skills/sprint-management/assets/changelog-entry.md`
- `skills/sprint-management/assets/retro-template.md`
