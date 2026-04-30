# MiroShark

- **URL:** https://github.com/aaronjmars/MiroShark
- **License:** AGPL-3.0
- **Status:** active (919 stars, 401 commits)
- **Last reviewed:** 2026-04-30
- **Tags:** #ai #agents #research #experimental

## What it is

A **swarm intelligence simulation engine** that spawns hundreds of AI agents to react to scenarios in real time. Users input documents, questions, or hypotheticals, and the system generates agents that post, debate, and trade across simulated Twitter, Reddit, and prediction markets — hour by hour — producing reports grounded in the simulated interactions. Smart scenario generation (bull/bear/neutral), counterfactual branching, director mode for injecting events, and a public gallery with RSS/Atom feeds.

Author: aaronjmars. **NOT integrated with Miro** — despite the name, this is a standalone simulation engine.

## When to install

- Market-research / scenario-planning work that benefits from synthetic crowd reactions.
- Pre-launch testing — how would a synthetic Twitter/Reddit react to your announcement.
- Counterfactual analysis ("what if the news cycle had gone X instead of Y").
- Research into LLM-driven multi-agent dynamics.

## When NOT to install

- Production decisions that require real-user data — synthetic crowds ≠ real signals.
- Compliance-sensitive contexts (AGPL-3.0 + simulated social-media output requires careful framing).
- Real Miro integration use cases — this is not it.

## How to install

```bash
git clone https://github.com/aaronjmars/MiroShark.git && cd MiroShark
cp .env.example .env
# Add OpenRouter API key to five config fields
./miroshark
```

## Fit signals

- Project includes brand or launch decisions where synthetic reactions inform strategy.
- Market-research-agent (this OS) is in use and could feed into MiroShark for crowd simulation.
- Research into multi-agent debate dynamics.

## Conflicts and overlaps

- Different shape from `tradingagents` (debate-based decisions on real market data) — MiroShark simulates the **crowd around** decisions; TradingAgents simulates **the decision itself**.
- Pairs with `auto-research-claw` (paper output) and `feynman-is` (cited research).

## Notes

- ⚠️ **AGPL-3.0** — commercial-product use requires careful license review. Have legal review before bundling in a SaaS.
- ⚠️ Synthetic crowd ≠ real market — never substitute for real user research.
- Director mode + counterfactual branching + completion webhooks make this useful as a strategy-rehearsal tool, not a decision-making oracle.
- "Verified predictions" feed in the public gallery is interesting — track-record signal worth examining before trusting outputs.
