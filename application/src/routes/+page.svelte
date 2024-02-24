<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
    import * as Tabs from "$lib/components/ui/tabs";
    import * as Card from "$lib/components/ui/card";
    import AdvancedForm from "$lib/custom-components/form/AdvancedForm.svelte";
    // import * as Form from "$lib/components/ui/form";
</script>

<div class="flex-1">
    <div class="container relative">
        <section
            class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 pb-8 md:py-12 md:pb-8 lg:py-12 lg:pb-20"
        >
            <a
                href="/"
                class="bg-muted inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium"
                >🔺 <div
                    role="none"
                    aria-orientation="vertical"
                    aria-hidden="true"
                    data-orientation="vertical"
                    data-melt-separator=""
                    data-separator-root=""
                    class="bg-border mx-2 h-4 w-[1px] shrink-0"
                ></div>
                <span data-svelte-h="svelte-1puani1" style="font-weight: bold"
                    >+12,959 </span
                >
                <span class="ml-4" data-svelte-h="svelte-wm3ivd"
                    >Successful Interviews, Still counting!</span
                >
                <img src="" alt="" srcset="" />
            </a>
            <h1
                class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
            >
            Modern <span style="color: blue">Hiring</span> Tools<br/>
            for all <span style="color: red">Interviews!</span>
            </h1>
            <p
                class="text-muted-foreground max-w-[750px] text-balance text-center text-lg sm:text-xl"
            >
                Conquer interviews with next-gen AI coaching. Uncover your strengths,<br/>practice like a pro, and nail your dream job.
            </p>
            <p
                class="text-center text-sm text-orange-700 dark:text-orange-400"
                data-svelte-h="svelte-k797bx"
            >
                This is our hackathon version of <a
                    href="https://github.com/shadcn/ui"
                    target="_blank"
                    rel="noreferrer"
                    class="font-medium underline underline-offset-4">prep.io</a
                >
                official version, will be released in
                <a
                    href="https://twitter.com/shadcn"
                    target="_blank"
                    rel="noreferrer"
                    class="font-medium underline underline-offset-4">October 2024</a
                >.
            </p>
            <br/>
            <Tabs.Root value="advanced" class="w-[700px]">
                <Tabs.List class="grid w-full grid-cols-2">
                    <Tabs.Trigger value="instant">Instant Practice</Tabs.Trigger>
                    <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="instant">
                    <Card.Root>
                    <Card.Header>
                        <Card.Title>Job Description</Card.Title>
                        <Card.Description>
                        <p class="line-1 anim-typewriter">Animation typewriter style using css steps()</p>
                        </Card.Description>
                    </Card.Header>
                    <Card.Content class="space-y-2">
                        <div class="space-y-1">
                            <form method="POST">
                                <Textarea class="testtest">
                                    <p class="line-1 anim-typewriter">Animation typewriter style using css steps()</p>
                                </Textarea>
                                <Button type="submit" class="mt-8 mr-2">Start now</Button>
                                <Button type="button" variant="secondary">Demo</Button>
                              </form>
                        </div>
                    </Card.Content>
                    </Card.Root>
                </Tabs.Content>
                <Tabs.Content value="advanced">
                    <Card.Root>
                    <Card.Header>
                        <Card.Title>Advanced form</Card.Title>
                        <Card.Description>
                        Customize your experience to get the best advanced mock interview.
                        <AdvancedForm />
                        </Card.Description>
                    </Card.Header>
                    <Card.Content class="space-y-2">
                        <div class="space-y-1">
                        </div>
                    </Card.Content>
                    <!-- <Card.Footer>
                        <Button>Card Footer</Button>
                    </Card.Footer> -->
                    </Card.Root>
                </Tabs.Content>
            </Tabs.Root>

        </section>
        <div class="relative">
            <div class="lg:max-w-none">
                <div
                    class="[&amp;>a:first-child]:text-primary mb-4 flex items-center overflow-y-auto pb-3 md:pb-0"
                >
                    <a
                        href="/"
                        data-sveltekit-noscroll=""
                        class="hover:text-primary text-primary relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm font-medium transition-colors"
                        ><div class="bg-muted absolute inset-0 rounded-full"></div>
                        <div class="relative">Dashboard</div>
                    </a><a
                        href="/"
                        data-sveltekit-noscroll=""
                        class="hover:text-primary text-muted-foreground relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors"
                    >
                        <div class="relative">Services</div>
                    </a><a
                        href="/"
                        data-sveltekit-noscroll=""
                        class="hover:text-primary text-muted-foreground relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors"
                    >
                        <div class="relative">Features</div>
                    </a><a
                        href="/"
                        data-sveltekit-noscroll=""
                        class="hover:text-primary text-muted-foreground relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors"
                    >
                        <div class="relative">Pricing</div>
                    </a><a
                        href="/"
                        data-sveltekit-noscroll=""
                        class="hover:text-primary text-muted-foreground relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors"
                    >
                        <div class="relative">Demo</div>
                    </a><a
                        href="/"
                        data-sveltekit-noscroll=""
                        class="hover:text-primary text-muted-foreground relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors"
                    >
                        <div class="relative">About</div>
                    </a><a
                        href="/examples/authentication"
                        data-sveltekit-noscroll=""
                        class="hover:text-primary text-muted-foreground relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors"
                    >
                        <div class="relative">Contact</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<footer class="py-6 w-[700px]">
    <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p class="text-muted-foreground text-center text-sm leading-loose md:text-left">
                Built &amp; designed by <a
                    href="https://twitter.com/shadcn"
                    target="_blank"
                    rel="noreferrer"
                    class="font-medium underline underline-offset-4"
                    data-svelte-h="svelte-18aekvv">hashX0</a
                >. Secured by
                <a
                    href="https://twitter.com/huntabyte"
                    target="_blank"
                    rel="noreferrer"
                    class="font-medium underline underline-offset-4"
                    data-svelte-h="svelte-9fj64u">SecureX</a
                >. Copyrights reserved 
                <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    class="font-medium underline underline-offset-4"
                    data-svelte-h="svelte-fj0xt9">2024</a
                >.
            </p>
        </div>
    </div>
</footer>

<!-- <style>
    Textarea {
        display: none;
    }
    .testtest {
        color: red;
    }
    .line-1{
        width: 100%;
        white-space: nowrap;
        /* position: relative;
        top: 50%;  
        width: 24em;
        margin: 0 auto;
        border-right: 2px solid rgba(255,255,255,.75);
        font-size: 180%;
        text-align: center;
        overflow: hidden;
        transform: translateY(-50%);     */
    }

/* Animation */
.anim-typewriter{
  animation: typewriter 4s steps(44) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 24em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}
</style> -->