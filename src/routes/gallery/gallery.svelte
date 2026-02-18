<script lang="ts">
	import { dev } from '$app/environment';
	import type { GalleryItem } from '$lib/gallary.svelte';
	import { assetBaseUrl } from '$lib/image';
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	// const facade = pathFacade();
	let {
		images,
		link = false,
		cols = 3,
		controls = false
	}: { images: GalleryItem[]; link: boolean; cols: number; controls: boolean } = $props();
	const imagesDividedByCols = $derived(splitArrayIntoCols(images));

	function splitArrayIntoCols(list: GalleryItem[]) {
		const _cols = Math.min(list.length, cols);
		const length = Math.ceil(list.length / _cols);
		const result = [];
		for (let i = 0; i < cols; i++) {
			result.push(list.slice(i * length, (i + 1) * length));
		}
		return result;
	}

	onMount(() => {
		cols = +(localStorage.getItem('cols') || 3);
	});

	$effect(() => {
		localStorage.setItem('cols', cols.toString());
	});

	const path = dev ? 'http://localhost:5173' : assetBaseUrl;
</script>

{#if controls}
	<div class="flex justify-center">
		<button class="btn btn-primary btn-sm" onclick={() => (cols = 3)}>3</button>
		<button class="btn btn-primary btn-sm" onclick={() => (cols = 4)}>4</button>
		<button class="btn btn-primary btn-sm" onclick={() => (cols = 5)}>5</button>
	</div>
{/if}

<div class="flex gap-2">
	{#each imagesDividedByCols as col}
		<div class={'flex w-1/2 flex-col gap-2'} transition:scale>
			{#each col as item}
				{#if link}
					<a href="/gallery/full/{item.short}">
						<img src={path + '/' + item.category + '/' + item.path} alt="" />
					</a>
				{:else}
					<img src={path + '/' + item.category + '/' + item.path} alt="" />
				{/if}
			{/each}
		</div>
	{/each}
</div>

<style>
	img {
		border-radius: 10px;
	}
</style>
