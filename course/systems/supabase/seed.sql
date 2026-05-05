-- seed.sql — Trilho do AI Dev OS
-- Aplicar APÓS schema.sql + policies.sql via Supabase SQL Editor.
-- Define quais emails são admin automaticamente — tanto retroativamente
-- (alunos já cadastrados) quanto em signups futuros.

-- ===== Lista de emails admin =====
-- EDITE ESTA LISTA conforme a turma. Cada email vira admin automático.
-- Mantenha em SQL como CONSTANT pra ficar versionado no Git.

-- Caso o aluno já exista (criado via signup do auth), promova retroativamente
update public.students
set is_admin = true
where email in (
  'contato@lucasgalvao.com.br'
  -- adicione mais emails aqui:
  -- , 'outro-instrutor@email.com'
  -- , 'co-founder@email.com'
);

-- ===== Trigger: auto-promote em signups futuros =====
-- Quando um novo student é criado via auth.users → handle_new_user trigger,
-- este trigger checa se o email está na lista admin e promove automaticamente.

create or replace function public.maybe_promote_admin()
returns trigger
language plpgsql
security definer
as $$
declare
  admin_emails text[] := array[
    'contato@lucasgalvao.com.br'
    -- adicione mais emails aqui (mesma lista acima):
    -- , 'outro-instrutor@email.com'
  ];
begin
  if NEW.email = any(admin_emails) then
    update public.students
    set is_admin = true
    where id = NEW.id;
  end if;
  return NEW;
end $$;

drop trigger if exists on_student_created_promote_admin on public.students;
create trigger on_student_created_promote_admin
  after insert on public.students
  for each row execute function public.maybe_promote_admin();

-- ===== Verificação =====
-- Após aplicar, rode esta query pra confirmar:
-- select email, is_admin from public.students where is_admin = true;
