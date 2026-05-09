# agent-skills-eval

- **URL:** https://github.com/darkrishabh/agent-skills-eval
- **License:** MIT
- **Status:** active (257 stars)
- **Last reviewed:** 2026-05-09
- **Tags:** #agents #tooling

## What it is

A test runner for `agentskills.io`-style AI agent skills. Empirically validates whether a given skill actually improves model performance: runs the same prompt **with** and **without** the skill loaded, then uses a judge model to grade outputs and produce evidence-backed reports on skill effectiveness.

Built for the Agent Skills ecosystem (Claude Skills, Anthropic Skills format) but works with any OpenAI-compatible API.

## When to install

- Authoring custom skills (Claude Code, Anthropic Skills, agentskills.io) and need objective evidence they help.
- Comparing two skill versions before promoting one as the canonical version.
- CI gate for a skill repo — fail PRs that regress skill quality.
- Pre-release validation before publishing a skill bundle to a marketplace.

## When NOT to install

- No custom skills being authored — this is for skill builders, not consumers.
- Cost-sensitive environments without judge-model budget — judge runs cost API tokens.
- Subjective output domains (creative writing, design) where judge-model grading is unreliable.

## How to install

```bash
git clone https://github.com/darkrishabh/agent-skills-eval
cd agent-skills-eval
npm install
# Configure provider (OpenAI-compatible) and judge model
```

## Fit signals

- Project includes `.claude/skills/`, `agents/`, or `skills/` directories you wrote yourself.
- Team publishes skills externally and wants quality evidence.
- Need to A/B test prompt/skill variants empirically.

## Conflicts and overlaps

- Complementary to `everything-claude-code:eval-harness` — formal eval framework for sessions; agent-skills-eval is narrower (single-skill A/B).
- Complementary to `everything-claude-code` skill management commands (`skill-create`, `skill-stocktake`, `skill-comply`, `skill-health`) — those manage skills; this validates them.
- Pairs with `multi-ai-review` skill in this OS for hard decisions about which skill version to ship.

## Notes

- MIT — safe for commercial use.
- 257 stars — niche but high-leverage tool. The skill-authoring user base is small but growing fast.
- Critical for `agents-marketplace` packs that want to claim quality — without evals, "this skill helps" is just a vibe.
- TypeScript / Node — minimal infra to run.
