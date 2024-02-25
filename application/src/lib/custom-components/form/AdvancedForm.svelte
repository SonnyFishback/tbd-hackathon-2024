<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Label } from '$lib/components/ui/label';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';
	import { Separator } from '$lib/components/ui/separator';
	import { XCircle } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';
	import { enhance } from '$app/forms';
	import { Reload } from 'svelte-radix';

	const dispatch = createEventDispatcher();

	const MAX_SKILLS = 5;
	let remainingSkills = MAX_SKILLS;
	let inputValue = '';
	let badges: string[] = [];

	function addBadge() {
		if (inputValue.trim() !== '') {
			badges = [...badges, inputValue.trim()];
			inputValue = '';
			dispatch('badgeAdded', badges);
		}
	}

	function handleInputKeyDown(event: KeyboardEvent | MouseEvent) {
		if (
			('key' in event && (event as KeyboardEvent).key === 'Enter') ||
			(event as KeyboardEvent).key === ','
		) {
			addBadge();
			remainingSkills--;
			event.preventDefault();
		}
	}

	function removeBadge(index: number) {
		remainingSkills++;
		badges = badges.filter((_, i) => i !== index);
		badges = [...badges];
	}

	let formBadges: string;
	$: {
		formBadges = badges.join(',');
	}
	let loading = false;
</script>

<div class="my-4" />
<form
	method="POST"
	action="/interviews?/generate"
	use:enhance={() => {
		loading = true;
		return async ({ result, update }) => {
			loading = false;
			update();
			// `result` is an `ActionResult` object
			// `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
		};
	}}
>
	<div>
		<Label>Job Description</Label>
		<div class="my-4" />
		<Textarea name="description" />
	</div>

	<Separator class="my-4" />
	<div>
		<Label>Seniority</Label>
		<div class="my-4" />
		<RadioGroup.Root value="comfortable">
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="default" id="r1" name="answer" />
				<Label for="r1">Entry Level</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="comfortable" id="r2" name="answer" />
				<Label for="r2">Junior</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="compact" id="r3" name="answer" />
				<Label for="r3">Senior</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="compact" id="r3" name="answer" />
				<Label for="r3">Lead</Label>
			</div>
		</RadioGroup.Root>
	</div>

	<Separator class="my-4" />

	<div class="grid items-center gap-1.5">
		<Label>Preferred Skills</Label>
		<Input
			placeholder="Type something and press Enter"
			bind:value={inputValue}
			on:keydown={handleInputKeyDown}
			disabled={remainingSkills === 0}
		/>
		<p class="text-muted-foreground text-sm">
			Click Enter each time you add a badge or just separate them with commas
		</p>
		<div class="flex flex-wrap justify-between">
			<div class="flex flex-wrap">
				{#each badges as badge, index}
					<div class="flex">
						<div class="badge-container mr-3 flex">
							<Badge class=" mb-1">{badge}</Badge>
							<div on:click={() => removeBadge(index)}>
								<XCircle class="remove-button ml-1 h-4 w-4 cursor-pointer" />
							</div>
						</div>
					</div>
				{/each}
			</div>
			<p>Remaining skills: {remainingSkills}</p>
		</div>
	</div>
	<div class="my-4" />

	<Separator class="my-4" />
	<div>
		<Label>Years of Experience</Label>
		<div class="my-4" />
		<Input name="yoe" />
	</div>

	<div class="my-4" />
	<input type="hidden" name="skills" bind:value={formBadges} />

	<Button type="submit" disabled={loading} class="mr-2 mt-8">
		{#if loading}
			<Reload class="mr-2 h-4 w-4 animate-spin" />
		{/if}
		Start now</Button
	>
</form>

<style>
	.badge-container {
		position: relative;
	}
</style>
