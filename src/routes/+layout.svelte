<script lang="ts">
	import '../app.css';
	import { themeFacade } from '$lib';
	let { children } = $props();
</script>

<div
	class={themeFacade().theme +
		' flex min-h-screen flex-col items-center justify-between bg-white text-black transition-colors duration-1000 dark:bg-black dark:text-white'}
>
	<section class="relative">
		<img src="./aurora-sky.png" role="presentation" alt="aurora" />
		<div class="absolute bottom-0 right-0 p-4 text-xs text-[#FC0] sm:p-6 sm:text-sm">
			"In creative flow I truly am with the UNIVERSE" Jana Vizdal
		</div>
	</section>
	<nav class="items-center sm:w-full sm:px-2 md:flex md:w-[700px] md:justify-between lg:w-[900px]">
		<img class="mx-auto md:mx-0" src="./Logo.png" alt="logo" width="299px" height="83px" />
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
	<main class="flex flex-row items-center gap-4 md:w-3/4">
		<section class="flex flex-col gap-2">
			<!-- side nav -->
			<a href="/design">Design</a>
			<a href="/sale">For sale</a>
			<a href="/projects">Projects</a>
			<a href="/poetry">Poetry</a>
			<a href="/music">Music</a>
		</section>
		<section class="flex-grow">
			{@render children()}
		</section>
	</main>
	<footer
		class="bg-white text-center text-black transition-all duration-1000 mt-8 dark:bg-black dark:text-white"
	>
		© 2024 Artesgo. All rights reserved.
		<img src="./aurora-reflected.png" role="presentation" alt="reflected" class="aurora" />
	</footer>
</div>
