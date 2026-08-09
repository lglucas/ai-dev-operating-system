# Release Notes — v0.5.3

**Data:** 2026-08-08
**Anterior:** [v0.5.2](RELEASE-NOTES-v0.5.2.md)
**PR:** #17

Uma camada de documentação nova: `CODEMAP.md`. Um índice gerado do código, uma linha por arquivo, para a IA **achar o arquivo certo sem ler os errados**.

---

## 1. O problema que isso resolve

Este OS já tinha uma regra que ninguém questiona: **arquivo de código abaixo de 200 linhas**. A justificativa sempre foi legibilidade, mas há uma segunda, mais concreta — arquivo curto é barato de ler.

Só que isso resolve metade do problema. Barato de ler não é o mesmo que fácil de achar. Um agente procurando "onde acontece o login" faz grep, pega três resultados ambíguos, abre quatro arquivos e lê três que não queria. Os arquivos eram curtos; a busca é que foi cara.

`CODEMAP.md` fecha a outra metade. Uma leitura — o mapa — e depois só o arquivo certo.

| | Sem mapa | Com mapa |
|---|---|---|
| Passos | grep → abrir candidatos → descartar | ler o mapa → abrir o arquivo |
| Arquivos lidos | 3–5, quase todos descartados | 1 mapa + 1 arquivo |
| Risco | agir no arquivo errado por parecer certo | o mapa diz qual é qual |

As duas regras só pagam juntas. Separadas, cada uma entrega metade do ganho.

---

## 2. Como é a cara dele

```markdown
### src/features/auth/

| Arquivo | Núcleo | Linhas |
|---|---|---:|
| [`login.ts`](src/features/auth/login.ts) | handles the magic-link login flow end to end | 132 |
| [`session.ts`](src/features/auth/session.ts) | ⚠️ sem cabeçalho — adicione purpose/version/sprint | 47 |
```

Agrupado por diretório, com link e contagem de linhas.

---

## 3. Gerado, nunca escrito à mão

A descrição sai do cabeçalho `Purpose:` que a regra `code-style` **já exigia**. Nada novo a escrever — o que já era obrigatório passou a ter uma segunda utilidade.

Cascata de fallback, nesta ordem:

1. Cabeçalho `Purpose:` — inclusive multilinha.
2. Primeira frase do bloco de comentário ou docstring inicial.
3. Primeiro comentário de linha, ignorando shebang.
4. `⚠️ sem cabeçalho — adicione purpose/version/sprint`.

O quarto caso é de propósito. Arquivo sem cabeçalho **aparece marcado no mapa**, o que faz o codemap fiscalizar a regra de cabeçalho de quebra — efeito colateral que valeu manter. Se a linha de um arquivo ficou ruim, o defeito está no cabeçalho dele. Conserta lá e regenera; editar o `CODEMAP.md` à mão é retrabalho que a próxima geração apaga.

O mapa também reporta quem passou de 200 linhas, encostando na `code-style` pelo outro lado. Nenhum dos dois avisos bloqueia — o que bloqueia é o mapa estar **desatualizado**.

---

## 4. Escopo: o projeto derivado, não o OS

Dentro do repositório do próprio AI Dev OS o script se desliga e sai 0. O OS entrega a maquinaria; quem tem código de produto é o projeto que nasce dele. A detecção é o marcador `.aios-self`, o mesmo que o `os-self-test` já usava para alternar entre os dois modos.

`templates/project/CODEMAP.template.md` é o placeholder do projeto novo. Ele deixa de ser placeholder no Sprint 0, quando o primeiro arquivo de código aterrissa.

---

## 5. Enforcement, não boa intenção

Mapa desatualizado é **pior que mapa nenhum**: o agente confia, pula a leitura e age com informação velha. Por isso a camada é cobrada em quatro lugares, não sugerida em um:

| Onde | Quando |
|---|---|
| `.github/workflows/ci.yml` | Todo push e PR. Falha se divergir. |
| `sprint-management` | Durante a sprint e de novo no fechamento. |
| `release-check` | Gate bloqueante antes de qualquer release. |
| `os-self-test` | Verifica que a camada está fiada — gerador, regra, skill, template. |

A escolha por gate automático não foi preferência de estilo. Três session-logs deste repo registram o `os-self-test` **não sendo executado exatamente quando teria ajudado**, na época em que ele era só uma skill que dependia de alguém lembrar. A lição já foi paga uma vez.

---

## 6. O que entrou

| Arquivo | Papel |
|---|---|
| `scripts/codemap.js` | Gerador e verificador. `--check` sai 1 se divergir. |
| `.claude/rules/codemap.md` | A regra: ler antes de procurar, regenerar ao mexer em arquivo. |
| `.claude/skills/codemap/SKILL.md` | 28ª skill, com gatilhos em português. |
| `templates/project/CODEMAP.template.md` | Placeholder do projeto novo. |
| `scripts/test/codemap.test.js` | 17 testes. |

E a fiação: `documentation-layers` (regra e doc), `release-check`, `sprint-management`, `ci.yml`, `os-self-test.js`, `WIZARD.md` 5.1, `phase-5-chegada.md`, `templates/project/CLAUDE.md`, README e `docs/skill-system.md`.

---

## 7. Testes

**92 no total**, 17 novos. Cobrem:

- extração de `Purpose:` em JSDoc, em comentário `#` e em cabeçalho multilinha;
- os três fallbacks e o caso do arquivo sem cabeçalho;
- escape de `|` na descrição, que quebraria a tabela Markdown;
- descoberta de arquivos — incluindo `src/distribuidor/` **não** ser confundido com `dist/` pelo filtro de diretórios ignorados;
- os dois modos: repo do OS (skip) e projeto derivado (gera).

---

## 8. Corrigido nesta versão

- `templates/project/CODEMAP.template.md` linkava `.claude/rules/codemap.md`. O caminho está certo na raiz do projeto derivado, que é o destino do template, mas errado de onde o arquivo mora hoje. Pego pelo próprio `os-self-test` durante o desenvolvimento. Virou caminho em texto, com a razão registrada no arquivo para ninguém "consertar" de volta.
- Numeração duplicada no checklist "Close sprint" do `sprint-management`, resultado de inserir o passo do codemap no meio.

---

## Como usar

Em um projeto derivado do AI Dev OS:

```bash
node scripts/codemap.js           # gera ou regenera CODEMAP.md
node scripts/codemap.js --check   # verifica; é isto que o CI roda
```

Regenere ao criar, remover ou renomear arquivo de código. Comite o mapa junto com o código que o produziu.
