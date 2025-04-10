import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://brquajnyriybaruurgzu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJycXVham55cml5YmFydXVyZ3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3NjQ3NjQsImV4cCI6MjA1NzM0MDc2NH0.4TvZpf2EaThErlDy1_7ZBIlsE7S-kNoq1iJt7EHCPDU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Define the contact form data type
export type ContactFormData = {
  id?: number
  created_at?: string
  name: string
  email: string
  phone?: string
  message: string
  treatment_interest?: string
  source?: string
} 