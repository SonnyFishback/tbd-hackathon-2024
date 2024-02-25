<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Sun from 'svelte-radix/Sun.svelte';
	import Moon from 'svelte-radix/Moon.svelte';
	import { toggleMode } from 'mode-watcher';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { enhance } from '$app/forms';
	export let session: any;
	import { Linkedin, Hexagon } from 'lucide-svelte';
	import { Avatar, Image, Fallback } from '$lib/components/ui/avatar';
	import { goto } from '$app/navigation';
	function navigateTo(path: string) {
		goto(path);
	}
</script>

<header>
	<div class="container flex h-14 max-w-screen-2xl items-center">
		<div class="mr-4 hidden md:flex">
			<a href="/" class="mr-6 flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="h-6 w-6">
					<rect width="256" height="256" fill="none"></rect>
					<line
						x1="37"
						y1="37"
						x2="219"
						y2="37"
						fill="none"
						stroke="#F36036"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="24"
					></line>
					<!-- Right line with rounded ends (green) -->
					<line
						x1="219"
						y1="37"
						x2="219"
						y2="219"
						fill="none"
						stroke="#2B8A6E"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="24"
					></line>
					<!-- Bottom line with rounded ends (brown) -->
					<line
						x1="37"
						y1="219"
						x2="219"
						y2="219"
						fill="none"
						stroke="#8D5B4C"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="24"
					></line>
					<!-- Left line with rounded ends (blue) -->
					<line
						x1="37"
						y1="37"
						x2="37"
						y2="219"
						fill="none"
						stroke="#447B9C"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="24"
					></line>
				</svg>

				<span class="hidden font-bold sm:inline-block">prep.io</span></a
			>
		</div>
		<button
			type="button"
			tabindex="0"
			aria-haspopup="dialog"
			aria-expanded="false"
			data-melt-dialog-trigger=""
			data-dialog-trigger=""
			class="mr-2 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-0 py-2 text-base font-medium transition-colors hover:bg-transparent hover:text-accent-foreground focus-visible:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 md:hidden"
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
							<Button size="sm" builders={[builder]} variant="ghost">
								<Avatar>
									<Image
										src={session.user.app_metadata.provider === 'google'
											? session.user.user_metadata.avatar_url
											: session.user.user_metadata.picture}
										alt="Profile Picture"
									></Image>

									<Fallback>{session.user.email[0]}</Fallback>
								</Avatar>
							</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content class="w-56">
							<DropdownMenu.Label>My Account</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<DropdownMenu.Group>
								<DropdownMenu.Item on:click={() => navigateTo('/account')}>
									Account
									<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
								</DropdownMenu.Item>
								<DropdownMenu.Item on:click={() => navigateTo('/account/interviews')}>
									My Interviews
									<DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
								</DropdownMenu.Item>
								<DropdownMenu.Item on:click={() => navigateTo('/dashboard')}>
									Dashboard
									<DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
								</DropdownMenu.Item>
							</DropdownMenu.Group>
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
							<img src="../../../../../google-logo.png" width="20" alt="google logo" />
						</Button>
						<Button variant="ghost" size="sm" type="submit" name="provider" value="linkedin_oidc">
							<img src="../../../../../linkedin-logo.png" width="20" alt="linkedin logo" />
						</Button>
					</form>
				{/if}
			</nav>
		</div>
	</div>
</header>
