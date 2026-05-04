// poll-progress — Edge Function (Deno runtime, Supabase)
// Roda a cada ~2min via Supabase Cron. LÊ a API pública do GitHub
// pra cada repo cadastrado, parseia [STAGE:X] dos commits recentes
// e atualiza positions/commit_log.
//
// SEM input externo. Aluno NÃO configura nada. Função só consome.
// Variáveis de ambiente esperadas (em Settings → Edge Functions → Secrets):
//   SUPABASE_URL              (auto)
//   SUPABASE_SERVICE_ROLE_KEY (auto, NUNCA exposto)
//   GITHUB_PAT                (manual, escopo public_repo)

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const STAGE_ORDER: Record<string, number> = {
  LARGADA: 0, IDEACAO: 1, DOCUMENTACAO: 2, PROTOTIPO: 3, CHEGADA: 4,
};
const VALID_STAGES = Object.keys(STAGE_ORDER);

const STAGE_TAG_RE = /\[STAGE:([A-Z_]+)\]/i;

// Heurística por arquivos: se o commit tocou X, sugere Y stage
function inferStageFromFiles(files: string[]): string | null {
  if (files.some(f => f.includes("prototype-lab/"))) return "PROTOTIPO";
  if (files.some(f => /docs\/business\/BUSINESS-PLAN/.test(f))) return "DOCUMENTACAO";
  if (files.some(f => /docs\/(product|technical)\//.test(f))) return "DOCUMENTACAO";
  if (files.some(f => /docs\/SPRINTS\.md/.test(f))) return "DOCUMENTACAO";
  if (files.some(f => f.includes("knowledge-base/"))) return "IDEACAO";
  return null;
}

function parseRepoUrl(url: string): { owner: string; repo: string } | null {
  const m = url.match(/github\.com\/([^/]+)\/([^/.]+)/);
  return m ? { owner: m[1], repo: m[2].replace(/\.git$/, "") } : null;
}

Deno.serve(async (_req: Request) => {
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const githubPat   = Deno.env.get("GITHUB_PAT")!;

  if (!supabaseUrl || !supabaseKey || !githubPat) {
    return new Response(JSON.stringify({ error: "missing env" }), { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data: repos, error: reposErr } = await supabase
    .from("repos")
    .select("id, student_id, repo_url, last_synced_at");

  if (reposErr || !repos) {
    return new Response(JSON.stringify({ error: reposErr?.message }), { status: 500 });
  }

  let processed = 0;
  let updated = 0;

  for (const repo of repos) {
    const parsed = parseRepoUrl(repo.repo_url);
    if (!parsed) continue;
    processed++;

    const since = repo.last_synced_at
      ? `&since=${encodeURIComponent(repo.last_synced_at)}`
      : "";
    const url = `https://api.github.com/repos/${parsed.owner}/${parsed.repo}/commits?per_page=20${since}`;

    const ghRes = await fetch(url, {
      headers: {
        Authorization: `token ${githubPat}`,
        Accept: "application/vnd.github+json",
      },
    });
    if (!ghRes.ok) continue;
    const commits: any[] = await ghRes.json();

    let bestStage: string | null = null;
    let bestRank = -1;

    for (const c of commits) {
      const sha = c.sha;
      const message = c.commit?.message || "";
      // Pula se já vimos
      const { count } = await supabase
        .from("commit_log")
        .select("*", { count: "exact", head: true })
        .eq("commit_sha", sha);
      if ((count ?? 0) > 0) continue;

      // 1. Tag explícita
      let stage: string | null = null;
      const m = message.match(STAGE_TAG_RE);
      if (m && VALID_STAGES.includes(m[1].toUpperCase())) {
        stage = m[1].toUpperCase();
      } else {
        // 2. Heurística por arquivos
        const fRes = await fetch(c.url, {
          headers: { Authorization: `token ${githubPat}`, Accept: "application/vnd.github+json" },
        });
        if (fRes.ok) {
          const detail = await fRes.json();
          const files = (detail.files || []).map((f: any) => f.filename || "");
          stage = inferStageFromFiles(files);
        }
      }

      await supabase.from("commit_log").insert({
        repo_id: repo.id,
        commit_sha: sha,
        commit_message: message.slice(0, 500),
        detected_stage: stage,
      });

      if (stage && STAGE_ORDER[stage] > bestRank) {
        bestRank = STAGE_ORDER[stage];
        bestStage = stage;
      }
    }

    if (bestStage) {
      // Pega posição atual; só avança (nunca volta)
      const { data: cur } = await supabase
        .from("positions")
        .select("stage")
        .eq("student_id", repo.student_id)
        .maybeSingle();
      const curRank = cur ? STAGE_ORDER[cur.stage] : -1;
      if (bestRank > curRank) {
        await supabase.from("positions").upsert({
          student_id: repo.student_id,
          stage: bestStage,
          updated_at: new Date().toISOString(),
        });
        updated++;
      }
    }

    await supabase.from("repos")
      .update({ last_synced_at: new Date().toISOString() })
      .eq("id", repo.id);
  }

  return new Response(JSON.stringify({ ok: true, processed, updated }), {
    headers: { "content-type": "application/json" },
  });
});
