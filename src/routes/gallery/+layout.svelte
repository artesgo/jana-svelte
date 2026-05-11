<script>
	import Content from '$lib/content.svelte';
	import Link from '../link.svelte';

	let { children } = $props();
</script>

<section class="rounded-md bg-slate-100 dark:bg-slate-800">
	<nav>
		<ul class="flex flex-wrap gap-6 p-4 text-sm">
			<li><Link href="/gallery/squarely" label="Squarely Studies" /></li>
			<li><Link href="/gallery/paintings" label="Paintings" /></li>
			<li><Link href="/gallery/murals" label="Murals" /></li>
			<li><Link href="/gallery/aquarelles" label="Aquarelles" /></li>
			<li><Link href="/gallery/sculptures" label="Sculptures" /></li>
			<li><Link href="/gallery/furniture" label="Furniture" /></li>
			<li><Link href="/gallery/window" label="Window Murals" /></li>
			<li><Link href="/gallery/landscape" label="Garden and Landscape" /></li>
		</ul>
	</nav>

	<Content>
		{@render children()}

		<p class="mt-4 text-center">© Jana Vizdal</p>
	</Content>
</section>
