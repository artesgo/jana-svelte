<script lang="ts">
	import Content from '$lib/content.svelte';

	let { children } = $props();
</script>

<nav class="mb-4">
	<ul class="flex flex-wrap gap-6 text-sm">
		<li><a href="/poetry/feet">Feet of the Homeless</a></li>
		<li><a href="/poetry/spill">My Canvas is the Street</a></li>
		<li><a href="/poetry/debutant">Debutant</a></li>
		<li><a href="/poetry/flowers">Flowers</a></li>
		<li><a href="/poetry/homeland">Coming to my Homeland</a></li>
		<li><a href="/poetry/election-day">Election Day</a></li>
	</ul>
</nav>

<Content>
	{@render children()}

	<p class="mt-4 text-center">© Jana Vizdal</p>
</Content>
