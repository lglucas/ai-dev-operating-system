# Documentation layers

Each document type has a job. Avoid mixing them.

| Layer | Question answered | Typical file |
|---|---|---|
| Project constitution | What are the non-negotiable rules of this repo? | `CLAUDE.md` |
| Rules | What constraints should agents obey? | `rules/**/*.md` |
| Skills | How should a recurring workflow be executed? | `skills/**/SKILL.md` |
| Commands | How does the user trigger a workflow? | `commands/*.md` |
| Sprint doc | What are we building in this execution cycle? | `docs/sprints/sprint-XX.md` |
| Changelog | What changed in a release? | `CHANGELOG.md` |
| Session log | Why did we decide something? | `session-log/YYYY-MM-DD-topic.md` |
| ADR | What architectural decision was made and what alternatives were rejected? | `docs/adr/*.md` |
