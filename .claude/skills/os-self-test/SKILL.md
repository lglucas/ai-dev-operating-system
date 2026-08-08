---
name: os-self-test
description: Verify the AI Dev Operating System is in a coherent state inside a project. Detects missing canonical files, broken cross-references, skills/agents/commands without frontmatter, registry drift, unindexed session logs, unwired hooks and gitignore gaps. Run after major edits to the OS, after renaming or moving canonical files, before opening a new sprint, before a release, and when the user says "tá tudo certo aqui?", "quebrou alguma coisa na estrutura?", "faz um check geral", "os links estão funcionando?".
---

# OS Self-Test

## Rode o script

```bash
node scripts/os-self-test.js
```

É a verificação inteira. Exit `0` = coerente, exit `1` = pelo menos um erro.

**Isto era um checklist manual dentro deste arquivo, e esse era o problema.** Verificação que depende de alguém lembrar não é verificação — três session-logs (`2026-04-30`, `2026-05-09`, `2026-08-08`) registram esta skill não sendo executada exatamente quando teria ajudado. Desde a v0.5.2 é script, e o CI roda em todo push e PR.

## O que o script verifica

| Grupo | Verifica |
|---|---|
| Estrutura canônica | `CLAUDE.md`, `START-HERE.md`, `WIZARD.md`, `README.md`, `CHANGELOG.md`, `LICENSE`, `.claude/{agents,rules,skills,commands}`, e duplicata na raiz |
| Frontmatter | toda skill tem `name` + `description` e o `name` bate com o diretório; todo agente e comando tem `description` |
| Links | todo link relativo `.md` do repo resolve |
| Registry | todo pack está no `INDEX.md`, e todo link do `INDEX.md` aponta pack existente |
| Session-log | toda entrada datada está indexada |
| Hooks | os hooks declarados em `settings.json` existem em disco, e todo hook em disco está declarado |
| Gitignore | cobre `.env`, `node_modules/`, `CLAUDE.local.md` |
| Artefatos | modo repo-do-OS *versus* projeto derivado, detectado pelo marcador `.aios-self` |

## Dois modos

O script se adapta ao contexto:

- **Repo do AI Dev OS** (tem `.aios-self`) — os artefatos de projeto (`BUSINESS-PLAN.md`, `PRODUCT-BRIEF.md`…) **não** devem existir; se existirem, avisa.
- **Projeto derivado** — os mesmos artefatos são esperados, e a ausência vira aviso e não erro, porque o wizard pode simplesmente não ter chegado naquela fase.

## Seu trabalho quando falha

O script diz **o que** está quebrado. Interpretar e consertar continua sendo trabalho seu:

1. Rode e leia os erros.
2. Para cada um, decida se o certo é corrigir a referência ou remover o alvo — link quebrado às vezes significa que falta o arquivo, às vezes que sobra o link.
3. Avisos (🟡) não bloqueiam, mas acumulam. Skill sem frase-gatilho na descrição é o caso típico: funciona, mas ninguém a invoca.
4. Se consertar algo estrutural, registre no `session-log/`.

## Quando rodar além do CI

- Depois de renomear ou mover arquivo canônico.
- Depois de mergear uma pilha de PRs.
- Antes de abrir sprint ou cortar release — o `release-check` já delega para cá.
- Quando o usuário desconfiar que alguma coisa quebrou.

## Related

- Script: `scripts/os-self-test.js`
- Testes dos scripts e hooks: `node --test "scripts/test/*.test.js"`
- Gate de release que o invoca: [`release-check`](../release-check/SKILL.md)
