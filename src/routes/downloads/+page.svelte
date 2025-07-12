<script lang="ts">
	import HeaderImage from '$lib/components/HeaderImage.svelte';
	import { FileDown } from '@lucide/svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Downloads und Informationen | Familienzentrum Kaufungen e.V.</title>
	<meta
		name="description"
		content="Hier finden Sie nützliche Downloads und Informationen des Familienzentrum Kaufungen e.V. Unterlagen, Formulare und weitere Ressourcen für Familien."
	/>
	<meta
		property="og:title"
		content="Downloads und Informationen | Familienzentrum Kaufungen e.V."
	/>
	<meta
		property="og:description"
		content="Zugriff auf wichtige Dokumente und Informationen des Familienzentrum Kaufungen."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<HeaderImage bg="/titelbilder/Leerer-Kursraum.avif" />
<main class="container mx-auto mb-12 max-w-max px-4 md:max-w-5xl">
	<h1 class="mt-8 mb-4 text-center text-2xl font-medium md:text-4xl">
		Downloads und Informationen
	</h1>
	<p class="text-justify text-base md:text-lg">
		Hier findet ihr verschiedene Downloads und Informationen, die für euch nützlich sein könnten.
		Wenn ihr Fragen habt oder etwas vermisst, zögert nicht, uns zu kontaktieren.
	</p>
	<ul class="mt-12 grid gap-y-6">
		{#each data.downloads as download (download.id)}
			<li id={download.id}>
				<a
					class="flex items-center gap-x-4 rounded-md bg-white p-4 shadow-md transition-shadow hover:shadow-xl"
					href={download.url}
				>
					<FileDown /><span>{download.title}</span>
				</a>
			</li>
		{/each}
	</ul>
</main>
