# CLIP (OpenAI)

- **URL:** https://github.com/openai/CLIP
- **License:** MIT
- **Status:** active (33.4k stars, 58 commits, well-documented)
- **Last reviewed:** 2026-04-30
- **Tags:** #ai #vision

## What it is

Contrastive Language-Image Pre-Training — a neural network trained on (image, text) pairs that enables **zero-shot image classification** by predicting relevant text descriptions. Includes `encode_image()` / `encode_text()` for feature extraction and multiple ViT model variants.

## When to install

- Project needs image-text similarity, zero-shot classification, or visual search.
- Embedding images for semantic retrieval (e.g. "find images similar to this caption").
- Multimodal RAG over images.

## When NOT to install

- Non-vision projects.
- Need state-of-the-art (CLIP is foundational; newer models like SigLIP exist).

## How to install

```bash
pip install git+https://github.com/openai/CLIP.git
```

## Fit signals

- Multimodal product (search, e-commerce, content moderation).
- Project tags or moderates user-uploaded images.

## Conflicts and overlaps

- Pairs naturally with `segment-anything` (mask + classify pipeline).
- Newer alternatives (SigLIP, OpenCLIP) may outperform on some benchmarks.

## Notes

MIT license + pretrained weights make this drop-in for most projects. Still widely cited as the baseline for image-text alignment.
