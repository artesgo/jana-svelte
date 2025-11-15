<script>
	import { pathFacade } from '../full.svelte';

	const facade = pathFacade();
</script>

<div class="container">
	<img src={facade.path} alt="" />
</div>

<style>
	.container {
		width: 100%;
	}
	img {
		margin: 0 auto;
	}
</style>
