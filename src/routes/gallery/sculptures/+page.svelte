<script lang="ts">
	import { assetBaseUrl } from '$lib/image';
	import Gallery from '../gallery.svelte';

	const paintings = $state([
		'449294915_7798686666834137_7799047040659639234_n.jpg',
		'449300396_7798686663500804_128920523397674300_n.jpg',
		'449301865_7798686653500805_7483731759409818363_n.jpg',
		'449309090_7798686380167499_7943636083101602551_n.jpg',
		'449437976_7798686656834138_6592071912856038755_n.jpg',
		'449439821_7798686673500803_93017445375315135_n.jpg',
		'449720607_7798686646834139_4524109893269680871_n.jpg'
	]);

	const images = $derived(paintings.map((image) => assetBaseUrl + '/sculptures/' + image));
</script>

<h1>Gallery</h1>

<Gallery {images} link={false} cols={3} controls={false} />
