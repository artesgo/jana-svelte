<script>
	import Audio from "$lib/audio.svelte";
	import { assetBaseUrl } from "$lib/image";

</script>
<h1>Music</h1>
<div class="flex flex-col md:flex-row gap-4">
  <div class="mx-auto">
    <img src={assetBaseUrl + "/Music.png"} alt="debutant" width="300px" height="237px" />
  </div>

  <div class="col">
    <Audio src={assetBaseUrl + "/Track-01.mp3"}>Promises</Audio>
    <Audio src={assetBaseUrl + "/Track-02.mp3"}>Kissing in the Rain</Audio>
    <Audio src={assetBaseUrl + "/Track-03.mp3"}>Una Carta de Espana</Audio>
    <Audio src={assetBaseUrl + "/Track-04.mp3"}>Mantra</Audio>
    <Audio src={assetBaseUrl + "/Track-05.mp3"}>Free Spirit</Audio>
  </div>
  
  <div class="col">
    <Audio src={assetBaseUrl + "/Track-06.mp3"}>Panenka</Audio>
    <Audio src={assetBaseUrl + "/Track-07.mp3"}>Nostalgia</Audio>
    <Audio src={assetBaseUrl + "/Track-08.mp3"}>Bleeding Heart</Audio>
    <Audio src={assetBaseUrl + "/Track-09.mp3"}>Goodbye</Audio>
    <Audio src={assetBaseUrl + "/Track-10.mp3"}>Water Mantra</Audio>
  </div>
</div>