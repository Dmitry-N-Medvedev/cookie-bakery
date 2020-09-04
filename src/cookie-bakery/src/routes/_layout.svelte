<script>
	// import Nav from '../components/Nav.svelte';

	// export let segment;
</script>

<style>
	main {
		align-items: center;
		/* background-color: #f7f7f7; */
		display: flex;
		flex-direction: column;
		height: var(--main-height);
		justify-content: center;
		margin: 0;
		padding: 0;
		position: relative;
		width: var(--main-width);
	}
	/* main {
		position: relative;
		padding: 0;
		margin: 0;

		width: 50%;
		height: 100%;
	} */
</style>

<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
</main>