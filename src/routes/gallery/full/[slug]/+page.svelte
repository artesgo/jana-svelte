<script>
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { gallery } from '$lib/gallary.svelte';
	import { assetBaseUrl } from '$lib/image';
	const data = $page.params;
	const params = $derived(data.slug);
	const path = dev ? 'http://localhost:5173' : assetBaseUrl;
	const image = $derived(gallery.find((item) => item.short === params));
	const imageUrl = $derived(image?.url || path + '/' + image?.category + '/' + image?.path);
	const imageTitle = $derived(image?.title);
</script>

<div class="container">
	{#if imageTitle}
		<h1 class="mb-4 text-center text-2xl font-bold">{imageTitle}</h1>
	{/if}
	<img src={imageUrl} alt="" />
</div>

<style>
	.container {
		width: 100%;
	}
	img {
		margin: 0 auto;
	}
</style>
