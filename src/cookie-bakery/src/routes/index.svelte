<script>
	import { onMount, onDestroy } from 'svelte';
	import { STATE } from '../stores/state.mjs';
	import { LocalStorageKeys } from '../constants.mjs';

	import Sun from '../components/Sun.svelte';
	import Window from '../components/Window.svelte';
	import Door from '../components/Door.svelte';
	import Mailbox from '../components/Mailbox.svelte';

	let unsubscribeFromState;

	onMount(() => {
		document.documentElement.setAttribute('data-theme', STATE.theme());

		unsubscribeFromState = STATE.subscribe((value) => {
			// console.debug('index::STATE.subscribe:', value.theme);
			document.documentElement.setAttribute('data-theme', value.theme);
			localStorage.setItem(LocalStorageKeys.THEME, value.theme);
		});
	});

	onDestroy(() => {
		if (unsubscribeFromState) {
			unsubscribeFromState();
		}
	});
</script>

<style>
	#canvas {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 5fr;
		grid-template-areas:
			'sun'
			'building'
		;
		/* grid-gap: 1vh; */
		align-content: center;

		position: relative;
		padding: 0;
		margin: 0;

		/* max-height: 100vh; */

		width: 100%;
		height: 100%;

		/* background-color: var(--canvas-background-color); */
	}

	#sun-container {
		grid-area: sun;
		display: flex;
		justify-content: flex-end;
		/* margin: 1vh; */
	}
	
	/* #sun {
		display: block;
		width: 7vw;
		height: 7vw;

		background-color: var(--sun-background-color);
		border-radius: 50%;
	} */

	#bakery-container {
		grid-area: building;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	#bakery-roof,
	#bakery-body {
		width: 60%;
		position: relative;
	}

	#bakery-roof {
		/* background-color: var(--roof-background-color); */
		width: 90%;
		padding-bottom: calc(90% / 1.41);
		height: 50%;
		position: relative;
		overflow: hidden;
	}

	#bakery-roof::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--roof-background-color);
		transform-origin: 0 100%;
		transform: rotate(45deg);
	}

	/* #bakery-roof::after {
		background-color: var(--roof-background-color);
		content: "";
		position: absolute;
		top: 50px;
		left: 0;
		width: 50%;
		z-index: -1;
	} */

	/* #bakery-roof {
		border-bottom: 24vh solid var(--roof-background-color);
		border-left: 35rem solid transparent;
		border-right: 35rem solid transparent;
		box-sizing: border-box;
		flex: 1 1 30%;
		grid-area: bakery-roof;
		height: 0;
		position: relative;
		width: 90%;
	} */

	#bakery-title {
		background-color: var(--bakery-title-background-color);
		border: 0.125vw solid var(--bakery-title-border-color);
		color: var(--bakery-title-text-color);
		font-size: 4rem;
		text-transform: uppercase;
		position: absolute;
		bottom: calc(52% - 4rem / 1.5);
		z-index: 1;

		padding: 0 1vw;
	}

	#bakery-body {
		display: grid;
		grid-template-columns: 1.25fr 1fr 1.25fr;
		grid-template-rows: 1fr 1fr;
		grid-template-areas:
			'window-left door window-right'
			'. door mailbox'
		;
		flex: 3 0 70%;
		grid-area: bakery-body;
		background-color: var(--body-background-color);
		position: relative;
		width: 90%;
		max-height: 60%;
	}

	#window-left,
	#window-right {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#window-left {
		grid-area: window-left;
	}

	#window-right {
		grid-area: window-right;
	}

	#door-container {
		grid-area: door;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}

	#mailbox-container {
		align-items: flex-start;
		display: flex;
		grid-area: mailbox;
		justify-content: center;
	}
</style>

<svelte:head>
	<title>Cookie Bakery</title>
</svelte:head>

<div id="canvas">
	<div id="sun-container">
		<Sun />
	</div>
	<div id="bakery-container">
		<div id="bakery-roof" />
		<div id="bakery-title">Cookie Bakery</div>
		<div id="bakery-body">
			<div id="window-left">
				<Window />
			</div>
			<div id="window-right">
				<Window />
			</div>
			<div id="door-container">
				<Door />
			</div>
			<div id="mailbox-container">
				<Mailbox />
			</div>
		</div>
	</div>
</div>