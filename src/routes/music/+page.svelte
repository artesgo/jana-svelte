<script>
	import Audio from "$lib/audio.svelte";

</script>
<h1>Music</h1>
<div class="flex flex-col md:flex-row gap-4">
  <div class="mx-auto">
    <img src="https://raw.githubusercontent.com/artesgo/jana-svelte/refs/heads/main/static/Music.png" alt="debutant" width="300px" height="237px" />
  </div>

  <div class="col">
    <Audio src="https://raw.githubusercontent.com/artesgo/jana-svelte/refs/heads/main/static/Track-01.mp3">Promises</Audio>
    <Audio src="https://raw.githubusercontent.com/artesgo/jana-svelte/refs/heads/main/static/Track-02.mp3">Kissing in the Rain</Audio>
    <Audio src="https://raw.githubusercontent.com/artesgo/jana-svelte/refs/heads/main/static/Track-03.mp3">Una Carta de Espana</Audio>
    <Audio src="https://raw.githubusercontent.com/artesgo/jana-svelte/refs/heads/main/static/Track-04.mp3">Mantra</Audio>
    <Audio src="https://raw.githubusercontent.com/artesgo/jana-svelte/refs/heads/main/static/Track-05.mp3">Free Spirit</Audio>
  </div>
  
  <div class="col">
    <Audio src="https://raw.githubusercontent.com/artesgo/jana-svelte/refs/heads/main/static/Track-06.mp3">Panenka</Audio>
    <Audio src="https://raw.githubusercontent.com/artesgo/jana-svelte/refs/heads/main/static/Track-07.mp3">Nostalgia</Audio>
    <Audio src="https://raw.githubusercontent.com/artesgo/jana-svelte/refs/heads/main/static/Track-08.mp3">Bleeding Heart</Audio>
    <Audio src="https://raw.githubusercontent.com/artesgo/jana-svelte/refs/heads/main/static/Track-09.mp3">Goodbye</Audio>
    <Audio src="https://raw.githubusercontent.com/artesgo/jana-svelte/refs/heads/main/static/Track-10.mp3">Water Mantra</Audio>
  </div>
</div>