# Prototype Lab — PetReceita

> Mocks HTML estáticos dos primeiros fluxos do produto. **NÃO é código de produção.** Serve pra:
> 1. Validar UI antes de codar com framework.
> 2. Mostrar nas demos das aulas do AI Dev OS.
> 3. Coletar feedback qualitativo de vets-piloto antes de Sprint 1.

---

## Mocks disponíveis

- [`login-mock.html`](login-mock.html) — Tela de login do vet (magic link).

## Mocks futuros (Sprint 1)

- `prescription-create-mock.html` — Fluxo A (criar receita).
- `prescription-public-mock.html` — Fluxo B (tutor abre receita).
- `prescription-history-mock.html` — Fluxo C (histórico).

## Como rodar

```bash
cd course/demo-repo/petreceita/prototype-lab
python3 -m http.server 8080
# ou
npx serve .
```

Abre `http://localhost:8080/login-mock.html`.

## Limitações dos mocks

- Sem backend real — formulários não persistem.
- Sem ICP — botão "assinar" só simula.
- Sem responsividade fina — apenas conceito visual.

## Quando virar produção

No Sprint 1, cada mock vira componente real em `src/features/`. O HTML estático é descartado.
