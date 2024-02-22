<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	export let form: PageData;
</script>

<form method="post" use:enhance>
	<input name="email" value={form?.email ?? ''} />
	<input type="password" name="password" />
	<button>Sign up</button>
</form>
