// app.js — Trilho do AI Dev OS (Sistemas 1 + 2)
// Single-page HTML, 3 modos via hash routing (#aluno, #painel, #admin).
// Backend: Supabase (auth + DB + Realtime).

const SUPABASE_URL = window.SUPABASE_URL || "https://your-project.supabase.co";
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || "your-anon-key";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
      const { data: { session } } = await supabase.auth.getSession();
      if (session) await this.loadUser(session);
      supabase.auth.onAuthStateChange((_event, session) => {
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
      const { data } = await supabase.from("students").select("*").eq("id", session.user.id).maybeSingle();
      this.user = data || { id: session.user.id, email: session.user.email, full_name: session.user.email };
      if (data?.repo_url) this.myRepoUrl = data.repo_url;
      await this.loadStudentData();
    },

    async signIn() {
      const { error } = await supabase.auth.signInWithOtp({ email: this.loginEmail });
      this.loginMessage = error ? `Erro: ${error.message}` : "Link mágico enviado. Confere o email.";
    },

    async signOut() { await supabase.auth.signOut(); },

    async saveRepo() {
      if (!this.myRepoUrl.startsWith("https://github.com/")) {
        this.repoMessage = "Tem que ser uma URL de github.com";
        return;
      }
      const { error } = await supabase.from("repos").upsert({
        student_id: this.user.id,
        repo_url: this.myRepoUrl,
      });
      this.repoMessage = error ? `Erro: ${error.message}` : "Salvo. Próximo commit já entra no carrinho.";
    },

    async loadStudentData() {
      // Repos atribuídos pra atacar
      const { data: targets } = await supabase
        .from("assignments")
        .select("id, target_repo:repos(repo_url)")
        .eq("attacker_id", this.user.id);
      this.myAttackTargets = (targets || []).map(t => ({ id: t.id, repo_url: t.target_repo.repo_url }));

      // Ataques recebidos (anônimos)
      const { data: received } = await supabase
        .from("attacks")
        .select("id, message")
        .eq("target_student_id", this.user.id);
      this.attacksReceived = received || [];
    },

    async loadCars() {
      const { data } = await supabase
        .from("positions_view")
        .select("student_id, full_name, avatar_url, stage");
      this.cars = data || [];
      const today = new Date().toISOString().slice(0, 10);
      const { count } = await supabase
        .from("commit_log")
        .select("*", { count: "exact", head: true })
        .gte("seen_at", today);
      this.commitsToday = count || 0;
    },

    get carsByStage() {
      const map = Object.fromEntries(STAGES.map(s => [s.key, []]));
      this.cars.forEach(c => { if (map[c.stage]) map[c.stage].push(c); });
      return map;
    },

    get totalCars() { return this.cars.length; },

    subscribePositions() {
      supabase
        .channel("positions-changes")
        .on("postgres_changes", { event: "*", schema: "public", table: "positions" }, () => this.loadCars())
        .subscribe();
    },

    async sortAssignments() {
      const { error } = await supabase.rpc("sort_red_team_assignments");
      this.adminMessage = error ? `Erro: ${error.message}` : "Sorteio feito. Emails enviados.";
    },

    async sortGallery() {
      const { data, error } = await supabase.rpc("sort_gallery_picks", { pick_count: 3 });
      this.galleryPicks = error ? [] : (data || []);
    },

    async forceAdvance() {
      if (!this.forceStudentId) return;
      const { error } = await supabase.from("positions").upsert({
        student_id: this.forceStudentId,
        stage: this.forceStage,
        updated_at: new Date().toISOString(),
      });
      this.adminMessage = error ? `Erro: ${error.message}` : "Carrinho avançado.";
    },
  }));
});
