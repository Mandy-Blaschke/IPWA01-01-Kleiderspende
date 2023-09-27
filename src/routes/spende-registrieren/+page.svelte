<script>
	import { enhance } from '$app/forms';
	import { formatiereDatum, formatiereUhrzeit } from '$lib/datumUhrzeit';
	import { krisengebiete } from './krisengebiete.js';
	import Button from '$lib/Button.svelte';

	export let form;
	let abholung = form?.eingaben.abholung;
	let formElement;

	function formularSenden() {
		formElement.submit();
	}
</script>

<section>
	{#if form?.success}
		<div class="erfolg">
			<h1>
				Ihre
				<img src="schrift.png" alt="Jute Gabe" class="h1-schrift schrift" />
			</h1>
			<p class="bestaetigung">wurde erfolgreich mit folgenden Daten registriert:</p>
			<p>
				<span class="bezeichung">Datum:</span>
				{formatiereDatum(form?.datum)}<br />

				<span class="bezeichung">Uhrzeit:</span>
				{formatiereUhrzeit(form?.datum)}
			</p>

			<p>
				<span class="bezeichung">Abgabeort:</span>
				{#if form?.eingaben.abholung}
					{form?.eingaben.ort}
				{:else}
					Musterstadt Jute Gabe e.V.
				{/if}<br />

				<span class="bezeichung">Gebiet:</span>
				{form?.eingaben.krisengebiet}<br />

				<span class="bezeichung">Art:</span>
				{form?.eingaben.art}<br />

				{#if form?.eingaben.bemerkungen}
					<span class="bezeichung">Größe:</span>
					{form?.eingaben.groesse}<br />
				{/if}

				{#if form?.eingaben.bemerkungen}
					<span class="bezeichung">Farbe:</span>
					{form?.eingaben.farbe}<br />
				{/if}

				{#if form?.eingaben.bemerkungen}
					<span class="bezeichung">Zustand:</span>
					{form?.eingaben.zustand}<br />
				{/if}

				{#if form?.eingaben.bemerkungen}
					<span class="bezeichung">Für:</span>
					{form?.eingaben.fuerWen}<br />
				{/if}

				{#if form?.eingaben.bemerkungen}
					<span class="bezeichung">Bemerkungen:</span>
					{form?.eingaben.bemerkungen}<br />
				{/if}
			</p>
		</div>
	{:else}
		<form method="POST" use:enhance bind:this={formElement} class="formular">
			<div class="schriftzug">
				<img src="/logo.png" alt="Logo" class="logo" />
				<img src="schrift.png" alt="Jute Gabe" class="h1-schrift schrift" />
			</div>

			<label for="abholung" class="checkbox-container">
				<span>Abholung gewünscht?</span>
				<input type="checkbox" name="abholung" class="abholung" bind:checked={abholung} />
				<span class="meine-checkbox" />
			</label>

			{#if form?.fehler?.some((fehlermeldung) => fehlermeldung.includes('Pflichtfeld'))}
				<p class="fehlermeldung">*Die rot markierten Felder sind Pflichtfelder.</p>
			{/if}

			{#if form?.fehler?.includes('Warnung - PLZ')}
				<p class="fehlermeldung">
					**Die angegebene Abholadresse liegt leider außerhalb unserer Reichtweite.
				</p>
			{/if}

			{#if abholung}
				<div class="adresse">
					<label for="strasse"
						><p class="pflichtfeldanzeige">
							Straße
							{#if form?.fehler?.includes('Pflichtfeld - Strasse')}
								<span class="pflichtfeld">*</span>
							{/if}
						</p>
						<input
							type="text"
							placeholder="Musterweg"
							name="strasse"
							value={form?.eingaben.strasse ?? ''}
							class:fehler={form?.eingaben && !form.eingaben.strasse}
							class="breites-Input"
						/>
					</label>

					<label for="hausnummer"
						><p class="pflichtfeldanzeige">
							Nr.
							{#if form?.fehler?.includes('Pflichtfeld - Hausnummer')}
								<span class="pflichtfeld">*</span>
							{/if}
						</p>
						<input
							type="text"
							placeholder="7"
							name="hausnummer"
							value={form?.eingaben.hausnummer ?? ''}
							class:fehler={form?.eingaben && !form.eingaben.hausnummer}
							class="schmales-Input"
						/>
					</label>
				</div>

				<div class="adresse">
					<label for="plz"
						><p class="pflichtfeldanzeige">
							PLZ
							{#if form?.fehler?.includes('Pflichtfeld - PLZ')}
								<span class="pflichtfeld">*</span>
							{/if}
							{#if form?.fehler?.includes('Warnung - PLZ')}
								<span class="pflichtfeld">&nbsp;**</span>
							{/if}
						</p>
						<input
							type="text"
							placeholder="55555"
							name="plz"
							value={form?.eingaben.plz ?? ''}
							class:fehler={form?.eingaben && !form.eingaben.plz}
							class="schmales-Input"
						/>
					</label>

					<label for="ort"
						><p class="pflichtfeldanzeige">
							Ort
							{#if form?.fehler?.includes('Pflichtfeld - Ort')}
								<span class="pflichtfeld">*</span>
							{/if}
						</p>
						<input
							type="text"
							placeholder="Musterort"
							name="ort"
							value={form?.eingaben.ort ?? ''}
							class:fehler={form?.eingaben && !form.eingaben.ort}
							class="breites-Input"
						/>
					</label>
				</div>
			{/if}

			<label for="krisengebiet"
				><p class="pflichtfeldanzeige">
					Krisengebiet
					{#if form?.fehler?.includes('Pflichtfeld - Krisengebiet')}
						<span class="pflichtfeld">*</span>
					{/if}
				</p>
				<select
					name="krisengebiet"
					value={form?.eingaben.krisengebiet ?? ''}
					class:fehler={form?.eingaben && !form.eingaben.krisengebiet}
				>
					<option value="">Bitte Krisengebiet wählen</option>
					{#each krisengebiete as gebiet}
						<option value={gebiet}>{gebiet}</option>
					{/each}
				</select>
			</label>

			<label for="art"
				><p class="pflichtfeldanzeige">
					Art
					{#if form?.fehler?.includes('Pflichtfeld - Art')}
						<span class="pflichtfeld">*</span>
					{/if}
				</p>
				<input
					type="text"
					placeholder="Hose"
					name="art"
					value={form?.eingaben.art ?? ''}
					class:fehler={form?.eingaben && !form.eingaben.art}
				/>
			</label>

			<label for="groesse"
				>Größe
				<input
					type="text"
					placeholder="128"
					name="groesse"
					value={form?.eingaben.groesse ?? ''}
				/>
			</label>

			<label for="farbe"
				>Farbe
				<input
					type="text"
					placeholder="blau"
					name="farbe"
					value={form?.eingaben.farbe ?? ''}
				/>
			</label>

			<label for="zustand"
				>Zustand
				<input
					type="text"
					placeholder="gut"
					name="zustand"
					value={form?.eingaben.zustand ?? ''}
				/>
			</label>

			<label for="fuerWen"
				>Für wen?
				<input
					type="text"
					placeholder="Kinder"
					name="fuerWen"
					value={form?.eingaben.fuerWen ?? ''}
				/>
			</label>

			<label for="bemerkungen"
				>Bemerkungen<textarea
					type="text"
					placeholder="Was ich unbedingt noch sagen möchte..."
					name="bemerkungen"
					value={form?.eingaben.bemerkungen ?? ''}
					class="bemerkungen"
				/></label
			>

			<Button label="Senden" clicked={formularSenden} />
		</form>
	{/if}
</section>

<style lang="scss">
	@import '$lib/formular.scss';
</style>
