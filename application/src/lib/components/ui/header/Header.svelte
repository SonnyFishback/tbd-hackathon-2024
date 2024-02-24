<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import Sun from "svelte-radix/Sun.svelte";
    import Moon from "svelte-radix/Moon.svelte";
    import { toggleMode } from "mode-watcher";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { enhance } from '$app/forms';
	export let session: any;
	import { Linkedin, Hexagon } from 'lucide-svelte';
</script>

<header>
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
					<a href="/themes" class="hover:text-foreground/80 text-foreground/60 transition-colors"
						>Features</a
					>
					<a href="/examples" class="hover:text-foreground/80 text-foreground/60 transition-colors"
						>Pricing</a
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

					{#if session}
						<DropdownMenu.Root>
							<DropdownMenu.Trigger asChild let:builder>
								<Button builders={[builder]} variant="outline">{session.user.user_metadata.given_name}</Button>
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
									<form method="POST" action="/account?/logout" use:enhance>
										<Button type="submit" variant="ghost">Logout</Button>
									</form>
									<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
								</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
						{:else}
							<form method="POST" action="/account?/login" use:enhance>
								<Button variant="ghost" size="sm" type="submit" name="provider" value="google">
									<Hexagon />
								</Button>
								<Button variant="ghost" size="sm" type="submit" name="provider" value="linkedin_oidc">
									<Linkedin />
								</Button>
							</form>
						{/if}

				</nav>
			</div>
		</div>
</header>
