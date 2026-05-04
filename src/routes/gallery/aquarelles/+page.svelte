<script lang="ts">
	import { gallery } from '$lib/gallary.svelte';
	import Gallery from '../gallery.svelte';

	const images = $derived(gallery.filter((item) => item.category === 'aquarelles'));
</script>

<h1>Gallery</h1>

<Gallery {images} link={true} cols={3} controls={false} />
