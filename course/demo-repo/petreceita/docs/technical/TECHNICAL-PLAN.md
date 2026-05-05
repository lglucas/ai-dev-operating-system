# Technical Plan — PetReceita

**Versão:** 0.0.2
**Data:** 2026-05-04
**Origem:** WIZARD Stage 11 — após Product Brief consolidado.

---

## 1. Stack

| Camada | Tecnologia | Por quê |
|---|---|---|
| Frontend | Next.js 15 (App Router) | Mature, SSR, mobile-first, Vercel friendly |
| UI components | shadcn/ui + Tailwind | Cópia, customiza, controla. Sem dependência runtime. |
| Auth | Supabase Auth (magic link) | Sem senha. Vet entra com email. CRMV é metadata. |
| Database | Supabase Postgres | RLS robusto. Realtime se precisar fase 2. |
| Storage (PDFs) | Supabase Storage | Mesma plataforma. Lifecycle policy pra retenção. |
| Email | Resend | Simples, deliverability boa, free tier 3k/mês. |
| Assinatura digital | ICP-Brasil A3 via SDK do parceiro | A definir entre Bry/ITTRU/ValidCertificadora no Stage 11.5. |
| Deploy | Vercel | Free tier suficiente fase 1. |
| Telemetria | PostHog (opcional, fase 2) | Privacy-first se for usar. |
| Erro tracking | Sentry (fase 2) | — |

---

## 2. Schema do banco (Postgres + Supabase RLS)

### Tabelas principais

```sql
-- Clínica (multi-tenant — 1 vet pode ter várias)
create table clinics (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  cnpj text,
  created_at timestamptz default now()
);

-- Vet (linkado ao auth.users)
create table vets (
  id uuid primary key references auth.users(id),
  clinic_id uuid references clinics(id),
  full_name text not null,
  crmv text not null,         -- nº do CRMV (ex.: "RS-12345")
  email text not null,
  has_icp_cert boolean default false,
  created_at timestamptz default now()
);
create unique index on vets(crmv);

-- Tutor (humano dono do pet)
create table tutors (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id),
  full_name text not null,
  cpf text,                   -- pode ser opcional pro MVP
  phone text,
  email text,
  created_at timestamptz default now()
);

-- Pet
create table pets (
  id uuid primary key default gen_random_uuid(),
  tutor_id uuid not null references tutors(id),
  name text not null,
  species text not null,      -- 'cao', 'gato', 'outro'
  breed text,
  age_years numeric,
  weight_kg numeric,
  notes text,
  created_at timestamptz default now()
);

-- Receita
create table prescriptions (
  id uuid primary key default gen_random_uuid(),
  vet_id uuid not null references vets(id),
  pet_id uuid not null references pets(id),
  notes text,
  signed_at timestamptz,                   -- quando ICP foi aplicada
  signature_provider text,                 -- 'bry', 'ittru', etc.
  signature_hash text,                     -- hash pra verificação
  pdf_storage_path text,                   -- path no Supabase Storage
  created_at timestamptz default now()
);

-- Itens da receita
create table prescription_items (
  id uuid primary key default gen_random_uuid(),
  prescription_id uuid not null references prescriptions(id) on delete cascade,
  medication_name text not null,
  dosage text not null,                    -- "5mg/kg"
  frequency text not null,                 -- "12 em 12 horas"
  duration_days int,
  controlled_class text,                   -- 'A', 'B1', 'C1', null
  observations text,
  position int default 0
);

-- Log de prescrições controladas (regulatório CFMV)
create table controlled_prescriptions_log (
  id uuid primary key default gen_random_uuid(),
  prescription_id uuid not null references prescriptions(id),
  controlled_class text not null,
  logged_at timestamptz default now()
);
```

### RLS (Row Level Security)

Princípio: vet só vê dados da própria clínica.

```sql
alter table tutors enable row level security;
create policy "vet vê tutor da própria clínica" on tutors
  for all using (
    clinic_id = (select clinic_id from vets where id = auth.uid())
  );
-- equivalente em pets, prescriptions, prescription_items.
```

---

## 3. Arquitetura por concerns (não por layers)

```
src/
├── features/
│   ├── auth/                  (login, logout, magic link)
│   ├── clinic-setup/          (onboarding 1ª vez)
│   ├── tutors-pets/           (cadastro + busca)
│   ├── prescription-create/   (Fluxo A inteiro)
│   ├── prescription-history/  (Fluxo C)
│   ├── pdf-generation/        (template + PDFKit)
│   ├── icp-signature/         (integração ICP-Brasil)
│   ├── public-prescription/   (Fluxo B — view pública pro tutor)
│   └── admin/                 (config clínica, billing)
├── lib/
│   ├── supabase.ts
│   ├── resend.ts
│   └── icp-provider.ts
└── app/                       (Next.js App Router rotas finas)
```

Cada feature é deletável: prescription-history pode sumir sem afetar prescription-create. Anti-padrão: pasta `services/` ou `models/` global.

Limite de 200 linhas por arquivo. Acima disso, decompõe.

---

## 4. Fluxo de assinatura ICP-Brasil

1. Vet seleciona certificado A3 (token USB ou cloud do provedor).
2. Browser/extensão do provedor abre prompt → vet digita PIN.
3. Provedor retorna assinatura PKCS#7 + hash.
4. Backend salva `signed_at`, `signature_hash`, `signature_provider` em `prescriptions`.
5. PDF é gerado com hash visível + bloco de assinatura no rodapé.
6. PDF é storage'd no Supabase Storage (path = `prescriptions/{vet_id}/{prescription_id}.pdf`).

> ⚠️ Open question pro Stage 11.5: testar Bry, ITTRU e ValidCertificadora — escolher um pelo registry-pick (preço, latência, suporte).

---

## 5. Privacy / LGPD

- **Dados pessoais sensíveis** (saúde do pet, CPF do tutor): consentimento explícito no signup do tutor.
- **Retenção:** receitas ficam 5 anos (regulatório CFMV).
- **Exportação:** tutor pode pedir todas as receitas dele em PDF zipado (right-to-portability).
- **Deleção:** tutor pode pedir, mas log de controlados (regulatório) sobrevive — anonimizado.
- **DPA:** contrato com Supabase + Resend (ambos têm DPAs públicos).
- **Privacy audit completo:** rodar `/privacy-audit` no Sprint 3 antes de mergear feature de receita controlada.

---

## 6. Segurança

- `.env` NUNCA no repo. Variáveis em Vercel Secrets + Supabase Secrets.
- RLS em todas as tabelas com PII.
- Edge Function pra geração de PDF (não no client — evita expor template).
- Rate limiting na rota pública `/p/:id` (Vercel ou middleware).
- Token de visualização do tutor: UUID + expiração 30 dias.
- Logs de acesso: quem viu quê e quando (Supabase audit log + tabela própria pra prescrições).

---

## 7. Testes

- **Unit:** Vitest pra utils (formatação CRMV, validação CPF, etc.).
- **Integration:** Supabase local + Vitest pra RLS policies.
- **E2E:** Playwright pra Fluxo A (criar receita end-to-end).
- **Coverage alvo:** 70%+ em features core (auth, prescription-create, icp-signature).

---

## 8. Performance / Escalabilidade

- Fase 1: até 1000 receitas/dia. Supabase free tier aguenta.
- Fase 2: 10k receitas/dia. Migrar pra Supabase Pro (~US$25/mês).
- PDF generation: não bloquear request do vet — gerar em Edge Function async, retornar URL temporária.
- Cache de bulário (autocomplete de medicamentos): Edge cache + revalidation diária.

---

## 9. Open questions pro Stage 11.5 (Registry pick)

1. Provedor ICP-Brasil — Bry / ITTRU / ValidCertificadora (avaliar via `/registry-pick`).
2. Bulário pra autocomplete — fonte oficial pública? Ou licenciar de terceiros?
3. Biblioteca de PDF — `@react-pdf/renderer` ou `pdfkit`? Ou Edge Function com Puppeteer?
4. WhatsApp envio — fase 2: API oficial Meta ou Twilio WA Business?

---

🤖 Technical Plan construído com o [AI Dev Operating System](https://github.com/lglucas/ai-dev-operating-system) — WIZARD Stage 11.
