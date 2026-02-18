import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://quuxrujodkjljjduqack.supabase.co'   // <-- YOUR PROJECT URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1dXhydWpvZGtqbGpqZHVxYWNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzODQ0MjgsImV4cCI6MjA4Njk2MDQyOH0.9HCuCnMEBIg7OJJw8uBc9_vettxT-uaJhfFHtzQCskw'  // <-- YOUR ANON KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
