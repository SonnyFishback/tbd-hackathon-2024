<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import AdvancedForm from '$lib/custom-components/form/AdvancedForm.svelte';
	import { enhance } from '$app/forms';
	import Reload from "svelte-radix/Reload.svelte";
	export let data: PageData;

	let loading = false
</script>

<div class="flex-1">
	<div class="container relative">
		<section
			class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 pb-8 md:py-12 md:pb-8 lg:py-12 lg:pb-20"
		>
			{#if data.interviewCount > 0}
				🔺 <div
					role="none"
					aria-orientation="vertical"
					aria-hidden="true"
					data-orientation="vertical"
					data-melt-separator=""
					data-separator-root=""
					class="bg-border mx-2 h-4 w-[1px] shrink-0"
				></div>
				<span data-svelte-h="svelte-1puani1" style="font-weight: bold"
					>+{data.interviewCount}
				</span>
				<span class="ml-4" data-svelte-h="svelte-wm3ivd"
					>Successful Interviews, Still counting!</span
				>
			{:else}
				<span data-svelte-h="svelte-1puani1" style="font-weight: bold"
					>Be the first to take on our interview challanges!</span
				>
			{/if}
			<h1
				class="main-title mt-6 text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
			>
				Modern Hiring Tools<br />
				for all <span style="color: red"></span>Interviews!
			</h1>
			<p
				class="text-muted-foreground my-6 max-w-[750px] text-balance text-center text-lg sm:text-xl"
			>
				Conquer interviews with next-gen AI coaching. Uncover your strengths,<br />practice like a
				pro, and nail your dream job.
			</p>
			<p
				class="text-center text-sm text-orange-700 dark:text-orange-400"
				data-svelte-h="svelte-k797bx"
			>
				This is our hackathon version of <a
					href="/"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4">prep.io</a
				>
				official version, will be released in
				<a
					href="/"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4">October 2024</a
				>.
			</p>
			<br />
			<Tabs.Root value="advanced" class="w-[700px]">
				<Tabs.List class="grid w-full grid-cols-2">
					<Tabs.Trigger value="basic">Basic</Tabs.Trigger>
					<Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="basic">
					<Card.Root>
						<Card.Header>
							<Card.Title>Description</Card.Title>
							<Card.Description>
								<p class="line-1 anim-typewriter">
									You can either paste a job title or a job description.
								</p>
							</Card.Description>
						</Card.Header>
						<Card.Content class="space-y-2">
							<div class="space-y-1">
								<form
									method="POST"
									action="/interviews?/generate"
									use:enhance={() => {
										loading = true;
										return async ({ result, update }) => {
											loading = false
											update()
											// `result` is an `ActionResult` object
											// `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
										};
									}}
								>
									<Textarea placeholder="Senior MERN Developer" name="description" />
									<Button type="submit" disabled={loading} class="mr-2 mt-8">
										{#if loading}
										<Reload class="mr-2 h-4 w-4 animate-spin" />
										{/if}
										Start now</Button>
								</form>
							</div>
						</Card.Content>
					</Card.Root>
				</Tabs.Content>
				<Tabs.Content value="advanced">
					<Card.Root>
						<Card.Header>
							<Card.Title>Advanced form</Card.Title>
							<Card.Description>
								Customize your experience to get the best advanced mock interview.
								<AdvancedForm />
							</Card.Description>
						</Card.Header>
						<Card.Content class="space-y-2">
							<div class="space-y-1"></div>
						</Card.Content>
						<!-- <Card.Footer>
                        <Button>Card Footer</Button>
                    </Card.Footer> -->
					</Card.Root>
				</Tabs.Content>
			</Tabs.Root>
		</section>
	</div>
</div>

<style>
	.main-title {
		background: linear-gradient(45deg, #ff3d47, #2d9ccb, #ffa84a);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
</style>
