<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;
	export let form: PageData;
</script>

<div class="div">
	<form action="?/generate" method="post" use:enhance></form>
        
	<p>Questions:</p>
</div>
