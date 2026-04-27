# Installation Guide

This guide explains how to start a new AI-assisted SaaS project using AI Dev Operating System.

The intended flow is:

```txt
Clone repo → open in IDE → run Claude Code in terminal → paste the first prompt → follow the Project Genesis Wizard
```

---

## 1. Install Git

You need Git to clone the repository.

- Git: https://git-scm.com/downloads

Check if Git is installed:

```bash
git --version
```

---

## 2. Choose an IDE

You can use any IDE that lets you open a folder and use an integrated terminal.

Recommended options:

- Antigravity — https://antigravity.google/
- Visual Studio Code — https://code.visualstudio.com/
- Cursor — https://cursor.com/
- Windsurf — https://windsurf.com/

The repo is IDE-agnostic. The important part is that you can open the project folder and run Claude Code in the terminal.

---

## 3. Install Claude Code

Install Claude Code using Anthropic's official documentation:

- Claude Code docs: https://code.claude.com/docs

After installing, confirm it works from your terminal.

Depending on your installation method, you should be able to run Claude Code from inside your project folder.

---

## 4. Clone the repository

Choose a name for your new project folder.

Example:

```bash
git clone https://github.com/lglucas/ai-dev-operating-system.git my-new-saas
cd my-new-saas
```

If you are using PowerShell on Windows:

```powershell
git clone https://github.com/lglucas/ai-dev-operating-system.git my-new-saas
cd my-new-saas
```

---

## 5. Open the folder in your IDE

Open the cloned folder in your IDE.

For example:

```txt
my-new-saas/
```

Make sure you can see files such as:

```txt
START-HERE.md
WIZARD.md
CLAUDE.md
.claude/
docs/
README.md
```

---

## 6. Run Claude Code in the project terminal

Open the integrated terminal inside your IDE.

Make sure the terminal is located inside the project folder.

Check with:

```bash
pwd
```

On Windows PowerShell:

```powershell
pwd
```

You should be inside your cloned project folder.

Then start Claude Code.

---

## 7. Paste the first prompt

Paste this prompt into Claude Code:

```txt
Claude, vamos iniciar um novo projeto. Leia primeiro o arquivo START-HERE.md e siga exatamente as instruções dele.
```

Claude should then:

1. Read `START-HERE.md`.
2. Read the operating-system structure.
3. Understand the `.claude/` rules, agents, skills, and commands.
4. Read `WIZARD.md`.
5. Start the Project Genesis Wizard.
6. Ask you to introduce yourself and describe your project.

---

## 8. What the wizard will do

The wizard will guide you through:

1. Project ideation.
2. Ideation polish.
3. Exactly 10 strategic questions.
4. Research plan approval.
5. Competitor and market research.
6. Red-team critique.
7. Business Plan v0.0.1.
8. Human review.
9. Business Plan v0.0.2.
10. Product Brief.
11. Technical Plan.
12. 14–20 sprint roadmap.
13. Prototype Lab with 3 HTML directions.
14. Sprint 0 / first coding sprint.

The wizard intentionally prevents coding too early.

---

## 9. Optional local setup scripts

The repo includes optional scripts.

Windows PowerShell:

```powershell
.\scripts\init-project.ps1
```

Mac/Linux/Git Bash:

```bash
chmod +x ./scripts/init-project.sh
./scripts/init-project.sh
```

These scripts are optional. The primary workflow is still Claude Code + `START-HERE.md`.

---

## 10. Common mistakes

### Mistake: cloning and immediately asking Claude to code

Do not do this.

First run the Project Genesis Wizard. The wizard exists to avoid chaotic AI-generated code.

---

### Mistake: skipping the Business Plan

The Business Plan is not just for investors. It helps the AI understand the product, market, positioning, pricing, and risks.

---

### Mistake: skipping the Product Brief

The Product Brief is the operational product document. It guides implementation more directly than the Business Plan.

---

### Mistake: mixing prototype files with production code

Keep prototypes inside `prototype-lab/`. They are disposable references, not the real app.

---

### Mistake: committing secrets

Never commit `.env`, API keys, credentials, private keys, database passwords, or service tokens.

Use `.env.example` for variable names only.

---

## 11. Recommended first user answer

When Claude asks about your project, answer naturally.

Example:

```txt
Meu nome é Ana. Quero criar um SaaS chamado ExampleOS para pequenos escritórios organizarem atendimento, cobrança e documentos.

A ideia é vender assinatura mensal. O cliente principal seria o dono de um pequeno negócio que hoje controla tudo no WhatsApp e planilhas.

Ainda não tenho certeza sobre o stack, mas gostaria de algo simples, barato de manter e fácil de evoluir com IA.
```

The wizard will polish the idea and ask the next 10 questions.
