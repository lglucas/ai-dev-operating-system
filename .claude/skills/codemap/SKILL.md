---
name: codemap
description: Mantém o CODEMAP.md — o índice de todo arquivo de código do projeto com uma linha sobre o núcleo de cada um, para achar arquivo sem ler o repositório inteiro. Regenere ao criar, remover ou renomear arquivo de código, ao fechar sprint e antes de release. Use quando o usuário disser "onde fica o arquivo de X?", "que arquivos mexem com Y?", "atualiza o mapa", "cadê o código que faz isso?" — ou quando você mesmo estiver prestes a varrer o repo procurando alguma coisa.
---

# Codemap

## Antes de procurar, leia o mapa

Se você está prestes a varrer o projeto atrás de um arquivo — **pare e leia o `CODEMAP.md` primeiro**. É uma leitura contra dezenas. É literalmente para isso que ele existe.

Se o mapa não responde, aí sim procure. E quando achar, considere se a descrição daquele arquivo estava ruim: o conserto é melhorar o cabeçalho `Purpose:` dele.

## Regenerar

```bash
node scripts/codemap.js
```

Sobrescreve o `CODEMAP.md` inteiro. **Nunca edite o arquivo à mão** — a próxima geração desfaz.

Para verificar sem escrever, como o CI faz:

```bash
node scripts/codemap.js --check
```

## Quando regenerar

| Momento | Por quê |
|---|---|
| Criou, removeu ou renomeou arquivo de código | o mapa fica errado na hora |
| Ao fechar sprint | `sprint-management` já toca changelog e docs; o mapa vai junto |
| Antes de release | `release-check` delega para cá |
| Depois de refatoração que moveu arquivos | é quando o mapa mais diverge |

Não precisa regenerar ao editar o corpo de um arquivo já mapeado — só se o `Purpose:` mudou ou se a contagem de linhas cruzou 200.

## De onde vem a descrição

Do cabeçalho que a [`code-style`](../../rules/code-style.md) já exige:

```js
/**
 * Purpose: o que este arquivo resolve, em uma frase.
 * Version: v0.1.0
 * Sprint:  01
 */
```

Ordem de fallback: `Purpose:` → primeira frase do bloco de comentário → primeiro comentário de linha → **`⚠️ sem cabeçalho`**.

Esse último caso é intencional. Arquivo sem cabeçalho aparece marcado no mapa, então o codemap **fiscaliza a regra de cabeçalho** de quebra. Se a descrição de um arquivo ficou ruim, o defeito está no cabeçalho, não no script.

## Os dois avisos que o mapa emite

- **Acima de 200 linhas** — a `code-style` pede "under 200 where practical". O mapa lista quem passou, para você decidir se separa ou aceita.
- **Sem cabeçalho `Purpose:`** — cada um é uma linha ruim no mapa.

Nenhum dos dois bloqueia. O que bloqueia é o mapa estar **desatualizado**.

## Por que isso importa mais do que parece

Arquivo curto e mapa de uma linha por arquivo servem à mesma coisa: **menos token lido por tarefa**. Sem o mapa, a IA abre dez arquivos para achar um. Com o mapa, abre um.

É por isso que o CI falha quando ele diverge. Codemap desatualizado é pior que nenhum — a IA confia, pula a leitura, e age sobre informação errada.

## Escopo

Mapeia o código **do projeto derivado**. Dentro do repositório do AI Dev OS o script se desliga e sai com 0: o OS entrega a maquinaria, o projeto é que tem o código.

## Related

- Script: `scripts/codemap.js`
- Regra: [`codemap`](../../rules/codemap.md) · par com [`code-style`](../../rules/code-style.md)
- Fecha sprint com: [`sprint-management`](../sprint-management/SKILL.md)
- Gate de release: [`release-check`](../release-check/SKILL.md)
