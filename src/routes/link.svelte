<script lang="ts">
  import { page } from '$app/stores';
	import { themeFacade } from '$lib';

  let { href, label }: { href: string; label: string } = $props();
</script>

<a
  {href}
  class="block px-4 py-2 text-sm"
  class:active={$page.url.pathname.includes(href)}
  class:bg-slate-200={$page.url.pathname.includes(href) && themeFacade().theme === 'light'}
  class:bg-slate-900={$page.url.pathname.includes(href) && themeFacade().theme === 'dark'}
>
  {label}
</a>

<style>
  a {
    white-space: nowrap;
  }

  .active {
    font-weight: bold;
  }
</style>