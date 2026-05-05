-- policies.sql — Row-Level Security do Trilho do AI Dev OS
-- Aplicar APÓS schema.sql. Princípio: ANON_KEY no HTML é seguro porque RLS bloqueia escrita não-autorizada.

-- Habilita RLS em todas as tabelas
alter table public.students    enable row level security;
alter table public.repos       enable row level security;
alter table public.positions   enable row level security;
alter table public.assignments enable row level security;
alter table public.attacks     enable row level security;
alter table public.commit_log  enable row level security;

-- ===== students =====
-- Qualquer um autenticado pode ler todos os students (pra mostrar no painel)
create policy "students readable by authenticated"
  on public.students for select
  to authenticated
  using (true);

-- Aluno só pode atualizar seus próprios dados
create policy "student updates self only"
  on public.students for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Aluno cria próprio registro no signup (trigger faz upsert no auth.users)
create policy "student inserts self only"
  on public.students for insert
  to authenticated
  with check (auth.uid() = id);

-- ===== repos =====
-- Qualquer autenticado pode ler todos os repos (pra red team ver o atribuído)
create policy "repos readable by authenticated"
  on public.repos for select
  to authenticated
  using (true);

-- Aluno só pode upsert do próprio repo
create policy "student manages own repo"
  on public.repos for all
  to authenticated
  using (student_id = auth.uid())
  with check (student_id = auth.uid());

-- ===== positions =====
-- Qualquer um (anon inclusive) lê posições — painel é público
create policy "positions readable by anyone"
  on public.positions for select
  to anon, authenticated
  using (true);

-- Apenas service_role escreve posições (poller via Edge Function + admin force)
-- Sem policy de insert/update pra authenticated/anon = bloqueado por padrão.

-- ===== assignments =====
-- Aluno lê apenas as assignments onde ele é o attacker (não vê quem ataca quem mais)
create policy "assignments readable by attacker"
  on public.assignments for select
  to authenticated
  using (attacker_id = auth.uid());

-- Apenas service_role escreve (RPC sort_red_team_assignments roda como definer).

-- ===== attacks =====
-- Aluno lê apenas ataques RECEBIDOS (não vê quem mandou — anônimo)
create policy "attacks readable by target"
  on public.attacks for select
  to authenticated
  using (target_student_id = auth.uid());

-- Aluno escreve ataques DESDE QUE seja o attacker e exista assignment
create policy "attacks written by valid attacker"
  on public.attacks for insert
  to authenticated
  with check (
    attacker_id = auth.uid()
    and exists (
      select 1 from public.assignments a
      join public.repos r on r.id = a.target_repo_id
      where a.attacker_id = auth.uid()
        and r.student_id = attacks.target_student_id
    )
  );

-- ===== commit_log =====
-- Leitura pública pra estatística do painel (count)
create policy "commit_log readable by anyone"
  on public.commit_log for select
  to anon, authenticated
  using (true);

-- Apenas service_role escreve (poller).

-- ===== Trigger: cria student row no signup =====
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into public.students (id, email, full_name, avatar_url, github_login)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.email),
    new.raw_user_meta_data->>'avatar_url',
    new.raw_user_meta_data->>'user_name'
  )
  on conflict (id) do nothing;
  -- também cria position inicial em LARGADA
  insert into public.positions (student_id, stage)
  values (new.id, 'LARGADA')
  on conflict (student_id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
