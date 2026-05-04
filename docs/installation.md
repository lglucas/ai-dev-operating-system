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

## 4. Get the OS files into a NEW repository (you, not us)

**There are two paths. Path A is strongly recommended.**

### Path A — "Use this template" (recommended)

1. Open https://github.com/lglucas/ai-dev-operating-system in your browser.
2. Click the green **"Use this template"** button (top right) → **"Create a new repository"**.
3. Pick a name (e.g. `my-new-saas`). Recommend setting it **Private** for early-stage projects (you can flip to public later).
4. **Don't** add a README, `.gitignore`, or license — the template already has those.
5. Click **"Create repository"**. GitHub creates a NEW repo in your account, with no shared history with our OS repo.
6. Now clone YOUR new repo locally:

   ```bash
   git clone https://github.com/SEU-USUARIO/my-new-saas.git
   cd my-new-saas
   ```

   PowerShell on Windows:
   ```powershell
   git clone https://github.com/SEU-USUARIO/my-new-saas.git
   cd my-new-saas
   ```

   `origin` is already pointing to YOUR repo. No detach needed. No risk of accidentally pushing to the OS repo.

### Path B — `git clone` directly (only if Path A is not possible)

If for some reason you can't use the template button (no GitHub account yet, working offline, etc.):

```bash
git clone https://github.com/lglucas/ai-dev-operating-system.git my-new-saas
cd my-new-saas
```

PowerShell on Windows:

```powershell
git clone https://github.com/lglucas/ai-dev-operating-system.git my-new-saas
cd my-new-saas
```

⚠️ **Important:** the local `origin` now points to our OS repo. Before any commit, you MUST detach. Either:

- Run the detach script (educational + interactive):

  ```bash
  bash scripts/detach-os.sh        # Linux/macOS
  powershell scripts/detach-os.ps1 # Windows
  ```

- Or let WIZARD Stage 0.5 walk you through it on first run.

The script (and the wizard) will explain what `origin` is, how to create a new GitHub repo, how to swap remotes, and how to keep `.env` out of the repo.

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
