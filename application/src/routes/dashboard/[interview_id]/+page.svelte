<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import { GalleryVerticalEnd } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Progress } from '$lib/components/ui/progress';
	import { Separator } from '$lib/components/ui/separator';
	export let data: PageData;
	export let form: PageData;
	import * as RadioGroup from '$lib/components/ui/radio-group';

	$: questions = data.questions;

	let answers: string[] = [];

	export const snapshot: import('./$types').Snapshot<string[]> = {
		capture: () => answers,
		restore: (value: string[]) => {
			value.forEach((v) => answers.push(v));
		}
	};
</script>

<form action="/" method="post" use:enhance>
	<Card.Root class="w-full">
		<Card.Header>
			<div class="flex justify-between">
				<div class="align-text-middle place-middle flex gap-4 align-middle">
					<div>
						<GalleryVerticalEnd />
					</div>
					<div>
						<Card.Title>Your Interview</Card.Title>
					</div>
				</div>
			</div>
		</Card.Header>
		<Separator class="mb-8" />
		<Card.Content>
			{#each questions as question (question.id)}
				<fieldset>
					<legend class="text-xl font-semibold tracking-tight">
						{question.text}
					</legend>
					<Separator class="mb-8" />
					<div class="flex flex-col space-y-2">
						<RadioGroup.Root value={question.id}>
							{#each question.answers as answer (answer.id)}
								<div class="mb-6 flex items-center space-x-2">
									<RadioGroup.Item id={answer.id} value={answer.id} />
									<Label for={answer.id}>{answer.text}</Label>
								</div>
							{/each}
						</RadioGroup.Root>
					</div>
				</fieldset>
			{/each}
		</Card.Content>
		<Separator class="mb-8" />
		<Card.Footer class="flex justify-end gap-2">
			<Button type="submit">Submit Your Interview</Button>
		</Card.Footer>
	</Card.Root>
</form>
