# Claude Code Harness

- **URL:** https://github.com/chachamaru127/claude-code-harness
- **License:** MIT
- **Status:** active (806 stars)
- **Last reviewed:** 2026-05-09
- **Tags:** #ecosystem #tooling

## What it is

A dedicated development harness for Claude Code that enforces a structured **Plan → Work → Review → Release** cycle with runtime safety guardrails, parallel task execution, and autonomous code review from multiple perspectives. The v4 "Hokage" release replaced the Node.js dependency with a **Go-native guardrail engine** for performance and packaging.

Effectively turns Claude Code into a disciplined development partner instead of a free-form coding chat.

## When to install

- Want enforced workflow discipline (plan before code, review after code) without remembering to invoke skills manually.
- Need parallel task execution managed by a harness (instead of ad-hoc multiple Claude Code sessions).
- Looking for autonomous multi-perspective code review (security, perf, idiom checks) on every change.
- Strong preference for Go-native binaries over Node.js dependency surface.

## When NOT to install

- First-time Claude Code user — start with the basics; harnesses add cognitive load.
- Already using `gstack`, `holyclaude`, or another orchestration pack — choose one harness, not two.
- Highly exploratory / spike work where rigid workflow gates slow you down.

## How to install

```bash
git clone https://github.com/chachamaru127/claude-code-harness
cd claude-code-harness
# Follow upstream README — Go binary install replaces previous Node setup
```

## Fit signals

- Team already runs Claude Code daily and wants more workflow discipline.
- Project benefits from enforced plan-before-code (regulated, security-sensitive, high-impact systems).
- Multi-language codebase where guardrails need to be language-agnostic at the engine level.

## Conflicts and overlaps

- Overlaps with `gstack` (23-agent virtual team) — gstack is agent-bundle-centric; this harness is workflow-engine-centric.
- Overlaps with `holyclaude` (containerized Claude Code env with 7 AI CLIs) — different layer (env vs workflow).
- Overlaps with `optio` (K8s ticket-to-PR orchestration) — Optio is infra-heavy; this is local-dev-focused.
- Overlaps with `everything-claude-code:autonomous-loops` and `gan-style-harness` skills — those are patterns; this is a packaged harness.
- See [`tags/agents-marketplace.md`](../tags/agents-marketplace.md) "Conflict resolution" guidance — pick one harness per project.

## Notes

- MIT — safe for commercial use and modification.
- 806 stars and growing — Go-native rewrite is a meaningful quality signal.
- Author handle: `chachamaru127` — verify identity if vendor-trust matters.
- v4 "Hokage" is the recommended baseline as of last review.
