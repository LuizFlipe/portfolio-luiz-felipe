-- Cliques de contato por canal
select
  target,
  count(*) as clicks
from public.portfolio_events
where event_type = 'contact_click'
group by target
order by clicks desc;

-- Cliques de contato por área do site
select
  location,
  target,
  count(*) as clicks
from public.portfolio_events
where event_type = 'contact_click'
group by location, target
order by clicks desc;

-- Cases mais abertos
select
  target as project,
  count(*) as opens
from public.portfolio_events
where event_type = 'project_open'
group by target
order by opens desc;

-- Eventos por dia nos últimos 30 dias
select
  date_trunc('day', created_at) as day,
  event_type,
  count(*) as total
from public.portfolio_events
where created_at >= now() - interval '30 days'
group by day, event_type
order by day desc, event_type;

-- Últimos eventos registrados
select
  created_at,
  event_type,
  target,
  location,
  path,
  referrer_host
from public.portfolio_events
order by created_at desc
limit 100;
