import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://vjsrsxkjpeknstxyzpkm.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqc3JzeGtqcGVrbnN0eHl6cGttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNTkyODMsImV4cCI6MjA5MDczNTI4M30.GZ5mEKf57-jdtw_1A66b9zladJhH1J9d0k4N7GV_-0k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
