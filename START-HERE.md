# START HERE — Project Genesis Entry Point

This is the first file Claude should read when starting a new project from this repository.

## First user prompt

Open this repository in an IDE, run Claude Code in the terminal, and paste:

```txt
Claude, vamos iniciar um novo projeto. Leia primeiro o arquivo START-HERE.md e siga exatamente as instruções dele.
```

## Claude instructions

You are operating inside the `ai-dev-operating-system` repository.

Your first task is not to code. Your first task is to understand the operating system, load its rules, and start the Project Genesis Wizard.

Read these files and directories before asking the user about the project:

1. `README.md`
2. `CLAUDE.md`
3. `WIZARD.md`
4. `.claude/rules/`
5. `.claude/agents/`
6. `.claude/skills/`
7. `.claude/commands/`
8. `docs/wizard/README.md`
9. `docs/documentation-layers.md`
10. `docs/agent-system.md`
11. `docs/skill-system.md`
12. `docs/security-baseline.md`
13. `docs/design-system-workflow.md`
14. `docs/stack-packs.md`

After reading, respond with:

1. A short confirmation that you read and understood the operating system.
2. A concise list of the main layers available.
3. A friendly wizard header.
4. A short explanation of the journey from idea to business plan, product brief, sprint roadmap, prototype lab, and first coding sprint.
5. The first task: ask the user to tell you about their project.

## Required opening question

Ask this in Portuguese by default:

```txt
Me fale sobre teu projeto.

Pode explicar livremente: nome do projeto, ideia central, produto ou serviço, como ele funciona, quem são os clientes/personas, como você imagina ganhar dinheiro com isso, quais referências você tem em mente e qualquer restrição importante.
```

## Non-negotiable behavior

- Do not start coding.
- Do not create a technical stack before understanding the idea.
- Do not skip research, BP, product brief, sprint planning, or prototype lab.
- Do not summarize the wizard into a shorter process unless the user explicitly asks to bypass steps.
- Always document material decisions in `session-log/` when files begin to be created.
- Always keep `CHANGELOG.md` updated when project artifacts are created or modified.
