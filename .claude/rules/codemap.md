# Codemap rule

`CODEMAP.md` na raiz do projeto lista **todo arquivo de código rastreado pelo Git, com uma linha sobre seu núcleo**. Existe para você achar o arquivo certo sem ler todos.

"Rastreado" é literal: o gerador lê `git ls-files`. Arquivo novo ainda não adicionado não aparece — o que é proposital, já que `.gitignore` e artefatos de build ficam de fora pelo mesmo mecanismo.

## Como usar

**Antes de procurar código, leia o `CODEMAP.md`.** Ele custa uma leitura; varrer o repositório custa dezenas.

Se o arquivo não existir, você está no repositório do próprio AI Dev OS (marcador `.aios-self`), que não tem mapa por design — veja [Escopo](#escopo). Aí procure normalmente.

## Como manter

```bash
node scripts/codemap.js
```

Regenere quando **qualquer** coisa que o mapa registra mudar:

| Mudou | Por quê |
|---|---|
| Arquivo criado, removido, renomeado ou movido | a lista fica errada na hora |
| Cabeçalho `Purpose:` de um arquivo | a descrição no mapa fica velha |
| Número de linhas de um arquivo | o mapa grava a contagem exata |

A terceira linha surpreende, então vale explicitar: **editar o corpo de um arquivo já mapeado normalmente basta para invalidar o mapa**, porque quase toda edição muda a contagem. Na prática, regenere junto com a mudança e comite os dois.

É **gerado** — não edite à mão. Para melhorar uma descrição, melhore o cabeçalho `Purpose:` do arquivo; o script lê de lá.

O CI roda `--check` e falha se estiver desatualizado. **Codemap velho é pior que nenhum:** a IA confia nele e pula a leitura.

## Par com o limite de 200 linhas

[`code-style`](code-style.md) mantém os arquivos curtos; o codemap diz onde eles estão. As duas regras existem pelo mesmo motivo — **menos token lido por tarefa**. Uma sem a outra perde metade do efeito.

O codemap também reporta quem passou de 200 linhas e quem está sem cabeçalho — ou seja, fiscaliza a `code-style` como efeito colateral.

## Escopo

Mapeia o código **deste projeto**. Dentro do repositório do próprio AI Dev OS o script se desliga: o OS entrega a maquinaria, o projeto derivado é que tem o código.
