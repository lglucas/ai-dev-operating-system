# Skills externas — referências, não código

Este diretório **não contém skills**. Não há `SKILL.md` aqui, e não deve haver.

Ele guarda ponteiros para coleções de skills mantidas por terceiros: o que são, por que interessam, e como instalar a partir do upstream — sem copiar o código para dentro deste repositório.

## Por que ponteiro em vez de cópia

[`docs/skill-system.md`](../../../docs/skill-system.md) diz: *"Do not vendor third-party skill repos unless the license and attribution are clear."*

Copiar skill de terceiro para cá cria três problemas de uma vez: a licença vem junto e nem sempre é compatível, a cópia congela numa versão e apodrece, e o usuário perde o upstream de vista quando precisa de suporte.

A exceção documentada no OS é `docs/selfhosted/`, onde o dado é de fato copiado — mas lá a licença é explícita, o carve-out está declarado e existe script de re-sincronização. A justificativa está em [`UPSTREAM-SOURCES.md`](../../../UPSTREAM-SOURCES.md).

## O que tem aqui

| Arquivo | Upstream |
|---|---|
| [`affaan-everything-claude-code.md`](affaan-everything-claude-code.md) | [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) |

Para o catálogo completo de repositórios instaláveis sobre este OS — incluindo coleções de skills — veja [`docs/registry/INDEX.md`](../../../docs/registry/INDEX.md) e a tag [`agents-marketplace`](../../../docs/registry/tags/agents-marketplace.md).

## Adicionar uma referência

1. Crie `<autor>-<repo>.md` aqui, com URL, licença, o que traz e quando vale instalar.
2. Se o repo também merece entrar no catálogo instalável, crie o one-pager em `docs/registry/packs/` e indexe.
3. Se ele influenciou o desenho deste OS, registre em `UPSTREAM-SOURCES.md`.

> Este README existe também por um motivo mecânico: `scripts/os-self-test.js` falha em qualquer diretório sob `.claude/skills/` que não tenha `SKILL.md` nem `README.md` — a ausência dos dois indica skill quebrada. Este arquivo é como o diretório se declara referência, e não defeito.
