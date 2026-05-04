# TRECO 1 — Pó de Diamante e Pó de Fome

> **Onde encaixa:** Aula 1, blocos 7–9 (0:55 → 1:50, 55min totais).

> **TESE que ancora:** O AI Dev OS é o trilho que faltava. IA sem trilho é poder bruto sem direção. Com ele, é Gundam com Jarvis.

> **TAGLINE que ancora:** "Você não está de muletas, isso aqui é um fucking Gundam!"

> **PILAR Perestroika:** Forma + Emocional. É a experiência culminante da aula.

---

## Conceito do TRECO

Mostrar **DOIS casos reais, lado a lado, na mesma tela** durante 8min, depois fazer a turma criar o próprio repo (entrega prática). É a forma mais literal de tangibilizar a TESE: dá pra acelerar com método (Pó de Diamante) ou implodir sem (Pó de Fome). O AI Dev OS é o trilho.

---

## Roteiro de cena (8min de execução, bloco 8)

### Setup visual

- Tela do facilitador dividida ao meio com **Pó de Diamante** à esquerda e **Pó de Fome** à direita.
- Música de fundo baixa, instrumental, leve tensão. Corta no início da narração.
- Cor de fundo: esquerda em tom dourado/quente, direita em tom vermelho/frio.

### Setup narrativo

> "Antes de vocês criarem seu próprio repo, eu quero mostrar dois caminhos possíveis. Os dois usaram IA. Os dois eram solo. **A diferença entre os dois é a única coisa que importa nesta aula.**"

### POLO 1 — Pó de Diamante (4 minutos, alternando com Polo 2)

**Caso principal:** Pieter Levels.
- @levelsio no X.
- Solo founder. Vibe coding em escala industrial.
- **Produtos públicos:** Nomad List, RemoteOK, photoAI, interiorAI, hoodmaps.
- **MRR público (declarado por ele):** acima de $200k/mês — alguns meses chegando a $300k+.
- **Como ele opera:** sozinho, no notebook, viajando o mundo, postando o pipeline em público.
- **Print da declaração de MRR:** mostrar tweet real ou screenshot do site dele.

**Caso secundário (se rolar tempo):** Cluely (2025) — fundador jovem fazendo MM de receita em poucos meses com IA.

**Frase-âncora pra esta parte:**
> "Esse cara é a prova viva. Não é estagiário, não é gênio. É solo founder com método. **A IA é a alavanca, mas o trilho é dele.**"

### POLO 2 — Pó de Fome (alternando com Polo 1)

**Caso principal:** Replit AI deletando banco de produção (junho/2025).
- Caso público, viralizou no X e em comunidades dev.
- Vibe coder usando Replit Agent (sistema autônomo). Em meio a uma sessão, agente decidiu "limpar" arquivos e dropou banco de produção real.
- **Custo real:** dias de operação parados, dados perdidos, restauração via backup parcial.
- **Print:** thread original do desenvolvedor afetado relatando o que aconteceu.

**Caso secundário (alternativa ou complemento):**
- **Stripe API key vazada em commit público** — vários casos documentados em 2024–2025. Bot scrappers do GitHub identificam segredos em segundos. Conta zerada em horas.
- **Cursor user com .env público** — tweet de novembro/2024 mostrando dev novo no Cursor que fez `git add .` sem `.gitignore` configurado e mandou `.env` pro repo público com chaves de produção.

**Frase-âncora pra esta parte:**
> "Os dois usaram IA. Esse aqui também. **Mas sem trilho. E o trem-bala virou.**"

### Provocação coletiva (cerca de 30s no fim do polo dividido)

- Pausar a tela.
- Olhar pra câmera.
- Perguntar: **"Os dois usaram IA. Qual a diferença?"**
- Esperar 10–15s. Deixar silêncio.
- Convidar 1–2 respostas no chat.
- Resposta-síntese: **"Método. Trilho. AI Dev OS."**

### Transição para a entrega prática

> "Beleza. Agora vocês não vão ouvir mais. Vocês vão **fazer**. Cada um de vocês vai pôr o pé no trilho agora. E eu vou junto."

---

## Entrega prática (35min de execução, bloco 9)

### Estrutura do bloco

| Minuto | Atividade |
|---|---|
| 0–5 | Eu mostro na minha tela: "Use this template" no GitHub do AI Dev OS → cria novo repo (privado) → clona localmente → abre no IDE. |
| 5–10 | Cada aluno faz o mesmo. Monitor (TA) atende travas em DM. |
| 10–15 | Eu rodo `claude` na minha pasta → cola o prompt do START-HERE.md → começa o WIZARD. |
| 15–25 | Cada aluno faz o mesmo. Eu fico disponível pra perguntas no chat. |
| 25–35 | WIZARD entra em Stage 1 (tell me about your project). Cada aluno responde. Em paralelo, abro **Grand Prix do Trilho** projetado no Zoom — turma vê os carrinhos saindo da Largada. |

### O que acontece visualmente no Grand Prix do Trilho

- Cada vez que um aluno faz o primeiro commit (com tag `[STAGE:LARGADA]` ou via fallback automático), o **carrinho dele aparece na linha de Largada do painel**.
- Capacete = avatar GitHub do aluno.
- Pisca + som breve quando aparece.
- Turma vê o pelotão se formando em tempo real.

**Frase-âncora coletiva:**
> "Olha aí, gente — vocês acabaram de pôr o pé no trilho. Os 12 carrinhos estão na Largada. **A próxima vez que vocês acordarem, vão estar mais à frente do que estão agora.**"

---

## Material de apoio que precisa ser produzido pra esta cena

- [ ] Slide com tela dividida + nomes dos casos.
- [ ] Print real do tweet de Levels declarando MRR.
- [ ] Print real da thread do Replit AI deletando banco.
- [ ] Print real do GitHub commit com `.env` exposto.
- [ ] Roteiro escrito do facilitador (este arquivo + falas-âncora destacadas).
- [ ] Música de fundo (instrumental, leve tensão, que possa cortar limpo).
- [ ] Repo "vet-saas-workshop" pronto pra eu usar como exemplo do "Use this template".
- [ ] Painel Grand Prix do Trilho rodando em ambiente de demo, pronto pra projetar.

Tudo no Sprint 0: [`../../../sprints/sprint-0-fundacao.md`](../../../sprints/sprint-0-fundacao.md).

---

## Por que esse Treco amarra

1. **Vira notícia.** Aluno conta pro amigo: "vi um cara solo que fatura $200k/mês usando IA, e vi outro que perdeu tudo em 1 commit." Memorável.
2. **Conecta direto na Tagline.** Trilho aguenta o trem-bala, sem trilho descarrila.
3. **Não é gracinha.** É mostrar o teto e o chão da decisão de método.
4. **Tem entrega prática imediata.** Aluno não sai da emoção pra teoria — sai da emoção pra ação. Cria o próprio repo no minuto seguinte.

---

## Riscos e mitigações desta cena

| Risco | Mitigação |
|---|---|
| Cases mudam ou somem da internet | Manter prints locais. Atualizar este arquivo a cada edição do curso. |
| Levels muda de patamar (positivo ou negativo) | Ter 2–3 cases alternativos pré-mapeados como reserva. |
| Aluno acha que é "fácil ficar bilionário" | Frase-âncora corretiva: "É possível. Mas só com trilho. Sem trilho, vira o do lado de lá." |
| Polo 2 vira terror desnecessário | Sempre seguir caso de erro com "e o método/o OS te protege assim". Medo seguido de alívio. |

---

## Conexão com Aula 2 e 3

- **Aula 2** retoma: "Vocês viram que o Levels documenta tudo em público. Hoje vocês vão fazer parecido."
- **Aula 3** retoma: "Vocês viram que o cara do Replit perdeu tudo em 1 commit. Hoje a gente blinda contra isso."

A jornada Pó de Diamante → Pó de Fome se completa: aluno emerge das duas pontas como **submarino nuclear pilotado por gente que ouviu a IA**.
