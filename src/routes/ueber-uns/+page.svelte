<script>
	import Bild from '../../lib/Bild.svelte';
	import Ctabox from './CTAbox.svelte';
</script>

<section>
	<div class="box links">
		<div class="text">
			<h1>
				Wer sind wir von <img
					src="schrift.png"
					alt="Jute Gabe"
					class="h1-schrift schrift"
				/>?
			</h1>
			<p>
				<img src="schrift.png" alt="Jute Gabe" class="p-schrift schrift" /> ist ein gemeinnütziger
				Verein, der es sich zur Aufgabe gemacht hat, Spenden in Form von Kleidung dahin zu
				bringen, wo sie am dringensten benötigt werden.
			</p>
			<p>
				In einer Welt, in der immer wieder Krisen und Notlagen auftreten, sehen wir unsere
				Rolle darin, eine verbindende Kraft zu sein: Wir möchten Menschen, die etwas zu
				geben haben, mit denen zusammenbringen, die dringend Unterstützung benötigen.
			</p>
		</div>

		<Bild
			src="hannah-busing-Zyx1bK9mqmA-unsplash.webp"
			alt="Hände, die zusammengelegt werden."
		/>
	</div>
</section>

<Ctabox />

<section>
	<div class="box rechts">
		<div class="text">
			<h1>Was ist unsere Vision?</h1>
			<p>
				Wir von <img src="schrift.png" alt="Jute Gabe" class="p-schrift schrift" /> glauben,
				das jede:r einzelne einen Unterschied machen kann, indem das gegeben wird, was man
				selbst nicht mehr braucht. Oft schlummert in unseren Schränken Kleidung, die wie nicht
				mehr tragen, für jemand anderen aber das neue Lieblingsstück werden kann. Ihre Spende
				ist ein Teil der Lösung eines großen Problems.
			</p>
		</div>

		<Bild
			src="artem-beliaikin-GLg0z5z8EQU-unsplash.webp"
			alt="Hände, die nach Kleidung auf einer Stange greifen."
		/>
	</div>
</section>

<section>
	<div class="box links">
		<div class="text">
			<h1>
				Was ist das Besondere an <span id="schriftzug">
					<img src="schrift.png" alt="Jute Gabe" class="h1-schrift schrift" />
				</span>
				?
			</h1>
			<p>
				Bei uns haben Sie nicht nur die Kontrolle darüber, was Sie geben, sondern auch,
				wohin Sie spenden. Dank unseren benutzerfreundlichem Portal können Sie mit einem
				Klick wählen, wohin Ihre Kleiderspende gehen wird.
			</p>
			<p>
				Vor Ort stehen Ihnen unseren fleißigen Helfer:innen immer freundlich zur Seite.
				Und wenn Sie möchten, kommen wir auch einfach bei Ihnen vorbei und holen Ihre
				Spende ab - Sie entscheiden.
			</p>
		</div>

		<Bild
			src="chuttersnap-QkPb5g9p338-unsplash.webp"
			alt="Teil eines Globus."
		/>
	</div>
</section>

<section>
	<div class="box rechts">
		<div class="text">
			<h1>Warum tun wir das?</h1>
			<p>
				Wir setzen uns mit voller Leidenschaft dafür ein, dass Ihre Hilfe genau dort
				ankommt, wie sie am meisten gebraucht wird. Ihre Spende und unsere Expertise sind
				die perfekte Kombination, um den Menschen zu helfen, die sie am dringensten
				benötigen.
			</p>
		</div>

		<Bild
			src="john-schnobrich-FlPc9_VocJ4-unsplash.webp"
			alt="Hand, die auf den Bildschirm eines Laptop zeigt."
		/>
	</div>
</section>

<Ctabox />

<style lang="scss">
	section {
		display: flex;
		align-items: center;
		justify-content: center;

		.box {
			margin: 25px 0;
			width: 250px;
			box-sizing: border-box;

			@media (min-width: 380px) and (max-width: 529px) {
				width: 330px;
			}

			@media (min-width: 530px) and (max-width: 999px) {
				width: 450px;
			}

			@media (min-width: 1000px) {
				width: 700px;
			}
		}

		.links,
		.rechts {
			@media (min-width: 1000px) {
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		.rechts {
			flex-direction: row-reverse;
		}
	}
</style>
