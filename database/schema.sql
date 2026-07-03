-- IT 부캐 찾기 MBTI 테스트 - Supabase 테이블 스키마
-- Supabase 대시보드의 SQL Editor에서 실행하세요.

-- 1) 결과 저장 테이블
create table if not exists public.mbti_results (
  id uuid primary key default gen_random_uuid(),
  mbti_type text not null check (char_length(mbti_type) = 4),
  answers jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists mbti_results_mbti_type_idx
  on public.mbti_results (mbti_type);

create index if not exists mbti_results_created_at_idx
  on public.mbti_results (created_at desc);

-- 2) RLS 활성화
alter table public.mbti_results enable row level security;

-- 3) 익명 사용자도 결과를 "적재"할 수 있도록 허용 (INSERT)
drop policy if exists "Allow public insert" on public.mbti_results;
create policy "Allow public insert"
  on public.mbti_results
  for insert
  to anon
  with check (true);

-- 4) 익명 사용자가 실시간 참여자 수 카운팅을 위해 "조회"할 수 있도록 허용 (SELECT)
drop policy if exists "Allow public read" on public.mbti_results;
create policy "Allow public read"
  on public.mbti_results
  for select
  to anon
  using (true);

-- 5) 메인 화면 실시간 카운터 배너를 위한 Realtime 발행 등록 (재실행해도 안전하도록 존재 여부 확인 후 등록)
do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'mbti_results'
  ) then
    alter publication supabase_realtime add table public.mbti_results;
  end if;
end $$;
