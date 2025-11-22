<script lang="ts">
	import { dev } from '$app/environment';
	import { assetBaseUrl } from '$lib/image';
	import Gallery from '../gallery.svelte';

	const paintings = $state([
		'abundance.jpeg',
		'blossom.jpeg',
		'on the lake.jpeg',
		'ranch.jpeg',
		'signal-2025-11-15-151633_001.jpeg',
		'signal-2025-11-15-151633_002.jpeg',
		'signal-2025-11-15-151633_003.jpeg',
		'signal-2025-11-15-151633_004.jpeg',
		'signal-2025-11-15-151633_005.jpeg',
		'signal-2025-11-15-151633_006.jpeg',
		'signal-2025-11-15-151633_007.jpeg',
		'signal-2025-11-15-151633_008.jpeg',
		'signal-2025-11-15-151633_009.jpeg',
		'signal-2025-11-15-151633_011.jpeg',
		'signal-2025-11-15-151633_012.jpeg',
		'signal-2025-11-15-151633_013.jpeg',
		'signal-2025-11-15-151633_014.jpeg',
		'signal-2025-11-15-151633_015.jpeg',
		'signal-2025-11-15-151633_016.jpeg',
		'signal-2025-11-15-151633_017.jpeg',
		'signal-2025-11-15-151633_018.jpeg',
		'signal-2025-11-15-151633_019.jpeg',
		'signal-2025-11-15-151633_020.jpeg',
		'signal-2025-11-15-151633_021.jpeg',
		'signal-2025-11-15-151633_022.jpeg',
		'signal-2025-11-15-151633_023.jpeg',
		'signal-2025-11-15-151633_024.jpeg',
		'signal-2025-11-15-151633_025.jpeg',
		'signal-2025-11-15-151633_026.jpeg',
		'signal-2025-11-15-151633_027.jpeg',
		'signal-2025-11-15-151633_028.jpeg',
		'signal-2025-11-15-151633_029.jpeg',
		'signal-2025-11-15-151633_030.jpeg',
		'signal-2025-11-15-151633_031.jpeg',
		'signal-2025-11-15-151633_032.jpeg',
		'signal-2025-11-21-213326_033.jpeg'
	]);
	const path = dev ? 'http://localhost:5173' : assetBaseUrl;
	const images = $derived(paintings.map((image) => path + '/window/' + image));
</script>

<h1>Gallery</h1>

<Gallery {images} link={true} cols={3} controls={false} />
