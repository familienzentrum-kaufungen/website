<script lang="ts">
	import HeaderImage from '$lib/components/HeaderImage.svelte';
	const { data } = $props();
</script>

<svelte:head>
	<title>Anfahrt und Kontakt | Familienzentrum Kaufungen e.V.</title>
	<meta
		name="description"
		content="Hier findet ihr die Anfahrt und Kontaktdaten des Familienzentrums Kaufungen."
	/>
	<meta property="og:title" content="Anfahrt und Kontakt" />
	<meta
		property="og:description"
		content="Hier findet ihr die Anfahrt und Kontaktdaten des Familienzentrums Kaufungen."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>
<HeaderImage bg="/titelbilder/Bemaltes-Bild.avif" />
<main class="container mx-auto mb-12 max-w-max px-4 md:max-w-5xl">
	<h1 class="mt-8 mb-4 text-center text-2xl font-medium md:text-4xl">Anfahrt und Kontakt</h1>
	<p class="text-justify text-base md:text-lg">
		Das Familienzentrum Kaufungen befindet sich in der <a
			class="text-primary underline"
			target="_blank"
			title="Karte zum Familienzentrum Kaufungen"
			href="https://maps.app.goo.gl/VBvEtn9PpaeffDEN6">Theodor-Heuss-Straße 19, 34260 Kaufungen</a
		>. Ihr erreicht uns bequem mit der
		<a
			class="text-primary underline"
			href="https://maps.app.goo.gl/bp32ExPf3ZrVWXEq9"
			target="_blank"
			title="Karte zur Haltestelle Oberkaufungen Gesamtschule"
		>
			Tramlinie 4</a
		> – steigt an der Haltestelle Oberkaufungen Gesamtschule aus. Dort gibt es auch ausreichend Parkplätze
		für alle, die mit dem Auto anreisen. Überquert die Bahnschienen in Richtung Begegnungsstätte (grünes
		Haus) und folgt einfach den bunten Fußabdrücken auf dem Boden – sie führen Euch direkt zu uns. Alternativ
		könnt Ihr auch über die beschilderte Wohnanlage in der Theodor-Heuss-Straße von der anderen Seite
		zum Familienzentrum gelangen.
	</p>
	{#if data.globalConfig?.address && data.globalConfig?.club_name && data.globalConfig?.club_email}
		<h2 class="mt-10 text-xl md:text-2xl" id="contact">Post für uns?</h2>
		<p class="mt-4">Dann bitte an:</p>
		<p class="mt-4">{data.globalConfig.club_name}</p>
		<p class="mt-2 whitespace-pre-line">
			{data.globalConfig.address}
		</p>
		<p class="mt-2">
			E-Mail: <a class="text-primary underline" href={`mailto:${data.globalConfig.club_email}`}
				>{data.globalConfig.club_email}</a
			>
		</p>
	{/if}
</main>
