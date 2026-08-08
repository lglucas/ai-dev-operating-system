# Privacy audit rule

Any feature that collects, stores, processes, exports, or displays personal data must answer:

1. What personal data is involved?
2. Why is it needed?
3. Where is it stored?
4. Who can access it?
5. How is access controlled?
6. How long is it retained?
7. What logs are generated?
8. What happens if the user requests deletion/export?
9. Does this change require documentation, policy, or consent updates?

Do not merge personal-data changes without a privacy review.

## Publishing documents counts as processing

WIZARD stage 2.9 lets a project put its Business Plan and Pitch on a public URL. That is a personal-data decision, not only an editorial one. Before anything is published, answer:

1. **Are any personas traceable to a real person?** "Marina, 34, gerente de clínica em Porto Alegre" is personal data when Marina is someone you actually interviewed. Generalize, or get documented consent.
2. **Did the interviewees agree to be described publicly?** Consent to be interviewed is not consent to be published.
3. **Does the team section expose more than those people agreed to?** Names, photos, and roles are personal data too.
4. **Will the page have analytics?** Visitor tracking on a public page is personal-data collection and re-triggers all nine questions above.
5. **Can it be unpublished?** Not in practice — search engines, archives, and screenshots outlive the page. Treat publication as permanent.

The full redaction gate lives in `.claude/skills/pitch/SKILL.md` and the `PITCH.md` template.
