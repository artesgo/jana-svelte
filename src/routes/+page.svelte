<script>
	import Content from "$lib/content.svelte";
	import { assetBaseUrl } from "$lib/image";
</script>

<Content>
  <h1>Jana's Gallery</h1>
  <img src={assetBaseUrl + "/home.jpg"} alt="home" class="sm:w-1/2"/>
</Content>

<style>
  img {
    width: 100%;
    height: 100%;
  }
</style>