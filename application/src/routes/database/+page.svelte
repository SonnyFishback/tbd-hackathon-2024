<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Database</h1>
<ul>
	{#each data.countries as country}
		<li>{country.name}</li>
	{/each}
</ul>
