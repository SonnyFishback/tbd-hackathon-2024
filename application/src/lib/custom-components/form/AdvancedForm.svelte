<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Label } from '$lib/components/ui/label';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';
	import { Separator } from '$lib/components/ui/separator';

	import { createEventDispatcher } from 'svelte';
  
	const dispatch = createEventDispatcher();
	let inputValue = '';
	let badges: string[] = [];

	function addBadge(event: KeyboardEvent | MouseEvent) {
		event.stopPropagation();
		if ((event.key === 'Enter' || event.key === ',') && inputValue.trim() !== '') {
			badges = [...badges, inputValue.trim()];
			inputValue = '';
			dispatch('badgeAdded', badges);
			event.preventDefault();
		}
	}
</script>

<div class="my-4" />
<form method="POST" action="">
	<div>
		<Label>Job Description</Label>
		<div class="my-4" />
		<Textarea />
	</div>

	<Separator class="my-4" />
	<div>
		<Label>Strength</Label>
		<div class="my-4" />
		<RadioGroup.Root value="comfortable">
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="default" id="r1" />
				<Label for="r1">Easy</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="comfortable" id="r2" />
				<Label for="r2">Medium</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="compact" id="r3" />
				<Label for="r3">Hard</Label>
			</div>
			<RadioGroup.Input name="spacing" />
		</RadioGroup.Root>
	</div>

	<Separator class="my-4" />

	<div class="grid items-center gap-1.5">
		<Label>Preferred Skills</Label>
		<Input placeholder="Type something and press Enter" bind:value={inputValue} on:keydown={addBadge}>
			<Button on:click={addBadge}>Add</Button>
		</Input>
		<p class="text-sm text-muted-foreground">Click Enter each time you add a bage or just seperate them with commas</p>
		<div class="flex flex-wrap">
			{#each badges as badge}
				<Badge class="mr-1 mb-1 w-fit">{badge}</Badge>
			{/each}
		</div>
	</div>
	<div class="my-4" />

	<Separator class="my-4" />
	<div>
		<Label>Years of Experience</Label>
		<div class="my-4" />
		<Input />
	</div>

	<div class="my-4" />
	<Button type="submit">Submit</Button>
</form>
