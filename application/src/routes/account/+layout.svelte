<script lang="ts">
	import type { LayoutData } from './$types';
	import { cn } from '$lib/utils';
	import type { SidebarNavItem } from './types';
	import { page } from '$app/stores';
	export let data: LayoutData;

	const items: SidebarNavItem[] = [
		{
			title: 'My Account',
			href: '/account',

			items: []
		},
		{
			title: 'My Interviews',
			href: '/account/interviews',
			items: []
		}
	];
</script>

<div class="border-b">
	<div
		class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
	>
		<aside
			class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:block"
		>
			<div class="h-full py-6 pr-6 lg:py-8">
				{#if items.length}
					<nav class="w-full">
						<ul class=" list-none">
							{#each items as item, index (index)}
								<li>
									<a
										href={item.href}
										class={cn(
											'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline',
											item.disabled && 'cursor-not-allowed opacity-60',
											$page.url.pathname === item.href
												? 'font-medium text-foreground'
												: 'text-muted-foreground'
										)}
										aria-current={$page.url.pathname === item.href ? 'page' : undefined}
										target={item.external ? '_blank' : ''}
										rel={item.external ? 'noreferrer' : ''}
									>
										{item.title}
										{#if item.label}
											<span
												class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline"
											>
												{item.label}
											</span>
										{/if}
									</a>
								</li>
							{/each}
						</ul>
					</nav>
				{/if}
			</div>
		</aside>
		<slot />
	</div>
</div>
