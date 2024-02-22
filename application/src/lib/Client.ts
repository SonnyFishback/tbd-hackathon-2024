import { createClient } from "@supabase/supabase-js";
import { PRIVATE_SUPABASE_KEY } from "$env/static/private";
import { PUBLIC_SUPABASE_URL } from "$env/static/public";
const supabaseUrl = PUBLIC_SUPABASE_URL;
const supabaseKey = PRIVATE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);