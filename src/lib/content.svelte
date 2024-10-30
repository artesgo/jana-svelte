<script lang="ts">
	import type { Snippet } from "svelte";

	let { children }: { children: Snippet } = $props();
</script>

<div class="dark:bg-slate-900 bg-slate-200 p-4 rounded-md">
  {@render children()}
</div>