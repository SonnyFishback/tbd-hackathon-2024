import type { RequestHandler } from './$types';
import { redirect } from '@sveltejs/kit';

// https://supabase.com/docs/guides/auth/server-side-rendering

export const GET: RequestHandler = async ({ url, locals: { supabase } }) => {
	const code = url.searchParams.get('code');

	if (code) {
		await supabase.auth.exchangeCodeForSession(code);
	}

	throw redirect(303, '/');
};
