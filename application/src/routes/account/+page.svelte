<script lang="ts">
	import { Card, CardContent, CardDescription, CardTitle } from '$lib/components/ui/card';
	import type { PageData } from './$types';
	import { Avatar, Image, Fallback } from '$lib/components/ui/avatar';
	import Progress from '$lib/components/ui/progress/progress.svelte';
	import { Label } from '$lib/components/ui/label';
	export let data: PageData;

	$: applicableLevels = data.levels.filter((level) => level.requirement >= data.user.xp);
	$: currentLevel = applicableLevels[0];
	$: nextLevel = applicableLevels[1];
	$: percentage = (data.user.xp / nextLevel.requirement) * 100;
</script>

<section class="grid gap-4">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
		Welcome Back {data.user.name}!
	</h1>

	{#if currentLevel}
		<div>
			<h2
				class="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0"
			>
				You are a {currentLevel.name}
			</h2>
			<img
				class=" mx-auto"
				loading="lazy"
				src={currentLevel.picture}
				width={250}
				height={250}
				alt={currentLevel.name}
			/>

			<hr class="py-2" />
			<Label>
				({data.user.xp}/{nextLevel.requirement})
				<Progress value={percentage}></Progress>
			</Label>
		</div>
	{/if}

	<h2 class=" mx-auto py-2 text-2xl">
		{#if currentLevel.id < 1}
			But don't worry! Challange yourself to more interviews to level up!
		{:else}
			Challange yourself to more interviews to prove yourself in the job market battle field!
		{/if}
	</h2>

    <ul>
        <li>
            
        </li>
    </ul>

	{JSON.stringify(applicableLevels)}

    <a class="m-2" href="/account/interviews"> Or check on your recent Interviews! </a>
</section>
