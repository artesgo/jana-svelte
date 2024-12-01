<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { themeFacade } from '$lib';
	import Link from './link.svelte';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { assetBaseUrl } from '$lib/image';

	let { children } = $props();
	let showNavigation = $state(false);

	onMount(() => {
		if (browser) {
			themeFacade().setTheme(window.localStorage.getItem('theme') || 'dark');
		}
	});

	afterNavigate(() => {
		showNavigation = false;
	});
</script>

<div
	class={themeFacade().theme +
		' mx-auto bg-white text-black transition-colors duration-1000 dark:bg-black dark:text-white'}
>
	<div class="mx-auto flex justify-between min-h-screen flex-col sm:w-full md:w-[700px] lg:w-[900px]">
		<div class="container-main">
			<section class="mb-2">
				<img
					class="w-full"
					src={assetBaseUrl + '/aurora-sky.png'}
					role="presentation"
					alt="aurora"
				/>
				<div class="mt-[-50px] p-4 text-right text-xs text-[#FC0] sm:p-6 sm:text-sm">
					"In creative flow I truly am with the UNIVERSE" Jana Vizdal
				</div>
			</section>
			<nav class="items-center pb-2 sm:px-2 md:flex md:justify-between md:pb-4">
				<img
					class="mx-auto md:mx-0"
					src={assetBaseUrl + '/Logo.png'}
					alt="logo"
					width="299px"
					height="83px"
				/>
				<ul class="flex items-center justify-center gap-2">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<div class="relative inline-block text-left">
							<button
								type="button"
								class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-slate-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset dark:bg-slate-800 dark:text-gray-100"
								id="menu-button"
								aria-expanded="true"
								aria-haspopup="true"
								onclick={() => (showNavigation = !showNavigation)}
							>
								Pages
								<svg
									class="-mr-1 h-5 w-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
								>
									<path
										fill-rule="evenodd"
										d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>

							{#if showNavigation}
								<div class="relative">
									<button
										class="fixed left-0 top-0 z-0 min-h-full w-screen bg-black/50"
										onclick={() => (showNavigation = false)}
									>
										<div class="sr-only">Close</div>
									</button>
									<div
										class="fit-content absolute left-0 right-0 z-10 mt-2 origin-top-right rounded-md bg-slate-200 text-center shadow-lg ring-2 focus:outline-none dark:bg-slate-900"
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="menu-button"
									>
										<div class="z-10 py-1" role="none">
											<Link href="/gallery/paintings" label="Gallery" />
											<!-- <Link href="/design" label="Design" /> -->
											<!-- <Link href="/sale" label="For Sale" /> -->
											<Link href="/projects" label="Projects" />
											<Link href="/poetry" label="Poetry" />
											<Link href="/music" label="Music" />
											<Link href="/about" label="About" />
											<Link href="/contact" label="Contact" />
										</div>
									</div>
								</div>
							{/if}
						</div>
					</li>
					<li>
						<button onclick={themeFacade().toggle}>{themeFacade().theme} mode</button>
					</li>
				</ul>
			</nav>
			<main class="flex flex-col sm:flex-row md:items-start">
				<section class="flex-grow">
					{@render children()}
				</section>
			</main>
		</div>
		<footer
			class="mt-8 self-end bg-white text-center text-black transition-all duration-1000 dark:bg-black dark:text-white"
		>
			<p>Site by Artesgo © 2024. All rights reserved.</p>
			<img
				src={assetBaseUrl + '/aurora-reflected.png'}
				role="presentation"
				alt="reflected"
				class="aurora"
			/>
		</footer>
	</div>
</div>
