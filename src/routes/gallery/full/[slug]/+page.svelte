<script>
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { gallery } from '$lib/gallary.svelte';
	import { assetBaseUrl } from '$lib/image';
	const data = $page.params;
	const params = $derived(data.slug);
	const category = $derived(gallery.find((item) => item.short === params)?.category);
	const path = dev ? 'http://localhost:5173' : assetBaseUrl;
	const image = $derived(gallery.find((item) => item.short === params));
	const imageUrl = $derived(path + '/' + image?.category + '/' + image?.path);
</script>

<div class="container">
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
