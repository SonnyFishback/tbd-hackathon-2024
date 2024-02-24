import { fail, redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {

    const session = await locals.getSession();

    if (!session || !session.user) {
        return redirect(303, '/');
    }


    const user = await prisma.user.findUnique({
        where: {
            id: session.user.id
        }
    })

    return {
        user
    };
}) satisfies PageServerLoad;

export const actions = {
    login: async ({ request, locals: { supabase }, url }) => {
  
        const formData = await request.formData()
        const provider = formData.get('provider')
        if (!provider || (provider !== 'google' && provider !== 'linkedin_oidc')) {
            return fail(400, { message: 'Unknown Provider', success: false, })
        }

        const response = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${url.origin}/auth/callback`
            }
        })


        if(response.error) {
            return fail(500, { message: 'Server error. Try again later.', success: false})
        }

        throw redirect(303, response.data.url);
    },

    logout: async ({ locals: { supabase } }) => {
        const {error} = await supabase.auth.signOut();
        if(error) {
            return fail(500, { message: 'Server error. Try again later.', success: false})
        }
          
              return {
            message: 'You have been logged out',
            success: true,
        }
    }


}