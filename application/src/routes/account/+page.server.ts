import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({locals}) => {

    const session = await locals.getSession();

    if(!session || !session.user)
    {
        return redirect(303, '/');
    } 

    return {
        user: session.user
    };
}) satisfies PageServerLoad;