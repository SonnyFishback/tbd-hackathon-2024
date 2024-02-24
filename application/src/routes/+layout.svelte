<script lang="ts">
	import '../app.pcss';
	import { Button } from '$lib/components/ui/button';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import { enhance } from '$app/forms';

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
	{#if data.session}
		<form method="POST" action="/account?/logout" use:enhance>
			<Button type="submit">Logout</Button>
		</form>
	{:else}
		<form method="POST" action="/account?/login" use:enhance>
			<Button type="submit" name="provider" value="google">Login With google</Button>
			<Button type="submit" name="provider" value="linkedin_oidc">Login with LinkedIN</Button>
		</form>
	{/if}
</header>

<main id="main"><slot /></main>
