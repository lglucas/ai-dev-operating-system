-- schema.sql — Trilho do AI Dev OS
-- Aplicar uma vez via Supabase SQL Editor (Dashboard) ou supabase db push.

-- Enum dos 5 estágios do WIZARD
do $$
begin
  if not exists (select 1 from pg_type where typname = 'stage_enum') then
    create type stage_enum as enum (
      'LARGADA', 'IDEACAO', 'DOCUMENTACAO', 'PROTOTIPO', 'CHEGADA'
    );
  end if;
end $$;

-- students: extends auth.users com metadados públicos
create table if not exists public.students (
  id uuid primary key references auth.users(id) on delete cascade,
  github_login text,
  email text not null,
  full_name text,
  avatar_url text,
  is_admin boolean default false,
  registered_at timestamptz default now()
);

-- repos: 1 repo por aluno (pode trocar)
create table if not exists public.repos (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null unique references public.students(id) on delete cascade,
  repo_url text not null,
  last_synced_at timestamptz,
  created_at timestamptz default now()
);

-- positions: posição atual de cada carrinho
create table if not exists public.positions (
  student_id uuid primary key references public.students(id) on delete cascade,
  stage stage_enum not null default 'LARGADA',
  updated_at timestamptz default now()
);

-- assignments: red team — quem ataca quem
create table if not exists public.assignments (
  id uuid primary key default gen_random_uuid(),
  attacker_id uuid not null references public.students(id) on delete cascade,
  target_repo_id uuid not null references public.repos(id) on delete cascade,
  batch_id uuid not null,
  created_at timestamptz default now()
);
create index if not exists idx_assignments_attacker on public.assignments(attacker_id);
create index if not exists idx_assignments_batch on public.assignments(batch_id);

-- attacks: ataques recebidos (anônimos do ponto de vista do alvo)
create table if not exists public.attacks (
  id uuid primary key default gen_random_uuid(),
  attacker_id uuid not null references public.students(id) on delete cascade,
  target_student_id uuid not null references public.students(id) on delete cascade,
  message text not null,
  created_at timestamptz default now()
);
create index if not exists idx_attacks_target on public.attacks(target_student_id);

-- commit_log: registro de commits vistos pelo poller (auditoria + métrica)
create table if not exists public.commit_log (
  id uuid primary key default gen_random_uuid(),
  repo_id uuid not null references public.repos(id) on delete cascade,
  commit_sha text not null unique,
  commit_message text,
  detected_stage stage_enum,
  seen_at timestamptz default now()
);
create index if not exists idx_commit_log_repo on public.commit_log(repo_id);

-- positions_view: join público pro painel (estudante + posição + avatar)
create or replace view public.positions_view as
  select
    p.student_id,
    s.full_name,
    s.avatar_url,
    s.github_login,
    p.stage,
    p.updated_at
  from public.positions p
  join public.students s on s.id = p.student_id;

-- RPC: sortear assignments (red team)
create or replace function public.sort_red_team_assignments()
returns void
language plpgsql
security definer
as $$
declare
  v_batch uuid := gen_random_uuid();
  v_rec record;
  v_student_count int;
begin
  -- Limpa assignments antigos pra esse batch (se rodar de novo)
  delete from public.assignments where batch_id = v_batch;

  select count(*) into v_student_count from public.repos;
  if v_student_count < 3 then
    raise exception 'precisam ter pelo menos 3 repos cadastrados pra sortear';
  end if;

  -- Pra cada aluno com repo, atribui 2 outros aleatórios (ninguém ataca o próprio)
  for v_rec in select student_id from public.repos loop
    insert into public.assignments (attacker_id, target_repo_id, batch_id)
    select v_rec.student_id, r.id, v_batch
    from public.repos r
    where r.student_id != v_rec.student_id
    order by random()
    limit 2;
  end loop;
end $$;

-- RPC: sortear N alunos pra Galeria do Red Team
create or replace function public.sort_gallery_picks(pick_count int default 3)
returns table(id uuid, full_name text)
language sql
security definer
as $$
  select s.id, s.full_name
  from public.students s
  where s.is_admin = false
  order by random()
  limit pick_count;
$$;
