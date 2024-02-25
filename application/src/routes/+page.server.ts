import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';


export const load = (async () => {
    return { interviewCount: 100 };
}) satisfies PageServerLoad;