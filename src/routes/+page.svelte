<script>
	import { goto } from '$app/navigation';
	import Bild from '../lib/Bild.svelte';
	import Button from '../lib/Button.svelte';

	function weiterleitungZurSpendenregistrierung() {
		goto('/spende-registrieren');
	}
</script>

<section id="vorstellung">
	<div id="slogan-box">
		<div id="bilder">
			<img src="logo.png" alt="Logo" id="logo" />
			<img src="schrift.png" alt="Jute Gabe" id="schriftzug" />
		</div>
		<h1 id="slogan">Kleiderspenden genau dort, wie sie gebraucht werden</h1>
	</div>

	<p>Vielen Dank für Ihr Intresse an unserer Organisation!</p>

	<p>
		Ihre Entscheidung für (eine)
		<img src="schrift.png" alt="Jute Gabe" class="p-schrift schrift" /> erhalten Sie die einzigartige
		Möglichkeit, zu entscheiden, wohin Ihre Spende gehen wird. Unsere Plattform macht es Ihnen
		einfach, eine bewusste Wahl für das Ziel Ihrer Kleiderspende zu treffen; und zwar direkt
		in die Krisenregionen, die Sie selbst als dringend bedürftig erachten.
	</p>
	<p>
		Es ist nicht nur eine Spende, es ist eine Botschaft der Hoffnung und Menschlichkeit -
		verpackt in Kleidung.
	</p>
	<p>
		Durch die Zusammenarbeit von Spenderinnen und Spendern wie Ihnen und unserem
		effizienten, ehrenamtlich geführten Logistiknetzwerk bringen wir nicht nur Kleidung,
		sondern auch Hoffnung und Komfort zu Menschen in Not. Jede Spende ist ein Baustein für
		eine bessere Welt, in der Güte und Mitgefühl keine Grenzen kennen. So wird Ihr Akt der
		Großzügigkeit zu einem wahrhaft globalen Engagement, das direkt denjenigen
		zugutekommt, die am dringendsten Hilfe benötigen.
	</p>
	<p>
		Gemeinsam setzen wir ein Zeichen, das weit über den Stoff hinausgeht. Gemeinsam nähen
		wir das soziale Gefüge der Menschheit wieder zusammen, ein Kleidungsstück nach dem
		anderen.
	</p>
	<Button label="Spenden" clicked={weiterleitungZurSpendenregistrierung} />
</section>

<section>
	<div id="vorgehen">
		<Bild
			src="maude-frederique-lavoie-EDSTj4kCUcw-unsplash.webp"
			alt="Eine Frau, die ein Stapel Hosen trägt."
		/>

		<div id="anleitung">
			<h3>
				Wie funktioniert eine
				<img src="schrift.png" alt="Jute Gabe" class="h3-schrift schrift" />
				?
			</h3>

			<ol>
				<li>
					<p class="schritte">Wählen Sie Ihre Abgabemethode:</p>
					<p>
						Persönliche Übergabe in unserer Geschäftsstelle oder Abholung* durch unser
						Sammelfahrzeug.
					</p>
				</li>
				<li>
					<p class="schritte">Registrieren Sie Ihre Spende:</p>
					<p>
						Verwenden Sie unser einfaches Formular, um Ihre Kleiderspende zu registrieren.
					</p>
				</li>
				<li>
					<p class="schritte">Entscheiden Sie, wohin Ihre Spende geht:</p>
					<p>Wählen Sie aus einer Liste aktueller Krisenregionen.</p>
				</li>
			</ol>
		</div>
	</div>
	<Button label="Spenden" clicked={weiterleitungZurSpendenregistrierung} />

	<p class="sternchen">
		* Die Abholung setzt voraus, dass sich die angegebene Adresse in unserer Nähe
		befindet.
	</p>
</section>

<style lang="scss">
	#vorstellung {
		#slogan-box {
			display: flex;
			flex-direction: column;
			align-items: center;

			#bilder {
				display: none;

				@media (min-width: 650px) {
					display: flex;
					justify-content: center;

					#logo {
						width: 65px;
					}

					#schriftzug {
						width: 140px;
						align-self: center;
					}
				}
			}
		}
	}

	#vorgehen {
		margin-bottom: 25px;
		display: flex;
		flex-direction: column;

		h3 {
			text-align: center;
			margin-top: 25px;
		}

		li {
			font-weight: bolder;

			.schritte {
				text-align: start;
			}

			p:not(.schritte) {
				font-weight: normal;
			}
		}

		@media (min-width: 965px) {
			flex-direction: row;
		}
	}

	.sternchen {
		margin: 40px 0 0 auto;
		font-size: 12px;
		text-align: end;
	}
</style>
