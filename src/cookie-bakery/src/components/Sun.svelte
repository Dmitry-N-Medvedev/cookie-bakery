<script>
  import { onMount } from 'svelte';

  let theme;

  $: if (theme) {
    console.debug('theme:', theme);
  }

  const changeTheme = () => {
    theme === 'light' ? theme = 'dark' : theme = 'light';

    localStorage.setItem('theme', theme);

    document.documentElement.setAttribute('data-theme', theme);
  }

  onMount(() => {
    theme = localStorage.getItem('theme') || 'light';
  });
</script>

<style>
	#sun {
		display: block;
		width: 7vw;
		height: 7vw;

		background-color: var(--sun-background-color);
		border-radius: 50%;
    cursor: pointer;
	}
</style>

<div id="sun" on:click={changeTheme} />