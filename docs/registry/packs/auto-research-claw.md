# AutoResearchClaw

- **URL:** https://github.com/aiming-lab/AutoResearchClaw
- **License:** MIT
- **Status:** active (12k stars, v0.4.0 April 2026 — Human-in-the-Loop Co-Pilot)
- **Last reviewed:** 2026-05-09
- **Tags:** #ai #research #agents

## What it is

An autonomous research pipeline that transforms a research topic into a full academic paper. Executes 23 stages across 8 phases — literature discovery, hypothesis generation, sandboxed experiment execution, analysis, and conference-ready paper writing. Integrates real citations from OpenAlex, Semantic Scholar, and arXiv. Hardware-aware (GPU/MPS/CPU auto-detection), self-healing repair loops, multi-agent peer review, and anti-fabrication guards.

## When to install

- Academic research projects (ML, NLP, biology, statistics, robotics).
- Literature-review-heavy work that benefits from automation.
- Reproducing or extending published experiments.
- Conference paper drafting (NeurIPS / ICML / ICLR LaTeX templates included).

## When NOT to install

- Production engineering — this is research-pipeline software.
- Projects without academic-paper output.
- Compliance-sensitive contexts without time to audit each stage.

## How to install

```bash
git clone https://github.com/aiming-lab/AutoResearchClaw.git
cd AutoResearchClaw
python3 -m venv .venv && source .venv/bin/activate
pip install -e .
researchclaw setup && researchclaw init
export OPENAI_API_KEY="sk-..."
researchclaw run --topic "Your research idea" --auto-approve
```

## Fit signals

- Project domain is academic / research-grounded (deeptech, healthtech, ML research).
- Knowledge-base/ folder needs heavy population from real papers.
- TECHNICAL-PLAN.md mentions experiments or paper-driven work.

## Conflicts and overlaps

- Pairs with `feynman-is` (research agent) and `tradingagents` (agent-debate framework). AutoResearchClaw is the most paper-output-focused.

## Notes

- ⚠️ Output is **drafts requiring thorough human review** before submission. Repo states this explicitly.
- 6 intervention levels (Human-in-the-Loop Co-Pilot mode) — pick the one that matches team rigor.
- Self-learning across runs via MetaClaw integration.
- Cross-platform (Claude Code, Copilot, Gemini, others).
