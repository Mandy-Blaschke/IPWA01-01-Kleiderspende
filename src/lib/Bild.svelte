<script>
	export let src;
	export let alt;
</script>

<div>
	<img {src} {alt} />
</div>

<style lang="scss">
	@import './variablen';

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0;

		img {
			width: 250px;
			border-radius: 8px;
			box-shadow: $schatten;

			@media (min-width: 650px) and (max-width: 999px) {
				width: 350px;
			}

			@media (min-width: 1000px) {
				margin: 0 25px;
				width: 320px;
			}
		}
	}
</style>
