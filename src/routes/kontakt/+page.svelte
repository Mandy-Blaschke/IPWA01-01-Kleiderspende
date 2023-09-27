<script>
	import { enhance } from '$app/forms';
	import Button from '$lib/Button.svelte';
	import { formatiereDatum, formatiereUhrzeit } from '$lib/datumUhrzeit';

	export let form;

	let formElement;

	function formularSenden() {
		formElement.submit();
	}
</script>

<div class="content">
	<section>
		{#if form?.success}
			<div class="erfolg">
				<h1>Ihre Nachricht</h1>
				<p class="bestaetigung">wurde erfolgreich mit folgenden Daten registriert:</p>

				<p>
					<span class="bezeichung">Datum:</span>
					{formatiereDatum(form?.datum)}<br />

					<span class="bezeichung">Uhrzeit:</span>
					{formatiereUhrzeit(form?.datum)}<br />
				</p>
				<p>
					<span class="bezeichung">Ihr Name:</span>
					{form?.eingaben.name}
					<br />

					<span class="bezeichung">Ihre E-Mail:</span>
					{form?.eingaben.email}<br />

					<span class="bezeichung">Ihre Nachricht:</span>
					{form?.eingaben.nachricht}
				</p>
			</div>
		{:else}
			<p>
				Sie haben Fragen oder möchten sich mit uns gemeinsam engagieren? <br />
				Kontaktieren Sie uns!
			</p>

			<form method="POST" use:enhance bind:this={formElement} class="formular">
				<div class="schriftzug">
					<img src="/logo.png" alt="Logo" class="logo" />
					<img src="schrift.png" alt="Jute Gabe" class="h1-schrift schrift" />
				</div>

				{#if form?.fehler}
					<p class="fehlermeldung">Die rot markierten Felder sind Pflichtfelder.</p>
				{/if}

				<label for="name">
					<p class="pflichtfeldanzeige">
						Ihr Name:
						{#if form?.fehler && !form.eingaben.name}
							<span class="pflichtfeld">*</span>
						{/if}
					</p>
					<input
						type="text"
						name="name"
						value={form?.eingaben.name ?? ''}
						placeholder="Maria Muster"
						class:fehler={form?.eingaben && form.fehler && !form.eingaben.name}
					/>
				</label>

				<label for="email">
					<p class="pflichtfeldanzeige">
						Ihre E-Mail-Adresse:
						{#if form?.fehler && !form.eingaben.email}
							<span class="pflichtfeld">*</span>
						{/if}
					</p>
					<input
						type="email"
						name="email"
						value={form?.eingaben.email ?? ''}
						placeholder="maria.muster@gmuster.de"
						class:fehler={form?.eingaben && form.fehler && !form.eingaben.email}
					/>
				</label>

				<label for="nachricht">
					<p class="pflichtfeldanzeige">
						Ihre Nachricht:{#if form?.fehler && !form.eingaben.nachricht}
							<span class="pflichtfeld">*</span>
						{/if}
					</p>
					<textarea
						name="nachricht"
						value={form?.eingaben.nachricht ?? ''}
						placeholder="Was ich unbedingt noch sagen möchte ..."
						class:fehler={form?.eingaben && form.fehler && !form.eingaben.nachricht}
					/>
				</label>

				<Button label="Senden" clicked={formularSenden} />
			</form>

			<p>Alternativ erreichen Sie uns auch per E-Mail, Telefon oder persönlich.</p>

			<div class="formular kontaktdaten">
				<div class="text">
					<p>
						E-Mail: &#9993; <a href="mailto:kontakt@jutegabe.de">kontakt@jutegabe.de</a>
					</p>
					<p>Telefon: &#9743; <a href="tel:+490123456789">(0123) 45 67 89</a></p>
					<p>Adresse: &#9906; Musterstraße 123, 12345 Musterstadt</p>
				</div>
			</div>
		{/if}
	</section>
</div>

<style lang="scss">
	@import '$lib/formular.scss';
</style>
