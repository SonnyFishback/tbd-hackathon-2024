<script lang="ts">
	import { Card, CardContent, CardDescription, CardTitle } from '$lib/components/ui/card';
	import type { PageData } from './$types';
	import { Avatar, Image, Fallback } from '$lib/components/ui/avatar';
	export let data: PageData;
</script>

<section class="grid gap-4">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
		Welcome Back {data.user.name}!
	</h1>

    <a class="m-2" href="/account/interviews">
        Check on your recent Interviews!
    </a>
    {#if data.user.level}
    <section>
        <h2>You are a {level.name}</h2>
        <p> xp: {data.user.xp}</p>
    </section>
    {/if}
</section>
