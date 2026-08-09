# Release Notes — v0.5.2

**Data:** 2026-08-08
**Anterior:** [v0.4.5](RELEASE-NOTES-v0.4.5.md)
**PRs:** #11, #12, #13, #14, #15, #16

Duas mudanças estruturais. O wizard agora **prototipa antes de especificar**, e o OS finalmente **impõe alguma coisa mecanicamente** em vez de só pedir com jeitinho ao modelo.

---

## 1. O protótipo vem antes da spec

Até a v0.4.5 o Prototype Lab rodava **depois** do Product Brief, do Technical Plan e do roadmap. Essa ordem pede que o fundador especifique um produto que ele nunca viu.

Agora é o contrário:

| Fase | Nome | Produz | Tag de commit |
|---|---|---|---|
| **1** | Largada | repo desacoplado e seu | `[STAGE:LARGADA]` |
| **2** | Ideação | pesquisa, red team, BP v0.0.2, Pitch | `[STAGE:IDEACAO]` |
| **3** | Protótipo | marca, cores, UI, UX — três direções clicáveis | `[STAGE:PROTOTIPO]` |
| **4** | Documentação | Brief e Technical Plan por engenharia reversa | `[STAGE:DOCUMENTACAO]` |
| **5** | Chegada | Sprint -1 → 0 → 1 | `[STAGE:CHEGADA]` |

**Por que importa:** uma spec escrita inventa a própria completude. Ela diz "o usuário gerencia seus projetos" e segue em frente. Um protótipo força a pergunta *como fica essa tela quando a lista está vazia?* — e ou você respondeu, ou o buraco está visível.

A Fase 4 é **obrigada a registrar as lacunas** em vez de preenchê-las em silêncio. O novo `DESIGN-DIRECTION.md` carrega uma tabela de "implied but never shown": empty states, erros, permissões, dados longos, offline, mobile, acessibilidade.

O Technical Plan ganha outra coisa: o modelo de dados parte de `prototype-lab/shared/mock-data.js` — os campos que o produto de fato exibe, nada especulativo. Com a ressalva explícita de que mock data **não é schema**: falta `id`, dono do registro, timestamps, papéis e auditoria.

### Quatro numerações viraram uma

`README.md` tinha 15 passos, o Overview do `WIZARD.md` tinha 17, os headings tinham `Stage 0–14`, e `docs/wizard/` tinha arquivos `01`–`08`. Dizer "move o estágio 14 pro lugar do 12" não tinha tradução única.

Agora são **5 fases**, mapeadas **1:1 nas 5 tags de commit que já existiam**. Sem tabela de tradução.

Os fracionários sumiram: `Stage 0.5` virou `1.2`, e `Stage 11.5` foi dividido em `3.1` (packs de design, antes de prototipar) e `4.3` (packs de stack, depois do Technical Plan).

---

## 2. O kernel

O `.claude/settings.json` versionado tinha **três linhas**. Nenhum hook. A golden rule nº 1 é "nunca commite segredos" e nada impedia isso mecanicamente — o CI só pegava depois do push.

| Hook | Dispara em | Bloqueia |
|---|---|---|
| `block-secret-commit.js` | `Bash` → `git commit` | diff que adiciona algo com formato de credencial, ou `.env`/`.pem`/`.key` staged |
| `protect-env-files.js` | `Write`, `Edit`, `MultiEdit`, `NotebookEdit` | escrita em `.env` real |

Três decisões que não são óbvias:

1. **Os padrões exigem formato completo, não prefixo.** `secrets.md` cita `sk-` e `AKIA` como texto literal — casar por prefixo bloquearia commitar a própria regra que os define.
2. **O hook nunca imprime o valor casado.** Um alerta que ecoa a credencial no terminal a espalha em vez de contê-la.
3. **Ambos falham abertos** em payload malformado. Hook que trava a sessão por engano faz o usuário desligar tudo e perder junto o que funcionava.

Escape hatch por execução: `AIOS_ALLOW_SECRET_COMMIT=1`, `AIOS_ALLOW_ENV_WRITE=1`.

O que **deliberadamente não** virou hook: forçar a ordem do wizard, exigir changelog, bloquear push. Regra de bolso: **hook para o que é irreversível.**

---

## 3. As skills ficaram visíveis

Uma skill se anuncia pelo campo `description` do frontmatter. **Seis não tinham frontmatter nenhum** — a descrição que o Claude via era o próprio título H1, "Product Brief Skill". E eram justamente as seis que dirigem o wizard.

| | Antes | Depois |
|---|---|---|
| Skills com frontmatter | 20/26 | **27/27** |
| Skills com frase-gatilho | 10/26 | **27/27** |
| Comandos com frontmatter | 0/11 | **11/11** |
| Agentes com frase-gatilho | 2/12 | **12/12** |

A prova de que custava caro está no próprio repo: **três session-logs registram o `os-self-test` não sendo executado** quando teria ajudado. Ele não tinha gatilho, então nada o trazia à tona.

Descrição que diz o que a skill *faz* não é a mesma coisa que dizer *quando acioná-la*. "Review features that touch personal data" é correto e inútil; o que faz o `privacy-audit` disparar é `"vou guardar o CPF"`.

---

## 4. Catálogo self-hosted — 1.346 projetos

Espelho do [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted), em três camadas:

| Arquivo | O que é |
|---|---|
| `docs/selfhosted/shortlist-saas.md` | ~20 categorias que um SaaS de fato substitui |
| `docs/selfhosted/gaps.md` | o que o upstream **não** cobre, pesquisado à parte e ranqueado por estrelas |
| `docs/selfhosted/INDEX.md` + `catalog/` | as 1.346 entradas, geradas por script |

O estágio 4.2 agora **pergunta**: gerenciado, self-hosted ou híbrido? Com instrução explícita de **não empurrar** self-hosted — "gerenciado em tudo" costuma ser a resposta certa para quem está sozinho.

⚠️ **Licença:** o dado espelhado é **CC-BY-SA 3.0**, não MIT. Carve-out documentado em `docs/selfhosted/README.md`, atribuição carimbada em todo arquivo gerado.

### O achado mais útil foi negativo

**Nove tags do upstream estão órfãs** — o arquivo de tag existe e zero projetos a referenciam: Backup, Federated Identity, Identity Management, Monitoring, CI/CD, FaaS, Static Site Generators, VPN, Distributed Filesystems.

Ou seja: auth, observabilidade, CI/CD, backup e PaaS — as primeiras coisas que um fundador procura. O `gaps.md` fecha isso com pesquisa própria (90+ repos consultados na API do GitHub) e marca as lacunas numa tabela em vez de omiti-las.

### Uma terceira armadilha de licença

Além de copyleft e source-available, **treze projetos são open core** — o núcleo é livre, mas SSO, RBAC e audit log ficam na edição paga. É a pior para um fundador: só aparece quando chega o primeiro cliente corporativo.

---

## 5. O OS testa a si mesmo

```bash
node scripts/os-self-test.js          # 67 verificações
node --test scripts/test/*.test.js    # 75 testes
```

O `os-self-test` era uma skill que dependia de alguém lembrar. Virou script, roda no CI a cada push, e verifica estrutura canônica, frontmatter, links, integridade do registry nos dois sentidos, indexação do session-log, wiring dos hooks e gitignore.

**Os testes se pagaram na própria PR:** encontraram **duas formas de contornar o hook de segredo** que o teste manual não pegou — `git -C dir commit` e `git add . && git commit`. Um hook de segurança escrito com cuidado e revisado ainda tinha dois furos.

---

## 6. Pitch e a pergunta do BP online

Não existia artefato de Pitch no OS. O novo estágio **2.9** cria `docs/business/PITCH.md` (dez seções derivadas do BP, nunca acrescentando) e pergunta se BP e Pitch devem ficar online dentro do produto — **como sugestão, não default**.

A parte substantiva é o **gate de redação**: projeção financeira, CAC, margem, status de captação e registro de riscos não vão ao ar. E persona vinda de entrevista real é dado pessoal — LGPD aplica.

---

## Migração

**Quebra para quem referencia estágios por número.** `Stage 0.5` virou `1.2`; `Stage 11.5` virou `3.1` + `4.3`.

| Se você tem | Faça |
|---|---|
| Projeto já rodando o wizard antigo | nada urgente. A ordem nova vale para projetos novos; o que já tem Brief e Technical Plan continua válido |
| Referência a "Stage N" em docs próprios | traduza pela tabela de fases acima |
| `sprint--1-prototype-lab.md` | virou `sprint--1-design-system.md` — o protótipo agora acontece antes do roadmap |
| Fork ou template derivado | rode `node scripts/os-self-test.js` para achar referências quebradas |

**Node passou a ser recomendado** para hooks, self-test e testes. Sem ele o OS funciona, mas sem kernel.

Registros históricos (`CHANGELOG` antigo, release notes anteriores, session-logs) **não foram reescritos** — continuam dizendo "Stage 0.5", porque era verdade na época.

---

## Números

| | v0.4.5 | v0.5.2 |
|---|---:|---:|
| Skills | 26 | **27** |
| Skills auto-invocáveis | 10 | **27** |
| Comandos com descrição | 0 | **11** |
| Agentes com gatilho | 2 | **12** |
| Hooks | 0 | **2** |
| Testes | 0 | **75** |
| Registry packs | 71 | **72** |
| Catálogo self-hosted | 0 | **1.346** |
| Jobs de CI | 1 | **2** |

---

## Aberto

- **PR #9** (96 dias) — o Grand Prix tem `STAGE_ORDER` com a ordem antiga hardcoded; com a reordenação, um aluno na Documentação apareceria atrás de um no Protótipo. ~50 linhas de ajuste.
- **Não existe skill de `technical-plan`** — o estágio 4.2 roda só com prosa.
- **`deploy-vercel-supabase` cobre só o Supabase gerenciado**, apesar de o self-hosted ser Apache-2.0.
- **Hooks sem teste de integração no CI** — os 75 cobrem funções puras.
- **Falta o CODEMAP** — camada de documentação que lista cada arquivo de código com uma linha sobre seu núcleo, para a IA localizar sem ler tudo. Vem na v0.5.3.

---

## Créditos

Construído por **Lucas Galvão**. Review automatizado por CodeRabbit — as 14 observações do PR #11 procediam, e três apontavam erro factual de coerência que passou despercebido.

Catálogo self-hosted derivado de [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted-data) sob CC-BY-SA 3.0.
