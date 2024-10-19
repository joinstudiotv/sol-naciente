import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://abmfjpolieweyzlwkjfw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFibWZqcG9saWV3ZXl6bHdramZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyNjQxNTcsImV4cCI6MjA0NDg0MDE1N30.g5IxVog2K6iA2abr0VzM-_2YCZjJnGvEoRqIj7tU5XU"
);

export { supabase as s };
