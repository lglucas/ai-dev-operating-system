# Tag: stack-pack

Packs specialized for a specific technical stack — language, framework, blockchain, or platform.

| Pack | Stack |
|------|-------|
| [`solana-claude`](../packs/solana-claude.md) | Solana / Anchor / SPL |
| [`unity-mcp`](../packs/unity-mcp.md) | Unity Engine (game / 3D dev via MCP) |
| [`nellavio`](../packs/nellavio.md) | Next.js dashboard / SaaS / admin panel |
| [`agentic-inbox`](../packs/agentic-inbox.md) | Cloudflare Workers (self-hosted email + AI) |

## When this tag is relevant

- Project commits to a specific stack early (e.g. Solana, Next.js, Django).
- Stack-specific conventions, tooling, and security concerns matter for AI-assisted development.

## How to install

Stack packs are usually vendored or forked under `stack-packs/<slug>/` so the project's `.claude/` setup includes stack-specific rules and skills.

## Notes

This list will grow as new vertical packs are added (Next.js + Supabase, EVM, Django, FastAPI, Rust, etc.). Add a row whenever a new stack-pack is added to the registry.
