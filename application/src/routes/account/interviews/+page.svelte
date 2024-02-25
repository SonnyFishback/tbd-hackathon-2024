<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul>
	{#each data.user.interviews as interview}
		<li>
			{interview.id}
		</li>
	{/each}
</ul>
