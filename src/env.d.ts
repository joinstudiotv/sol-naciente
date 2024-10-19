/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly SUPABASE_URL: string
  readonly SUPABASE_ANON_KEY: string
  readonly KV_URL: string; // Agregar KV_URL
  readonly KV_REST_API_URL: string; // Agregar KV_REST_API_URL
  readonly KV_REST_API_TOKEN: string; // Agregar KV_REST_API_TOKEN
  readonly KV_REST_API_READ_ONLY_TOKEN: string; 
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}