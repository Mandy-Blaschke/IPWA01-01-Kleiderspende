<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';

	function weiterleitungZu(ziel) {
		goto(ziel);
	}
</script>

<div class="cta">
	<p>Werden auch Sie Teil dieser Mission mit Passion.</p>

	<div class="buttons">
		<Button label="Spenden" clicked={() => weiterleitungZu('/spende-registrieren')} />
		<Button label="Kontakt" clicked={() => weiterleitungZu('/kontakt')} />
	</div>
</div>

<style lang="scss">
	.cta {
		display: flex;
		flex-direction: column;

		.buttons {
			display: flex;
			justify-content: space-around;
			width: 310px;
		}
	}
</style>
