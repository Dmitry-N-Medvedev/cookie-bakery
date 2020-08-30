<script>
	import Window from '../components/Window.svelte';
	import Door from '../components/Door.svelte';
	import Mailbox from '../components/Mailbox.svelte';
</script>

<style>
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

		background-color: white;
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

		background-color: yellow;
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
		border-bottom: 23rem solid red;
		border-left: 35rem solid transparent;
		border-right: 35rem solid transparent;
		flex: 1 1 30%;
		grid-area: bakery-roof;
		height: 0;
		position: relative;
		width: 0;
	}

	#bakery-title {
		background-color: green;
		font-size: 4rem;
		text-transform: uppercase;
		position: absolute;
		top: calc(30% - 4rem / 1.5);
		z-index: 1;
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
		background-color: lightgrey;
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