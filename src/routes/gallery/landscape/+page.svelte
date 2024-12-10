<script lang="ts">
	import { assetBaseUrl } from '$lib/image';
	import Gallery from '../gallery.svelte';

	const paintings = $state([
		"2024-12-01-231255_004.jpeg",
		"2024-12-01-231255_005.jpeg",
		"2024-12-01-231255_008.jpeg",
		"2024-12-01-231255_009.jpeg",
		"2024-12-01-231255_011.jpeg",
	]);

	const images = $derived(paintings.map((image) => assetBaseUrl + '/landscape/' + image));
</script>

<h1>Gallery</h1>

<Gallery {images} link={false} cols={3} controls={false} />
