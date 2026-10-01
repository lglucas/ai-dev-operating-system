# Code Style

Code files should stay under 200 lines where practical. Documentation, changelogs, session logs, agents, rules, and skills may be longer.

Generated code files should include a short purpose/version/sprint header.

Formatting and lint belong to the tool, not to review: `npm run lint` checks, `npm run format` fixes. When the linter complains, fix the code — do not loosen `biome.json` to make it pass.
