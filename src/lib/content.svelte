<script lang="ts">
	import type { Snippet } from "svelte";

	let { children }: { children: Snippet } = $props();
</script>

<div class="backdrop-blur bg-slate-900/75 p-4 border border-cyan-800 rounded-md">
  {@render children()}
</div>