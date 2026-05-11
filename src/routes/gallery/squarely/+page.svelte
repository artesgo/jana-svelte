<script lang="ts">
	import { gallery } from '$lib/gallary.svelte';
	import Gallery from '../gallery.svelte';

	const images = $state(gallery.filter((item) => item.category === 'squarely'));
</script>

<h1>Gallery</h1>

<Gallery {images} link={true} cols={3} controls={false} />
