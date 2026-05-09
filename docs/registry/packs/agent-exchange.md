# Agent Exchange (AEX)

- **URL:** https://github.com/open-experiments/agent-exchange
- **License:** MIT
- **Status:** experimental (402 stars)
- **Last reviewed:** 2026-05-09
- **Tags:** #agents #infra #experimental

## What it is

A programmatic **marketplace for AI agents** that applies ad-tech economics (auction, bidding, settlement) to inter-agent work. Solves the "N×M integration problem" — instead of every consumer agent integrating with every provider agent point-to-point, AEX is a broker where agents discover each other, bid on work, and settle payments automatically.

Implemented as 10 Go microservices on MongoDB + Docker + GCP Cloud Run, with a Python + NiceGUI demo UI.

## When to install

- Designing a multi-vendor agent ecosystem where buying-side and selling-side scale independently.
- Researching agent economics, bid mechanisms, and trust frameworks.
- Building an internal agent marketplace where teams expose capabilities and other teams consume them with metering.
- Need a reference implementation of agent-to-agent settlement.

## When NOT to install

- Single-agent, single-team use cases — wrong tool, this is infra-heavy.
- Need a production-ready marketplace today — explicitly experimental, treat as a research substrate.
- Stack doesn't allow Go services + MongoDB at the infra layer.

## How to install

```bash
git clone https://github.com/open-experiments/agent-exchange
cd agent-exchange
docker compose up
# 10 services, give it time
```

## Fit signals

- Project explores agent-to-agent commerce, billing, or settlement.
- Multiple teams or vendors will publish/consume agent capabilities.
- Studying ad-tech-style auction mechanisms applied to AI.
- Interested in the `everything-claude-code:agent-payment-x402` pattern at marketplace scale.

## Conflicts and overlaps

- Conceptual overlap with `agents-marketplace` tag — but those packs are **bundled skill collections** (single-author marketplaces); AEX is a **broker for agent transactions** (multi-vendor exchange).
- Pairs with `everything-claude-code:agent-payment-x402` (per-agent budgets and wallets) and `everything-claude-code:enterprise-agent-ops` (long-lived workloads).
- Composes with `mirothinker` or any agent that wants to sell or buy work through an exchange.

## Notes

- MIT — safe for commercial use.
- ⚠️ **Experimental** — APIs, schemas, and economic mechanisms may change. Do not build production billing on top of it without a fork.
- 10 microservices is real infra weight; not a "vibe-coder MVP" choice.
- Worth studying as a reference even if you don't deploy — the economic model and protocol design are well thought out.
