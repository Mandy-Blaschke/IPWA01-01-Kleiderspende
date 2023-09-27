<script>
	export let label = '';
	export let clicked;
</script>

<button type="button" on:click={clicked}>{label}</button>

<style lang="scss">
	@import './variablen';

	button {
		outline: none;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 25px;
		width: 75px;
		padding: 7px 15px;
		border-radius: 6px;
		box-shadow: 1px 1px 2px grey;
		background-color: $rosa;

		&:hover,
		&:active {
			cursor: pointer;
			background-color: #e9c9ef;
		}

		&:active {
			box-shadow: 2px 2px 7px 0px #6d6d6d inset;
			background-color: rgb(221, 195, 224);
		}
	}
</style>
