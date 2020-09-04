<script>
  import { onMount, onDestroy } from 'svelte';
  import { STATE } from '../stores/state.mjs';

  let theme;
  let unsubscribeFromState;

  // $: if (theme) {
  //   console.debug('theme:', theme);
  // }

  const changeTheme = () => {
    STATE.toggleTheme();

    // localStorage.setItem('theme', STATE.theme());

    // document.documentElement.setAttribute('data-theme', STATE.theme());
  }

  onMount(() => {
    theme = STATE.theme();

		// unsubscribeFromState = STATE.subscribe((value) => {
		// 	console.debug('Sun::STATE.subscribe:', value);
		// });
  });

  onDestroy(() => {
		if (unsubscribeFromState) {
			unsubscribeFromState();
		}
  });
</script>

<style>
	#sun {
    display: block;
    width: calc(var(--main-width) / 5);
    height: calc(var(--main-width) / 5);
    background-color: var(--sun-background-color);
    border-radius: 50%;
    cursor: pointer;
    pointer-events: all;
    position: absolute;
    top: 0;
	}
</style>

<div id="sun" on:click={changeTheme} />