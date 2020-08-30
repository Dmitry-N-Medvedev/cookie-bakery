<script>
	import Window from '../components/Window.svelte';
	import Door from '../components/Door.svelte';
	import Mailbox from '../components/Mailbox.svelte';
</script>

<style>
	:root {
		--canvas-background-color: white;
		--sun-background-color: rgba(254, 253, 50, 1);
		--roof-background-color: rgba(232, 147, 127, 1);
		--body-background-color: rgba(214, 214, 214, 1);
		--bakery-title-background-color: rgba(160, 205, 146, 1);
		--bakery-title-border-color: rgba(119, 181, 102, 1);
		--bakery-title-text-color: rgba(51, 100, 35, 1);
		--window-background-color: rgba(215, 231, 245, 1);
		--window-border-color: rgba(173, 207, 236, 1);
		--door-background-color: rgba(251, 192, 129, 1);
		--door-handle-color: rgba(197, 116, 21, 1);
		--mailbox-background-color: rgba(169, 169, 169, 1);
		--mailbox-slit-color: rgba(121, 121, 121, 1);
		--mailbox-text-color: rgba(93, 93, 93, 1);
	}
	#canvas {
		display: grid;
		grid-template-columns: 1vh 1fr 1vh;
		grid-template-rows: 1vh 1fr 5fr 1vh;
		grid-template-areas:
			'. . .'
			'. sun .'
			'. building .'
			'. . .'
		;
		grid-gap: 1vh;
		align-content: center;

		position: relative;
		padding: 0;
		margin: 0;

		max-height: 100vh;

		background-color: var(--canvas-background-color);
	}

	#sun-container {
		grid-area: sun;
		display: flex;
		justify-content: flex-end;
		margin: 1vh;
	}
	
	#sun {
		display: block;
		width: 7vw;
		height: 7vw;

		background-color: var(--sun-background-color);
		border-radius: 50%;
	}

	#bakery-container {
		grid-area: building;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		position: relative;
	}

	#bakery-roof,
	#bakery-body {
		width: 60%;
		position: relative;
	}

	#bakery-roof {
		border-bottom: 23rem solid var(--roof-background-color);
		border-left: 35rem solid transparent;
		border-right: 35rem solid transparent;
		flex: 1 1 30%;
		grid-area: bakery-roof;
		height: 0;
		position: relative;
		width: 0;
	}

	#bakery-title {
		background-color: var(--bakery-title-background-color);
		border: 0.125vw solid var(--bakery-title-border-color);
		color: var(--bakery-title-text-color);
		font-size: 4rem;
		text-transform: uppercase;
		position: absolute;
		top: calc(30% - 4rem / 1.5);
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
		<div id="sun" />
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