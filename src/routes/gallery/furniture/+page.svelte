<script lang="ts">
	import { assetBaseUrl } from '$lib/image';
	import Gallery from '../gallery.svelte';

	const paintings = $state([
		'449436259_7798686076834196_5999431338271248670_n.jpg',
		'449487023_7798686070167530_2685129615667842491_n.jpg',
		'449653281_7798686060167531_8616791023003179067_n.jpg',
		'449708041_7798686080167529_5956719425143570085_n.jpg',
		'449726853_7798686056834198_866279041002162164_n.jpg'
	]);

	const images = $derived(paintings.map((image) => assetBaseUrl + '/furniture/' + image));
</script>

<h1>Gallery</h1>

<Gallery {images} link={false} cols={3} controls={false} />
