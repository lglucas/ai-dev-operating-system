# Release Notes — v0.4.0

**Date:** 2026-04-30
**Theme:** External Repo Registry framework

---

## Summary

v0.4.0 turns the AI Dev Operating System into a project-agnostic launchpad for any vibe-coded SaaS by introducing a **curated, on-demand catalog of external repository packs**.

Instead of pre-installing every interesting community pack, the OS now ships a registry of trusted, vetted repos that the WIZARD recommends per project based on stack, domain, compliance needs, and team familiarity. New repos discovered in the wild can be added in seconds using a fixed one-pager template.

The result: one OS, many possible project shapes — Solana web3, Next.js B2B SaaS, compliance-heavy healthtech, design-led B2C — each gets exactly the external packs it needs and none of the noise it doesn't.

---

## What's new

### `docs/registry/` — External Repo Registry

A new first-class layer of the OS. Lives next to `UPSTREAM-SOURCES.md` but answers a different question:

| Doc | Question it answers |
|-----|---------------------|
| `UPSTREAM-SOURCES.md` | What was used to BUILD this OS? |
| `docs/registry/` | What can I INSTALL on top of a project running this OS? |

Structure:

```
docs/registry/
├── README.md         ← how the registry works + one-pager template
├── INDEX.md          ← sortable master table
├── packs/            ← one one-pager per repo
│   ├── anthropics-skills.md
│   ├── everything-claude-code.md
│   ├── ui-ux-pro-max.md
│   ├── awesome-design-md.md
│   ├── trailofbits-skills.md
│   ├── solana-claude.md
│   ├── cis-hardening-guide.md
│   ├── yara-style-guide.md
│   ├── gitleaks.md
│   └── boringco.md
└── tags/             ← auxiliary tag-grouped indexes
    ├── security.md
    ├── design.md
    ├── foundations.md
    ├── stack-pack.md
    └── ecosystem.md
```

Each pack has a fixed schema: URL, license, status, last reviewed, tags, what it is, when to install, when NOT to install, install command, fit signals, conflicts and overlaps, local mapping, notes.

### `/registry-pick` — recommendation skill + slash command

A new skill that reads `INDEX.md`, matches project signals against pack fit-signals, and outputs a prioritized recommendation:

- **Must install** — direct fit, project breaks without it.
- **Recommended** — strong fit, install before launch.
- **Optional** — situational, depends on growth path.
- **Skipped (and why)** — explicit non-recommendation with reason.

The skill never installs. It shortlists and shows install commands. The user decides.

Works in three contexts:

1. Inside `WIZARD.md` Stage 11.5 (after Technical Plan).
2. Mid-build when a new need surfaces (compliance, design, malware).
3. After adding a new pack, to retest the current project's recommendation.

### `WIZARD.md` Stage 11.5

The genesis flow now includes a registry-pick step between Technical Plan and Sprint roadmap. The WIZARD doesn't decide alone — it delegates to the skill, presents options, and waits for the user to pick.

### Cross-linking and separation of concerns

`UPSTREAM-SOURCES.md` and `ATTRIBUTIONS.md` now explicitly point to the registry and clarify the audit-vs-catalog distinction. README and CHANGELOG updated. Session log entry captures the why.

---

## Why this matters

The user reported that social-media discovery surfaces 3–5 interesting repos every day across many project shapes. Without a registry, each one is an unstructured note. With a registry, each one becomes:

- a fixed-format one-pager (cheap to add),
- indexed by tag (easy to find),
- discoverable via skill (auto-recommended at the right moment),
- cross-checked for conflicts (no more "do I install pack A or pack B?"),
- reviewable on cadence (license + status freshness).

The OS becomes ready to host many project types without bundling everything by default.

---

## Migration

No migration needed. v0.4.0 is purely additive:

- All v0.3.0 features (Vibe Coder Non-Dev Pack) remain.
- All v0.2.0 features (canonical `.claude/`, WIZARD) remain.
- New layers are opt-in.

---

## What's not in v0.4.0 (deferred)

- Automated license checks for upstream packs (manual review for now).
- Per-project version pinning of packs (lives in project manifests, not the OS).
- Stack-pack composition resolver (e.g. "Solana + Next.js → resolve overlaps automatically"). For now, `/registry-pick` outputs both and the user decides.

---

## How to use

```bash
git pull origin main
git checkout v0.4.0
```

Inside any project running this OS:

```txt
/registry-pick
```

Or browse manually:

- `docs/registry/INDEX.md` — see all packs.
- `docs/registry/tags/security.md` — find security packs.
- `docs/registry/tags/design.md` — find design packs.

Adding a new pack:

1. Copy the template from `docs/registry/README.md`.
2. Save as `docs/registry/packs/<slug>.md`.
3. Add a row to `INDEX.md` and to relevant `tags/<tag>.md` files.

---

## Credits

Built by Lucas Galvão. Registry initial population draws from sources documented in `UPSTREAM-SOURCES.md`. Full attribution in `ATTRIBUTIONS.md` and per-pack one-pagers.
