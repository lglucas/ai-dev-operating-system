# CODEMAP

> Placeholder. Rode `node scripts/codemap.js` para gerar o mapa de verdade — ele sobrescreve este arquivo inteiro.

Todo arquivo de código do projeto, com uma linha sobre o núcleo de cada um. Existe para a IA achar o arquivo certo sem ler todos.

Ainda não há código para mapear. Assim que a Fase 5 começar e o primeiro arquivo entrar, regenere.

## O que você vai ver

| Arquivo | Núcleo | Linhas |
|---|---|---:|
| [`app.ts`](src/app.ts) | boots the server, wires middleware and mounts the feature routers | 84 |
| [`login.ts`](src/features/auth/login.ts) | handles the magic-link login flow end to end | 132 |
| [`session.ts`](src/features/auth/session.ts) | ⚠️ sem cabeçalho — adicione purpose/version/sprint | 47 |

A terceira linha é o que acontece quando o arquivo não tem cabeçalho `Purpose:`. Evite — é uma linha inútil no mapa, e o conserto é escrever o cabeçalho, não editar aqui.

## Manutenção

```bash
node scripts/codemap.js           # regenera
node scripts/codemap.js --check   # verifica (o CI roda isto)
```

Regenere ao criar, remover ou renomear arquivo de código. O CI falha se divergir.

Regra completa em `.claude/rules/codemap.md`.

> Caminhos aqui são relativos à **raiz do projeto**, que é para onde este template vai. Por isso não são links — daqui, de `templates/project/`, eles não resolveriam.
