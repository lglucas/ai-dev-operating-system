# Installation Guide

This guide explains how to use **AI Dev Operating System** as the starting point for a new AI-assisted SaaS project.

The intended workflow is:

```txt
clone repo → open in IDE → install/run Claude Code → paste first prompt → Project Genesis Wizard starts
```

You do **not** need to understand every folder before starting. The wizard will guide the process.

---

## 1. What you need

You need four things:

1. Git
2. An IDE or code editor
3. Claude Code running in the terminal
4. This repository cloned locally

Optional but recommended:

- Node.js LTS
- GitHub account
- Git Bash, WSL, or PowerShell on Windows

---

## 2. Install Git

Check if Git is already installed:

```bash
git --version
```

If this command returns a version number, you already have Git.

If not, install it from:

- https://git-scm.com/downloads

On Windows, Git Bash is useful because it lets you run common shell commands even if you normally use PowerShell.

---

## 3. Choose your IDE

This repo works with any IDE/editor that lets you open a folder and use a terminal.

Recommended options:

### Google Antigravity

- Site: https://antigravity.google/
- Good for: agent-first coding workflows, vibe coding, multi-agent workspaces.

### Visual Studio Code

- Site: https://code.visualstudio.com/
- Download: https://code.visualstudio.com/download
- Good for: general development, extensions, terminal workflows, Git integration.

### Cursor

- Site: https://cursor.com/
- Good for: AI-assisted coding in a VS Code-like environment.

### Windsurf

- Site: https://windsurf.com/editor
- Download: https://windsurf.com/download
- Good for: AI-native IDE workflows and agentic development.

You can also use another editor if it has a terminal and can open the project folder.

---

## 4. Install Claude Code

Official Claude Code docs:

- Overview: https://code.claude.com/docs/en/overview
- Setup: https://code.claude.com/docs/en/setup
- Quickstart: https://code.claude.com/docs/en/quickstart

Claude Code is an agentic coding tool that can read your codebase, edit files, run commands, and work from your terminal.

### macOS, Linux, or WSL

Use the official installation command from Anthropic's setup docs:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Then verify:

```bash
claude --version
```

### Windows PowerShell

Use the official Windows installation method from the Claude Code setup docs.

At the time of writing, Anthropic lists Windows PowerShell installation options in the setup guide:

- https://code.claude.com/docs/en/setup

After installation, verify:

```powershell
claude --version
```

### Login

Start Claude Code:

```bash
claude
```

Follow the login/authentication steps shown in the terminal.

---

## 5. Clone this repo

Open your terminal in the folder where you keep projects.

Then run:

```bash
git clone https://github.com/lglucas/ai-dev-operating-system.git my-new-saas
cd my-new-saas
```

You can replace `my-new-saas` with your actual project folder name.

Example:

```bash
git clone https://github.com/lglucas/ai-dev-operating-system.git trustbond-v2
cd trustbond-v2
```

---

## 6. Open the folder in your IDE

Open the cloned folder in your IDE.

The root should contain files like:

```txt
START-HERE.md
WIZARD.md
CLAUDE.md
README.md
.claude/
docs/
knowledge-base/
prototype-lab/
session-log/
```

Important: open the **project root**, not a nested folder.

---

## 7. Start Claude Code in the project terminal

Inside your IDE terminal, run:

```bash
claude
```

Claude Code should start inside the project folder.

You can confirm your location by asking Claude to run:

```bash
pwd
```

or on Windows:

```powershell
pwd
```

---

## 8. Paste the first prompt

Paste this into Claude Code:

```txt
Claude, vamos iniciar um novo projeto. Leia primeiro o arquivo START-HERE.md e siga exatamente as instruções dele.
```

That is the only first prompt you need.

Claude should then:

1. Read `START-HERE.md`.
2. Read the project structure.
3. Load `CLAUDE.md`.
4. Read `WIZARD.md`.
5. Inspect `.claude/rules/`.
6. Inspect `.claude/agents/`.
7. Inspect `.claude/skills/`.
8. Inspect `.claude/commands/`.
9. Explain that it understood the operating system.
10. Start the Project Genesis Wizard.

---

## 9. What Claude should ask first

Claude should greet you and ask you to introduce yourself and your project.

The first real wizard question should be simple:

```txt
Me fale sobre teu projeto.
```

You can answer naturally.

Try to include:

- project name;
- what the idea is;
- what problem it solves;
- who the users/customers are;
- whether it is a product, service, SaaS, marketplace, app, tool, or other;
- how you think it could make money;
- any stack or technology preferences;
- any legal, privacy, compliance, or security concerns;
- what you already have, if anything.

You do not need to be perfect. The wizard is designed to improve and structure your idea.

---

## 10. What happens next

After you describe your idea, Claude should:

1. Restate the idea in a clearer and more strategic way.
2. Fill gaps when reasonable, without pretending uncertainty does not exist.
3. Suggest a more mature framing of the project.
4. Ask exactly 10 strategic questions.
5. Wait for your answers.

After your answers, Claude should propose a research and business-plan workflow using the agent waves described in `WIZARD.md`.

Claude should not start coding yet.

---

## 11. Expected generated outputs

During the wizard, the project should generate or update:

```txt
docs/product/PRODUCT-BRIEF.md
docs/business/BUSINESS-PLAN.md
docs/technical/TECHNICAL-PLAN.md
docs/SPRINTS.md
CHANGELOG.md
session-log/YYYY-MM-DD-project-genesis.md
knowledge-base/
prototype-lab/
```

These files are the foundation for serious AI-assisted development.

---

## 12. Optional setup scripts

This repo includes optional helper scripts.

### Windows PowerShell

```powershell
.\scripts\init-project.ps1
```

### Mac/Linux/Git Bash

```bash
chmod +x ./scripts/init-project.sh
./scripts/init-project.sh
```

These scripts are not required. The primary workflow is still Claude Code reading `START-HERE.md`.

---

## 13. Common mistakes

### Mistake 1: opening the wrong folder

Make sure your IDE opened the root folder containing `START-HERE.md`.

### Mistake 2: asking Claude to code immediately

Do not start with:

```txt
Build me a SaaS app.
```

Start with:

```txt
Claude, vamos iniciar um novo projeto. Leia primeiro o arquivo START-HERE.md e siga exatamente as instruções dele.
```

### Mistake 3: skipping the Business Plan or Product Brief

The wizard is intentionally designed to create a strong planning base before code.

### Mistake 4: mixing prototype code with real app code

Prototype Lab belongs in `prototype-lab/` and should remain disposable.

### Mistake 5: not documenting decisions

Material decisions should be reflected in:

```txt
CHANGELOG.md
session-log/
docs/product/PRODUCT-BRIEF.md
docs/business/BUSINESS-PLAN.md
docs/technical/TECHNICAL-PLAN.md
docs/SPRINTS.md
```

---

## 14. Recommended first user answer

When Claude asks about your project, a good answer can look like this:

```txt
Meu nome é Lucas. Quero criar um SaaS chamado ExampleOS.
A ideia é ajudar pequenos negócios a organizar atendimento, pagamentos e tarefas com IA.
O cliente principal seria o dono de pequena empresa que não tem time técnico.
Quero cobrar mensalidade recorrente, talvez com planos por volume de uso.
Ainda não sei se começo com WhatsApp, painel web ou ambos.
Tenho preferência por Next.js e Supabase, mas estou aberto.
Quero que o MVP seja simples, mas com estrutura para crescer.
```

The answer can be rough. The wizard will refine it.

---

## 15. When to start coding

Only start coding after these are ready:

- Product Brief
- Business Plan v0.0.1
- Human review
- Business Plan v0.0.2
- Technical Plan
- Sprint roadmap
- Prototype Lab or approved UI direction
- Sprint 0/Sprint 1 scope

The system is designed this way because most AI-coded projects fail from lack of structure, not lack of code.

