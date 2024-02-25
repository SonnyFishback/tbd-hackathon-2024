<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import { GalleryVerticalEnd } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Progress } from '$lib/components/ui/progress';
	import { Separator } from '$lib/components/ui/separator';
	export let data: PageData;
	export let form: PageData;
	import * as RadioGroup from '$lib/components/ui/radio-group';

	$: questions = data.questions;

	let answers: string[] = [];

	export const snapshot: import('./$types').Snapshot<string[]> = {
		capture: () => answers,
		restore: (value: string[]) => {
			value.forEach((v) => answers.push(v));
		}
	};
</script>

<form method="post" use:enhance>
	<Card.Root class="w-full">
		<Card.Header>
			<div class="flex justify-between">
				<div class="align-text-middle place-middle flex gap-4 align-middle">
					<div>
						<GalleryVerticalEnd />
					</div>
					<div>
						<Card.Title>Your Interview</Card.Title>
					</div>
				</div>
			</div>
		</Card.Header>
		<Separator class="mb-8" />
		<Card.Content>
			{#each questions as question (question.id)}
				<fieldset class="mb-6">
					<legend class="text-xl font-semibold tracking-tight">
						{question.text}
					</legend>
					<Separator class="mb-8" />
					<div class="flex flex-col space-y-2 gap-2">
							{#each question.answers as answer (answer.id)}
								<div class="flex items-center space-x-2">
                                    <input type="radio" name={question.id} id={answer.id} value={answer.id}/>
									<Label for={answer.id}>{answer.text}</Label>
								</div>
							{/each}
					</div>
				</fieldset>
			{/each}
		</Card.Content>
		<Separator class="mb-8" />
		<Card.Footer class="flex justify-end gap-2">
			<Button type="submit">Submit Your Interview</Button>
		</Card.Footer>
	</Card.Root>
</form>
<section class="mt-8 hidden md:block w-full">
	<div class="bg-background overflow-hidden rounded-lg border shadow-lg">
		<div class="md:hidden">
			<img
				alt="Mail"
				loading="lazy"
				width="1280"
				height="727"
				decoding="async"
				data-nimg="1"
				class="hidden dark:block"
				srcset="/_next/image?url=%2Fexamples%2Fmail-dark.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fexamples%2Fmail-dark.png&amp;w=3840&amp;q=75 2x"
				src="/_next/image?url=%2Fexamples%2Fmail-dark.png&amp;w=3840&amp;q=75"
				style="color: transparent;"
			/><img
				alt="Mail"
				loading="lazy"
				width="1280"
				height="727"
				decoding="async"
				data-nimg="1"
				class="block dark:hidden"
				srcset="/_next/image?url=%2Fexamples%2Fmail-light.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fexamples%2Fmail-light.png&amp;w=3840&amp;q=75 2x"
				src="/_next/image?url=%2Fexamples%2Fmail-light.png&amp;w=3840&amp;q=75"
				style="color: transparent;"
			/>
		</div>
		<div class="hidden flex-col md:flex">
			<div
				class="flex h-full max-h-[800px] w-full items-stretch data-[panel-group-direction=vertical]:flex-col"
				data-panel-group=""
				data-panel-group-direction="horizontal"
				data-panel-group-id=":rk:"
				data-panel-group-units="percentages"
				style="display: flex; flex-direction: row; height: 100%; overflow: hidden; width: 100%;"
			>
				<div
					class=""
					data-panel=""
					data-panel-collapsible="true"
					data-panel-id=":rl:"
					data-panel-size="20.0"
					id="data-panel-id-:rl:"
					style="flex: 20 1 0px; overflow: hidden;"
				>
					<div class="flex h-[52px] items-center px-2">
						<User class="mr-2" />Sonny, Fshback
					</div>
					<div
						data-orientation="horizontal"
						role="none"
						class="bg-border h-[1px] w-full shrink-0"
					></div>
					<div
						data-collapsed="false"
						class="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
					>
						<nav
							class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2"
						>
							<a
								class="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-muted dark:hover:bg-muted inline-flex h-9 items-center justify-start whitespace-nowrap rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:text-white"
								href="/account"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="mr-2 h-4 w-4"
									><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path
										d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
									></path></svg
								>My Account</a
							><a
								class="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-start whitespace-nowrap rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
								href="/interviews"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="mr-2 h-4 w-4"
									><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
									></path><polyline points="14 2 14 8 20 8"></polyline></svg
								>My Interviews<span class="ml-auto" data-svelte-h="svelte-1s8i1uz">9</span></a
							><a
							class="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-start whitespace-nowrap rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
							href="#"
							><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="mr-2 h-4 w-4"
							><rect width="20" height="5" x="2" y="3" rx="1"></rect><path
								d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
							></path><path d="M10 12h4"></path></svg
						>Failed Interviews<span class="ml-auto" data-svelte-h="svelte-1s8i1uz">4</span></a
						><a
						class="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-start whitespace-nowrap rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						href="#"
						><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mr-2 h-4 w-4"
						><rect width="20" height="5" x="2" y="3" rx="1"></rect><path
							d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
						></path><path d="M10 12h4"></path></svg
					>Successfull Interviews<span class="ml-auto" data-svelte-h="svelte-1s8i1uz">17</span></a
					><a
					class="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-start whitespace-nowrap rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
					href="#"
					><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="mr-2 h-4 w-4"
					><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"
					></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg
				>Unfinished Interviews<span class="ml-auto" data-svelte-h="svelte-1s8i1uz">5</span></a
				>
						</nav>
					</div>
					<div
						data-orientation="horizontal"
						role="none"
						class="bg-border h-[1px] w-full shrink-0"
					></div>
					<div
						data-collapsed="false"
						class="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
					>
						<nav
							class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2"
						>

						<form method="POST" action="/account?/logout" use:enhance>
							<Button type="submit" variant="ghost"><svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="mr-2 h-4 w-4"
								><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg
							> Logout</Button>
						</form>
						</nav>
					</div>
				</div>
				<div
					class="bg-border focus-visible:ring-ring [&amp;[data-panel-group-direction=vertical]>div]:rotate-90 relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0"
					data-panel-group-direction="horizontal"
					data-panel-group-id=":rk:"
					data-panel-resize-handle-enabled="true"
					data-panel-resize-handle-id=":rn:"
					role="separator"
					tabindex="0"
					aria-valuemax="20"
					aria-valuemin="15"
					aria-valuenow="20"
					aria-controls="data-panel-id-:rl:"
					style="cursor: ew-resize; touch-action: none; user-select: none;"
				>
					<div class="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-sm border">
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="h-2.5 w-2.5"
							><path
								d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z"
								fill="currentColor"
								fill-rule="evenodd"
								clip-rule="evenodd"
							></path></svg
						>
					</div>
				</div>
				<div
					class=""
					data-panel=""
					data-panel-id=":ro:"
					data-panel-size="40.0"
					id="data-panel-id-:ro:"
					style="flex: 40 1 0px; overflow: hidden;"
				>
					<div dir="ltr" data-orientation="horizontal">
						<div class="flex justify-between py-2" style="height: 52px">
							<h3 class="font-bold ml-4 mt-1" data-svelte-h="svelte-18nop4c">Interview Process</h3>
						
						</div>
						<div
							data-orientation="horizontal"
							role="none"
							class="bg-border h-[1px] w-full shrink-0"
						></div>
						<div
							data-state="active"
							data-orientation="horizontal"
							role="tabpanel"
							aria-labelledby="radix-:rp:-trigger-all"
							id="radix-:rp:-content-all"
							tabindex="0"
							class="ring-offset-background focus-visible:ring-ring m-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
							style="animation-duration: 0s;"
						>
							<div
								dir="ltr"
								class="relative h-screen overflow-hidden"
								style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
							>
								<div
									data-radix-scroll-area-viewport=""
									class="h-full w-full rounded-[inherit]"
									style="overflow: hidden scroll;"
								>
									<div style="min-width: 100%; display: table;">
										<div class="flex flex-col gap-2 mt-4 p-4 pt-0">
											List of Questions
											{#each questions as question, index (question.id)}
												<fieldset>
													<div
														class="hover:bg-accent flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all"
														>
														<div class="flex w-full flex-col gap-1">
															<div class="flex items-center">
																<div class="flex items-center gap-2">
																	<span class="flex h-2 w-2 rounded-full bg-blue-600"></span>
																	<div class="font-semibold" data-svelte-h="svelte-p0pb6t">
																		{question.text}
																	</div>
																</div>
																<div
																	class="text-muted-foreground ml-auto text-lg"
																	data-svelte-h="svelte-ra1srf"
																>
																	
																	<div
																		class="focus:ring-ring text-foreground inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
																		data-svelte-h="svelte-1qbzt09"
																	>
																		{index+1}
																	</div>
																	</div>
															</div>
															<!-- <div class="text-xs font-medium" data-svelte-h="svelte-36bk8p">
																Weekend Hike
															</div> -->
														</div>
														<div
															class="text-muted-foreground line-clamp-2 text-xs w-full"
															data-svelte-h="svelte-tlimnv"
														>

														<Separator class="mb-4" />
														<div class="flex flex-col space-y-2">
															{#each question.answers as answer (answer.id)}
																<div class="flex space-x-2">
																	<input type="radio" name={question.id} id={answer.id} value={answer.id}/>
																	<Label for={answer.id}>{answer.text}</Label>
																</div>
															{/each}
														</div>
														</div>
													</div>

												</fieldset>
												{/each}
											<Button type="submit">Submit Your Interview</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							data-state="inactive"
							data-orientation="horizontal"
							role="tabpanel"
							aria-labelledby="radix-:rp:-trigger-unread"
							id="radix-:rp:-content-unread"
							tabindex="0"
							class="ring-offset-background focus-visible:ring-ring m-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>