import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';
export const load = (async ({params}) => {

   const answers = await prisma.interviewAnswer.findMany({
        where: {
            interviewId: params.interviewId
        },
        include: {
            answer: true
        }
    })
    return {
        answers
    };
}) satisfies PageServerLoad;


export const actions = {
	default: async ({ request, locals}) => {
        const session = await locals.getSession();
		const data = await request.formData();
       
		await prisma.user.update({
			where: {
				id: session.user.id
			},
			data: {
				xp: Number(data.get('xp').toString())
			},
		});

         return redirect(302, `/account`)
		// TODO log the user in
	}
};