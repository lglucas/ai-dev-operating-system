// mock-data.js — popula 8 carrinhos fake e simula movimento aleatório.
// Carregado pelo index.html SOMENTE quando URL tem ?mock=1.
// Uso: abrir local sem Supabase pra ver o painel rodando.

(function () {
  const STAGES = ["LARGADA", "IDEACAO", "DOCUMENTACAO", "PROTOTIPO", "CHEGADA"];

  const FAKE_STUDENTS = [
    { student_id: "1", full_name: "Maria Silva",   avatar_url: "https://github.com/torvalds.png",   stage: "DOCUMENTACAO" },
    { student_id: "2", full_name: "João Santos",   avatar_url: "https://github.com/gaearon.png",     stage: "IDEACAO" },
    { student_id: "3", full_name: "Ana Costa",     avatar_url: "https://github.com/sindresorhus.png", stage: "PROTOTIPO" },
    { student_id: "4", full_name: "Léo Almeida",   avatar_url: "https://github.com/yyx990803.png",   stage: "DOCUMENTACAO" },
    { student_id: "5", full_name: "Carla Mendes",  avatar_url: "https://github.com/levelsio.png",    stage: "PROTOTIPO" },
    { student_id: "6", full_name: "Bruno Carvalho", avatar_url: "https://github.com/tj.png",         stage: "CHEGADA" },
    { student_id: "7", full_name: "Helena Dias",   avatar_url: "https://github.com/addyosmani.png",  stage: "LARGADA" },
    { student_id: "8", full_name: "Renato Pires",  avatar_url: "https://github.com/jashkenas.png",   stage: "IDEACAO" },
  ];

  const STATE = {
    cars: [...FAKE_STUDENTS],
    commits: 47,
    listeners: [],
  };

  // Faz um carrinho aleatório avançar uma lane a cada 6s
  setInterval(() => {
    const movable = STATE.cars.filter(c => STAGES.indexOf(c.stage) < STAGES.length - 1);
    if (movable.length === 0) return;
    const car = movable[Math.floor(Math.random() * movable.length)];
    const oldStage = car.stage;
    car.stage = STAGES[STAGES.indexOf(oldStage) + 1];
    STATE.commits++;
    console.log(`[mock] ${car.full_name}: ${oldStage} → ${car.stage}`);
    STATE.listeners.forEach(fn => fn());
  }, 6000);

  // Mock do supabase client — só os métodos que app.js usa
  const chain = (resolveValue) => ({
    select: () => chain(resolveValue),
    eq: () => chain(resolveValue),
    gte: () => chain(resolveValue),
    maybeSingle: () => Promise.resolve(resolveValue),
    upsert: () => Promise.resolve({ error: null }),
    insert: () => Promise.resolve({ error: null }),
    update: () => chain({ data: null, error: null }),
    delete: () => Promise.resolve({ error: null }),
    then: (cb) => Promise.resolve(resolveValue).then(cb),
  });

  window.MockSupabase = {
    from(table) {
      if (table === "positions_view") {
        return {
          select: () => Promise.resolve({ data: STATE.cars, error: null }),
        };
      }
      if (table === "commit_log") {
        return {
          select: (_, opts) => {
            if (opts?.count === "exact") {
              return {
                gte: () => Promise.resolve({ count: STATE.commits, error: null }),
              };
            }
            return Promise.resolve({ data: [], error: null });
          },
        };
      }
      if (table === "students" || table === "repos" || table === "assignments" || table === "attacks") {
        return chain({ data: null, error: null });
      }
      return chain({ data: [], error: null });
    },
    auth: {
      getSession: () => Promise.resolve({ data: { session: null } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe() {} } } }),
      signInWithOtp: () => Promise.resolve({ error: null }),
      signOut: () => Promise.resolve({ error: null }),
    },
    channel() {
      return {
        on: function () { return this; },
        subscribe: function () {
          // simula realtime: cada update no STATE re-dispara load
          STATE.listeners.push(() => {
            // gatilho do callback de mudança em positions
            const evt = new CustomEvent("mock-positions-updated");
            window.dispatchEvent(evt);
          });
          return this;
        },
      };
    },
    rpc: () => Promise.resolve({ data: [], error: null }),
  };

  // Avisa o app.js pra recarregar quando mock mudar
  window.addEventListener("mock-positions-updated", () => {
    if (window.Alpine) {
      const el = document.querySelector("[x-data='appState']");
      if (el && el._x_dataStack) {
        const store = el._x_dataStack[0];
        if (store && store.loadCars) store.loadCars();
      }
    }
  });

  console.log("🎭 Mock mode ativo — 8 carrinhos fake, movimento a cada 6s");
})();
