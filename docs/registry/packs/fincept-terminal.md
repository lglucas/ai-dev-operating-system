# Fincept Terminal

- **URL:** https://github.com/Fincept-Corporation/FinceptTerminal
- **License:** AGPL-3.0 (open source / personal) + commercial license required for business/SaaS/forks
- **Status:** active (18.3k stars, v4.0.2 April 2026, 26 releases)
- **Last reviewed:** 2026-04-30
- **Tags:** #fintech #tooling

## What it is

Desktop financial platform with CFA-level analytics, 37 AI agents (multi-provider LLM), 16 broker integrations (real-time + paper trading), 18 QuantLib modules, and 100+ data connectors (DBnomics, Polygon, FRED, IMF, World Bank, Yahoo, government APIs). Visual node-editor for automation pipelines.

## When to install

- Personal / research finance terminal needs.
- CFA-level analytics, derivatives pricing, risk metrics (VaR, Sharpe).
- Quant projects needing 100+ data sources unified.

## When NOT to install

- Commercial SaaS use without buying the commercial license.
- Lightweight finance needs — overkill.
- Pure web-app projects (this is desktop).

## How to install

```bash
git clone https://github.com/Fincept-Corporation/FinceptTerminal.git
cd FinceptTerminal
chmod +x setup.sh && ./setup.sh
```

(Linux/macOS; Windows users use installer.)

## Fit signals

- Project is a desktop quant tool, research dashboard, or finance terminal.
- Team needs unified access to many financial data APIs.

## Conflicts and overlaps

- Different shape from `vibe-trading` (terminal vs MCP/CLI workspace) — they can coexist.

## Notes

⚠️ **AGPL-3.0** — commercial use requires upstream commercial license. Have legal review before bundling into a SaaS.
