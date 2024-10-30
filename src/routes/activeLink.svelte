<script lang="ts">
  import { page } from '$app/stores';
	import { themeFacade } from '$lib';

  let { href, label }: { href: string; label: string } = $props();
</script>

<a
  class="px-4 border-rounded"
  {href}
  class:bg-slate-200={$page.url.pathname === href && themeFacade().theme === 'light'}
  class:bg-slate-900={$page.url.pathname === href && themeFacade().theme === 'dark'}
>
  {label}
</a>

<style>
  .border-rounded {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
</style>