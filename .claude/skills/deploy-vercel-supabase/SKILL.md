---
name: deploy-vercel-supabase
description: Walk a vibe-coder through deploying a Next.js + Supabase project to Vercel + Supabase production for the first time. Activated when the user says "vamos publicar", "como coloca no ar", "deploy", or after Sprint 1 ships and the app needs a public URL.
---

# Deploy: Vercel + Supabase

## When to run this skill

- User says "vamos publicar" / "colocar no ar" / "fazer o deploy" / "como hospedar".
- Sprint 1 implementation is done locally and the user wants to share a link.
- `launch-agent` requires a public URL.

## Pre-deploy gate

Block deploy if any fail:

- [ ] App builds locally (`npm run build` exits 0).
- [ ] `.env.local` has all required variables and they work locally.
- [ ] `.env.example` is up to date (use `secrets-discipline`).
- [ ] No literal secret committed.
- [ ] Database migrations checked into the repo (`supabase/migrations/*.sql`).
- [ ] At least one user can sign up + sign in locally.

## Step-by-step (plain Portuguese)

### 1. Supabase production project

1. supabase.com → Dashboard → New Project. Nome: `<project-name>-prod`. Region: `sa-east-1` para Brasil.
2. Senha do banco: gerar e guardar no `.env.local` da máquina, NUNCA no repo.
3. Copiar `URL` e `anon key` da seção API.
4. Aplicar migrations:
   ```bash
   supabase link --project-ref <ref>
   supabase db push
   ```
5. Email auth: habilitar magic link, definir Site URL (próximo passo).

### 2. Vercel project

1. vercel.com → New Project → Import from GitHub.
2. Framework: Next.js (auto-detect).
3. Environment variables: copiar do `.env.example`, preencher com valores de produção:
   - `SUPABASE_URL`, `SUPABASE_ANON_KEY` (passo 1).
   - `SUPABASE_SERVICE_ROLE_KEY` (NUNCA "expose to client").
   - `NEXTAUTH_URL` = URL Vercel.
   - `NEXTAUTH_SECRET` = `openssl rand -base64 32`.
   - Demais (Stripe, Resend, Anthropic) conforme integrações.
4. Deploy.

### 3. First-deploy verification

- [ ] Build do Vercel passou.
- [ ] URL responde 200.
- [ ] Sign-up com email novo funciona end-to-end.
- [ ] Magic link cai na inbox.
- [ ] Sign-in redireciona pra dashboard.
- [ ] Logout funciona.
- [ ] Nenhuma chave aparece na aba Network.

Se falhar: abrir Vercel logs + Supabase logs juntos, hand-off para `bug-triage-agent`.

### 4. Custom domain (opcional)

1. Comprar domínio (Registro.br / Namecheap).
2. Vercel → Settings → Domains → add domain. Configurar DNS.
3. Atualizar `NEXTAUTH_URL` e Supabase `Site URL`.
4. Re-deploy.

### 5. Post-deploy

- Adicionar Sentry (consultar `cost-watchdog` antes).
- Ativar Vercel Analytics.
- Rodar `usage-monitor` 24h depois.
- `legal-compliance-agent` ANTES de divulgar publicamente.

## Vibe coder explanation

> Deploy é tirar o app do seu computador e colocar num servidor que o mundo acessa 24/7. Vercel cuida do servidor (você não precisa entender o que é "container"). Supabase cuida do banco. Sua parte é apertar os botões na ordem certa — eu te guio.

## Do NOT

- Don't paste production env vars in chat. Use the dashboard or `vercel env add`.
- Don't commit a `.env.production` file.
- Don't promote a dev Supabase project to prod — crie um novo.
- Don't enable Supabase Realtime on tables that don't need it.
- Don't skip the post-deploy verification.

## Common pitfalls

| Sintoma | Causa provável | Fix |
|---|---|---|
| 500 na primeira página | Env vars faltando | Conferir Vercel env vs `.env.example`. |
| Magic link não chega | Site URL Supabase != Vercel URL | Atualizar Authentication → URL Configuration. |
| Auth callback redireciona pro localhost | `NEXTAUTH_URL` errada | Atualizar env var + redeploy. |
| Build falha em prod, passa local | Node version diferente | Definir `engines.node` no package.json. |
| 401 nas API routes | `service_role_key` exposta no cliente | Rodar `secrets-discipline`. |
