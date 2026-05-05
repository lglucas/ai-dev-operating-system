# Trilho do AI Dev OS — Sistemas 1 + 2

> Página única HTML que combina os dois sistemas do curso:
> - **Sistema 1 — Trilho do Red Team** (modo `#aluno` + `#admin`).
> - **Sistema 2 — Grand Prix do Trilho** (modo `#painel`).

Sem build step. Sem framework. Servido como site estático pelo GitHub Pages. Backend: Supabase (auth + DB + Realtime + 1 Edge Function).

---

## Estrutura

```
course/systems/
├── index.html              ← entry point, hash routing #aluno/#painel/#admin
├── app.js                  ← lógica (Alpine.js + Supabase JS SDK)
├── style.css               ← visual
├── .env.example            ← template das vars (.env real fica fora do repo)
├── README.md               ← este arquivo
├── supabase/
│   ├── schema.sql          ← DDL: tabelas, enum, view, RPCs
│   ├── policies.sql        ← Row-Level Security
│   └── functions/
│       └── poll-progress/
│           └── index.ts    ← Edge Function (Deno) que polleia GitHub
├── trilho-red-team/        ← BRIEF (especificação)
└── grand-prix/             ← BRIEF (especificação)
```

---

## Como rodar local (sem deploy)

### ⚠️ Modo mock NÃO envia email real

Quando a URL tem `?mock=1`, o Magic Link do login é stub — **não dispara email**. Pra testar login real, configure Supabase Pro/Free + variáveis no HTML (passos 1-3 da seção "Setup do backend") e abra **sem** o `?mock=1`. Aí o email mágico chega de verdade.

### ⚠️ Modo mock NÃO envia email real

Quando a URL tem `?mock=1`, o Magic Link do login é stub — **não dispara email**. Pra testar login real, configure Supabase Pro/Free + variáveis no HTML (passos 1-3 da seção "Setup do backend") e abra **sem** o `?mock=1`. Aí o email mágico chega de verdade.

### Modo mock (sem Supabase, pra ver o painel rodando rapidinho)

```bash
cd course/systems && python3 -m http.server 8000
```

Abre `http://localhost:8000/?mock=1#painel` — vai ter 8 carrinhos fake no trilho, com 1 carrinho avançando uma lane a cada 6s. GSAP anima a entrada com flash dourado. Quando chega na CHEGADA, toca um beep de bandeirada via WebAudio (sem arquivo externo).

Útil pra:
- Validar visual do painel antes de configurar Supabase.
- Demonstrações offline.
- Smoke test depois de mexer em CSS/animação.

### Modo real (com Supabase configurado)

Mesmo servidor local, mas sem `?mock=1`:

```
http://localhost:8000/#aluno    ← login
http://localhost:8000/#painel   ← Grand Prix do Trilho
http://localhost:8000/#admin    ← painel admin (só pra is_admin=true)
```

Pra a página falar com o Supabase real, você precisa primeiro setup do backend (próxima seção).

---

## Setup do backend (Supabase) — passo a passo

### 1. Criar projeto Supabase

- Vai em https://supabase.com → New Project.
- Anota a `Project URL` e a `anon key` (Settings → API).

### 2. Aplicar schema + policies

- Supabase Dashboard → SQL Editor → New query.
- Cola o conteúdo de `supabase/schema.sql` → Run.
- Nova query → cola `supabase/policies.sql` → Run.

### 3. Configurar variáveis públicas no HTML

No `index.html`, antes do `<script src="./app.js">`, adiciona:

```html
<script>
  window.SUPABASE_URL = "https://your-project-id.supabase.co";
  window.SUPABASE_ANON_KEY = "eyJhbG...";
</script>
```

Estas variáveis SÃO públicas por design — RLS protege as tabelas.

### 4. Deploy da Edge Function

```bash
# Pré-requisito: Supabase CLI instalada (https://supabase.com/docs/guides/cli)
supabase login
supabase link --project-ref <project-id>
supabase functions deploy poll-progress
```

### 5. Configurar secrets da Edge Function

Supabase Dashboard → Settings → Edge Functions → Secrets:

| Variável | Valor | Onde achar |
|---|---|---|
| `GITHUB_PAT` | Personal Access Token com escopo `public_repo` | https://github.com/settings/tokens |
| `SUPABASE_SERVICE_ROLE_KEY` | service role key | Settings → API |

(`SUPABASE_URL` é injetado automaticamente pela Supabase.)

### 6. Agendar a Edge Function (cron)

Supabase Dashboard → Database → Cron Jobs → New cron job:

- Schedule: `*/2 * * * *` (a cada 2 minutos)
- Function: `poll-progress`

### 7. Marcar você como admin

Já feito pelo `seed.sql` da seção 2 — emails listados ali viram admin automático. Pra adicionar mais admins depois:

1. Edita `supabase/seed.sql` adicionando o email novo nas DUAS listas (UPDATE retroativo + array do trigger).
2. Re-aplica o `seed.sql` no SQL Editor.

Verificação:
```sql
select email, is_admin from public.students where is_admin = true;
```

---

## Deploy do frontend (GitHub Pages)

### Configuração inicial

1. GitHub repo → Settings → Pages.
2. Source: `Deploy from a branch`.
3. Branch: `main` / Folder: `/` (root).
4. **MAS** — só queremos servir `course/systems/`, não a raiz inteira.

**Opção A — repo separado (mais limpo):**
- Cria repo `lglucas/aios-trilho-systems`.
- Copia o conteúdo de `course/systems/` pra raiz dele.
- Ativa Pages na raiz.

**Opção B — Pages do mesmo repo, URL com prefixo:**
- Source: `main` / Folder: `/`.
- URL fica: `https://lglucas.github.io/ai-dev-operating-system/course/systems/`.
- Inconveniente: arquivos da raiz do repo também ficam acessíveis.

**Opção C (recomendada) — branch `gh-pages` espelhando `course/systems/`:**
- Cria branch `gh-pages` que tem só o conteúdo de `course/systems/` na raiz.
- GitHub Action atualiza essa branch quando `main` muda em `course/systems/`.
- Pages aponta pra `gh-pages` na raiz.
- URL fica: `https://lglucas.github.io/ai-dev-operating-system/`.

Opção C é a mais limpa. Implementamos quando estiver na hora do deploy.

---

## Fluxo de uso (durante a aula)

1. **Aluno** entra em `#aluno`, faz login com Magic Link, cola URL do repo dele.
2. **Aluno commita** com tag `[STAGE:LARGADA]` (ou só commita normal — heurística pega).
3. **Edge Function** roda a cada 2min, lê os commits via GitHub API, atualiza `positions`.
4. **Painel** (`#painel`) atualiza ao vivo via Supabase Realtime — carrinho do aluno avança.
5. Ao final da Aula 2: instrutor vai em `#admin` → "Sortear duplas". Cada aluno recebe 2 repos pra atacar.
6. Início da Aula 3: instrutor vai em `#admin` → "Sortear 3 alunos pra Galeria".

---

## Risco de segurança (resumo)

Repo público. Source visível. **Defesa não está em obscuridade — está em segredos**:

| Variável | Onde fica | Pública? |
|---|---|---|
| `SUPABASE_URL` | HTML | Sim, by design |
| `SUPABASE_ANON_KEY` | HTML | Sim, by design + RLS protege |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Secrets, fora do repo | **NÃO** |
| `GITHUB_PAT` | Supabase Secrets, fora do repo | **NÃO** |

`.env` real **NUNCA** vai pro repo. `.env.example` no repo só tem placeholders.

A Edge Function só **lê** GitHub API pública (sem POST público recebido), reduzindo a superfície de ataque a quase zero.

---

## Etiqueta de origem

Toda página mostra no canto inferior direito:

```
🛤 Construído com AI Dev OS
Skills: registry-pick, processize, sprint-management
Stack: HTML + Alpine.js + GSAP + Supabase
Hosting: GitHub Pages · Custo: R$ 0/mês
Build: ~11h (Sprint 0)
```

É proposital. Mostra que vibe coder com método entrega em horas o que time custaria semanas.

---

## Status

- [x] HTML, JS, CSS, schema, policies, Edge Function, .env.example escritos.
- [ ] Supabase project criado.
- [ ] Schema + policies aplicados.
- [ ] Edge Function deployada.
- [ ] Cron configurado.
- [ ] GitHub Pages ativo.
- [ ] Smoke test com 3 usuários reais.
- [ ] Etiqueta de origem testada visualmente.
- [ ] Animação de carrinho com GSAP testada.

Próximos passos no [Sprint 0](../sprints/sprint-0-fundacao.md).
