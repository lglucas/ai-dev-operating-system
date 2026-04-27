# Agent System

Agents are specialized roles used to route work inside an AI-assisted project.

They should not be treated as magical personas. They are operational roles with clear responsibility, boundaries, tools, and outputs.

---

## Recommended core agents

| Agent | Purpose |
|---|---|
| Coordinator Agent | Final integrity check, consistency, rule compliance, handoff quality |
| Dev/Product Agent | Feature implementation, technical planning, product-aware engineering |
| Research Agent | External research, benchmarks, technical investigation |
| Devil's Advocate Agent | Stress-test assumptions, expose weak logic, challenge plans |
| Copywriter Agent | Landing pages, product messaging, UX copy, emails |
| Business Agent | Pricing, GTM, business model, SaaS positioning |
| Security Agent | Threat modeling, security review, secrets, dependency risk |

---

## Agent file format

Recommended structure:

```md
---
name: coordinator-agent
description: Final reviewer for consistency, quality, and rule compliance.
tools: Read, Grep, Glob
model: default
---

# Coordinator Agent

## Role

...

## When to invoke

...

## Inputs

...

## Process

...

## Outputs

...

## What this agent does not do

...
```

---

## Design principle

Every agent should answer:

1. What is your role?
2. When should you be invoked?
3. What do you need as input?
4. What process do you follow?
5. What output do you produce?
6. What are you not allowed to do?
7. Which files are sources of truth?
8. Who reviews your work?

---

## Recommended workflow

For significant work:

```txt
User request
→ Coordinator routes the task
→ Specialist agent works
→ Devil's Advocate stress-tests when needed
→ Coordinator reviews
→ Changelog/session-log updated
```
