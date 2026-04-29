# 2026-04-28 — Vibe Coder Non-Dev Pack (v0.3.0)

## Context

After the v0.2.0 polish, the OS was structurally sound but had a clear gap: the system protected the *day-zero ideation flow* (wizard, BP, sprints) but offered little for **the messy middle and the launch** — when an AI-applied change breaks the build, when costs spike unexpectedly, when the non-dev needs to publish, when there's a legal question, when there's no users yet.

The user (solo Brazilian founder, vibe coder who is not a developer) explicitly asked for a pack that closes this gap. We agreed on doing it in two etapas (phases) inside one cohesive version: v0.3.0 — Vibe Coder Non-Dev Pack.

## Decisions

1. **One version, two commits.** Phase 1 (defensive — preventive, always-on) and Phase 2 (active-help — interventive, fires on triggers) ship as separate commits in the same branch and the same release tag. Reason: the work splits naturally by intent and gives the human reviewer a coherent diff per phase.

2. **Plain Portuguese as the default explanation channel.** Every new agent and skill includes a "Vibe coder explanation" section using non-tech analogies. Reason: the persona doesn't share dev mental models; forcing plain Portuguese costs nothing and removes a major friction point.

3. **Cost awareness wired into both phases.** `cost-watchdog` (preventive, Phase 1) and `usage-monitor` (reactive, Phase 2) are explicitly complementary and cross-link to each other. Reason: vibe coders blow LLM/hosting budget fastest and discover it last.

4. **Recovery before launch.** `bug-triage-agent` + `rollback-safe` + `verify-build-works` come first in Phase 2, BEFORE `launch-agent`. Reason: a launch only matters if the project is recoverable.

5. **Legal baseline as a first-class agent, not a footnote.** `legal-compliance-agent` is a top-level agent with explicit "I am not a lawyer" disclaimer. Reason: ignoring LGPD/GDPR while shipping in Brazil is a bigger risk than a missing dashboard.

6. **Real example, not a runnable scaffold.** `examples/nextjs-supabase-saas/README.md` is opinionated documentation of the canonical layout. Reason: a real scaffold doubles repo weight and rots fast; the wizard generates per-project anyway.

7. **CI baseline included.** `.github/workflows/ci.yml` enforces canonical structure, no committed secrets/archives/OS junk, and link integrity. Reason: the OS should police itself, not just preach.

8. **Issue/PR templates with vibe-coder dimension.** Both bug and feature templates ask "are you a vibe coder or a dev?" so future fixes can be tuned to the right audience.

## Outcome

- 22 new files: 11 in Phase 1 (defensive), 11 in Phase 2 (active-help + docs + release artifacts).
- 1 README update to make the pack discoverable from the front page.
- 1 CHANGELOG entry, 1 RELEASE-NOTES file, 1 session-log entry.
- Tag `v0.3.0` and a GitHub Release pointing to the notes.

## Open questions

- The `legal-compliance-agent` has only a Brazilian/LGPD baseline. Should we add a US/GDPR-specific variant, or keep it generic with a "consult local lawyer" reminder? Deferred.
- `usage-monitor` relies on the user manually pasting numbers from provider dashboards. A future version could pull via API.
- Should the wizard auto-invoke `cost-watchdog` after every Sprint plan, or only on demand? Current default is on-demand.
