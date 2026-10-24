create extension if not exists pgcrypto;

create table if not exists public.portfolio_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null check (event_type in ('contact_click', 'cta_click', 'project_open')),
  target text not null check (char_length(target) between 1 and 80),
  location text not null check (char_length(location) between 1 and 80),
  path text not null check (char_length(path) between 1 and 250),
  referrer_host text check (referrer_host is null or char_length(referrer_host) <= 180),
  created_at timestamptz not null default now()
);

create index if not exists portfolio_events_created_at_idx
  on public.portfolio_events (created_at desc);

create index if not exists portfolio_events_event_type_idx
  on public.portfolio_events (event_type);

alter table public.portfolio_events enable row level security;

revoke all on table public.portfolio_events from anon, authenticated;
grant insert on table public.portfolio_events to anon, authenticated;

drop policy if exists "public can insert portfolio events" on public.portfolio_events;

create policy "public can insert portfolio events"
on public.portfolio_events
for insert
to anon, authenticated
with check (true);
