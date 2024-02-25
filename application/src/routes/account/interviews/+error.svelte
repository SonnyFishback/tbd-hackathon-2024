<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.status === 404}
	<p>You have not taken any interviews yet! Take the first jump in getting a job!</p>
{:else}
	<p>{$page.status}: {$page.error?.message}</p>
{/if}