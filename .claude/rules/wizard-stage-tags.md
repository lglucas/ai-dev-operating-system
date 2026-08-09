# Wizard stage tags (opt-in)

Convenção **opcional**: marque a fase do WIZARD no fim da mensagem de commit com `[STAGE:X]`. As 5 tags correspondem 1:1 às 5 fases do [`WIZARD.md`](../../WIZARD.md).

| Tag | Fase |
|---|---|
| `[STAGE:LARGADA]` | 1 — repo desacoplado e seu |
| `[STAGE:IDEACAO]` | 2 — pesquisa, red team, BP, Pitch |
| `[STAGE:PROTOTIPO]` | 3 — marca, cores, UI, UX |
| `[STAGE:DOCUMENTACAO]` | 4 — Brief, Technical Plan, roadmap |
| `[STAGE:CHEGADA]` | 5 — Sprint 1, deploy |

```text
feat(prototype): três direções visuais [STAGE:PROTOTIPO]
```

Permite que sistemas externos infiram progresso lendo o git. Quem ignora não perde nada — não há lint nem gate. Omita a tag em commits que não correspondem a uma fase (typo, fix de CI).

📖 **Detalhamento completo** — exemplos, fallback por arquivo modificado, quem consome, e por que as tags são cronológicas desde a v0.5.0: [`docs/wizard-stage-tags.md`](../../docs/wizard-stage-tags.md).
