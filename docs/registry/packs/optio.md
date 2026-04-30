# Optio

- **URL:** https://github.com/jonwiggins/optio
- **License:** MIT
- **Status:** active (924 stars, v0.4.0 April 2026, 538 commits)
- **Last reviewed:** 2026-04-30
- **Tags:** #ecosystem #agents #tooling #infra

## What it is

A self-hosted **workflow orchestration platform** that automates ticket-to-merged-PR processes using AI coding agents. Provisions isolated Kubernetes environments per task, runs agents (Claude Code, Copilot, Codex, Gemini, OpenCode), monitors CI/CD pipelines, handles code reviews, and auto-merges when tests pass. Three task tiers: **Tasks** (PRs), **Jobs** (parameterized agent runs), **Persistent Agents** (long-lived services). Pod-per-repo architecture with git worktree isolation.

Author: Jonathan Wiggins (@jonwiggins).

## When to install

- Engineering team wants AI-driven ticket-to-PR automation entirely on their own infra.
- Existing Kubernetes infrastructure or willingness to run one.
- Multi-vendor AI agent strategy (no lock-in to one provider).
- Need ops automation via persistent agents (long-running daemons that respond to events).

## When NOT to install

- Solo founders or tiny teams — k8s overhead too high.
- No existing CI/CD pipeline to observe.
- Compliance-sensitive contexts without time to audit pod-per-repo isolation properly.

## How to install

```bash
git clone https://github.com/jonwiggins/optio.git && cd optio
./scripts/setup-local.sh
```

Local dev runs on Docker Desktop; production deployment via Helm chart.

## Fit signals

- Team has GitHub / Linear / Jira / Notion as ticket sources.
- Project values reproducible isolated environments per task.
- Engineering velocity is bottlenecked by manual ticket-to-PR handoff.

## Conflicts and overlaps

- Different shape from `gstack` (in-IDE virtual team) and `ruflo` (multi-agent skill orchestration in Claude Code). Optio is **infra-level orchestration** that runs agents in isolated k8s pods — closer to a CI/CD layer than a skill layer.
- Pairs with `holyclaude` (containerized agent env) and any skill-bundle.

## Notes

⚠️ **NOT a financial options tool.** Despite the name. The author is Jonathan Wiggins; project is enterprise workflow automation for AI-driven code generation. Reconciliation control plane (K8s-style event resilience) and real-time cost analytics dashboard are notable differentiators.
