<script lang="ts">
	import { assetBaseUrl } from '$lib/image';
	import Gallery from '../gallery.svelte';

	const paintings = $state([
		"abundance.jpeg",
		"blossom.jpeg",
		"on the lake.jpeg",
		"ranch.jpeg",
	]);

	const images = $derived(paintings.map((image) => assetBaseUrl + '/window/' + image));
</script>

<h1>Gallery</h1>

<Gallery {images} link={false} cols={3} controls={false} />
