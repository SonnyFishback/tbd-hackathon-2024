import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';
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
	default: async ({ request, params }) => {
		const data = await request.formData();
        const promiseArray = []
        for (const value of data.values()) {
                const p = prisma.interviewAnswer.create({
                    data: {
                        answerId: value.toString(),
                        interviewId: params.interview_id
                    }
                })

                promiseArray.push(p)
          }

          await Promise.all(promiseArray)

         return redirect(302, `/dashboard/${params.interview_id}/results`)
		// TODO log the user in
	}
};