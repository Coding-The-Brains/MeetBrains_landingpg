create extension if not exists pgcrypto;

create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,
  created_at timestamptz not null default now()
);

alter table public.waitlist_signups enable row level security;

create policy "No direct client access to waitlist"
on public.waitlist_signups
for all
to public
using (false)
with check (false);
