<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { themeFacade } from '$lib';
	import { assetBaseUrl } from '$lib/image';
	import { onMount } from 'svelte';
	import '../app.css';
	import Link from './link.svelte';

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

	const year = new Date().getFullYear();
</script>

<div id="app">
	<div class="mx-auto flex justify-between min-h-screen flex-col sm:w-full md:w-[700px] lg:w-[900px]">
		<div class="container-main">
			<section class="mb-2">
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
								class="inline-flex w-full justify-center border border-cyan-800 rounded-md px-2 py-1 text-sm font-semibold backdrop-blur bg-slate-800/75 text-gray-100"
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
										class="fit-content absolute left-0 right-0 z-10 mt-2 origin-top-right border border-cyan-800 rounded-md text-center focus:outline-none backdrop-blur"
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="menu-button"
									>
										<div class="z-10 py-1" role="none">
											<Link href="/gallery/full/95722005" label="Gallery" />
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
				</ul>
			</nav>
			<main class="flex flex-col sm:flex-row md:items-start">
				<section class="flex-grow">
					{@render children()}
				</section>
			</main>
		</div>
		<footer
			class="my-8 flex justify-between text-white"
		>
			<p class="px-2 py-1 border border-cyan-800 rounded-md backdrop-blur bg-slate-900/75">Photo by <a href="https://unsplash.com/@shuttergenic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Serey Kim</a> on <a href="https://unsplash.com/photos/aurora-borealis-vUePu7hAYAQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
			<p class="px-2 py-1 border border-cyan-800 rounded-md backdrop-blur bg-slate-900/75">Site by Artesgo © {year}. All rights reserved.</p>
		</footer>
	</div>
</div>

<style>
	#app {
		background-image: url('https://raw.githubusercontent.com/artesgo/jana-svelte/refs/heads/main/static/serey-kim-v-Ue-Pu7h-AYAQ-unsplash.jpg');
		background-size: cover;
		background-attachment: fixed;
		background-repeat: none;
		color: white;
	}

	.fit-content {
		width: fit-content;
		margin-inline: auto; 
	}

	
</style>