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
			remainingSkills--;
		}
	}

	function removeBadge(index: number) {
	remainingSkills++;
	badges.splice(index, 1);
	badges = [...badges];
	}
	let formBadges: string;
	$: {
		if (badges) {
			formBadges = badges.join(',');
		}
	}
</script>

<div class="my-4" />
<form method="POST" action="?/generate" use:enhance>
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
		<Input placeholder="Type something and press Enter" bind:value={inputValue} on:keydown={event => event.key === 'Enter' && addBadge()} disabled={remainingSkills === 0} />
		<p class="text-sm text-muted-foreground">Click Enter each time you add a badge or just separate them with commas</p>
		<div class="flex flex-wrap justify-between">
			<div class="flex flex-wrap">
				{#each badges as badge, index}
					<div class="flex">
						<div class="flex badge-container mr-4">
							<Badge class="mr mb-1">{badge}</Badge>
							<XCircle class="remove-button w-[16px] h-[16px]" on:click={() => removeBadge(index)} />
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
	<input type="hidden" name="badges" bind:value={formBadges} />

	<Button type="submit">Submit</Button>
</form>

<style>
	.badge-container {
		position: relative;
	}
	.remove-button {
		position: absolute;
		top: -8px;
		right: -8px;
		cursor: pointer;
	}
</style>