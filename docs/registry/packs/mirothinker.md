# MiroThinker

- **URL:** https://github.com/MiroMindAI/MiroThinker
- **License:** Apache-2.0
- **Status:** active (8.2k stars)
- **Last reviewed:** 2026-05-09
- **Tags:** #ai #agents #research

## What it is

A deep-research agent optimized for long-horizon, multi-step reasoning tasks (web browsing, code execution, information synthesis across domains). Ships open-source agent models built on Qwen plus a complete agent framework (MiroFlow) with benchmarking infrastructure. State-of-the-art on multiple research benchmarks.

Author: MiroMindAI (the org). **Distinct from `miroshark`** (different author, different problem — MiroShark simulates synthetic crowds; MiroThinker is a research agent).

## When to install

- Need an open-source alternative to closed deep-research agents (Perplexity, GPT Deep Research) that you can self-host.
- Long-horizon research tasks — literature review, market research, multi-source synthesis with sources.
- Want to fine-tune or extend a research-agent model with your own data.
- Benchmarking research-agent quality against open baselines.

## When NOT to install

- Single-question Q&A — overkill, use a standard chat model with retrieval.
- Time-to-first-token sensitive UX — deep-research agents are slow by design.
- No GPU infrastructure available — serving Qwen-based models needs SGLang/vLLM and decent GPUs.

## How to install

```bash
git clone https://github.com/MiroMindAI/MiroThinker
cd MiroThinker
# Follow upstream README for SGLang/vLLM serving + MCP tool wiring
```

Tools are integrated via MCP, so it composes with existing MCP servers in the AI Dev OS ecosystem.

## Fit signals

- Project needs autonomous multi-step research (Sprint 1+ of `market-research-agent` or `research-waves` skill).
- Team is comfortable hosting open-source LLM stacks.
- Need a research benchmark / baseline for an internal research agent.

## Conflicts and overlaps

- Overlaps with `auto-research-claw` (paper-output research pipeline) — AutoResearchClaw is more focused on producing finished papers; MiroThinker is more general research-agent infra.
- Overlaps with `feynman-is` (external resource — local AI research agent live tool) — Feynman is a hosted product, MiroThinker is self-host code.
- Composes with `pathway-llm-app` (real-time RAG) for grounding.

## Notes

- Apache-2.0 — safe for commercial use with attribution.
- Built on Qwen base models — review Qwen license terms separately if redistributing weights.
- 8.2k stars at last review — active community, fast-moving research surface.
- Use MCP integration as the primary extension point rather than forking.
