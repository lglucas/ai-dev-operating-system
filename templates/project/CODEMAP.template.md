# CODEMAP

> Placeholder. Rode `node scripts/codemap.js` para gerar o mapa de verdade — ele sobrescreve este arquivo inteiro.

Todo arquivo de código do projeto, com uma linha sobre o núcleo de cada um. Existe para a IA achar o arquivo certo sem ler todos.

Ainda não há código para mapear. Assim que a Fase 5 começar e o primeiro arquivo entrar, regenere.

## O que você vai ver

```markdown
### src/features/auth/

| Arquivo | Núcleo | Linhas |
|---|---|---:|
| [`login.ts`](src/features/auth/login.ts) | handles the magic-link login flow end to end | 132 |
| [`session.ts`](src/features/auth/session.ts) | ⚠️ sem cabeçalho — adicione purpose/version/sprint | 47 |
```

Agrupado por diretório, com link e contagem de linhas.

A segunda linha é o que acontece quando o arquivo não tem cabeçalho `Purpose:`. Evite — é uma linha inútil no mapa, e o conserto é escrever o cabeçalho, não editar aqui.

## Manutenção

```bash
node scripts/codemap.js           # regenera
node scripts/codemap.js --check   # verifica (o CI roda isto)
```

Regenere ao criar, remover ou renomear arquivo de código. O CI falha se divergir.

Regra completa em `.claude/rules/codemap.md`.

> Nota para quem edita **este template**: os caminhos acima são relativos à raiz do projeto derivado, o destino deste arquivo — não à pasta `templates/project/` onde ele mora hoje. É por isso que o exemplo fica dentro de um bloco de código e a regra é citada em texto: como links de verdade, o verificador de links do CI tentaria resolvê-los a partir daqui e falharia. No arquivo gerado eles são links normais, e resolvem.
