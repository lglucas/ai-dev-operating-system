# `course/` — Vertical Educacional do AI Dev OS

> ⚠️ **Esta pasta NÃO faz parte do AI Dev Operating System operacional.**
>
> Se você usou "Use this template" pra começar SEU projeto: pode **ignorar ou apagar** esta pasta inteira sem afetar nada do OS. Ou pode mantê-la como referência didática — fica a seu critério.

---

## O que é isto

`course/` é a **vertical educacional** do AI Dev OS: um workshop de 3 encontros aplicando o método **Experience Learning** da Perestroika, mais os 2 sistemas que dão suporte a ele.

O conteúdo desta pasta é, literalmente, a **prova viva** de que o método funciona — porque tudo aqui (slides, scripts, sistemas web) é construído usando o próprio AI Dev OS como trilho.

---

## Princípio de separação

| Camada | O que é | Onde vive |
|---|---|---|
| **AI Dev OS (o produto principal)** | Trilho operacional — WIZARD, regras, skills, registry, agents — pronto pra qualquer projeto. | Raiz do repo (todo o resto fora desta pasta). |
| **Curso** | Workshop educacional construído sobre o OS. Tem TESE, TAGLINE, Frameworks de Aula, Trecos. | Esta pasta (`course/`). |
| **Sistemas do curso** | 2 web apps que dão suporte didático ao curso (Trilho do Red Team + Grand Prix do Trilho). | `course/systems/`. |

A separação é proposital. Quem clona o OS pra construir um SaaS **não deve confundir** material didático com material operacional. Quem chega no curso **não deve precisar** entender todo o OS antes.

---

## Estrutura

```
course/
├── README.md                       (este arquivo)
├── CHANGELOG-COURSE.md             (evolução do desenho do curso, v3.0 → v3.3)
│
├── content/                        (material das aulas)
│   ├── shared/
│   │   └── curso-overview.md       (TESE, TAGLINE, ARCO global)
│   ├── aula-1-fundacao/            (Tese: Gundam; Treco: Pó de Diamante / Pó de Fome)
│   ├── aula-2-construcao/          (Tese: AI sem contexto = sandbox; Tríade)
│   └── aula-3-soberania/           (Tese: submarino nuclear, não jangada)
│
├── systems/                        (web apps de apoio)
│   ├── trilho-red-team/            (Sistema 1 — sorteio de duplas pra red team)
│   └── grand-prix/                 (Sistema 2 — painel ao vivo dos carrinhos)
│
├── videos/
│   └── INDEX.md                    (futuros vídeos do YouTube)
│
└── sprints/
    └── sprint-0-fundacao.md        (sprint que constrói curso + sistemas)
```

---

## Easter egg no OS principal

A convenção de tags de commit `[STAGE:LARGADA|IDEACAO|DOCUMENTACAO|PROTOTIPO|CHEGADA]` (que o Sistema 2 lê pra mover os carrinhos) está documentada em `.claude/rules/wizard-stage-tags.md` no OS principal. Por quê? Porque é uma convenção **opt-in** que pode ser útil pra qualquer pessoa que quiser rastrear progresso do WIZARD em commits — mesmo sem fazer o curso.

Quem ignora não perde nada. Quem usa, ganha rastreabilidade automática.

---

## Para usar este material

- **Vai dar o curso?** Comece por [`content/shared/curso-overview.md`](content/shared/curso-overview.md) e depois leia cada `aula-X/README.md` em sequência.
- **Quer só assistir?** Os vídeos do YouTube serão indexados em [`videos/INDEX.md`](videos/INDEX.md) à medida que forem publicados.
- **Quer construir os sistemas?** O Sprint 0 ([`sprints/sprint-0-fundacao.md`](sprints/sprint-0-fundacao.md)) tem o roadmap completo.

---

## Por que isto está dentro do mesmo repo?

Três razões:

1. **Versionamento conjunto** — o curso ensina o método na versão atual do OS. Se o OS muda, o curso muda junto. Mesmo histórico Git, mesmas releases.
2. **Prova viva** — quem chega no repo do AI Dev OS vê não só a teoria (regras, WIZARD, skills) mas a prática (curso aplicando tudo isso). Auto-evidência.
3. **Open Source consistente** — o método Experience Learning da Perestroika é open source. Nosso curso aplicando o método também é. O combo aumenta o impacto do compartilhamento.

Mas a separação visual e estrutural deixa claro que são **duas coisas diferentes**.

---

## Para quem clona o template

Se você usou "Use this template" e quer manter o repo enxuto:

```bash
# Apagar a pasta de curso (zero impacto no OS):
rm -rf course/
```

Ou mantenha — fica como referência viva do método em ação.

---

## Licença

Mesma licença do AI Dev OS principal (MIT). Métodos pedagógicos referenciados (Experience Learning) são open source da Perestroika sob Creative Commons Attribution-ShareAlike 4.0 — ver [`content/shared/curso-overview.md`](content/shared/curso-overview.md) para créditos.
