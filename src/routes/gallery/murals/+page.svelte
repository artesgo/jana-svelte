<script lang="ts">
	import { assetBaseUrl } from "$lib/image";
	import Gallery from "../gallery.svelte";

	const paintings = $state([
		"95722005_2900022650033921_5526897202212896768_n.jpg",
    "449194512_7798686883500782_6882774004265201530_n.jpg",
    "449304526_7798686886834115_2016847375874430315_n.jpg",
    "449309046_7798686880167449_7814134473123334080_n.jpg",
    "449315627_7798686903500780_3827858342342922173_n.jpg",
    "449389290_7798686896834114_3386576610281705544_n.jpg",
	]);

	const images = $derived(paintings.map((image) => assetBaseUrl + "/murals/" + image));
</script>

<h1>Gallery</h1>

<Gallery {images} link={false} cols={3} controls={false} />
