# Codemap rule

`CODEMAP.md` na raiz do projeto lista **todo arquivo de código com uma linha sobre seu núcleo**. Existe para você achar o arquivo certo sem ler todos.

## Como usar

**Antes de procurar código, leia o `CODEMAP.md`.** Ele custa uma leitura; varrer o repositório custa dezenas.

## Como manter

Regenere sempre que criar, remover ou renomear arquivo de código:

```bash
node scripts/codemap.js
```

É **gerado** — não edite à mão. Para melhorar uma descrição, melhore o cabeçalho `Purpose:` do arquivo; o script lê de lá.

O CI roda `--check` e falha se estiver desatualizado. **Codemap velho é pior que nenhum:** a IA confia nele e pula a leitura.

## Par com o limite de 200 linhas

[`code-style`](code-style.md) mantém os arquivos curtos; o codemap diz onde eles estão. As duas regras existem pelo mesmo motivo — **menos token lido por tarefa**. Uma sem a outra perde metade do efeito.

O codemap também reporta quem passou de 200 linhas e quem está sem cabeçalho, então fiscaliza a `code-style` de quebra.

## Escopo

Mapeia o código **deste projeto**. Dentro do repositório do próprio AI Dev OS o script se desliga: o OS entrega a maquinaria, o projeto derivado é que tem o código.
