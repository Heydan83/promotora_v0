import { createClient } from '@supabase/supabase-js'
import { DATABASE_SUPABASE_ANON_KEY, DATABASE_SUPABASE_URL  } from '$env/static/private'

export const supabase = createClient(DATABASE_SUPABASE_URL, DATABASE_SUPABASE_ANON_KEY);