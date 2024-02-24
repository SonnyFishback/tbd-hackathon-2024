<script lang="ts">
	import { Card, CardContent, CardDescription, CardTitle } from '$lib/components/ui/card';
	import type { PageData } from './$types';
	import { Avatar, Image, Fallback } from '$lib/components/ui/avatar';
	export let data: PageData;
</script>


<section>
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
		Welcome Back {data.user.name}!
	</h1>

	<div class=" grid">
		<Avatar>
			{#if data.user.avatar}
				<Image src={data.user.avatar} alt="Profile Picture"></Image>
			{/if}
			<Fallback
				>{`${data.user.name[0]}`}</Fallback
			>
		</Avatar>
	</div> 

	{JSON.stringify(data.user)}
</section>
