# Security Policy

AI Dev Operating System is a public starter operating system for AI-assisted SaaS development.

It provides rules, agents, skills, commands, documentation workflows, and security-oriented habits, but it is **not** a substitute for professional security review, threat modeling, penetration testing, legal review, or compliance assessment.

---

## Supported versions

This repository is currently in early public release.

| Version | Supported |
|---|---|
| `v0.1.x` | Yes |
| `< v0.1.0` | No |

---

## What counts as a security issue

Please report issues such as:

- exposed secrets, tokens, private keys, credentials, or sensitive project data;
- malicious or unsafe instructions in prompts, agents, skills, commands, scripts, or templates;
- command injection risks in scripts;
- dangerous defaults that could expose user data;
- misleading security claims;
- unsafe GitHub Actions, shell scripts, or PowerShell scripts;
- accidental inclusion of private/internal project details;
- licensing or attribution issues that create unsafe reuse.

---

## What is out of scope

The following are generally out of scope unless they create direct risk in this repository:

- security issues in third-party tools referenced by this repo;
- vulnerabilities in generated applications created by users after heavily modifying the templates;
- misuse of Claude Code, IDEs, or external plugins outside this repository;
- business, investment, legal, or compliance conclusions produced by an AI agent without human review.

---

## Reporting a vulnerability

Please report security issues privately when possible.

Recommended channels:

- GitHub Security Advisories, if enabled for the repository;
- direct contact with the maintainer through GitHub or the public links in `README.md`.

Please include:

1. A clear description of the issue.
2. The affected file(s), path(s), or command(s).
3. Steps to reproduce, if applicable.
4. Why the behavior is unsafe.
5. Suggested fix, if available.

---

## AI-generated output warning

This repo is designed to be used with AI coding agents.

Always review generated output before committing or deploying. In particular, verify:

- environment variables and secret handling;
- authentication and authorization logic;
- database row-level security and tenant isolation;
- payment and webhook flows;
- data retention and deletion logic;
- privacy and compliance claims;
- package installation and shell commands;
- generated legal, financial, or business-plan content.

---

## Security baseline included in this repo

The project includes a baseline approach for safer AI-assisted development:

- `.claude/rules/secrets.md`
- `.claude/rules/privacy-audit.md`
- `.claude/skills/secrets-scan/`
- `.claude/skills/privacy-audit/`
- `.claude/skills/release-check/`
- `docs/security-baseline.md`
- `technical-red-team-agent` style workflows
- release and changelog discipline
- session logs for decision traceability

These are operating practices, not guarantees.

---

## Recommended local practices

Before using this repo for a real SaaS project:

- create a private project repo for your actual product;
- keep secrets out of Git;
- commit `.env.example`, never `.env`;
- use secret scanning tools such as Gitleaks or equivalent;
- use dependency scanning;
- require human review for security-sensitive changes;
- keep generated code small and auditable;
- document security decisions in `session-log/`;
- run red-team review before launch.

---

## Disclosure expectations

Security reports will be reviewed as soon as practical.

This project is maintained as an open-source/public utility. Response times may vary, but serious issues involving secrets, unsafe scripts, or private data exposure should be prioritized.
