<script lang="ts">
	import { Button } from '$lib/components/ui/button';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>


<section class=" flex flex-col gap-2">
<h1>
    Congrats on completeing your Interview!!!
</h1>
<ul class=" flex flex-col">
{#each data.answers as answer}
    <li class=" text-2xl mb-2">
        Your answer : {answer.answer.text}
        {#if answer.answer.isCorrect}
        <span class=" font-bold"> Is Correct!</span>
        {/if}
    </li>
{/each}
</ul>

<p>
    You have earned {data.answers.filter(answer => answer.answer.isCorrect).length} XP
</p>

<form method="post">
    <input name="xp" value={data.answers.filter(answer => answer.answer.isCorrect).length} type="hidden" />
    <Button class="my-3" type="submit">Go to my account</Button>
</form>
</section>