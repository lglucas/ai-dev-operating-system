# Ruflo

- **URL:** https://github.com/ruvnet/ruflo
- **License:** MIT
- **Status:** active (v3.6.10 released 2026-04-30, 6,117 commits, 34.1k stars)
- **Last reviewed:** 2026-04-30
- **Tags:** #ecosystem #agents #tooling

## What it is

A multi-agent AI orchestration platform for Claude that coordinates 100+ specialized agents across machines and teams. Adds agent swarms, self-learning memory (SONA neural patterns, ReasoningBank), federated communications, and enterprise security on top of Claude Code.

## When to install

- Projects that need multi-agent orchestration beyond a single Claude Code session.
- Teams already proficient with Claude Code looking to scale to swarm/mesh topologies.
- Power-user setups that want vector memory (HNSW), background workers, and zero-trust agent federation.

## When NOT to install

- First-time Claude Code users — overkill, start with the AI Dev OS basics.
- Projects with simple single-agent needs.
- Compliance-sensitive environments without time to audit 100+ agents and 32 plugins individually.

## How to install

```bash
npx ruflo@latest init --wizard
```

## Fit signals

- Project already runs Claude Code with multiple skills/agents.
- Workflow involves many parallel coding/testing/security tasks worth orchestrating.
- Team wants multi-provider LLM routing (Claude, GPT, Gemini, Cohere, Ollama).

## Conflicts and overlaps

- Significant overlap with `everything-claude-code` (broader ecosystem of skills/hooks). Ruflo is more orchestration-heavy; ECC is more skill-catalog-heavy.
- Pairs well with `trailofbits-skills` if security review of agent swarms is needed.

## Notes

Active and very large surface area — onboarding takes time. Audit AIDefence security scanning behavior before granting it sensitive repo access.
