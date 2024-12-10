<script>
	import Content from "$lib/content.svelte";
	import Link from "../link.svelte";

	let { children } = $props();
</script>
<section class="dark:bg-slate-800 bg-slate-100 rounded-md">
	<nav>
		<ul class="flex flex-wrap gap-6 text-sm p-4">
			<li><Link href="/gallery/paintings" label="Paintings" /></li>
			<li><Link href="/gallery/murals" label="Murals" /></li>
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