<script lang="ts">
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';

  let { images, link = false, cols = 3 }: { images: string[]; link: boolean; cols: number } = $props();
  const imagesDividedByCols = $derived(splitArrayIntoCols(images));

  function splitArrayIntoCols(list: string[]) {
    const _cols = Math.min(list.length, cols);
    const length = Math.ceil(list.length / _cols);
    const result = [];
    for (let i = 0; i < cols; i++) {
      result.push(list.slice(i * length, (i + 1) * length));
    }
    return result;
  }

  onMount(() => {
    cols = +(localStorage.getItem('cols') || 3);
  });

  $effect(() => {
    localStorage.setItem('cols', cols.toString());
  });
</script>

<div class="flex justify-center">
  <button class="btn btn-primary btn-sm" onclick={() => (cols = 3)}>3</button>
  <button class="btn btn-primary btn-sm" onclick={() => (cols = 4)}>4</button>
  <button class="btn btn-primary btn-sm" onclick={() => (cols = 5)}>5</button>
</div>
<div class="flex gap-2">
  {#each imagesDividedByCols as col}
    <div class={'flex flex-col gap-2 w-1/2'} transition:scale>
      {#each col as item}
        {#if link}
          <a href={item}><img src={item} alt="" /></a>
        {:else}
          <img src={item} alt="" />
        {/if}
      {/each}
    </div>
  {/each}
</div>

<style>
  img {
    border-radius: 10px;
  }
</style>
