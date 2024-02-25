import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load = (async ({ params }) => {
    const { interview_id } = params;
    console.log('interview_id', interview_id);

    const questions = await prisma.question.findMany({
        where: {
            interviewID: interview_id
        },
        include: {
            answers: true
        }
    });

    return {
        questions
    };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
        console.log(data)
        for (const [name,value] of data.values()) {
            console.log(value);
          }
		// TODO log the user in
	}
};