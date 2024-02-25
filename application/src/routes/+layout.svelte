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
<main id="main"><slot /></main>
<footer class="w-[700px] py-6">
	<div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
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
