-- ============================================================================
-- SunGene CMS — initial schema
-- Tables: inquiries, testimonials, case_studies, videos
-- RLS: anon can read published rows; only service_role can write (from admin UI)
-- ============================================================================

-- ─── 1. inquiries ───────────────────────────────────────────────────────────
-- Stores every form submission from the site (QuickQuote / full Contact /
-- Recommend form). Replaces the ephemeral data/inquiries.ndjson.
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  -- what kind of form was it
  type text not null,                   -- 'Contact' / 'Product Recommendation' / 'Quick Quote' / 'Lead Magnet' etc.
  source text,                          -- 'machine' / 'market' / 'industry' / 'resource' / 'homepage'
  context text,                         -- machine slug, country name, industry slug, etc.

  -- contact fields
  name text not null,
  email text not null,
  phone text,
  company text,
  country text,

  -- payload
  message text,
  target_output text,                   -- from QuickQuote
  extra jsonb,                          -- full raw form body for long-form inquiries

  -- meta
  page_url text,
  referer text,
  utm jsonb,                            -- {utm_source, utm_medium, utm_campaign, ...}
  ip text,
  user_agent text,
  language text,                        -- accept-language at submission time

  -- pipeline
  status text not null default 'new'    -- 'new' / 'contacted' / 'qualified' / 'quoted' / 'won' / 'lost' / 'spam'
    check (status in ('new', 'contacted', 'qualified', 'quoted', 'won', 'lost', 'spam')),
  notes text,                           -- internal sales notes
  contacted_at timestamptz,
  handled_by text,                      -- email of admin who handled it
  value_estimate_usd numeric,           -- optional deal size estimate
  lost_reason text
);

create index if not exists inquiries_created_at_idx on public.inquiries (created_at desc);
create index if not exists inquiries_status_idx on public.inquiries (status);
create index if not exists inquiries_source_idx on public.inquiries (source);
create index if not exists inquiries_context_idx on public.inquiries (context);

-- ─── 2. testimonials ────────────────────────────────────────────────────────
-- Real customer testimonials. Only "published=true" rows show on public pages
-- and feed Review + AggregateRating schema on machine pages.
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  -- author
  author_name text not null,
  author_role text,                     -- 'Production Manager', 'Owner', 'Procurement'
  author_company text,
  author_country text,                  -- 'Vietnam', 'Saudi Arabia', etc.
  author_photo_url text,

  -- content (English first, optional native)
  body_en text not null,
  body_native text,                     -- original language if translated
  body_native_lang text,                -- 'vi', 'ar', etc.

  rating smallint check (rating between 1 and 5),  -- 1-5 stars, nullable

  -- association (which page shows this)
  machine_slug text,                    -- 'pouch-packing-machine' etc.
  industry_slug text,                   -- 'coffee' etc.
  market_slug text,                     -- 'vietnam' etc.

  -- purchase metadata (helps credibility)
  purchase_year int,
  machine_model text,

  -- display
  position int default 0,
  published boolean not null default false,
  published_at timestamptz
);

create index if not exists testimonials_published_idx on public.testimonials (published) where published = true;
create index if not exists testimonials_machine_idx on public.testimonials (machine_slug) where published = true;
create index if not exists testimonials_industry_idx on public.testimonials (industry_slug) where published = true;
create index if not exists testimonials_market_idx on public.testimonials (market_slug) where published = true;

-- ─── 3. case_studies ────────────────────────────────────────────────────────
-- Long-form customer stories, each renders as /case-studies/[slug] with
-- CaseStudy schema.
create table if not exists public.case_studies (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  slug text unique not null,
  title text not null,
  summary text,

  -- client context
  client_type text,                     -- 'Coffee roaster', 'Spice exporter'
  country text,
  industry_slug text,
  machine_slug text,
  year int,

  -- 3-part story structure
  problem text,
  solution text,
  results text,

  -- media
  hero_image_url text,
  images jsonb default '[]'::jsonb,     -- array of { url, caption }
  video_id uuid,                        -- FK added after videos table (see alter below)

  -- display
  featured boolean default false,
  published boolean not null default false,
  published_at timestamptz,

  -- seo override
  meta_title text,
  meta_description text
);

create index if not exists case_studies_published_idx on public.case_studies (published) where published = true;
create index if not exists case_studies_machine_idx on public.case_studies (machine_slug) where published = true;
create index if not exists case_studies_industry_idx on public.case_studies (industry_slug) where published = true;

-- ─── 4. videos ──────────────────────────────────────────────────────────────
-- YouTube / Vimeo FAT videos. Feed VideoObject schema on machine pages.
-- Created BEFORE case_studies so the FK above works.
create table if not exists public.videos (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  title text not null,
  description text,

  -- association
  machine_slug text,                    -- 'pouch-packing-machine' etc.
  industry_slug text,

  -- video source
  platform text default 'youtube'       -- 'youtube' / 'vimeo'
    check (platform in ('youtube', 'vimeo')),
  external_id text not null,            -- YouTube video ID or Vimeo ID
  thumbnail_url text,
  duration_seconds int,

  upload_date date,

  -- display
  position int default 0,
  published boolean not null default false
);

create index if not exists videos_published_idx on public.videos (published) where published = true;
create index if not exists videos_machine_idx on public.videos (machine_slug) where published = true;

-- Move the FK reference so case_studies can point at videos (ordering fix).
-- Re-create case_studies with the FK now that videos exists.
alter table public.case_studies
  drop constraint if exists case_studies_video_id_fkey;
alter table public.case_studies
  add constraint case_studies_video_id_fkey
  foreign key (video_id) references public.videos(id) on delete set null;

-- ─── Updated-at triggers ────────────────────────────────────────────────────
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists inquiries_touch on public.inquiries;
create trigger inquiries_touch before update on public.inquiries
  for each row execute function public.touch_updated_at();

drop trigger if exists testimonials_touch on public.testimonials;
create trigger testimonials_touch before update on public.testimonials
  for each row execute function public.touch_updated_at();

drop trigger if exists case_studies_touch on public.case_studies;
create trigger case_studies_touch before update on public.case_studies
  for each row execute function public.touch_updated_at();

drop trigger if exists videos_touch on public.videos;
create trigger videos_touch before update on public.videos
  for each row execute function public.touch_updated_at();

-- ─── Row Level Security ────────────────────────────────────────────────────
alter table public.inquiries enable row level security;
alter table public.testimonials enable row level security;
alter table public.case_studies enable row level security;
alter table public.videos enable row level security;

-- INQUIRIES
-- Anyone can INSERT (the public form posts it). Only service_role reads/updates.
drop policy if exists "anon_insert_inquiries" on public.inquiries;
create policy "anon_insert_inquiries"
  on public.inquiries for insert
  to anon
  with check (true);

-- (No SELECT policy for anon — inquiries are private by default.
--  Admin UI uses the service_role key which bypasses RLS.)

-- TESTIMONIALS
drop policy if exists "anon_read_published_testimonials" on public.testimonials;
create policy "anon_read_published_testimonials"
  on public.testimonials for select
  to anon
  using (published = true);

-- CASE STUDIES
drop policy if exists "anon_read_published_case_studies" on public.case_studies;
create policy "anon_read_published_case_studies"
  on public.case_studies for select
  to anon
  using (published = true);

-- VIDEOS
drop policy if exists "anon_read_published_videos" on public.videos;
create policy "anon_read_published_videos"
  on public.videos for select
  to anon
  using (published = true);

-- ─── Dashboard view for admin analytics ─────────────────────────────────────
create or replace view public.inquiry_stats as
select
  date_trunc('day', created_at) as day,
  source,
  status,
  count(*) as count
from public.inquiries
group by 1, 2, 3
order by 1 desc;

-- ─── Initial publishable seed row (nothing — admin adds real data via UI) ──
-- Intentionally no seed rows. First testimonial / case study / video must be
-- added through the admin UI so the data is auditable.
