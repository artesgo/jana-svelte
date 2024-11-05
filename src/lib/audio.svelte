<script lang="ts">
	import type { Snippet } from "svelte";

  let { src, children }: { src: string, children?: Snippet } = $props();
</script>

<div>
  {#if children}
    {@render children() }
  {/if}
  <audio style="width: 300px" {src} controls volume={0.25}></audio>
</div>
