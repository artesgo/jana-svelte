<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { themeFacade } from '$lib';
	import ActiveLink from './activeLink.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		if (browser) {
			themeFacade().setTheme(window.localStorage.getItem('theme') || 'dark');
		}
	});
</script>

<div
	class={themeFacade().theme +
		' flex min-h-screen flex-col items-center justify-between bg-white text-black transition-colors duration-1000 dark:bg-black dark:text-white'}
>
	<div>
		<section class="relative">
			<img src="/aurora-sky.png" role="presentation" alt="aurora" />
			<div class="absolute bottom-0 right-0 p-4 text-xs text-[#FC0] sm:p-6 sm:text-sm">
				"In creative flow I truly am with the UNIVERSE" Jana Vizdal
			</div>
		</section>
		<div class="mx-auto sm:w-full md:w-[700px] lg:w-[900px]">
			<nav class="items-center pb-0 sm:px-2 md:flex md:justify-between md:pb-4">
				<img class="mx-auto md:mx-0" src="/Logo.png" alt="logo" width="299px" height="83px" />
				<ul class="flex justify-center gap-2">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
					<li>
						<button onclick={themeFacade().toggle}>{themeFacade().theme} mode</button>
					</li>
				</ul>
			</nav>
			<main class="flex flex-col sm:flex-row md:items-start">
				<section class="flex flex-row gap-2 pt-4 sm:flex-col md:pt-12">
					<!-- side nav -->
					<ActiveLink href="/design" label="Design" />
					<ActiveLink href="/sale" label="For Sale" />
					<ActiveLink href="/projects" label="Projects" />
					<ActiveLink href="/poetry" label="Poetry" />
					<ActiveLink href="/music" label="Music" />
				</section>
				<section class="flex-grow">
					{@render children()}
				</section>
			</main>
		</div>
	</div>
	<footer
		class="mt-8 bg-white text-center text-black transition-all duration-1000 dark:bg-black dark:text-white"
	>
		<p>Site by Artesgo © 2024. All rights reserved.</p>
		<img src="/aurora-reflected.png" role="presentation" alt="reflected" class="aurora" />
	</footer>
</div>
