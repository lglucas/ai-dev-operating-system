# Google Research

- **URL:** https://github.com/google-research/google-research
- **License:** Apache 2.0 (code) + CC BY 4.0 (datasets)
- **Status:** active (37.8k stars, 4,998 commits — large monorepo)
- **Last reviewed:** 2026-04-30
- **Tags:** #ai #ml #research

## What it is

A large monorepo of research code released by Google Research, featuring many independent projects across ML, RL, computer vision, and more. NOT a single library — each subdirectory is a separate research project. Upstream recommends shallow-cloning subdirectories of interest.

## When to consult

- Replicating a specific Google research paper.
- Looking for reference implementations of specific techniques.
- ML researchers tracking Google's open-source release pipeline.

## When NOT to consult

- Production engineering — not designed for production reuse.
- Looking for one cohesive library.

## How to use

```bash
# Shallow clone — never full clone:
git clone --depth=1 git@github.com:google-research/google-research.git
```

Or use github.dev to navigate without cloning.

## Fit signals

- Project replicates / extends a specific Google paper.
- Research-oriented work, not product-engineering.

## Conflicts and overlaps

- Not a competitor to other packs — it's a research dump, not a framework.

## Notes

Uneven maintenance per subdirectory. Always check the README of the specific project before using.
