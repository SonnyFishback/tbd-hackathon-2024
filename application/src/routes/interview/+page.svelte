<script lang="ts">
    import type { PageData } from './$types';
    import { enhance } from '$app/forms';
    import Textarea from '$lib/components/ui/textarea/textarea.svelte';
    import Button from '$lib/components/ui/button/button.svelte';
    import Label from '$lib/components/ui/label/label.svelte'
    
    export let data: PageData;
    export let form : PageData;

    $:questions = form?.questions ? form.questions : [];
    
</script>

<main class="w-screen h-screen flex flex-col p-3">
    {#if !questions.length }
        <form action="?/generate" method="post" use:enhance>
            <Label for="description">Job Description:</Label>
            <Textarea name="description" id="description"/>
            <Button class="my-3" type="submit">Submit</Button>
        </form>
    {:else}
         <p>Questions:</p>
         {#each questions as { question }, i}
         <p>
            <span>{i + 1}.</span>
            { question }
         </p>
        {/each}
    {/if}
</main>