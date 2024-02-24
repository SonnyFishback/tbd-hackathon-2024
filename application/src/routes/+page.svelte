<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';

    import * as Tabs from "$lib/components/ui/tabs";
    import * as Card from "$lib/components/ui/card";
    import { Label } from "$lib/components/ui/label";
    import * as RadioGroup from "$lib/components/ui/radio-group";

    import Sun from "svelte-radix/Sun.svelte";
    import Moon from "svelte-radix/Moon.svelte";
    import { toggleMode } from "mode-watcher";


    import { Badge } from "$lib/components/ui/badge";
    import * as Avatar from "$lib/components/ui/avatar";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
    import { formSchema, type FormSchema } from "./settings/schema";
    import {
        type SuperValidated,
        type Infer,
        superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    
    export let data: SuperValidated<Infer<FormSchema>>;

</script>

<body data-sveltekit-preload-data="hover" class="bg-background min-h-screen font-sans antialiased">
	<div style="display: contents" class="relative flex min-h-screen flex-col">
		<div
			class="bg-background relative flex min-h-screen flex-col"
			id="page"
			data-vaul-drawer-wrapper=""
		>
			<header
				class="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur"
			>
				<div class="container flex h-14 max-w-screen-2xl items-center">
					<div class="mr-4 hidden md:flex">
						<a href="/" class="mr-6 flex items-center space-x-2"
							><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="h-6 w-6"
								><rect width="256" height="256" fill="none"></rect><line
									x1="208"
									y1="128"
									x2="128"
									y2="208"
									fill="none"
									stroke="#EB4F27"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="16"
								></line><line
									x1="192"
									y1="40"
									x2="40"
									y2="192"
									fill="none"
									stroke="#EB4F27"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="16"
								></line></svg
							> <span class="hidden font-bold sm:inline-block">prep.io</span></a
						>
						<nav class="flex items-center gap-6 text-sm">
							<a href="/docs" class="hover:text-foreground/80 text-foreground/60 transition-colors"
								>Docs</a
							>
							<a
								href="/docs/components"
								class="hover:text-foreground/80 text-foreground/60 transition-colors">Services</a
							>
							<a
								href="/themes"
								class="hover:text-foreground/80 text-foreground/60 transition-colors">Features</a
							>
							<a
								href="/examples"
								class="hover:text-foreground/80 text-foreground/60 transition-colors">Pricing</a
							>
							<a
								href="/"
								target="_blank"
								rel="noopener noreferrer"
								class="text-foreground/60 hover:text-foreground/80 hidden transition-colors lg:block"
								data-svelte-h="svelte-tibn2o">About</a
							>
							<a
								href="/"
								target="_blank"
								rel="noopener noreferrer"
								class="text-foreground/60 hover:text-foreground/80 hidden transition-colors lg:block"
								data-svelte-h="svelte-tibn2o">Contact</a
							>
						</nav>
					</div>
					<button
						type="button"
						tabindex="0"
						aria-haspopup="dialog"
						aria-expanded="false"
						data-melt-dialog-trigger=""
						data-dialog-trigger=""
						class="focus-visible:ring-ring hover:text-accent-foreground mr-2 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-0 py-2 text-base font-medium transition-colors hover:bg-transparent focus-visible:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 md:hidden"
						data-button-root=""
						><svg
							stroke-width="1.5"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							><path
								d="M3 5H11"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path><path
								d="M3 12H16"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path><path
								d="M3 19H21"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path></svg
						> <span class="sr-only" data-svelte-h="svelte-1t6m3jq">Toggle Menu</span></button
					>
					<div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
						<div class="w-full flex-1 md:w-auto md:flex-none">
							<button
								type="button"
								tabindex="0"
								class="focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground text-muted-foreground relative inline-flex h-9 w-full items-center justify-start whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 sm:pr-12 md:w-40 lg:w-64"
								data-button-root=""
								><span class="hidden lg:inline-flex" data-svelte-h="svelte-1y8n1ih"
									>Search documentation...</span
								>
								<span class="inline-flex lg:hidden" data-svelte-h="svelte-1fzukxx">Search...</span>
								<kbd
									class="bg-muted pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
									data-svelte-h="svelte-1gzgq6m"><span class="text-xs">⌘</span>K</kbd
								></button
							>
						</div>
						<nav class="flex items-center">
                            <Button on:click={toggleMode} variant="ghost" class="mr-2" size="icon">
                                <Sun
                                  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                                />
                                <Moon
                                  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                                />
                                <span class="sr-only">Toggle theme</span>
                            </Button>
                              
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger asChild let:builder>
                                  <Button builders={[builder]} variant="outline">User</Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content class="w-56">
                                  <DropdownMenu.Label>My Account</DropdownMenu.Label>
                                  <DropdownMenu.Separator />
                                  <DropdownMenu.Group>
                                    <DropdownMenu.Item>
                                      Profile
                                      <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item>
                                      Billing
                                      <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item>
                                      Settings
                                      <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item>
                                      Keyboard shortcuts
                                      <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
                                    </DropdownMenu.Item>
                                  </DropdownMenu.Group>
                                  <DropdownMenu.Separator />
                                  <DropdownMenu.Group>
                                    <DropdownMenu.Item>Team</DropdownMenu.Item>
                                    <DropdownMenu.Sub>
                                      <DropdownMenu.SubTrigger>Invite users</DropdownMenu.SubTrigger>
                                      <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Email</DropdownMenu.Item>
                                        <DropdownMenu.Item>Message</DropdownMenu.Item>
                                        <DropdownMenu.Separator />
                                        <DropdownMenu.Item>More...</DropdownMenu.Item>
                                      </DropdownMenu.SubContent>
                                    </DropdownMenu.Sub>
                                    <DropdownMenu.Item>
                                      New Team
                                      <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
                                    </DropdownMenu.Item>
                                  </DropdownMenu.Group>
                                  <DropdownMenu.Separator />
                                  <DropdownMenu.Item>GitHub</DropdownMenu.Item>
                                  <DropdownMenu.Item>Support</DropdownMenu.Item>
                                  <DropdownMenu.Item>API</DropdownMenu.Item>
                                  <DropdownMenu.Separator />
                                  <DropdownMenu.Item>
                                    Log out
                                    <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
                                  </DropdownMenu.Item>
                                </DropdownMenu.Content>
                              </DropdownMenu.Root>
                    
						</nav>
					</div>
				</div>
			</header>
			<div class="flex-1">
				<div class="container relative">
					<section
						class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 pb-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20"
					>
						<a
							href="/docs/changelog"
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
							<span class="hidden sm:inline" data-svelte-h="svelte-wm3ivd"
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
                                    <Textarea class="testtest">sss
                                        <p class="line-1 anim-typewriter">Animation typewriter style using css steps()</p>
                                    </Textarea>
                                  </div>
                                </Card.Content>
                                <Card.Footer>
                                    <Button class="mr-2">Start now</Button>
                                    <Button variant="secondary">Demo</Button>
                                </Card.Footer>
                              </Card.Root>
                            </Tabs.Content>
                            <Tabs.Content value="advanced">
                              <Card.Root>
                                <Card.Header>
                                  <Card.Title>Advanced form</Card.Title>
                                  <Card.Description>
                                    Customize your experience to get the best advanced mock interview.
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
		</div>
		<div
			id="svelte-announcer"
			aria-live="assertive"
			aria-atomic="true"
			style="position: absolute; left: 0px; top: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px;"
		></div>
	</div>
</body>

<style>
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
</style>