# Vibe-Trading

- **URL:** https://github.com/HKUDS/Vibe-Trading
- **License:** MIT
- **Status:** active (3.9k stars, v0.1.6 released 2026-04-28)
- **Last reviewed:** 2026-04-30
- **Tags:** #fintech #agents #ai

## What it is

AI-powered multi-agent finance workspace converting natural-language requests into trading strategies, research insights, and portfolio analysis across global markets (A-shares, HK/US equities, crypto, futures, forex). 29 pre-built agent swarm workflows + 72 finance skills. **Simulation/research-only — does not execute live trades.**

## When to install

- Research, simulation, and backtesting of trading strategies.
- Strategy export to TradingView Pine Script v6, TDX, or MetaTrader 5.
- Multi-platform finance workflows via MCP plugin (Claude Desktop, OpenClaw, Cursor).

## When NOT to install

- Live trading with real capital — explicitly out of scope (project states "is not investment advice and does not execute live trades").
- Non-finance projects.

## How to install

```bash
pip install vibe-trading-ai
```

## Fit signals

- Project involves quant research, backtesting, or strategy generation.
- Team uses Claude Desktop / OpenClaw / Cursor and wants finance MCP plugins.

## Conflicts and overlaps

- Strongly preferred over `autohedge` for non-research use (mature, simulation-only, explicit risk warnings).
- Pairs with `fincept-terminal` (data + brokerage integrations).

## Notes

Free data sources (AKShare, yfinance, OKX) make this practical for research without paid APIs. Self-evolving skills + persistent cross-session memory are notable features.
