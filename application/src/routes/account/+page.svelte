<script lang="ts">
	import { Card, CardContent, CardDescription, CardTitle } from '$lib/components/ui/card';
	import type { PageData } from './$types';
	import { Avatar, Image, Fallback } from '$lib/components/ui/avatar';
	export let data: PageData;
</script>


<section>
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
		Welcome Back
		{data.user.user_metadata.given_name}
		{data.user.user_metadata.family_name}!
	</h1>

<!-- 	<div class=" grid">
		<Avatar>
			{#if data.user?.user_metadata.picture}
				<Image src={data.user.user_metadata.picture} alt="Profile Picture"></Image>
			{/if}
			<Fallback
				>{`${data.user.user_metadata.given_name[0]}${data.user.user_metadata.family_name[0]}`}</Fallback
			>
		</Avatar>
	</div> -->

	{JSON.stringify(data.user)}
</section>
