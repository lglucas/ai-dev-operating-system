# Upstream Sources & Origin Map

This document tracks external sources, inspirations, specs, tools, and upstream repositories used while creating this project.

The goal is to keep this repository auditable, attribution-friendly, and cleanly separated from project-specific material.

---

## 1. Primary origin

### Internal SaaS project operating system

- Reference: https://github.com/lglucas/boringco
- Status: private/internal reference; may not be publicly accessible.
- Used as: real-world implementation that validated the operating-system structure.
- Extracted concepts:
  - Project constitution via `CLAUDE.md`.
  - Modular `.claude/rules`.
  - Specialized `.claude/agents`.
  - Local `.claude/skills`.
  - Slash command workflows.
  - Sprint lifecycle.
  - Changelog discipline.
  - Session logs as decision memory.
  - Coordinator and Devil's Advocate review flows.
  - Research waves and red-team review before business-plan writing.

This repository generalizes that system into a reusable public framework.

Product-specific business content, market research, pricing, partners, competitors, customer strategy, legal specifics, and private project data are intentionally excluded.

---

## 2. Official Claude / Agent Skills foundations

### Anthropic Skills

- URL: https://github.com/anthropics/skills
- Role: official public repository for Agent Skills examples and patterns.
- Used as:
  - Conceptual reference for skill structure.
  - Official ecosystem reference for reusable agent workflows.

---

## 3. External repositories

### everything-claude-code

- URL: https://github.com/affaan-m/everything-claude-code
- Git URL: https://github.com/affaan-m/everything-claude-code.git
- Role: external Claude Code / agent harness ecosystem.
- Used as:
  - Inspiration for external skill/plugin integration.
  - Reference for advanced agentic workflow expansion.
  - Optional upstream plugin recommendation.
- Local mapping:
  - `.claude/skills/external/affaan-everything-claude-code.md`
- Notes:
  - This repository does not vendor the upstream project by default.
  - Users should install it directly from upstream when needed.

---

### UI UX Pro Max Skill

- URL: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Role: UI/UX design intelligence skill reference.
- Used as:
  - Inspiration for the Prototype Lab and design-prototype workflows.
  - Reference for multi-direction UI exploration before implementation.

---

### VoltAgent awesome-design-md

- URL: https://github.com/VoltAgent/awesome-design-md
- Related site: https://getdesign.md
- Role: design-system reference source.
- Used as:
  - Inspiration for design-system based UI prototyping workflows.
  - Reference for external `DESIGN.md` style assets.
- Notes:
  - Brand-specific design files should not be copied into this repo unless license and attribution are clear.
  - Prefer linking to upstream and documenting how to fetch assets.

---

### Trail of Bits Skills

- URL: https://github.com/trailofbits/skills
- Role: security-focused Claude Code skills marketplace.
- Used as:
  - Reference for security analysis, code review, testing, and secure development workflows.
  - Inspiration for security-oriented agent and skill design.

---

### Solana Claude

- URL: https://github.com/solanabr/solana-claude
- Role: stack-specific Claude Code pack for Solana development.
- Used as:
  - Optional stack-pack reference.
  - Example of how an AI development operating system can be specialized for a technical ecosystem.

---

## 4. Security and hardening references

### CIS Hardening Guide

- URL: https://github.com/Jacob-Hegy/CIS-Hardening-Guide
- Role: hardening reference.
- Used as:
  - Advanced infrastructure/workstation hardening reference.
  - Not part of the default SaaS app template.

---

### YARA Style Guide

- URL: https://github.com/Neo23x0/YARA-Style-Guide
- Role: malware detection rule style reference.
- Used as:
  - Advanced security reference for readable and maintainable YARA rules.
  - Not part of the default SaaS app template.

---

### Gitleaks default config

- URL: https://github.com/gitleaks/gitleaks/blob/master/config/gitleaks.toml
- Role: secrets scanning reference.
- Used as:
  - Inspiration for secrets scanning workflow.
  - Reference for future custom rules.
- Local mapping:
  - `.claude/rules/secrets.md`
  - `.claude/skills/secrets-scan/SKILL.md`

---

## 5. Specs and conventions

### Keep a Changelog

- URL: https://keepachangelog.com/
- Role: changelog structure reference.
- Used as:
  - Inspiration for human-readable changelog categories.
  - Release note discipline.
- Local mapping:
  - `CHANGELOG.md`
  - `.claude/skills/sprint-management/`
  - `templates/sprints/changelog-entry-template.md`

---

### Conventional Commits

- URL: https://www.conventionalcommits.org/en/v1.0.0/
- Role: commit message convention.
- Used as:
  - Git workflow convention.
  - Sprint branch and release discipline.
- Local mapping:
  - `.claude/rules/git-workflow.md`
  - `templates/project/CLAUDE.md`

---

### Semantic Versioning

- URL: https://semver.org/
- Role: versioning reference.
- Used as:
  - Release and tag strategy inspiration.
  - Version semantics for public packages and templates.

---

## 6. Product-specific links intentionally excluded

The original internal project audit included many external links that are specific to one product, market, competitors, legal research, payments, messaging providers, design assets, or local business context.

These are not part of the reusable AI development operating system and should not be copied into this repository except as clearly marked case studies or examples.

Excluded categories include:

- product URLs from private/internal projects;
- payment provider implementation links;
- messaging/WhatsApp provider links;
- competitor research links;
- vertical-specific legal or regulatory research;
- market research links tied to a specific business idea;
- placeholder image URLs;
- localhost URLs;
- placeholder Supabase URLs;
- WhatsApp contact links;
- social media competitor profiles.

---

## 7. Attribution policy

When adding new rules, agents, skills, commands, or templates derived from external material:

1. Add the upstream source here.
2. Classify it as one of:
   - `source`
   - `inspiration`
   - `dependency`
   - `spec`
   - `tool`
   - `example`
3. Explain whether content was:
   - directly copied;
   - adapted;
   - only conceptually inspired;
   - merely referenced.
4. Avoid vendoring third-party content unless license and attribution are clear.
5. Prefer linking to upstream documentation instead of duplicating it.
