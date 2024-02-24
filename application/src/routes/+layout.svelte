<script lang="ts">
	import '../app.pcss';
	import { Button } from '$lib/components/ui/button';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';

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

<header>
	<Button
		on:click={() =>
			supabase.auth.signInWithOAuth({
				provider: 'google'
			})}>Login With google</Button
	>
	<Button
		on:click={() =>
			supabase.auth.signInWithOAuth({
				provider: 'linkedin_oidc'
			}).then(data => {
				console.log(data)
			})}
	>
		Login with LinkedIN
	</Button>
</header>

<main id="main"><slot /></main>
