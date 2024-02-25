import type { PageServerLoad } from './$types';
import OpenAI from 'openai';
import { PRIVATE_OPENAI_API_KEY } from '$env/static/private';
import { error, fail, redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';



export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	generate: async ({ request, locals }) => {
			const session = await locals.getSession();

			if (!session || !session.user) {
				console.error('No session or user');
				return redirect(303, '/');
			}

			const form = await request.formData();
			const description = form.get('description')?.toString() || '';

			const questions = await generateQuestions(description)
	
			const interview = await prisma.interview.create({
				data: {
					owner: { connect: { id: session?.user.id } }
				}
			});


			for (const question of questions) {
				const createdQuestion = await prisma.question.create({
					data: {
						interview: { connect: { id: interview.id } },
						text: question.question,
					}
				})

				const correctAnswer = await prisma.answerChoice.create(
					{
						data: {
							question: { connect: { id: createdQuestion.id } },
							text: question.correct,
							isCorrect: true
						}
					}
				);

				for (const incorrect of question.incorrect) {
					const incorrectAnswer = await prisma.answerChoice.create(
						{
							data: {
								question: { connect: { id: createdQuestion.id } },
								text: incorrect,
								isCorrect: false
							}
						}
					);
				}

			};

			return redirect(303, `/dashboard/${interview.id}`);
			return {
				questions
			};

	}
};

const generateQuestions = async (
	jobDescription: string,
	focusAreas: string = "",
	experienceLevel: string = "",
	yearsOfExperience: string = "",
	questionCount: number = 10
) => {
	try {
		const openai = new OpenAI({ apiKey: PRIVATE_OPENAI_API_KEY });
		const completion = await openai.chat.completions.create({
			model: 'gpt-3.5-turbo-1106',
			messages: [
				{
					role: 'system',
					content: `
                    AI Interview Assistant: Generate ${questionCount || 10} tailored interview questions in multiple-choice format.
                
                    Job Description: ${jobDescription || 'default job description'}
                    Focus Areas: ${focusAreas || 'default focus areas'}
                    Experience Level: ${experienceLevel || 'default experience level'}
                    Years of Experience: ${yearsOfExperience || 'default years of experience'}
                
                    Provide questions with two incorrect options and one correct option in a JSON format:
                
                    {
                        "questions": [
                            {
                                "question": "Example Question",
                                "incorrect": ["Option 1", "Option 2"],
                                "correct": "Option 3"
                            }
                        ]
                    }
                `
				},
				{
					role: 'system',
					content: jobDescription
				}
			],
			response_format: { type: 'json_object' }
		});
		console.log(completion)
		const data = JSON.parse(completion.choices[0].message.content || '{}');
		return data.questions || [];
		console.log(data.questions)
	} catch (error) {
		console.info(error);
	}
};
