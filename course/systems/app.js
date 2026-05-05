// app.js — Trilho do AI Dev OS (Sistemas 1 + 2)
// Single-page HTML, 3 modos via hash routing (#aluno, #painel, #admin).
// Backend: Supabase (auth + DB + Realtime). Modo mock disponível via ?mock=1.

const MOCK_MODE = new URLSearchParams(window.location.search).has("mock");

const SUPABASE_URL = window.SUPABASE_URL || "https://your-project.supabase.co";
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || "your-anon-key";

// IMPORTANT: nome 'supabase' colide com window.supabase (UMD do SDK).
// Por isso usamos 'db' como nome local.
const db = MOCK_MODE
  ? window.MockSupabase
  : window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const STAGES = [
  { key: "LARGADA", label: "Largada", icon: "🏁" },
  { key: "IDEACAO", label: "Ideação", icon: "🧠" },
  { key: "DOCUMENTACAO", label: "Documentação", icon: "📝" },
  { key: "PROTOTIPO", label: "Protótipo", icon: "🛠" },
  { key: "CHEGADA", label: "Chegada", icon: "🏆" },
];

document.addEventListener("alpine:init", () => {
  Alpine.data("appState", () => ({
    mode: "aluno",
    user: null,
    loginEmail: "",
    loginMessage: "",
    myRepoUrl: "",
    repoMessage: "",
    myAttackTargets: [],
    attacksReceived: [],
    allStudents: [],
    cars: [],
    commitsToday: 0,
    galleryPicks: [],
    adminMessage: "",
    forceStudentId: "",
    forceStage: "LARGADA",
    stages: STAGES,

    async init() {
      this.handleHashRoute();
      window.addEventListener("hashchange", () => this.handleHashRoute());
      const { data: { session } } = await db.auth.getSession();
      if (session) await this.loadUser(session);
      db.auth.onAuthStateChange((_event, session) => {
        if (session) this.loadUser(session);
        else this.user = null;
      });
      this.subscribePositions();
      await this.loadCars();
    },

    handleHashRoute() {
      const hash = window.location.hash.replace("#", "") || "aluno";
      this.mode = ["aluno", "painel", "admin"].includes(hash) ? hash : "aluno";
    },

    async loadUser(session) {
      const { data } = await db.from("students").select("*").eq("id", session.user.id).maybeSingle();
      this.user = data || { id: session.user.id, email: session.user.email, full_name: session.user.email };
      if (data?.repo_url) this.myRepoUrl = data.repo_url;
      await this.loadStudentData();
    },

    async signIn() {
      const { error } = await db.auth.signInWithOtp({ email: this.loginEmail });
      this.loginMessage = error ? `Erro: ${error.message}` : "Link mágico enviado. Confere o email.";
    },

    async signOut() { await db.auth.signOut(); },

    async saveRepo() {
      if (!this.myRepoUrl.startsWith("https://github.com/")) {
        this.repoMessage = "Tem que ser uma URL de github.com";
        return;
      }
      const { error } = await db.from("repos").upsert({
        student_id: this.user.id,
        repo_url: this.myRepoUrl,
      });
      this.repoMessage = error ? `Erro: ${error.message}` : "Salvo. Próximo commit já entra no carrinho.";
    },

    async loadStudentData() {
      // Repos atribuídos pra atacar
      const { data: targets } = await db
        .from("assignments")
        .select("id, target_repo:repos(repo_url)")
        .eq("attacker_id", this.user.id);
      this.myAttackTargets = (targets || []).map(t => ({ id: t.id, repo_url: t.target_repo.repo_url }));

      // Ataques recebidos (anônimos)
      const { data: received } = await db
        .from("attacks")
        .select("id, message")
        .eq("target_student_id", this.user.id);
      this.attacksReceived = received || [];
    },

    async loadCars() {
      console.log("[debug] loadCars called");
      const result = await db
        .from("positions_view")
        .select("student_id, full_name, avatar_url, stage");
      console.log("[debug] positions_view result:", result);
      const newCars = (result && result.data) || [];
      console.log("[debug] newCars count:", newCars.length, newCars);
      // Detecta mudanças e anima
      this.animateCarTransitions(this.cars, newCars);
      this.cars = newCars;
      const today = new Date().toISOString().slice(0, 10);
      try {
        const countResult = await db
          .from("commit_log")
          .select("*", { count: "exact", head: true })
          .gte("seen_at", today);
        this.commitsToday = (countResult && countResult.count) || 0;
      } catch (e) {
        console.warn("[debug] commit_log count failed:", e);
        this.commitsToday = 0;
      }
      console.log("[debug] after assign, this.cars:", this.cars.length);
    },

    animateCarTransitions(oldCars, newCars) {
      if (!window.gsap) return;
      // Para cada carrinho que MUDOU de lane, dispara animação curta + flash
      oldCars.forEach(old => {
        const next = newCars.find(n => n.student_id === old.student_id);
        if (next && next.stage !== old.stage) {
          // Aguarda re-render (próximo tick), depois anima entrada
          setTimeout(() => {
            const el = document.querySelector(
              `[data-car-id="${next.student_id}"]`
            );
            if (!el) return;
            window.gsap.fromTo(el,
              { scale: 0.3, opacity: 0, x: -200, rotate: -45 },
              { scale: 1, opacity: 1, x: 0, rotate: 0, duration: 0.8, ease: "back.out(1.7)" }
            );
            // Flash gold + shadow
            window.gsap.fromTo(el,
              { boxShadow: "0 0 0 0 rgba(240,185,11,1)" },
              { boxShadow: "0 0 30px 10px rgba(240,185,11,0)", duration: 1.2 }
            );
            // Toca som de bandeirada se chegou na CHEGADA
            if (next.stage === "CHEGADA") this.playFinishSound(next.full_name);
          }, 50);
        }
      });
      // Carrinhos novos (não existiam antes) — animação de entrada
      newCars.forEach(n => {
        const wasThere = oldCars.find(o => o.student_id === n.student_id);
        if (!wasThere) {
          setTimeout(() => {
            const el = document.querySelector(`[data-car-id="${n.student_id}"]`);
            if (!el) return;
            window.gsap.fromTo(el,
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)" }
            );
          }, 50);
        }
      });
    },

    playFinishSound(name) {
      // Som de bandeirada — beep simples via WebAudio (sem arquivo externo)
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = "square";
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.setValueAtTime(1320, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        osc.start(); osc.stop(ctx.currentTime + 0.5);
      } catch (_) { /* navegador sem audio context — silencioso */ }
      console.log(`🏁 ${name} cruzou a CHEGADA!`);
    },

    get totalCars() { return this.cars.length; },

    subscribePositions() {
      db
        .channel("positions-changes")
        .on("postgres_changes", { event: "*", schema: "public", table: "positions" }, () => this.loadCars())
        .subscribe();
    },

    async sortAssignments() {
      const { error } = await db.rpc("sort_red_team_assignments");
      this.adminMessage = error ? `Erro: ${error.message}` : "Sorteio feito. Emails enviados.";
    },

    async sortGallery() {
      const { data, error } = await db.rpc("sort_gallery_picks", { pick_count: 3 });
      this.galleryPicks = error ? [] : (data || []);
    },

    async forceAdvance() {
      if (!this.forceStudentId) return;
      const { error } = await db.from("positions").upsert({
        student_id: this.forceStudentId,
        stage: this.forceStage,
        updated_at: new Date().toISOString(),
      });
      this.adminMessage = error ? `Erro: ${error.message}` : "Carrinho avançado.";
    },
  }));
});
