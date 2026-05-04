# Contributing — AI Dev Operating System

> 🇬🇧 **English (short version):** This is a public template repo. Use the **"Use this template"** button on GitHub to start a project — don't `git clone` and push to our `main`. The `main` branch is protected and requires PRs. To contribute: **fork → branch → PR**. Full guide below in Portuguese; if you need it in English, open an issue.

---

> 🇧🇷 **Português (versão completa)** — abaixo.

---

## Quem deveria ler este documento

- **Quero usar este OS no meu projeto:** você **não precisa contribuir**. Use o botão **"Use this template"** no topo do repositório no GitHub. Isso cria um repo novo, separado, sob a sua conta. Veja [`docs/installation.md`](docs/installation.md).
- **Quero corrigir um bug, propor uma skill nova, melhorar a documentação ou adicionar um pack ao registry:** este documento é pra você.
- **Quero entender por que o repo é assim:** leia [`ETHOS.md`](ETHOS.md) primeiro.

---

## Regra de ouro

**Não fazemos commit direto em `main`.** O `main` é protegido. Toda mudança entra via Pull Request. Isso vale para tudo — inclusive para o mantenedor.

---

## Fluxo de contribuição (passo a passo)

### 1. Faça um fork do repositório

No GitHub, clique em **"Fork"** no canto superior direito. Isso cria uma cópia do repo sob a sua conta.

### 2. Clone o seu fork (não o repo original)

```bash
git clone https://github.com/SEU-USUARIO/ai-dev-operating-system.git
cd ai-dev-operating-system
```

> Substitua `SEU-USUARIO` pelo seu usuário GitHub.

### 3. Crie uma branch de feature

Use a convenção de nomes do repo (ver [`.claude/rules/git-workflow.md`](.claude/rules/git-workflow.md)):

```bash
git checkout -b feat/nome-curto-da-feature
```

Tipos comuns: `feat/`, `fix/`, `docs/`, `chore/`, `refactor/`, `test/`.

### 4. Faça suas mudanças

Antes de codar, leia:

- [`CLAUDE.md`](CLAUDE.md) — golden rules
- [`.claude/rules/`](.claude/rules/) — todas as regras (estilo, secrets, privacidade, arquitetura por feature)
- [`ETHOS.md`](ETHOS.md) — manifesto do OS

Princípios não-negociáveis:

- **Sem segredos no repo.** Nem em arquivos, nem em commits, nem em logs.
- **Documentação separada.** BP, brief, technical plan, sprints, changelog, session-log — cada um tem sua responsabilidade. Não misture.
- **Sem fatos inventados.** Se citou mercado, regulação, número, comportamento de cliente — precisa ter fonte.
- **Arquivos de código abaixo de 200 linhas** quando der.

### 5. Use Conventional Commits

```txt
feat: adiciona skill de privacy-audit
fix: corrige path do registry-pick
docs: atualiza installation.md com fluxo de template
```

### 6. Empurre pro seu fork

```bash
git push origin feat/nome-curto-da-feature
```

### 7. Abra um Pull Request

Vá em `https://github.com/lglucas/ai-dev-operating-system/pulls` e clique em **"New pull request"** → **"compare across forks"** → selecione seu fork e branch.

Preencha o template do PR (aparece automaticamente). Seja específico sobre o **porquê**.

### 8. Espere a revisão

PRs são revisados em fluxo humano. Pode levar alguns dias. Use os comentários — eles existem pra fazer o PR ficar bom, não pra rejeitar você.

---

## O que tem mais chance de ser aceito

- **Bugs documentados** — descreva o que aconteceu, o que era esperado, como reproduzir.
- **Skills novas que seguem o template** — leia outras skills em `.claude/skills/` antes de criar a sua.
- **Packs novos no registry** — siga `docs/registry/README.md`. Use o template de um pack existente como base.
- **Melhorias de documentação em português simples** — especialmente cobrindo o gap "vibe coder não-dev".
- **Casos reais** — relatos de uso ("rodei o WIZARD num projeto X, aqui o que travou").

## O que tem menos chance de ser aceito

- Mudanças grandes sem discussão prévia. **Abra uma issue antes** se a mudança é estrutural.
- Refactors estéticos que não resolvem problema descrito.
- Adição de dependências alpha/beta sem justificativa.
- Mudanças que reduzem a clareza pra quem não é desenvolvedor.
- Mudanças que misturam camadas de documentação (ex: incluir decisão de negócio no `TECHNICAL-PLAN.md`).

---

## Reportando bugs ou problemas de segurança

- **Bugs comuns:** abra uma issue em [Issues](https://github.com/lglucas/ai-dev-operating-system/issues) usando o template "Bug report".
- **Vulnerabilidades de segurança:** **NÃO** abra issue pública. Mande direto pra `contato@lucasgalvao.com.br` com o assunto `[SECURITY]`.

---

## Código de conduta

Trate todo mundo com respeito. Comentários ofensivos, ataques pessoais ou linguagem discriminatória são causa de bloqueio sem aviso.

Este projeto adota o espírito do [Contributor Covenant](https://www.contributor-covenant.org/) — seja construtivo, especialmente com vibe coders iniciantes.

---

## Dúvidas

Abra uma issue ou mande email pra `contato@lucasgalvao.com.br`.

Obrigado por contribuir. Você tá ajudando a baixar a barreira pra qualquer pessoa começar a construir software com IA de forma séria.
