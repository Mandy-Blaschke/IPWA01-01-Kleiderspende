<script>
	import Bild from '../../lib/Bild.svelte';

	let quellen = [
		{
			art: 'Schriftzug von JuteGabe',
			link: '/schrift.png',
			urheberIn: '',
			urheberInLink: '',
			plattform: 'Flamingtext',
			plattformLink: 'https://flamingtext.com/'
		},
		{
			art: 'Impressum',
			link: '',
			urheberIn: 'Impressum Generator',
			urheberInLink: 'https://www.impressum-generator.de/',
			plattform: '',
			plattformLink: ''
		},
		{
			art: 'Datenschutzerklärung',
			link: 'https://www.mein-datenschutzbeauftragter.de/',
			urheberIn: 'Mein-Datenschutzbeauftragter.de',
			urheberInLink: '',
			plattform: '',
			plattformLink: ''
		},
		{
			art: 'Liste der Krisengebiete',
			link: 'https://www.frieden-fragen.de/entdecken/weltkarten/kriege-weltweit-2021.html',
			urheberIn: 'Berghof Foundation',
			urheberInLink: 'https://berghof-foundation.org/',
			plattform: 'Frieden Fragen',
			plattformLink: 'https://www.frieden-fragen.de/'
		},
		{
			art: 'Hose im Logo',
			link: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2594&q=80',
			urheberIn: 'Matthew Moloney',
			urheberInLink: 'https://unsplash.com/de/@mattmoloney',
			plattform: 'Unsplash',
			plattformLink: 'https://unsplash.com/de'
		},
		{
			art: 'Schuhe im Logo',
			link: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2535&q=80',
			urheberIn: 'Maxim Hopman',
			urheberInLink: 'https://unsplash.com/de/@nampoh',
			plattform: 'Unsplash',
			plattformLink: 'https://unsplash.com/de'
		},
		{
			art: 'Jutesack im Logo',
			link: 'https://images.unsplash.com/photo-1615485737442-7d6ab9f64db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2535&q=80',
			urheberIn: 'Mockup Graphics',
			urheberInLink: 'https://unsplash.com/de/@mockupgraphics',
			plattform: 'Unsplash',
			plattformLink: 'https://unsplash.com/de'
		},
		{
			art: 'Weißes Shirt im Logo',
			link: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2112&q=80',
			urheberIn: 'Haryo Setyadi',
			urheberInLink: 'https://unsplash.com/de/@uyk',
			plattform: 'Unsplash',
			plattformLink: 'https://unsplash.com/de'
		},
		{
			art: 'Kleid im Logo',
			link: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
			urheberIn: 'Engin Akyurt',
			urheberInLink: 'https://unsplash.com/de/@enginakyurt',
			plattform: 'Unsplash',
			plattformLink: 'https://unsplash.com/de'
		},
		{
			art: 'Sneaker im Logo',
			link: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2612&q=80',
			urheberIn: 'Maksim Larin',
			urheberInLink: 'https://unsplash.com/de/@maksimcul8r',
			plattform: 'Unsplash',
			plattformLink: 'https://unsplash.com/de'
		},
		{
			art: 'Frau, die ein Stapel Hosen trägt',
			link: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2283&q=80',
			urheberIn: 'Maude Frédérique Lavoie',
			urheberInLink:
				'https://unsplash.com/de/@maudefl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
			plattform: 'Unsplash',
			plattformLink: 'https://unsplash.com/de'
		},
		{
			art: 'Hände, die zusammengelegt werden',
			link: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
			urheberIn: 'Hannah Busing',
			urheberInLink: 'https://unsplash.com/de/@hannahbusing',
			plattform: 'Unsplash',
			plattformLink: 'https://unsplash.com/de'
		},
		{
			art: 'Hände, die nach Kleidung auf einer Stange greifen',
			link: 'https://images.unsplash.com/photo-1596609548086-85bbf8ddb6b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
			urheberIn: 'Artem Beliaikin',
			urheberInLink: 'https://unsplash.com/de/@belart84',
			plattform: 'Unsplash',
			plattformLink: 'https://unsplash.com/de'
		},
		{
			art: 'Teil eines Globus',
			link: 'https://images.unsplash.com/photo-1482059470115-0aadd6bf6834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80',
			urheberIn: 'Cuttersnap',
			urheberInLink: 'https://unsplash.com/de/@chuttersnap',
			plattform: 'Unsplash',
			plattformLink: 'https://unsplash.com/de'
		},
		{
			art: 'Hand, die auf den Bildschirm eines Laptop zeigt',
			link: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
			urheberIn: 'John Schnobrich',
			urheberInLink: 'https://unsplash.com/de/@johnschno',
			plattform: 'Unsplash',
			plattformLink: 'https://unsplash.com/de'
		},

		{
			art: 'Holzblöcke, die "Thank you" schreiben',
			link: 'https://images.unsplash.com/photo-1502355984-b735cb2550ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80',
			urheberIn: 'Courtney Hedger',
			urheberInLink: 'https://unsplash.com/de/@cmhedger',
			plattform: 'Unsplash',
			plattformLink: 'https://unsplash.com/de'
		}
	];
</script>

<section>
	<div class="content">
		<h1>Verwendete Quellen</h1>

		<Bild
			src="courtney-hedger-t48eHCSCnds-unsplash.webp"
			alt="Holzblöcke, die 'Thank you' schreiben."
		/>

		{#each quellen as quelle}
			<p>
				{#if quelle.link || quelle.art}
					<a href={quelle.link}>{quelle.art}</a>
					<br />
				{/if}
				{#if quelle.urheberIn || quelle.urheberInLink}
					von <a href={quelle.urheberInLink}>{quelle.urheberIn}</a>
					<br />
				{/if}
				{#if quelle.plattform || quelle.plattformLink}
					auf <a href={quelle.plattformLink}>{quelle.plattform}</a>
				{/if}
			</p>
		{/each}
	</div>
</section>

<style lang="scss">
	@import '$lib/variablen.scss';

	section {
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			p {
				align-self: flex-end;
				width: 250px;
				text-align: right;

				@media (min-width: 1000px) {
					margin-right: 25px;
				}
			}

			a {
				cursor: pointer;
				text-decoration: none;
				color: #d09ed9;

				&:hover {
					color: $pink;
					text-decoration: underline;
				}

				@media (max-width: 765px) {
					&:active {
						text-decoration: underline;
					}
				}
			}
		}
	}
</style>
