/**
 * Hand-written Database type for Supabase client typing.
 * Matches supabase/migrations/0001_init.sql exactly.
 *
 * If the schema changes, update this file too. A proper setup would use
 * `supabase gen types typescript` but this is simpler for a 4-table project.
 */

export type InquiryStatus = 'new' | 'contacted' | 'qualified' | 'quoted' | 'won' | 'lost' | 'spam'

export type Inquiry = {
  id: string
  created_at: string
  updated_at: string
  type: string
  source: string | null
  context: string | null
  name: string
  email: string
  phone: string | null
  company: string | null
  country: string | null
  message: string | null
  target_output: string | null
  extra: Record<string, unknown> | null
  page_url: string | null
  referer: string | null
  utm: Record<string, string> | null
  ip: string | null
  user_agent: string | null
  language: string | null
  status: InquiryStatus
  notes: string | null
  contacted_at: string | null
  handled_by: string | null
  value_estimate_usd: number | null
  lost_reason: string | null
}

export type InquiryInsert = Omit<Inquiry, 'id' | 'created_at' | 'updated_at' | 'status'> & {
  id?: string
  status?: InquiryStatus
}

export type Testimonial = {
  id: string
  created_at: string
  updated_at: string
  author_name: string
  author_role: string | null
  author_company: string | null
  author_country: string | null
  author_photo_url: string | null
  body_en: string
  body_native: string | null
  body_native_lang: string | null
  rating: number | null
  machine_slug: string | null
  industry_slug: string | null
  market_slug: string | null
  purchase_year: number | null
  machine_model: string | null
  position: number
  published: boolean
  published_at: string | null
}

export type TestimonialInsert = Omit<Testimonial, 'id' | 'created_at' | 'updated_at'> & {
  id?: string
}

export type CaseStudy = {
  id: string
  created_at: string
  updated_at: string
  slug: string
  title: string
  summary: string | null
  client_type: string | null
  country: string | null
  industry_slug: string | null
  machine_slug: string | null
  year: number | null
  problem: string | null
  solution: string | null
  results: string | null
  hero_image_url: string | null
  images: Array<{ url: string; caption?: string }> | null
  video_id: string | null
  featured: boolean
  published: boolean
  published_at: string | null
  meta_title: string | null
  meta_description: string | null
}

export type CaseStudyInsert = Omit<CaseStudy, 'id' | 'created_at' | 'updated_at'> & {
  id?: string
}

export type Video = {
  id: string
  created_at: string
  updated_at: string
  title: string
  description: string | null
  machine_slug: string | null
  industry_slug: string | null
  platform: 'youtube' | 'vimeo'
  external_id: string
  thumbnail_url: string | null
  duration_seconds: number | null
  upload_date: string | null
  position: number
  published: boolean
}

export type VideoInsert = Omit<Video, 'id' | 'created_at' | 'updated_at'> & {
  id?: string
}

export type Database = {
  public: {
    Tables: {
      inquiries: {
        Row: Inquiry
        Insert: InquiryInsert
        Update: Partial<InquiryInsert>
        Relationships: []
      }
      testimonials: {
        Row: Testimonial
        Insert: TestimonialInsert
        Update: Partial<TestimonialInsert>
        Relationships: []
      }
      case_studies: {
        Row: CaseStudy
        Insert: CaseStudyInsert
        Update: Partial<CaseStudyInsert>
        Relationships: []
      }
      videos: {
        Row: Video
        Insert: VideoInsert
        Update: Partial<VideoInsert>
        Relationships: []
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}
