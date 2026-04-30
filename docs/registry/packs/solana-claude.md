# Solana Claude

- **URL:** https://github.com/solanabr/solana-claude
- **License:** check upstream
- **Status:** active
- **Last reviewed:** 2026-04-30
- **Tags:** #stack-pack #web3

## What it is

A Claude Code stack-pack specialized for Solana development — rules, agents, and skills oriented to Solana programs, Anchor framework, and Solana-specific tooling.

## When to install

- Projects building Solana programs (Anchor or native).
- Web3 frontends interacting with Solana RPC.
- Token issuance, NFT, or DeFi projects on Solana.

## When NOT to install

- Non-Solana web3 projects (Ethereum, EVM, Cosmos, etc.).
- Non-blockchain projects.

## How to install

```bash
open https://github.com/solanabr/solana-claude
```

Vendor or fork the relevant `.claude/` rules and skills under this OS's `stack-packs/solana/` location. Local mapping already exists.

## Fit signals

- `package.json` includes `@solana/web3.js`, `@coral-xyz/anchor`, or similar.
- `Anchor.toml` is present.
- Project README mentions Solana, SPL, or Anchor.

## Conflicts and overlaps

- Pure stack-pack — no conflicts with horizontal packs (security, design, foundations).

## Local mapping

- `stack-packs/solana/` — placeholder pack in this OS.

## Notes

Reference example for how this OS extends into specialized stack packs. Useful template even if you do not target Solana — read it to understand pack design.
