<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import AdvancedForm from '$lib/custom-components/form/AdvancedForm.svelte';
	// import * as Form from "$lib/components/ui/form";
	export let data: PageData;
</script>

<div class="flex-1">
	<div class="container relative">
		<section
			class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 pb-8 md:py-12 md:pb-8 lg:py-12 lg:pb-20"
		>
			<a href="/" class="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
				>
				{#if  data.interviewCount > 0}
				🔺 <div
					role="none"
					aria-orientation="vertical"
					aria-hidden="true"
					data-orientation="vertical"
					data-melt-separator=""
					data-separator-root=""
					class="mx-2 h-4 w-[1px] shrink-0 bg-border"
				></div>
				<span data-svelte-h="svelte-1puani1" style="font-weight: bold">+{data.interviewCount} </span>
				<span class="ml-4" data-svelte-h="svelte-wm3ivd"
					>Successful Interviews, Still counting!</span
				>
				{:else}
				<span data-svelte-h="svelte-1puani1" style="font-weight: bold">Be the first to take on our interview challanges!</span>
				{/if}
			
			</a>
			<h1
				class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
			>
				Modern <span style="color: blue">Hiring</span> Tools<br />
				for all <span style="color: red">Interviews!</span>
			</h1>
			<p class="max-w-[750px] text-balance text-center text-lg text-muted-foreground sm:text-xl">
				Conquer interviews with next-gen AI coaching. Uncover your strengths,<br />practice like a
				pro, and nail your dream job.
			</p>
			<p
				class="text-center text-sm text-orange-700 dark:text-orange-400"
				data-svelte-h="svelte-k797bx"
			>
				This is our hackathon version of <a
					href="https://github.com/shadcn/ui"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4">prep.io</a
				>
				official version, will be released in
				<a
					href="https://twitter.com/shadcn"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4">October 2024</a
				>.
			</p>
			<br />
			<Tabs.Root value="instant" class="w-[700px]">
				<Tabs.List class="grid w-full grid-cols-2">
					<Tabs.Trigger value="instant">Instant Practice</Tabs.Trigger>
					<Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="instant">
					<Card.Root>
						<Card.Header>
							<Card.Title>Job Description</Card.Title>
							<Card.Description>
								<p class="line-1 anim-typewriter">Aninated text</p>
							</Card.Description>
						</Card.Header>
						<Card.Content class="space-y-2">
							<div class="space-y-1">
								<form method="POST">
									<Textarea class="testtest">
										<p class="line-1 anim-typewriter">
											Animation typewriter style using css steps()
										</p>
									</Textarea>
									<Button type="submit" class="mr-2 mt-8">Start now</Button>
									<Button type="button" variant="secondary">Demo</Button>
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
