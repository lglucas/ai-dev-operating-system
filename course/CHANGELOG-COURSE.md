# Changelog do Curso — AI Dev Operating System

> Este é o changelog **da vertical educacional** (`course/`). Para o changelog do AI Dev OS principal, ver [`/CHANGELOG.md`](../CHANGELOG.md) na raiz.

Documenta a evolução do desenho do curso, das decisões pedagógicas, e da construção dos sistemas de apoio.

---

## [v3.3] — 2026-05-04 — Submarino nuclear, não jangada

### Decisões pedagógicas

- **TESE da Aula 3 reformulada:** o aluno não emerge "se protegendo do mar". Ele opera **soberania**: pilota submarino nuclear sem ser engenheiro porque tem método + IA + qualidade-com-segurança em vez de cabeça-sozinha.
- **TAGLINE da Aula 3 fechada:** "Não somos jangada. Somos submarino nuclear pilotado por gente que ouviu a IA."
- **TAGLINE da Aula 1 fechada:** "Você não está de muletas, isso aqui é um fucking Gundam!" (substitui versão anterior, mais branda).
- **Aula 2 ficou em 135min — aceito.** Tempo estourado é compromisso com profundidade.

### Sistemas

- **Sistema 1 ("Trilho do Red Team") aprovado** — sorteio de duplas para red team entre as Aulas 2 e 3. Página com **etiqueta de origem no canto inferior direito** mostrando as skills/packs/system designs do AI Dev OS usados na construção (prova viva do método).
- **Sistema 2 ("Grand Prix do Trilho") refinado** — substitui a ideia de "bolinhas com botão manual" por **carrinhos de F1 movidos por leitura automática de commits via GitHub API**. Capacete = avatar GitHub do aluno. 5 etapas: LARGADA → IDEACAO → DOCUMENTACAO → PROTOTIPO → CHEGADA.

### Convenções

- **Tags de commit `[STAGE:X]` formalizadas** em `.claude/rules/wizard-stage-tags.md` (no OS principal, opt-in). Sistema 2 lê. Quem não usa, não perde nada — easter egg.
- **Hashtags do curso:** `#AiDevOS` e `#TrilhoTremBala` ambas em uso.

### Cases reais para o Treco 1

- **Pó de Diamante:** Pieter Levels (Nomad List + RemoteOK + photoAI/interiorAI, MRR público >$200k/mês). Outros candidates: Cluely (2025), demais cases internacionais públicos.
- **Pó de Fome:** Replit AI deletando banco de produção (jun/2025), Cursor user vazando .env em repo público, Stripe API key vazada em commit público de outros vibe coders documentados em 2024–2025.
- **Decidido com user:** usar cases internacionais públicos documentados (não há case BR confiável conhecido na rede do user).

---

## [v3.2] — 2026-05-04 — Reposicionamento do tom

### Tese e tagline do curso (refeitas)

| Versão | Tese | Tagline |
|---|---|---|
| Antes | Disciplina | "Antes de codar, você opera" |
| Agora | **Método (trilho de trem-bala)** | **"Trilho não engessa. Trilho deixa o trem-bala existir."** |

### Treco 1 — refeito completamente

- **Versão anterior (descartada):** "O Commit Acidental" — usava como prova um commit que aluno teria feito errado no repo do OS. Problema apontado pelo user: era **mentira** (foi o próprio user que fez o commit acidental, não vinha de um vibe coder qualquer). Sem criatividade, sem ancoragem real.
- **Versão nova:** "Pó de Diamante e Pó de Fome" — dois cases reais lado a lado, em tela dividida. Polo 1 (vibe coder bilionário). Polo 2 (vibe coder que perdeu tudo). Aluno cria o próprio repo logo em seguida.

### Aula 2 — refinamentos

- **Tagline nova:** "AI sem contexto é menino no sandbox."
- **Argumento central deixou de ser "documentação"** e virou **tríade descobrir + aprofundar + documentar = R$50k em 3 meses por centavos de tokens**. Liberdade no tempo + capacidade técnica + custo simbólico.
- **Treco 2 movido pro fim da aula** (upload do repo) e a Galeria do Red Team migrou pros primeiros 20min da Aula 3, alimentada pelo Sistema 1.

### Aula 3 — TRECO 3b refeito

- **Pacto Coletivo** deixou de ser "3 práticas vagas de segurança" e virou:
  1. Estrelinha no repo do AI Dev OS.
  2. Post nas redes sociais com hashtag.
  3. Uma prática própria a sustentar.
- **Festa Final** mudou de Discord pra **WhatsApp + mic aberto Zoom**.

### Plataforma de comunidade

- Discord trocado por **WhatsApp** (decisão do user, alinhamento com público-alvo BR).

---

## [v3.1] — 2026-05-04 — Aplicando Experience Learning de verdade

Após user solicitar leitura dos 8 PDFs oficiais da Perestroika sobre o método, refeito o desenho com **vocabulário próprio da metodologia**:

- **23 pontos da Experience Learning** mapeados em 4 módulos (Conteúdo, Forma, Emocional, Estrutural).
- **Vocabulário oficial introduzido:** TESE, TAGLINE, TRECO, FLUXO TTT, IGNITE, ARCO, FRAMEWORK DE CURSO, FRAMEWORK DE AULA, CHECK-IN/OUT, MÓDULO VIVENCIAL, BANCA, GO PRO.
- **Frameworks de aula reformulados** com 12 blocos timeboxed (ao invés de blocos genéricos da v3).
- **Trecos** desenhados com Tese ancorada, Tagline e descrição cinematográfica.
- **Hosting** posicionado como núcleo do tom: aluno é **convidado**, não cliente.
- **8 correntes contemporâneas de educação** (do PDF 8) mapeadas pra cada aula.

---

## [v3.0] — 2026-05-04 — Primeira tentativa (refeita do zero)

Versão **descartada na crítica do user.** O assistente tentou aplicar Experience Learning sem ter lido os PDFs (WebFetch retornou 403). Resultado: terminologia inventada ("ritual de abertura", "provocação"), nada da estrutura real Perestroika. User foi explícito: "eu nem li o teu v3 a partir do momento que você não leu a metodologia."

Lição registrada: **antes de aplicar metodologia citada, ler a fonte primária.**

---

## [v2] — 2026-05-04 — Divisão em 3 encontros de 2h

Migração do desenho original (workshop único de 2h) para **3 encontros de 2h cada** após user constatar que o conteúdo de 2h era na verdade 3:30h.

- **Aula 1 — Fundação**
- **Aula 2 — Construção**
- **Aula 3 — Operação**

Estado emocional alvo por aula + artefato concreto de saída por aula. Cadência sugerida: 1 aula por semana ou 3 noites consecutivas.

---

## [v1] — 2026-05-04 — Primeira proposta (workshop único)

Workshop único de 2h cobrindo: setup, Stage 0–4 do WIZARD, BP/Brief/Technical Plan, Registry, Sprint, Segurança, Operação contínua. **Conteúdo identificado como excessivo pra 2h.**

---

## Próximos marcos previstos

- **v3.4:** Sprint 0 executado — sistemas (Trilho do Red Team + Grand Prix do Trilho) construídos e rodando. Slides de cada aula prontos. Vídeo de pré-aula gravado.
- **v3.5:** Dry-run interno gravado (1 instrutor + 1 observador). Ajustes do dry-run.
- **v3.6:** Workshop beta público (5–10 convidados, gratuito, gravado). Métricas: NPS, retenção, conversão pra próximas turmas.
- **v3.7:** Lançamento público (paid ou free a definir). Ingestão dos vídeos no `course/videos/INDEX.md`.

---

## Notas de versionamento

- Versões `vX.Y` aqui referem-se ao **desenho do curso**, não ao AI Dev OS principal.
- O OS principal está em sua própria linha de release (ver `/CHANGELOG.md`). Esta vertical foi adicionada na **v0.4.5** do OS.
- Quando o curso for de fato gravado e publicado, esperamos chegar em v4.x deste changelog.
