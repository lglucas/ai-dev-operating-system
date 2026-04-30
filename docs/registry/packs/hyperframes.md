# HyperFrames

- **URL:** https://github.com/heygen-com/hyperframes
- **License:** Apache 2.0
- **Status:** active (13.3k stars, 88 releases, latest 2026-04-30)
- **Last reviewed:** 2026-04-30
- **Tags:** #ai #design #tooling

## What it is

"Write HTML. Render video. Built for agents." Open-source framework for creating deterministic video compositions using HTML with data attributes — preview in browser, render to MP4. AI-first design with agent skills for Claude Code, Cursor, and Gemini CLI. Frame-accurate animation via GSAP, Lottie, CSS, or Three.js. 50+ ready-to-use catalog blocks (transitions, overlays, charts).

## When to install

- AI-agent-driven video generation pipelines.
- Marketing / explainer / product-demo videos generated from data.
- Projects pairing TTS (Bark) with motion graphics.

## When NOT to install

- Non-video projects.
- Need real-time video editing UX (this is composition + render).

## How to install

```bash
npx hyperframes init my-video
```

Distributed as modular npm packages (CLI, core engine, studio editor, web player).

## Fit signals

- Project includes generated videos (marketing, social, product).
- Team uses Claude Code / Cursor / Gemini CLI and wants agent skills for video.
- Need HTML-native video (no React requirement).

## Conflicts and overlaps

- Pairs with `bark` (audio narration) for end-to-end video generation.
- Different shape from `open-higgsfield-ai` (which is a media-gen studio for direct video models).

## Notes

HeyGen-maintained — credible upstream for video-AI tooling. Apache 2.0 license is permissive for commercial use.
