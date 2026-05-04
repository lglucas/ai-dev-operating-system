# Aula 1 — Fundação

> **TESE:** O AI Dev OS é o trilho que faltava entre você e a IA. Sem ele, a IA é poder bruto sem direção. Com ele, é um Gundam com Jarvis dentro.

> **TAGLINE:** "Você não está de muletas, isso aqui é um fucking Gundam!"

> **DURAÇÃO:** 2h (120min)

> **TIPO:** Aula Inaugural — primeira do curso. Tem peso de check-in da turma + apresentação de TESE do curso + criação de cola social.

---

## ENTREGA MÍNIMA — perguntas que esta aula vai responder

1. Por que vibe coding "comum" quebra rápido?
2. O que exatamente é o AI Dev OS e por que ele existe?
3. Como criar um repo MEU (não o do instrutor) com o OS dentro?
4. O que é Git, GitHub, `origin`, branch — em PT simples e com analogia que cola?
5. Como conversar com o Claude pra ele me entender de verdade?
6. Como começar o WIZARD e onde a primeira fricção aparece?

## FATOR DIA SEGUINTE

Ao acordar amanhã, o aluno terá:

- Repo NO NOME DELE rodando.
- WIZARD em curso (Stage 0–4).
- A SENSAÇÃO de que botou o pé no trilho de algo grande.
- A sequência **óbvia** do que fazer no próximo dia (Stage 5 sozinho em casa, antes da Aula 2).

**O efeito UAU:** ele sai sabendo que fatura de $200k/mês não é fantasia distante — é uma direção possível com método. E ele acabou de pôr o pé no trilho.

---

## FLUXO TTT (Tese → Tagline → Treco)

| Elemento | Conteúdo |
|---|---|
| **TESE** | O AI Dev OS é o trilho. IA sem trilho é poder bruto sem direção. |
| **TAGLINE** | "Você não está de muletas, isso aqui é um fucking Gundam!" |
| **TRECO** | "Pó de Diamante e Pó de Fome" — dois cases reais lado a lado mostrando teto e chão da decisão de método (detalhe completo em [`treco/po-de-diamante-po-de-fome.md`](treco/po-de-diamante-po-de-fome.md)). |

---

## FRAMEWORK DA AULA 1 (120min)

| # | Bloco | Início | Fim | O que acontece |
|---|---|---|---|---|
| 1 | IGNITE | 0:00 | 0:10 | Eu falo da nossa **comunidade, modelo DAO**, "vem e faz", "se deu ideia, assume a bronca", "pede ajuda, a gente tá ali". Não é palestra — é abertura de tribo. |
| 2 | Check-in | 0:10 | 0:20 | Cada aluno: 1 palavra de chegada + nome + 1 frase do projeto. Sem julgamento. **Importante pra escutarmos os primeiros.** |
| 3 | Recados + Contrato | 0:20 | 0:25 | Calendário, **grupo de WhatsApp**, expectativas, regras (câmera ligada, "passa a vez" disponível). |
| 4 | Aquecendo | 0:25 | 0:30 | TESE do curso + TAGLINE + ARCO. "Vamos passar por 3 episódios. Hoje é o trilho sendo construído." |
| 5 | Pílula 1 — por que vibe coding sem método quebra | 0:30 | 0:42 | Code-and-spray como anti-padrão. Mostro código gerado solto, sem brief, sem critério. |
| 6 | Pílula 2 — o que é o AI Dev OS | 0:42 | 0:55 | Passeio guiado pelo repo. Mostro WIZARD, regras, skills, registry. **"Trilho."** |
| 7 | TRECO 1 — instruções (Pó de Diamante / Pó de Fome) | 0:55 | 1:00 | Setup do polo dividido na tela. |
| 8 | TRECO 1 — execução | 1:00 | 1:15 | Os 2 casos reais lado a lado. Provocação. Resposta coletiva. |
| 9 | TRECO 1 — entrega prática | 1:15 | 1:50 | **Cada aluno cria SEU repo "Use this template" e roda primeiro `claude` ao vivo** — o trilho deixando de ser conceito e virando coisa que ele tem na máquina dele. |
| 10 | Reflexão coletiva | 1:50 | 1:55 | "Como tá a sensação?" — 3 voluntários no chat ou áudio. |
| 11 | Check-out + Compromisso público | 1:55 | 2:00 | Cada aluno: 1 palavra de saída + 1 compromisso "até a Aula 2 eu vou…" |

**Sem intervalo** (online, foda-se).
**Sem perguntas formais** (Q&A vai pro WhatsApp).

---

## Detalhe do TRECO 1

Detalhe completo (roteiro de cena, cases, slides, falas-âncora) em [`treco/po-de-diamante-po-de-fome.md`](treco/po-de-diamante-po-de-fome.md).

---

## Pílulas — pontos-chave

### Pílula 1 — Por que vibe coding sem método quebra

- **Code-and-spray:** pessoa pede pra IA "faz pra mim" sem dizer o quê, pra quem, com qual restrição.
- **Resultado típico:** código que parece funcionar mas:
  - Sem documentação. Daqui 6 meses, o próprio autor não entende.
  - Sem testes. Não sabe se quebrou nada quando muda algo.
  - Sem segurança aplicada. .env vai pro repo público no commit 4.
  - Sem visão de produto. Vira franquinstein de features que ninguém pediu.
- **Aluno se reconhece**: 90% dos vibe coders viram isso ou viveram isso.

### Pílula 2 — O que é o AI Dev OS

Passeio rápido pelo repo (na minha tela compartilhada):

- `START-HERE.md` → ponto de entrada.
- `WIZARD.md` → 14 stages do gênesis.
- `.claude/rules/` → as 9 regras de ouro.
- `.claude/skills/` → 21+ skills disponíveis.
- `.claude/agents/` → agentes especializados (research, red team, etc.).
- `docs/registry/` → catálogo curado de packs externos.
- `session-log/` → memória de decisões entre sessões.

**Ponto:** "Tudo isso é o trilho. A IA passa por cima sem descarrilar."

---

## Mapa Conectivo (sou regente)

**Pré-aula 1:** vídeo de 5min de pré-setup (instalar Git, IDE, Claude Code).
**Pós-aula 1 (manhã seguinte):** post no WhatsApp com:
- 3 momentos altos da aula (citando alunos com permissão).
- Compromissos públicos da turma listados.
- Prévia da Aula 2: "Trazer o BP rascunho avançado. Stage 5 rodado em casa."

---

## Sistemas de apoio ligados nesta aula

- **Grand Prix do Trilho (Sistema 2):** painel projetado durante a aula. Carrinhos saem da Largada conforme alunos criam repos. Energia coletiva visível.
- **Trilho do Red Team (Sistema 1):** apresentado mas só ativo na Aula 2.

---

## Pilares Perestroika cobertos

| Pilar | Como aparece |
|---|---|
| **Conteúdo** | TESE/TAGLINE da aula. Pílulas 1 e 2. Entrega Mínima e Fator Dia Seguinte explícitos. Autoralidade do facilitador (caso real do AI Dev OS sendo construído). |
| **Forma** | TRECO Pó de Diamante / Pó de Fome em tela dividida. Design de informação dos slides. FLUXO TTT explícito acima. |
| **Emocional** | Check-in. Check-out. Hosting (aluno = convidado). Aula Inaugural com contrato e "tamo junto". |
| **Estrutural** | Framework de Aula com 11 blocos timeboxed. Posição na ARCO do curso (episódio 1 de 3). Mapa Conectivo definido. |

---

## Pré-requisitos do aluno

- Computador com internet.
- Conta GitHub (criar antes da aula via vídeo de pré-setup).
- Git, IDE (Cursor/VSCode/Antigravity), Claude Code instalados.
- Uma ideia de projeto (mesmo rascunho, mesmo vaga).

---

## Riscos da aula e mitigações

| Risco | Mitigação |
|---|---|
| Setup leva muito tempo e atrasa o Treco | Vídeo de pré-aula obrigatório. Monitor (TA) no Zoom atende travas em DM. |
| Aluno não tem ideia de projeto e fica perdido | Lista de 5 ideias pré-validadas pra escolher (vet de bairro, controle de assinaturas, etc.). |
| Aluno introvertido se sente invadido no check-in | Sempre "passa a vez" disponível. Nunca forçar. |
| Algum aluno trava no `claude` | Eu compartilho minha tela e refazo o passo. Coletivo aprende junto. |

---

## Material de apoio (a produzir no Sprint 0)

- Slide deck (~25 slides).
- Cheat-sheet de 1 página: "Setup + Stage 0–4".
- Vídeo pré-aula (5min).
- Roteiro escrito do facilitador (palavra-por-palavra nos blocos críticos).
- Repo demo "vet-saas-workshop" pronto para demos.
- Playlist de abertura (5 faixas instrumentais).

Detalhes da produção: [`../../sprints/sprint-0-fundacao.md`](../../sprints/sprint-0-fundacao.md).
