<script>
	import { page } from '$app/stores';
	import './styles.css';

	const headerLinks = [
		{ path: '/', name: 'Start' },
		{ path: '/spende-registrieren', name: 'Spenden' },
		{ path: '/ueber-uns', name: 'Über uns' },
		{ path: '/kontakt', name: 'Kontakt' }
	];

	const footerLinks = [
		{ path: '/quellen', name: 'Quellen' },
		{ path: '/impressum', name: 'Impressum' },
		{ path: '/datenschutz', name: 'Datenschutz' }
	];
</script>

<div class="container">
	<header>
		<a href="/">
			<div class="vereinsname">
				<img src="/logo.png" alt="Logo" id="logo" />
				<img src="/schrift.png" alt="Jute Gabe" id="schriftzug" />
			</div>
		</a>
		<nav class="links">
			{#each headerLinks as link}
				<a href={link.path} class={$page.route.id === link.path ? 'aktiv' : ''}>
					{#if $page.route.id === link.path}
						<span><img src="logo.png" alt="Logo" class="logo-klein" /></span>
					{/if}
					{link.name}
				</a>
			{/each}
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p class="vereinsname">
			&#169; 2023 &nbsp;
			<img src="/schrift.png" alt="Jute Gabe" class="schrift p-schrift" />
			&nbsp; e.V. Alle Rechte vorbehalten.
		</p>

		<nav class="links">
			{#each footerLinks as link}
				<a href={link.path} class={$page.route.id === link.path ? 'aktiv' : ''}>
					{#if $page.route.id === link.path}
						<span><img src="logo.png" alt="Logo" class="logo-klein" /></span>
					{/if}
					{link.name}
				</a>
			{/each}
		</nav>
	</footer>
</div>

<style lang="scss">
	@import '$lib/variablen.scss';

	.container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		header,
		footer {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: $hf-padding;
			background-color: $hf-hintergrund;
			box-sizing: border-box;
			justify-content: space-between;

			@media (min-width: 650px) {
				flex-direction: row;
			}

			.links {
				width: 100%;
				display: flex;
				justify-content: space-evenly;

				& .aktiv {
					color: $pink !important;
				}

				.logo-klein {
					width: 10px;
					vertical-align: baseline;

					@media (min-width: 650px) {
						width: 15px;
						vertical-align: bottom;
					}
				}

				a {
					text-decoration: none;
					color: #fff;
					cursor: pointer;
					text-align: end;

					&:hover {
						color: $pink;
					}

					@media (min-width: 650px) {
						width: 105px;
					}
				}

				@media (min-width: 650px) {
					justify-content: flex-end;
					max-width: 50%;
				}
			}

			.vereinsname {
				margin: 0 0 5px 0;

				@media (min-width: 650px) {
					margin: 0;
				}
			}

			font-size: smaller;

			@media (min-width: 650px) {
				font-size: medium;
			}
		}

		header {
			.vereinsname {
				display: flex;
				justify-content: center;

				#logo,
				#schriftzug {
					height: 30px;
				}
			}
		}

		main {
			display: flex;
			flex-direction: column;
			align-items: center;
			flex: 1;

			:global(section) {
				@media (min-width: 750px) {
					max-width: 65vw;
				}
			}
		}
	}
</style>