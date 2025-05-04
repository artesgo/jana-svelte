<script>
	import Content from "$lib/content.svelte";

	let { children } = $props();
</script>
<Content>
	{@render children()}

	<p class="mt-4 text-center">© Jana Vizdal</p>
</Content>
