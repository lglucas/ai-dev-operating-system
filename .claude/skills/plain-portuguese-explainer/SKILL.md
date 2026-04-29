---
name: plain-portuguese-explainer
description: Translate technical decisions, architecture, errors, or AI-generated jargon into plain Portuguese a vibe coder (non-dev) can act on. Use whenever the user signals confusion ("não entendi", "o que isso quer dizer", "explica de novo") or after producing technical artifacts.
---

# Plain-Portuguese Explainer

## When to run this skill

- After producing a technical artifact (TECHNICAL-PLAN, sprint plan, architecture decision).
- When the user says "não entendi" / "explica de novo" / "o que isso quer dizer" / "tô perdido".
- After an error message, build failure, or stack trace.
- When introducing a new concept (database, deploy, branch, environment variable, API).

## Rules

1. **Use everyday Portuguese.** No English jargon unless impossible to translate, and even then explain it once.
2. **Use analogies from outside tech.** Restaurant, mailbox, car, building.
3. **Three-line max** for the core idea. Then optional "se quiser detalhes" expansion.
4. **No condescension.** The user is smart, just not a dev.
5. **End with one concrete action** the user should take, or "nada que precise fazer agora".

## Translation patterns

| Termo técnico | Tradução curta |
|---|---|
| API | "Garçom" — leva pedido pro sistema lá atrás e volta com a resposta. |
| Banco de dados | "Caderno organizado" — guarda informação em linhas e colunas. |
| Branch | "Cópia de rascunho" — pra mexer sem bagunçar a versão principal. |
| Build | "Cozinhar a comida" — pegar os ingredientes (código) e montar o prato final (app). |
| Cache | "Geladeira" — guarda coisas prontas pra não precisar fazer de novo. |
| Deploy | "Colocar a placa de aberto" — sai do seu computador, vira algo que o mundo acessa. |
| Env var | "Bilhetinho secreto" — informação que o app precisa mas não fica no código. |
| Hooks | "Alarme do despertador" — coisa que dispara automático em certos momentos. |
| Linter | "Revisor ortográfico do código". |
| Migration | "Reforma planejada do banco" — muda a estrutura sem perder o que tinha. |
| PR / pull request | "Pedido formal pra entrar mudança" — alguém olha antes de aceitar. |
| Repo / repositório | "Pasta organizada com histórico" de tudo que mudou. |
| Stack | "Conjunto de ferramentas" que o projeto usa. |
| Token | "Chave de cofre" — prova quem você é pra um sistema. |
| Webhook | "Bilhete que cai automático na sua caixa" quando algo acontece num outro sistema. |

## Output format

```
🗣️  Tradução

[Termo / situação]: [3 linhas em português corriqueiro com analogia]

Detalhe técnico (opcional): [só se o usuário pedir]

👉 O que fazer agora: [ação concreta ou "nada por enquanto"]
```

## Anti-patterns

- ❌ "Você precisa fazer um pull request com o feature branch e depois um merge"
- ✅ "Vou fazer uma cópia de rascunho do projeto, mexer nela, e depois pedir pra encaixar de volta no projeto principal. Você só precisa apertar 'aprovar' quando eu te mandar o link."
