<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.pcss';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';

	import Header from '$lib/components/ui/header/Header.svelte';
	import { preprocess } from 'svelte/compiler';

	export let data: LayoutData;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<ModeWatcher />
<svelte:head>
	<title>prep.io | Interviewing Reimagined</title>
</svelte:head>
<Header session={data.session} />
<main id="main" class="container flex"><slot /></main>
<footer class="py-6">
	<div class="container flex flex-col items-center justify-between gap-4 md:flex-row">
		<div class="relative">
			<div class="lg:max-w-none">
				<div
					class="[&amp;>a:first-child]:text-primary mb-4 flex items-center overflow-y-auto pb-3 md:pb-0"
				>
					<a
						href="/"
						data-sveltekit-noscroll=""
						class="relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm font-medium text-primary transition-colors hover:text-primary"
						><div class="absolute inset-0 rounded-full bg-muted"></div>
						<div class="relative">Dashboard</div>
					</a><a
						href="/"
						data-sveltekit-noscroll=""
						class="relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm text-muted-foreground transition-colors hover:text-primary"
					>
						<div class="relative">Services</div>
					</a><a
						href="/"
						data-sveltekit-noscroll=""
						class="relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm text-muted-foreground transition-colors hover:text-primary"
					>
						<div class="relative">Features</div>
					</a><a
						href="/"
						data-sveltekit-noscroll=""
						class="relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm text-muted-foreground transition-colors hover:text-primary"
					>
						<div class="relative">Pricing</div>
					</a><a
						href="/"
						data-sveltekit-noscroll=""
						class="relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm text-muted-foreground transition-colors hover:text-primary"
					>
						<div class="relative">Demo</div>
					</a><a
						href="/"
						data-sveltekit-noscroll=""
						class="relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm text-muted-foreground transition-colors hover:text-primary"
					>
						<div class="relative">About</div>
					</a><a
						href="/examples/authentication"
						data-sveltekit-noscroll=""
						class="relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm text-muted-foreground transition-colors hover:text-primary"
					>
						<div class="relative">Contact</div>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="container flex flex-col items-center justify-between gap-4 md:flex-row">
		<div class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
			<p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
				Built &amp; designed by <a
					href="https://twitter.com/shadcn"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4"
					data-svelte-h="svelte-18aekvv">hashX0</a
				>. Secured by
				<a
					href="https://twitter.com/huntabyte"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4"
					data-svelte-h="svelte-9fj64u">SecureX</a
				>. Copyrights reserved
				<a
					href="/"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4"
					data-svelte-h="svelte-fj0xt9">2024</a
				>.
			</p>
		</div>
	</div>
</footer>
