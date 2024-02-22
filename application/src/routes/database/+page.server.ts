import type { PageServerLoad } from './$types';
import { supabase } from '$lib';

export const load = (async () => {
    const { data } = await supabase.from("countries").select();
  return {
    countries: data ?? [],
  };
}) satisfies PageServerLoad;