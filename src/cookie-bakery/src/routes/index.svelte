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
		width: 10vw;
		height: 10vw;

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
		flex: 1 0 auto;
		grid-area: bakery-roof;
		background-color: red;
	}

	#bakery-title {
		background-color: green;
		font-size: 4rem;
		text-transform: uppercase;
		position: absolute;
		top: 22%;
		z-index: 1;
	}

	#bakery-body {
		flex: 3 0 auto;
		grid-area: bakery-body;
		background-color: grey;
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
		<div id="bakery-roof">roof</div>
		<div id="bakery-title">Cookie Bakery</div>
		<div id="bakery-body">body</div>
	</div>
</div>