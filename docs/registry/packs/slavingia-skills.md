# Slavingia Skills (Minimalist Entrepreneur) ⭐

- **URL:** https://github.com/slavingia/skills
- **License:** check upstream (not stated in README)
- **Status:** active (8.4k stars, 11 commits, no formal releases)
- **Last reviewed:** 2026-04-30
- **Tags:** #foundations #learning #ecosystem

## What it is

A Claude Code plugin with 10 slash commands that codify Sahil Lavingia's book *The Minimalist Entrepreneur* into a sequential business-building journey: `/find-community` → `/validate-idea` → `/mvp` → `/processize` → `/first-customers` → `/pricing` → `/marketing-plan` → `/grow-sustainably` → `/company-values` → `/minimalist-review`.

Author: Sahil Lavingia (founder of Gumroad, author of *The Minimalist Entrepreneur*). The skills emphasize community-first validation, manual processes before automation, and sustainable (not aggressive) scaling.

## When to install

- Solo founders or small teams in **early-stage validation** (pre-MVP through first 100 customers).
- Bootstrapped, community-driven business strategy.
- Teams that want a structured book-to-skills playbook (vs. blank prompts).
- Direct alternative to YC's Startup School — same audience, similar opinionated stance.

## When NOT to install

- Teams already past sustainable-growth phase.
- Companies pursuing aggressive scaling / VC-driven playbook.
- Projects that need engineering-focused (not business-focused) skills.

## How to install

```
/plugin marketplace add slavingia/skills
/plugin install minimalist-entrepreneur
```

Alternative: clone to `~/.claude/plugins/skills`.

## Fit signals

- WIZARD Stage 1–4 (raw ideation, validation) — strong fit.
- Project values community + manual + sustainable over scale-first.
- Founder is reading or has read *The Minimalist Entrepreneur*.

## Conflicts and overlaps

- **Strong overlap with this AI Dev OS at the methodology level.** Side-by-side comparison vs our OS:
  - `slavingia-skills` is a **linear domain-specific business playbook** (10 ordered skills) with one opinionated path.
  - This OS is a **meta-framework** (genesis wizard, agents, rules, sprints, registry, prototype-lab, session-logs).
  - They can coexist: install Slavingia skills inside a project running this OS — they cover the early-stage business validation that our `first-100-users` and `launch-agent` complement.
- Overlaps with `gstack` (engineering execution) and `microsoft-generative-ai-for-beginners` (broader genAI learning) at the orientation layer.

## Notes

- **Author credibility:** Sahil Lavingia (Gumroad). Strong single-author signal alongside `gstack` (Garry Tan).
- ⚠️ License **not stated** — confirm before vendoring; safe to use the public marketplace install path.
- Distinctive skill: `/processize` (automate manual processes after validating manually) — worth adopting as a concept even outside this pack.
- Distinctive skill: `/grow-sustainably` covers post-first-100-users phase that our OS currently does not.
- Distinctive skill: `/company-values` covers culture-formation phase our OS does not.
