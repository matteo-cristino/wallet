import type { ValueOf } from '$lib/utils/types';
import { z } from 'zod';

//

export const userQuestionsKeys = {
	question1: 'question1',
	question2: 'question2',
	question3: 'question3',
	question4: 'question4',
	question5: 'question5'
} as const;

export type UserQuestionsKey = ValueOf<typeof userQuestionsKeys>;

export const userQuestions: Array<{ id: UserQuestionsKey; text: string }> = [
	{ id: userQuestionsKeys.question1, text: 'Where did your parents meet?' },
	{ id: userQuestionsKeys.question2, text: 'What is the name of your first pet?' },
	{ id: userQuestionsKeys.question3, text: 'What is your home town?' },
	{ id: userQuestionsKeys.question4, text: 'What is the name of your first teacher?' },
	{ id: userQuestionsKeys.question5, text: 'What is the surname of your mother before wedding?' }
];

//

export const userAnswersSchema = (
	z.object({
		email: z.string().email(),
		question1: z.string(),
		question2: z.string(),
		question3: z.string(),
		question4: z.string(),
		question5: z.string()
	})
)
	.partial()
	.refine((v) => {
		//@ts-ignore
		return Object.keys(v).filter((k) => k !== "email" && Boolean(v[k])).length >= 3;
	}, 'AT_LEAST_THREE_QUESTIONS');
	

	export type UserAnswersZod = typeof userAnswersSchema;
	export type UserAnswers = z.infer<typeof userAnswersSchema>;