import { createClient } from "@supabase/supabase-js";
import { PRIVATE_SUPABASE_KEY, PRIVATE_SUPABASE_URL } from "$env/static/private";
const supabaseUrl = PRIVATE_SUPABASE_URL;
const supabaseKey = PRIVATE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);