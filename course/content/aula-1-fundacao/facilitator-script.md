# Facilitator Script — Aula 1: Fundação

> Roteiro do facilitador. Bloco crítico = palavra-por-palavra. Bloco normal = bullets de conteúdo a cobrir.

**Duração:** 120min.
**Pré-aula:** música tocando 5min antes da hora oficial. Câmera do facilitador ligada.

---

## Bloco 1 — IGNITE (0:00 → 0:10)

> **PALAVRA POR PALAVRA NO INÍCIO** (ancoragem do tom):

> "Bom dia, gente. Antes de qualquer coisa: a gente não é uma palestra. A gente é uma tribo. Vocês estão aqui porque querem construir software com IA de um jeito sério, e a gente vai construir junto. Não tem 'professor' aqui — tem facilitador. Eu vou conduzir, mas o aprendizado é coletivo. Quando alguém de vocês tiver uma ideia, uma cagada, uma dúvida — joga no chat. Quando alguém pedir ajuda, quem souber responde primeiro. **Vem e faz. Se deu ideia, assume a bronca. Pede ajuda — a gente tá aqui.** Esse é o jeito DAO de operar essa turma."

Conta a comunidade DAO em 2-3min. Mostra Slide 2.

---

## Bloco 2 — Check-in (0:10 → 0:20)

Slide 3.

> "Cada um de vocês vai falar:
> - 1 palavra que descreve como você chegou aqui hoje.
> - Seu primeiro nome.
> - 1 frase sobre o projeto que vocês querem construir nas próximas 6 horas.
>
> Se alguém quiser passar a vez, beleza. **'Passa a vez' é sempre uma opção válida nessa turma.** Sem julgamento."

Cada aluno fala em sequência. Facilitador anota mentalmente os projetos. Comenta brevemente após cada um (validação leve, sem profundidade).

---

## Bloco 3 — Recados + Contrato (0:20 → 0:25)

Slide 4. Bullets rápidos:
- Calendário (Aula 2: 1 semana, Aula 3: 2 semanas).
- WhatsApp da turma — link no chat agora.
- Regras: câmera ligada por padrão, OK fechar pra ir no banheiro.
- Dúvidas vão pro chat ou DM.
- "Vai dar tempo. Não se preocupa em entender tudo na hora."

---

## Bloco 4 — Aquecendo (0:25 → 0:30)

Slide 5.

> "A tese do curso é uma só: **vibe coding sem método é code-and-spray. Vibe coding com método é trilho de trem-bala. Você acelera porque o trilho aguenta a velocidade.**
>
> O AI Dev OS é esse trilho.
>
> A gente vai passar por 3 episódios. Hoje é o primeiro: **Fundação**. Vamos construir o trilho. Próximas semanas: vocês andam de trem-bala em cima dele."

Mostra ARCO dos 3 episódios (slide 5).

---

## Bloco 5 — Pílula 1: code-and-spray (0:30 → 0:42)

Slides 6 e 7.

Conceito direto, sem economia:

> "Code-and-spray é quando você abre o Claude e diz: 'faz pra mim'. Sem dizer o quê, pra quem, com qual restrição. A IA gera. Você cola. Funciona... durante 4 dias.
>
> Aí dá merda em 4 frentes:
> 1. **Sem documentação.** 6 meses depois você abre seu próprio código e não entende o que tá fazendo. Você é refém de você mesmo.
> 2. **Sem testes.** Você muda uma coisinha e não sabe se quebrou outra. Vira roleta.
> 3. **Sem segurança.** Sua chave da OpenAI vai pro repo público no commit 4. Bot scraper acha em segundos. Conta zerada.
> 4. **Sem visão de produto.** Vira um franquinstein de features que ninguém pediu, todas pela metade.
>
> 90% dos vibe coders viveram isso ou viram alguém viver. Quem aqui já viveu? Mãos pro alto no chat."

Espera 30s pelas mãos. Comenta 1-2.

---

## Bloco 6 — Pílula 2: O AI Dev OS (0:42 → 0:55)

Slides 8 e 9.

Compartilha tela do repo do AI Dev OS no GitHub.

Faz tour visual:
- "Esse é o repo. Aqui tem o `START-HERE.md` — primeira coisa que Claude lê."
- "Aqui o `WIZARD.md` — 14 stages do projeto-gênesis. É o trilho."
- "`.claude/rules/` — 9 regras de ouro. Claude lê antes de qualquer ação."
- "`.claude/skills/` — 21+ skills. Como `/privacy-audit`, `/registry-pick`, `/sprint-start`."
- "`docs/registry/` — catálogo curado de packs externos. Você não copia repo aleatório."
- "`session-log/` — memória de decisões entre sessões. **Sua memória institucional.**"

Frase-âncora:
> "Tudo isso é o trilho. A IA passa por cima sem descarrilar. **Esse é o seu Gundam, e você vai pilotar.**"

---

## Bloco 7 — Setup do TRECO 1 (0:55 → 1:00)

Slide 10. **PALAVRA POR PALAVRA**:

> "Antes de vocês criarem seu próprio repo, eu quero mostrar dois caminhos possíveis. Os dois usaram IA. Os dois eram solo. **A diferença entre os dois é a única coisa que importa nesta aula.**"

Pausa 2s. Avança pro slide 11.

---

## Bloco 8 — TRECO 1 execução (1:00 → 1:15)

### Polo 1 — Pó de Diamante (4min)

Slide 11.

> "Esse cara é o Pieter Levels. @levelsio no Twitter/X. Solo founder. Vibe coding em escala industrial.
>
> Olha aqui: ele declara MRR público. Acima de US$ 200 mil por mês. Alguns meses passa de US$ 300 mil.
>
> Os produtos: Nomad List — comunidade de nômades digitais. RemoteOK — quadro de vagas remotas. photoAI — gera fotos profissionais. interiorAI — redesigna ambientes com IA.
>
> Como ele opera? Sozinho. No notebook. Viajando o mundo. Postando todo o pipeline em público.
>
> **Esse cara é a prova viva.** Não é gênio. Não é estagiário com sorte. É solo founder com método. **A IA é a alavanca, mas o trilho é dele.**"

### Polo 2 — Pó de Fome (4min)

Slide 12.

> "Esse outro caso é de junho de 2025. Viralizou nas comunidades dev. Vibe coder usando Replit Agent — sistema autônomo. Em meio a uma sessão, o agente decidiu 'limpar' arquivos. Dropou banco de produção real.
>
> Custo? Dias de operação parados. Dados perdidos. Restauração via backup parcial.
>
> Outro caso: cara novo no Cursor faz `git add .` sem `.gitignore` configurado. `.env` com chaves de produção vai pro repo público. Bot do GitHub identifica em segundos. Conta zerada em horas.
>
> Outro: vazamento de chave da Stripe em commit público. Milhares de dólares queimados.
>
> **Os três usaram IA. Sem trilho. E o trem-bala virou.**"

### Provocação coletiva (30s)

Slide 13.

Pausa total. Olha pra câmera. Voz mais grave.

> "Os dois usaram IA. **QUAL A DIFERENÇA?**"

Espera 10–15s. **Resiste à tentação de quebrar o silêncio.**

Convida 1-2 respostas no chat. Lê em voz alta.

### Resposta (slide 14)

> "**Método. Trilho. AI Dev OS.** Não é capricho. Não é frescura. É o que separa $200k/mês de uma conta zerada."

### Transição pra ação (slide 15)

> "Beleza. Agora vocês não vão ouvir mais. Vocês vão **fazer**. Cada um de vocês vai pôr o pé no trilho agora. E eu vou junto."

---

## Bloco 9 — TRECO 1 entrega prática (1:15 → 1:50)

35min divididos:

**0–5min:** Slide 16. Compartilha tela. Mostra "Use this template" no repo do AI Dev OS. Cria novo repo demo na conta do facilitador. Clona localmente. Abre no IDE.

**5–10min:** Cada aluno faz o mesmo. TA atende em DM. Facilitador fica em silêncio, deixa rodar.

**10–15min:** Slide 17 (Git/origin/branch em 1 frase cada). Conceitos-pílula no momento que cada aluno tá vendo na própria máquina.

> "Git é a máquina do tempo do código. Cada commit é uma foto. Você sempre pode voltar."
> "`origin` é o endereço do repo na nuvem. Quando você faz push, vai pra esse endereço."
> "Branch é uma linha do tempo paralela. Você pode experimentar sem mexer na principal."

**15–25min:** Slide 18. Aluno roda `claude` no IDE, cola o prompt do START-HERE. WIZARD começa.

**25–35min:** Slide 19. Abre Grand Prix do Trilho projetado. Carrinhos saem da Largada quando alunos commitam.

**Frase-âncora coletiva:**
> "Olha aí, gente — vocês acabaram de pôr o pé no trilho. [N] carrinhos estão na Largada. **A próxima vez que vocês acordarem, vão estar mais à frente do que estão agora.**"

---

## Bloco 10 — Reflexão coletiva (1:50 → 1:55)

Slide 20.

> "Como tá a sensação? 3 voluntários — compartilha tela e me mostra o que Claude perguntou pra você."

Convida 3. Comenta cada um:
- Reforça quando o aluno se surpreendeu com algo.
- Valida quando travou.
- Conecta com Tagline ("isso aqui é um fucking Gundam").

---

## Bloco 11 — Check-out + Compromisso (1:55 → 2:00)

Slides 21–24.

Slide 21 (tagline gigante):
> "**VOCÊ NÃO ESTÁ DE MULETAS, ISSO AQUI É UM FUCKING GUNDAM!**" — leio em voz alta com energia.

Slide 22:
> "Cada um: 1 palavra de saída + 1 compromisso. Padrão: 'Até a Aula 2 eu vou…'"

Slide 23: mural ao vivo (Miro/FigJam) recebendo os compromissos.

Slide 24 (mantra):
> "**VAI LÁ E FAZ.**"

---

## Bloco 12 — Próxima aula (slide 25, 30s)

> "Próxima semana, mesma hora. Tese: 'AI sem contexto é menino no sandbox.' Cheguem com BP rascunhado em casa. Stage 5 do WIZARD em curso. Manda print no WhatsApp se travar — a gente desbloqueia.
>
> Obrigado, gente. Boa semana. **Vai lá e faz.**"

Música retoma. Sai da call.

---

## Pós-aula (próxima manhã)

Post no WhatsApp com:
- 3 momentos altos (citando alunos com permissão).
- Lista dos compromissos públicos.
- Print do mural Pacto.
- Prévia da Aula 2.

---

## Riscos durante o facilitator script

| Risco | Mitigação |
|---|---|
| Setup atrasa, perde o Treco | Vídeo pré-aula obrigatório. TA atende em DM. |
| Aluno trava no `claude` | Compartilha minha tela e refaço o passo. Coletivo aprende junto. |
| Provocação do Treco morre no silêncio | Eu próprio respondo após 15s se ninguém quebrar. |
| Aluno introvertido sofre no check-in | "Passa a vez" lembrado em todo bloco. |
| Tempo estoura | Comprimo Bloco 6 (Pílula 2) — pular o tour completo, mostrar só `WIZARD.md`. |

---

## Conexão com Aula 2

Compromisso público da turma alimenta o IGNITE da Aula 2. Eu releio os compromissos em voz alta no início.
