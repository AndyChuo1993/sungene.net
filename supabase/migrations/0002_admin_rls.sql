-- ============================================================================
-- Admin RLS policies — allow Supabase-authenticated users full CRUD on CMS tables
-- ============================================================================
-- Without this, the /management/* client-side pages (which use the anon key
-- client plus a Supabase Auth session) can't read or write any CMS rows because
-- the only existing policies grant `anon` INSERT on inquiries and SELECT-where-
-- published on testimonials/case_studies/videos. Authenticated admins need full
-- access across all four tables.
--
-- Since we deliberately only have one user (the admin) in Supabase Auth, a
-- "any authenticated user = admin" model is safe here. When we later add more
-- users, replace `to authenticated` with a role check (e.g. `app_metadata->>'role' = 'admin'`).

-- INQUIRIES
drop policy if exists "admin_all_inquiries" on public.inquiries;
create policy "admin_all_inquiries"
  on public.inquiries for all
  to authenticated
  using (true)
  with check (true);

-- TESTIMONIALS
drop policy if exists "admin_all_testimonials" on public.testimonials;
create policy "admin_all_testimonials"
  on public.testimonials for all
  to authenticated
  using (true)
  with check (true);

-- CASE STUDIES
drop policy if exists "admin_all_case_studies" on public.case_studies;
create policy "admin_all_case_studies"
  on public.case_studies for all
  to authenticated
  using (true)
  with check (true);

-- VIDEOS
drop policy if exists "admin_all_videos" on public.videos;
create policy "admin_all_videos"
  on public.videos for all
  to authenticated
  using (true)
  with check (true);
