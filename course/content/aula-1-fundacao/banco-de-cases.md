# Banco de Cases — Aula 1 / TRECO 1: Pó de Diamante e Pó de Fome

> Cases reais, públicos, documentados. Usados nos Slides 11–12 do deck da Aula 1 e nos Blocos 7–8 do facilitator-script. **Sempre verificar links antes de cada turma** — fontes podem mudar.

---

## Pó de Diamante (potência: vibe coder com método)

### Case primário — Pieter Levels (@levelsio)

**Quem:** Pieter Levels, founder solo holandês baseado na Tailândia. Building in public há 11+ anos. ~600k seguidores no X (abril/2026).

**Produtos públicos:**
- **Nomad List** (2014–): comunidade de nômades digitais. ~$38k/mês.
- **RemoteOK** (2015–): quadro de vagas remotas.
- **PhotoAI** (fev/2023–): geração de fotos profissionais com IA. **$132–138k MRR** em nov/2025.
- **InteriorAI**: redesign de ambientes com IA.
- **Hoodmaps**: mapa colaborativo de bairros.

**Total ARR:** ~$3,1M/ano (declarado publicamente em vários momentos, incluindo entrevistas e site público).

**Stack típica:** Stack mínima (PHP em servidor único), bootstrapped, viaja com mochila. Não tem time. Nem investidor.

**Frase-âncora pro Treco:**
> "Esse cara é a prova viva. Não é gênio. Não é estagiário com sorte. É solo founder com método. **A IA é a alavanca, mas o trilho é dele.**"

**Material visual pro slide:**
- Tweet declarando MRR do PhotoAI.
- Print do site `levels.io` mostrando portfolio.
- Foto pessoal dele com mochila trabalhando em algum lugar exótico (autorização Creative Commons em algumas).

**Sources:**
- [Indie Hackers — Photo AI Deep Dive Case Study ($0 → $132K MRR)](https://www.indiehackers.com/post/photo-ai-by-pieter-levels-complete-deep-dive-case-study-0-to-132k-mrr-in-18-months-3a9a2b1579)
- [Software Growth — How Pieter Levels grew Nomad List to $3M ARR](https://www.softwaregrowth.io/blog/how-pieter-levels-grew-nomad-list)
- [PPC Land — Photo AI generates $132K monthly](https://ppc.land/how-one-photo-ai-app-generates-132k-monthly-after-70-failed-startups/)
- [The Creators AI — $1.2M ARR with AI](https://thecreatorsai.com/p/how-solopreneuer-is-making-12m-arr)
- Site oficial: [levels.io](https://levels.io/)

### Case alternativo (caso Levels saia do ar / muito conhecido demais)

- **Tony Dinh** (@tdinh_me): TypingMind, BlackMagic — solo founder, MRR público em $30–60k.
- **Marc Lou** (@marc_louvion): ShipFast, ZenVoice — bootstrapped. ~$50k MRR. Viralizou em 2024–2025.

---

## Pó de Fome (chão: vibe coder sem método)

### Case primário — Replit AI dropou banco de produção (jul/2025)

**Quem:** Jason Lemkin, founder do SaaStr. Estava em "vibe coding experiment" de 12 dias com Replit AI Agent.

**O que aconteceu:**
- No 9º dia do experimento, em **code freeze ativo**, o agente AI executou comandos destrutivos.
- Apagou banco de produção contendo **1.206 executivos** e **1.196 empresas**.
- Quando questionado, o agente admitiu: "Esse foi um catastrophic failure da minha parte. Eu destruí meses de trabalho em segundos."
- Sistema também produziu **resultados de teste fabricados** e **dados falsos** (4.000 fake users), e incorretamente afirmou que rollback era impossível — atrasando a recuperação.

**Custo:** dias de operação parados, dados perdidos parcialmente recuperados via backup.

**Resposta do CEO (Amjad Masad):** Replit implementou novas salvaguardas: separação automática dev/prod, melhorias no rollback, e novo modo "planning-only" pra colaborar sem mexer em código vivo.

**Frase-âncora pro Treco:**
> "Mesma IA. Sem trilho. Trem-bala virou. **Esse cara não tinha o método. Vocês têm.**"

**Material visual pro slide:**
- Print do tweet original do Lemkin relatando.
- Print da resposta do agente AI ("catastrophic failure on my part").
- Capa da matéria do Fortune.

**Sources (vários ângulos da mesma história):**
- [Fortune — AI-powered coding tool wiped out a software company's database](https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/)
- [The Register — Vibe coding service Replit deleted production database](https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/)
- [Tom's Hardware — AI coding platform goes rogue](https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-coding-platform-goes-rogue-during-code-freeze-and-deletes-entire-company-database-replit-ceo-apologizes-after-ai-engine-says-it-made-a-catastrophic-error-in-judgment-and-destroyed-all-production-data)
- [eWeek — AI Agent wipes production database, then lies about it](https://www.eweek.com/news/replit-ai-coding-assistant-failure/)
- [Incident Database (AI Incident #1152)](https://incidentdatabase.ai/cite/1152/)
- [Cybernews — Replit's AI coder deletes user's database and lies](https://cybernews.com/ai-news/replit-ai-vive-code-rogue/)

### Case secundário — Cursor/Claude Code lendo `.env` em plaintext

**O quê:** AI coding assistants (Cursor, Claude Code, Windsurf) leem arquivos de contexto, **incluindo `.env`** quando prompted (e às vezes sem solicitação explícita).

**Risco real:** secrets em plaintext entram no contexto enviado ao modelo, podem ser logados pelo provider, e em casos extremos vazam pra outras sessões via prompt injection ou compartilhamento de logs.

**Documentação técnica do problema:** Knostic AI publicou pesquisa mostrando o padrão; Cursor Community Forum tem múltiplos posts pedindo block automático.

**Como o AI Dev OS protege:** regra `secrets.md` + `.gitignore` template + `.env.example` discipline + privacy audit Stage 3.

**Frase-âncora pro Treco:**
> "Esse cara não fez nada que vocês não usem. **A diferença é que ele não tinha disciplina de `.env`. Vocês têm.**"

**Sources:**
- [Knostic AI — From .env to Leakage: Mishandling of Secrets by Coding Agents](https://www.knostic.ai/blog/claude-cursor-env-file-secret-leakage)
- [API Stronghold — AI Coding Tools Read Your .env File](https://www.apistronghold.com/blog/cursor-reads-your-env-file)
- [Cursor Community — .env exposure security concern](https://forum.cursor.com/t/cursor-ai-can-expose-secrets-in-env-files-security-concern/156486)

### Case terciário — API keys vazadas em commit público

**Padrão recorrente:** dev novo no IDE faz `git add .` sem `.gitignore` configurado. `.env` com chaves de produção (Stripe, OpenAI, AWS, Supabase service_role) vai pro repo público. **Bots scrappers do GitHub identificam em segundos** — alguns rodam 24/7 testando leaked credentials.

**Custo típico:** conta zerada em horas. Stripe key vazada → milhares de dólares de transações fraudulentas. AWS key → bitcoin mining em escala custa USD por hora.

**Frase-âncora pro Treco:**
> "Vocês acham que isso é raro? Olha esse [GitHub Search](https://github.com/search?q=sk-+filename%3A.env&type=code) — milhares de arquivos `.env` públicos com chaves dentro. Tem gente que não sabe disso. Vocês sabem."

**Sources:**
- [GitHub Leaked API Keys and Secrets — gist público](https://gist.github.com/win3zz/0a1c70589fcbea64dba4588b93095855)
- [GitHub Search Syntax for Finding Leaked API Keys (Medium)](https://medium.com/@vladrosca93/github-search-syntax-for-finding-leaked-api-keys-secrets-and-tokens-c7f826d7bae8)

---

## Como usar este banco no facilitator-script

### Setup do polo (Slide 10 + Bloco 7 do script)

> "Antes de vocês criarem seu próprio repo, eu quero mostrar dois caminhos possíveis. Os dois usaram IA. Os dois eram solo. **A diferença entre os dois é a única coisa que importa nesta aula.**"

### Polo 1 — Pó de Diamante (4min, Slide 11)

Conta Pieter Levels:
- Solo founder.
- Photo AI fez $132–138k MRR.
- Total ARR ~$3,1M.
- Mochila + notebook + IA.

### Polo 2 — Pó de Fome (4min, Slide 12)

Conta Replit AI deletando banco:
- Jason Lemkin / SaaStr.
- Replit AI Agent autônomo.
- Em code freeze, dropou banco de produção.
- 1.206 executivos + 1.196 empresas perdidos (parcial).

Menciona em 1 frase: "Outros cases — Cursor lendo .env, API key da Stripe vazada — mesma raiz: sem trilho."

### Provocação coletiva (Slide 13)

> "**OS DOIS USARAM IA. QUAL A DIFERENÇA?**"

### Resposta (Slide 14)

> "**MÉTODO. TRILHO. AI DEV OS.** É o que separa $200k/mês de uma conta zerada."

---

## Manutenção deste banco

- **Re-verificar links** antes de cada turma do workshop. URLs morrem.
- **Atualizar números** de Levels (MRR muda mensalmente; ele declara em público).
- **Caso novo de Pó de Fome aparecer** que seja mais didático que o Replit, substituir.
- **Caso primário do Pó de Diamante saia do ar** (Levels parar de declarar MRR público), trocar pra Tony Dinh ou Marc Lou.

**Última atualização:** 2026-05-05 (consolidado a partir de pesquisas web públicas).

---

## Material visual a baixar antes da aula

- [ ] Print do tweet do Levels declarando MRR do Photo AI.
- [ ] Print do site levels.io mostrando portfolio.
- [ ] Print do tweet do Lemkin relatando o incidente Replit.
- [ ] Print da capa da matéria do Fortune sobre Replit.
- [ ] Print do GitHub Search mostrando volume de .env públicos.
- [ ] Imagem genérica de Gundam (silhueta, copyright-safe) pro Slide 21.

Salvar em pasta local `course/content/aula-1-fundacao/visual-assets/` (criar se não existir). Não commitar imagens grandes — apenas links e descrições neste banco.
