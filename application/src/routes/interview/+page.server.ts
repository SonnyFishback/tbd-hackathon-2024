import type { PageServerLoad } from './$types';
import OpenAI from 'openai';
import { PRIVATE_OPENAI_API_KEY } from '$env/static/private';

const openai = new OpenAI({ apiKey: PRIVATE_OPENAI_API_KEY });

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	generate: async ({ request }) => {
		try {
			const form = await request.formData();
			const description = form.get('description')?.toString() || '';

			const questions = await generateQuestions(description);
			console.info(questions);

			return {
				questions
			};
		} catch (error) {
			return {};
		}
	}
};

const generateQuestions = async (
    jobDescription: string,
    focusAreas: string,
    experienceLevel: string,
    yearsOfExperience: string,
    questionCount: number
) => {
	try {
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
		const data = JSON.parse(completion.choices[0].message.content || '{}');
		return data.questions || [];
	} catch (error) {
		console.info(error);
	}
};
