# Segment Anything (SAM)

- **URL:** https://github.com/facebookresearch/segment-anything
- **License:** Apache 2.0
- **Status:** active (54.1k stars, 49 commits, Meta AI Research / FAIR maintained)
- **Last reviewed:** 2026-04-30
- **Tags:** #ai #vision

## What it is

Meta's Segment Anything Model (SAM) — produces high-quality object masks from input prompts (points or boxes) and can generate masks for all objects in an image. Trained on 11M images and 1.1B masks with strong zero-shot generalization. Three model sizes (ViT-B, ViT-L, ViT-H), ONNX export for browser deployment, and a 1.1B-mask SA-1B dataset.

## When to install

- Project involves image segmentation, object isolation, or visual editing.
- Computer-vision pipelines that need zero-shot mask generation.
- Browser-side image processing (via ONNX).

## When NOT to install

- Non-vision projects.
- Need video segmentation — use SAM 2 instead (linked from upstream).

## How to install

```bash
pip install git+https://github.com/facebookresearch/segment-anything.git
```

## Fit signals

- Project handles user-uploaded images that need automated masking.
- Stack includes computer-vision pipelines.

## Conflicts and overlaps

- Pairs with `clip` (image understanding/classification) and `stable-diffusion` (generation).
- For video, prefer SAM 2 (separate repo).

## Notes

Apache 2.0 license is permissive for commercial use. Model weights are large — plan storage/serving accordingly.
