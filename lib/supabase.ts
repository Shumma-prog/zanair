import { createClient as supabaseCreate } from "@supabase/supabase-js";

let _client: ReturnType<typeof supabaseCreate> | null = null;

export function createClient() {
  if (_client) return _client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error("Supabase env vars not configured");
  _client = supabaseCreate(url, key);
  return _client;
}

// Legacy alias
export { createClient as getSupabaseClient };
