# Attributions and upstream sources

This project is built from real-world AI-assisted development workflows and should clearly distinguish between:

1. original local operating rules;
2. adapted patterns from public specs;
3. external repos/tools referenced by the system;
4. third-party skills/plugins used as optional upstream sources.

## Known upstream/source links

| Source | URL | Role | License/status | Notes |
|---|---|---|---|---|
| Boring Co operating repo | https://github.com/lglucas/boringco | Primary source of the initial project-specific rules, agents, skills, sprint flow, changelog/session-log structure | Author-owned | Used as the extraction base for this repo |
| everything-claude-code | https://github.com/affaan-m/everything-claude-code | Optional external Claude Code plugin reference | MIT, verify upstream before vendoring | Do not vendor blindly; document selected skills and install path |
| Conventional Commits | https://www.conventionalcommits.org/en/v1.0.0/ | Commit message convention | Public specification | Used for branch/commit/release discipline |
| Keep a Changelog | https://keepachangelog.com/en/1.1.0/ | Human-readable changelog inspiration | Public guide | Use as changelog structure reference |
| Semantic Versioning | https://semver.org/ | Versioning convention | Public specification | Recommended for releases and tags |

## Attribution policy

- If a file is copied substantially from an external source, keep the upstream link in the file header.
- If a file is adapted from an external source, state `Adapted from:` in the file header.
- If a file only references an external tool, list it here and in the relevant `skills/external/*` note.
- Avoid vendoring external repos unless the license allows it and the original license notice is preserved.
