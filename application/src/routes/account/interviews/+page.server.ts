import { error, redirect } from '@sveltejs/kit';
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
        },
        include: {
            interviews: true
        }
    })

    if (!user) {
        return error(500, "I Definitly messed something up")
    }

    if (user.interviews.length <= 0) {
        return error(404, "You have not taken any interviews yet!")
    }

    return {
        user
    };
}) satisfies PageServerLoad;