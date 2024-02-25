import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load = (async () => {

    const interviewCount = await prisma.interview.count()
    return {

        interviewCount
    };
}) satisfies PageServerLoad;