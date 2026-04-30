# AutoHedge

- **URL:** https://github.com/The-Swarm-Corporation/AutoHedge
- **License:** MIT
- **Status:** experimental (no formal releases; "live trading on Solana" claim with substantial caveats)
- **Last reviewed:** 2026-04-30
- **Tags:** #experimental #fintech #agents

## What it is

A multi-agent trading system that uses agent swarms (Director, Quant, Risk Manager, Execution agents) to analyze markets, generate theses, and execute trades. Currently supports autonomous trading on Solana; Coinbase and other exchanges marked "coming soon".

## When to install

- Research / experimentation with multi-agent trading architectures.
- Solana-specific quant exploration with paper accounts.

## When NOT to install

- Production trading with real capital — no formal releases, regulatory framework not addressed, financial risk substantial.
- Compliance-sensitive projects without a licensed trading entity.
- Non-Solana exchanges (most exchanges marked "coming soon").

## How to install

```bash
pip install -U autohedge
```

## Fit signals

- Project explores multi-agent finance architectures (research only).
- Solana-specific token strategy exploration.

## Conflicts and overlaps

- Overlaps with `vibe-trading` (research/simulation focus, more mature). Strongly prefer Vibe-Trading for non-research use.

## Notes

⚠️ **Experimental + financial risk.** No releases, no regulatory framework, autonomous real-money trading. Pair with `legal-compliance-agent` and `trailofbits-skills` if seriously considering real-capital deployment.
