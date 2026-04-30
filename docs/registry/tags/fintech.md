# Tag: fintech

Packs related to finance, trading, quant analysis, and financial data tooling.

⚠️ Most packs in this category come with **financial-risk caveats**. Treat all of them as research/simulation tools by default; require explicit legal + compliance review before deploying real-money trading.

| Pack | Focus |
|------|-------|
| [`vibe-trading`](../packs/vibe-trading.md) | Multi-agent finance workspace (simulation only) |
| [`fincept-terminal`](../packs/fincept-terminal.md) | Desktop finance terminal with CFA analytics |
| [`autohedge`](../packs/autohedge.md) | Multi-agent autonomous trading (experimental) |

## When this tag is relevant

- Project is a quant research, finance dashboard, or trading-strategy tool.
- Team needs unified access to many financial data APIs.
- Backtesting and simulation workflows.

## When this tag is NOT relevant

- Production trading with real capital — none of these packs replace a licensed trading entity, regulatory framework, or audited risk-management process.
- Non-finance projects.

## How to choose

- Pure research / simulation → `vibe-trading` (mature, simulation-only, explicit risk warnings).
- Desktop terminal / CFA-level analytics → `fincept-terminal`.
- Multi-agent trading research only → `autohedge` (⚠️ experimental, no formal releases).
