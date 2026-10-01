---
name: os-self-test
description: Verify the AI Dev Operating System is in a coherent state inside a project. Detects missing canonical files, broken cross-references, skills/agents/commands without frontmatter, registry drift, unindexed session logs, unwired hooks, gitignore gaps, a stale codemap layer or plugin manifest, and instruction files citing agents, commands or wizard stages that do not exist. Run after major edits to the OS, after renaming or moving canonical files, before opening a new sprint, before a release, and when the user says "tá tudo certo aqui?", "quebrou alguma coisa na estrutura?", "faz um check geral", "os links estão funcionando?".
---

# OS Self-Test

## Rode o script

```bash
node scripts/os-self-test.js
```

É a verificação inteira. Exit `0` = coerente, exit `1` = pelo menos um erro.

Rode o script em vez de conferir à mão: verificação que depende de alguém lembrar não acontece quando mais importa. O CI também roda em todo push e PR.

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
| Codemap | `scripts/codemap.js` e, conforme o modo, o template ou `CODEMAP.md` |
| Manifesto do plugin | versão de `.claude-plugin/plugin.json` bate com o topo do `CHANGELOG.md`, e a contagem de skills bate com os `SKILL.md` |
| Drift de instruções | CLAUDE.md, templates, `.claude/`, WIZARD e `docs/` só citam agentes, comandos e estágios que existem (erro); geração de modelo fixada em prosa, tipo "Sonnet X.Y", vira aviso |
| Sensores | `package.json` tem `test` e `lint`, o linter tem configuração, há lockfile, existe hook `PostToolUse`, existe `.husky/pre-commit` com o `prepare` que o liga, e o CI roda teste e lint. Sensor ausente é erro no repo do OS e aviso no projeto derivado, que pode ter trocado de stack |
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
- Testes dos scripts e hooks: `npm test`, que roda `scripts/run-tests.js` (lista os `*.test.js` em vez de depender do glob do shell)
- Lint e formatação: `npm run lint` (Biome). Verificação dos sensores: `scripts/sensor-wiring.js`
- Gate de release que o invoca: [`release-check`](../release-check/SKILL.md)
