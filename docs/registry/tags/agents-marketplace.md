# Tag: agents-marketplace

Curated bundles of agents, skills, and commands distributed as a single installable pack — effectively "agent marketplaces" or "skill bundles" you can plug into Claude Code (or compatible coding agents) and immediately use as a virtual team.

These differ from `#foundations` (canonical / official) and from `#ecosystem` (broad expansions): a marketplace pack is **opinionated**, **curated**, and **delivered as a discrete bundle**, often with a single author or organization signal.

| Pack | Focus | Signal |
|------|-------|--------|
| [`gstack`](../packs/gstack.md) | ⭐ 23-agent virtual engineering team | Garry Tan / YC |
| [`slavingia-skills`](../packs/slavingia-skills.md) | ⭐ Minimalist Entrepreneur 10-skill business playbook | Sahil Lavingia / Gumroad |
| [`antigravity-awesome-skills`](../packs/antigravity-awesome-skills.md) | 1,441+ skill playbooks across multiple AI coding agents | community |
| [`anthropics-skills`](../packs/anthropics-skills.md) | Official Anthropic Skills reference | Anthropic |
| [`everything-claude-code`](../packs/everything-claude-code.md) | Community ecosystem of skills/agents/hooks | community |
| [`ruflo`](../packs/ruflo.md) | Multi-agent orchestration on top of Claude Code | community |
| [`holyclaude`](../packs/holyclaude.md) | Containerized Claude Code env with 7 AI CLIs | community |
| [`vibeyard`](../packs/vibeyard.md) | Electron IDE for managing parallel AI agent sessions | community |
| [`optio`](../packs/optio.md) | K8s-based ticket-to-PR workflow orchestration | community |
| [`open-design`](../packs/open-design.md) | Local-first AI design generation across 10 agent CLIs | community |
| [`trailofbits-skills`](../packs/trailofbits-skills.md) | Security-review skill bundle | Trail of Bits |

## When this tag is relevant

- The team wants to adopt an opinionated agent/skill bundle wholesale instead of authoring from scratch.
- A specific author signal (YC partner, security firm, established founder) carries enough trust to short-circuit individual skill review.
- Onboarding a new project that benefits from a virtual team mental model (e.g. "we have 23 agents covering planning → implementation → review").

## When this tag is NOT relevant

- Compliance-sensitive contexts where each skill must be individually audited before inclusion.
- Teams that already authored a strong internal skill set and only want surgical additions.
- First-time Claude Code users — adopt `#foundations` packs first to learn the primitives before installing a 1,441-playbook bundle.

## Selection guidance

- **Want a single virtual team?** → `gstack`.
- **Want a business-playbook bundle?** → `slavingia-skills`.
- **Want maximum coverage to cherry-pick from?** → `antigravity-awesome-skills`.
- **Need the official primitive?** → `anthropics-skills`.
- **Want orchestration / multi-session management?** → `ruflo`, `vibeyard`, `optio`.
- **Need a containerized env?** → `holyclaude`.

## Conflict resolution

Marketplace packs frequently overlap (multiple "code review" or "PR creation" agents). When two packs are installed, prefer:

1. The pack whose author signal matches the team's existing trust profile (e.g. security work → Trail of Bits over a community pack).
2. The pack with explicit license + active maintenance over a stale or unlicensed alternative.
3. The pack with smaller surface area when in doubt — easier to audit than to remove later.

Run [`/registry-pick`](../../../.claude/commands/registry-pick.md) and [`/multi-ai-review`](../../../.claude/commands/multi-ai-review.md) before installing two marketplace packs in the same project.

## Notes

The tag exists because v0.4.x discovered that a substantial fraction of registry packs are not single-purpose tools — they are bundled "marketplaces" with their own internal structure. Surfacing them under one tag makes the registry easier to scan when the user's question is "which skill bundle should I adopt?" instead of "which single skill solves problem X?".
