<script lang="ts">
	import Content from '$lib/content.svelte';
	import ActiveLink from '../activeLink.svelte';

	let { children } = $props();
</script>

<section class="dark:bg-slate-800 bg-slate-100 rounded-md">
	<nav>
		<ul class="flex flex-wrap gap-6 text-sm p-4">
			<li><ActiveLink href="/poetry/feet" label="Feet of the Homeless" /></li>
			<li><ActiveLink href="/poetry/spill" label="My Canvas is the Street" /></li>
			<li><ActiveLink href="/poetry/debutant" label="Debutant" /></li>
			<li><ActiveLink href="/poetry/flowers" label="Flowers" /></li>
			<li><ActiveLink href="/poetry/homeland" label="Coming to my Homeland" /></li>
			<li><ActiveLink href="/poetry/election-day" label="Election Day" /></li>
		</ul>
	</nav>

	<Content>
		{@render children()}

		<p class="mt-4 text-center">© Jana Vizdal</p>
	</Content>
</section>
