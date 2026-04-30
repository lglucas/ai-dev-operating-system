# Stable Diffusion (CompVis)

- **URL:** https://github.com/CompVis/stable-diffusion
- **License:** CreativeML OpenRAIL-M (commercial use allowed with use-based restrictions)
- **Status:** archived in practice (33 commits on main; superseded by SDXL/SD3 and Stability-AI repos)
- **Last reviewed:** 2026-04-30
- **Tags:** #ai #vision

## What it is

The original CompVis latent text-to-image diffusion model that started the open-source image-generation wave. Generates images from text prompts using a frozen CLIP ViT-L/14 text encoder. Requires GPU with at least 10GB VRAM. Supports text-guided image-to-image translation.

## When to install

- Historical / research interest in the original diffusion architecture.
- Reproducing v1.x results.

## When NOT to install

- Production image generation — use SDXL, SD3, or Stability-AI's official repos instead.
- Compliance-sensitive projects (license restrictions deserve legal review).
- Projects without 10GB+ GPU.

## How to install

See repo for the original install instructions; modern alternatives (Diffusers from Hugging Face, ComfyUI, AUTOMATIC1111) are preferred for new work.

## Fit signals

- Pure research / educational use only.

## Conflicts and overlaps

- Effectively replaced by SDXL, SD3, FLUX, and other newer models. Most projects should reach for `open-higgsfield-ai` or Hugging Face Diffusers instead.

## Notes

CreativeML OpenRAIL-M license has explicit use-based restrictions (no harm, no defamation, no illegal acts) — different from MIT. Have legal review the license before commercial deployment.
