# Sistema 1 — Trilho do Red Team

> Web app de apoio ao curso. Coleta links de repos dos alunos, sorteia duplas anônimas, distribui repos pra red team entre Aulas 2 e 3.

---

## Por que existe

Na Aula 2, cada aluno gera 6 documentos profissionais sobre o projeto dele. Pra cada projeto se beneficiar de um red team externo (sem ego, sem pena), o sistema sorteia anonimamente. Cada aluno vira atacante de 2 projetos que não conhece. Na Aula 3, a Galeria do Red Team apresenta os ataques mais úteis.

## O que faz

1. **Cadastro** — aluno se loga (Magic Link via email + avatar GitHub).
2. **Upload do repo** — aluno cola o link do repo público dele.
3. **Sorteio** — após deadline, sistema atribui 2 repos por aluno (anônimos, ninguém recebe o próprio).
4. **Notificação** — email com os 2 links + instruções de red team.
5. **Galeria** — painel admin sorteia 3 alunos pra apresentar na Aula 3.

## Stack (revisada v0.4.6)

- **HTML estático** (`course/systems/index.html`) — página única, modo `#aluno` + `#admin` via hash routing. Compartilha código com o Sistema 2 (Grand Prix do Trilho).
- **Vanilla JS + Alpine.js** (CDN) — interatividade leve sem bundling.
- **Supabase JS SDK** (CDN) — auth Magic Link + DB direto do browser.
- **Email de notificação:** Magic Link já usa email built-in da Supabase Auth. Para o email pós-sorteio (com os 2 repos atribuídos), usar **Supabase Edge Function `send-assignment-email`** chamando Resend (ou simplesmente mostrar in-app).
- **Hosting:** GitHub Pages (`course/systems/` servido como site estático).

## Etiqueta de origem (canto inferior direito)

Visível em todas as telas:

```
🛤  CONSTRUÍDO COM AI DEV OS
Skills:    registry-pick, processize, sprint-management
Stack:     HTML + Alpine.js + GSAP + Supabase
Hosting:   GitHub Pages (zero infra)
Tempo:     ~5h de build
Custo:     R$ 0/mês (free tiers)
[ver no GitHub →]
```

Componente HTML reutilizável (vira pack do registry).

## Plano B (caso sistema falhe na aula)

- Google Form pra upload do repo.
- Planilha + script de sorteio manual.
- Email manual com lista atribuída.

Documentado em `PLANO-B.md` (a criar no Sprint 0).

## Detalhes completos

Ver Sprint 0: [`../../sprints/sprint-0-fundacao.md`](../../sprints/sprint-0-fundacao.md), Entregável B.
