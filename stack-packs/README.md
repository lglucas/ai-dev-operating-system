# Stack Packs

Stack packs are optional extensions.

They allow AI Dev Operating System to support specific technical ecosystems without making the core repo too heavy.

Current placeholders:

- `generic-saas/`
- `nextjs-supabase-saas/`
- `solana/`

Each stack pack may include:

- rules
- agents
- skills
- commands
- templates
- setup checklists
- security notes

## What every pack starts from

A derived project already has a root `package.json` (with `npm test` and `npm run lint`), a `biome.json`, and a `PostToolUse` hook that lints each edited file. A pack builds on that manifest instead of replacing it:

- **Merge, do not overwrite.** A scaffolder that writes its own `package.json` (`create-next-app` and friends) must be run so that the existing scripts survive — scaffold into a temporary folder and merge, or re-add `test`, `lint`, `self-test` and `codemap` afterwards.
- **`npm test` and `npm run lint` are the contract.** The hook, the CI and `os-self-test` call those two names. A pack may change what they run (Vitest, ESLint, `cargo test` behind an npm script), not remove them.
- **A pack on another ecosystem keeps the manifest anyway.** The OS's own scripts and hooks are Node, and their tests run through it.
