# Upstream Sources & Origin Map

This document tracks external sources, inspirations, specs, tools, and upstream repositories used while creating this project.

The goal is to keep this repository auditable, attribution-friendly, and cleanly separated from product-specific material.

---

## 1. Primary origin

### Boring Co internal project system

- Source repo: https://github.com/lglucas/boringco
- Used as: original internal project operating system
- Extracted concepts:
  - Project constitution via `CLAUDE.md`
  - Modular `.claude/rules`
  - Specialized `.claude/agents`
  - Local `.claude/skills`
  - Slash command workflows
  - Sprint lifecycle
  - Changelog discipline
  - Session logs as decision memory
  - Coordinator and Devil's Advocate review flows
  - Security pipeline thinking
  - Design-system workflow thinking

This repository generalizes that system into a reusable public framework.

Product-specific Boring Co content, market research, pricing, partners, competitors, customer strategy, legal specifics, and business data are intentionally excluded.

---

## 2. Official Claude / Agent Skills foundations

### Anthropic Skills

- URL: https://github.com/anthropics/skills
- Role: official public examples and patterns for Agent Skills
- Classification: `source`, `spec-like reference`, `official ecosystem`
- Used as:
  - Reference for how skills can be structured
  - Official conceptual foundation for agent skills
  - Public examples of what a skills-based workflow can do
- Local mapping:
  - `docs/skill-system.md`
  - `skills/`
  - `templates/project/CLAUDE.md`
- Notes:
  - This project should link to Anthropic’s repo rather than copying official content unless the license and attribution are clearly respected.

---

### everything-claude-code

- URL: https://github.com/affaan-m/everything-claude-code
- Git URL: https://github.com/affaan-m/everything-claude-code.git
- Role: external Claude Code / agent harness ecosystem
- Classification: `inspiration`, `tool`, `optional upstream`
- Used as:
  - Inspiration for external skill/plugin integration
  - Reference for agentic workflow expansion
  - Optional upstream plugin recommendation
  - Inspiration for advanced Claude Code workflows, hooks, agents, commands, MCPs, memory optimization, security scanning, and research-first development
- Local mapping:
  - `skills/external/affaan-everything-claude-code.md`
  - `docs/skill-system.md`
  - `docs/agent-system.md`
- Notes:
  - This repository does not vendor the upstream project by default.
  - Users should install it directly from upstream when needed.

---

## 3. UI/UX and design-system workflows

### UI UX Pro Max Skill

- URL: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Role: UI/UX design intelligence skill for professional interface generation
- Classification: `inspiration`, `optional skill`, `design workflow`
- Used as:
  - Inspiration for the `design-prototype` skill
  - Reference for stronger UI/UX review and interface generation workflows
  - Inspiration for making design a first-class AI-assisted workflow rather than an afterthought
- Local mapping:
  - `docs/design-system-workflow.md`
  - Future: `skills/design-prototype/`
  - Future: `rules/design/`

---

### VoltAgent awesome-design-md

- URL: https://github.com/VoltAgent/awesome-design-md
- Related site: https://getdesign.md
- Role: design-system reference source
- Classification: `inspiration`, `tool`, `design-system reference`
- Used as:
  - Inspiration for design-system based UI prototyping workflows
  - Reference for external `DESIGN.md` style assets
  - Inspiration for giving agents a consistent visual language
- Local mapping:
  - `docs/design-system-workflow.md`
  - Future: `skills/design-prototype/`
  - Future: `docs/design-systems.md`
- Notes:
  - Brand-specific design files should not be copied into this repo unless license and attribution are clear.
  - Prefer linking to upstream and documenting how to fetch assets.

---

## 4. Security, audit and hardening references

### Trail of Bits Skills

- URL: https://github.com/trailofbits/skills
- Role: security-focused Claude Code skills marketplace
- Classification: `source`, `inspiration`, `optional security skill pack`
- Used as:
  - Reference for serious AI-assisted security review workflows
  - Inspiration for secure development skills
  - Inspiration for audit, differential review, test verification, code review, and exploit-aware workflows
- Local mapping:
  - `docs/security-baseline.md`
  - `rules/security/`
  - `skills/secrets-scan/`
  - Future: `skills/security-review/`
- Notes:
  - Treat as a high-quality upstream security reference.
  - Prefer linking to upstream plugin/skills instead of copying them.

---

### CIS Hardening Guide

- URL: https://github.com/Jacob-Hegy/CIS-Hardening-Guide
- Role: infrastructure and workstation hardening reference
- Classification: `advanced reference`, `security`, `hardening`
- Used as:
  - Reference for future infrastructure hardening guidance
  - Optional advanced source for VPS, workstation, and self-hosted deployment hardening
- Local mapping:
  - `docs/security-baseline.md`
  - Future: `docs/infra-hardening.md`
- Notes:
  - Not core for day-zero SaaS app development.
  - Useful when moving from app prototype to production infrastructure.

---

### YARA Style Guide

- URL: https://github.com/Neo23x0/YARA-Style-Guide
- Role: style guide for readable and maintainable YARA rules
- Classification: `advanced reference`, `security`, `malware detection`
- Used as:
  - Advanced reference for malware detection rule style
  - Inspiration for rule readability and maintainability principles
- Local mapping:
  - `docs/security-baseline.md`
- Notes:
  - Not core for typical SaaS project scaffolding.
  - Useful as an advanced security reference, especially when projects involve threat detection.

---

### Gitleaks

- URL: https://github.com/gitleaks/gitleaks
- Reference config: https://github.com/gitleaks/gitleaks/blob/master/config/gitleaks.toml
- Role: secrets scanning reference
- Classification: `tool`, `security baseline`
- Used as:
  - Inspiration for secrets scanning workflow
  - Reference for future custom rules
- Local mapping:
  - `rules/security/secrets.md`
  - `skills/secrets-scan/SKILL.md`

---

## 5. Stack-specific packs

### solanabr/solana-claude

- URL: https://github.com/solanabr/solana-claude
- Role: Claude Code configuration pack for Solana builders
- Classification: `stack-specific pack`, `optional reference`, `web3`
- Used as:
  - Reference for how a stack-specific AI dev pack can be organized
  - Optional Solana/web3 extension path
  - Inspiration for future `stack-packs/solana/`
- Local mapping:
  - `stack-packs/solana/README.md`
  - Future: `rules/stack-specific/solana.md`
  - Future: `skills/solana-*`
- Notes:
  - Not part of the default generic SaaS baseline.
  - Should be positioned as an optional advanced stack pack.

---

## 6. Specs and conventions

### Keep a Changelog

- URL: https://keepachangelog.com/
- Role: changelog structure reference
- Classification: `spec`, `workflow convention`
- Used as:
  - Inspiration for human-readable changelog categories
  - Release note discipline
- Local mapping:
  - `CHANGELOG.md`
  - `skills/sprint-management/`
  - `templates/sprints/changelog-entry-template.md`

---

### Conventional Commits

- URL: https://www.conventionalcommits.org/en/v1.0.0/
- Role: commit message convention
- Classification: `spec`, `workflow convention`
- Used as:
  - Git workflow convention
  - Sprint branch and release discipline
- Local mapping:
  - `rules/core/git-workflow.md`
  - `templates/project/CLAUDE.md`

---

### Semantic Versioning

- URL: https://semver.org/
- Role: versioning reference
- Classification: `spec`, `workflow convention`
- Used as:
  - Release and tag strategy inspiration
  - Version semantics for public packages and templates

---

## 7. Product-specific links intentionally excluded

The original Boring Co audit includes many external links that are specific to that product, market, competitors, legal research, payments, WhatsApp providers, design assets, or local Brazilian business context.

These are not part of the reusable AI development operating system and should not be copied into this repository except as examples in clearly marked case studies.

Excluded categories include:

- Boring Co product URLs
- Payment provider documentation
- WhatsApp provider links
- Competitor links
- Healthcare-specific legal research
- Beauty, salon and professional services market research
- Unsplash, avatar and placeholder image URLs
- Localhost URLs
- Supabase placeholder URLs
- WhatsApp contact links
- Social media competitor profiles

---

## 8. Attribution policy

When adding new rules, agents, skills, commands, or templates derived from external material:

1. Add the upstream source here.
2. Classify it as one of:
   - `source`
   - `inspiration`
   - `dependency`
   - `spec`
   - `tool`
   - `example`
   - `optional stack pack`
3. Explain whether content was:
   - directly copied
   - adapted
   - conceptually inspired
   - merely referenced
4. Avoid vendoring third-party content unless license and attribution are clear.
5. Prefer linking to upstream documentation instead of duplicating it.
