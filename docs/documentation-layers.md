# Documentation layers

Each document type has a job. Avoid mixing them.

| Layer | Question answered | Typical file |
|---|---|---|
| Project constitution | What are the non-negotiable rules of this repo? | `CLAUDE.md` |
| Rules | What constraints should agents obey? | `.claude/rules/*.md` |
| Skills | How should a recurring workflow be executed? | `.claude/skills/**/SKILL.md` |
| Commands | How does the user trigger a workflow? | `.claude/commands/*.md` |
| Business plan | Is this worth building, and for whom? | `docs/business/BUSINESS-PLAN.md` |
| Pitch | The same argument in ten sections — and what of it may go public | `docs/business/PITCH.md` |
| Design direction | What did the approved prototype actually decide? | `docs/product/DESIGN-DIRECTION.md` |
| Product brief | What is the product, operationally? | `docs/product/PRODUCT-BRIEF.md` |
| Technical plan | How is it built, and what are the risks? | `docs/technical/TECHNICAL-PLAN.md` |
| Codemap | Where is the code? Every file, one line on its core | `CODEMAP.md` |
| Sprint doc | What are we building in this execution cycle? | `docs/sprints/sprint-XX.md` |
| Changelog | What changed in a release? | `CHANGELOG.md` |
| Session log | Why did we decide something? | `session-log/YYYY-MM-DD-topic.md` |
| ADR | What architectural decision was made and what alternatives were rejected? | `docs/adr/*.md` |
