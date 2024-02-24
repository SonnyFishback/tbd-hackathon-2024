import type { PageServerLoad } from './$types';
import OpenAI from 'openai';
import { PRIVATE_OPENAI_API_KEY } from '$env/static/private';

const openai = new OpenAI({ apiKey: PRIVATE_OPENAI_API_KEY});


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


const generateQuestions = async (jobDescription: string) => {
    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-1106',
            messages: [
                {
                    role: 'system',
                    content: 'Please generate me some practice technical interview questions based on the following job description. Please ensure each question is its owm separate index in a json array. Ensure that the name of the array is questions.'
                },
                {
                    role: 'system',
                    content: jobDescription
                }
            ],
            response_format: { type: 'json_object' }
        })
        const data = JSON.parse(completion.choices[0].message.content || '{}')
        return data.questions || [];
    } catch (error) {
        console.info(error);
    }
}