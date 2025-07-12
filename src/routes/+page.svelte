<script lang="ts">
	import { config, toShortTime } from '$lib';
	import HeaderImage from '$lib/components/HeaderImage.svelte';
	import UpcomingEvent from '$lib/components/UpcomingEvent.svelte';
	const { data } = $props();
</script>

<svelte:head>
	<title>Familienzentrum Kaufungen e.V. - Ort der Begegnung für Familien</title>
	<meta
		name="description"
		content="Wir sind ein Ort der Begegnung, des Austauschs und der Unterstützung für Familien in jeder Lebensphase. Entdecken Sie unsere Angebote für Eltern und Kinder in Kaufungen und Umgebung."
	/>
	<meta property="og:title" content="Familienzentrum Kaufungen e.V." />
	<meta
		property="og:description"
		content="Ort der Begegnung, des Austauschs und der Unterstützung für Familien in jeder Lebensphase in Kaufungen."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<HeaderImage bg="/titelbilder/Eingang-Familienzentrum.avif" />
<main class="container mx-auto max-w-max px-4 md:max-w-5xl">
	<h1 class="mt-8 mb-4 text-center text-2xl font-medium md:text-4xl">
		Herzlich Willkommen auf der Homepage vom Familienzentrum Kaufungen e.V.
	</h1>
	<p class="text-justify text-base md:text-lg">
		Wir sind ein Ort der Begegnung, des Austauschs und der Unterstützung für Familien in jeder
		Lebensphase. Ob Spielkreise für die Kleinen, Bewegungskurse, Rückbildung, Yoga oder spezielle
		Angebote wie Männerturnen – bei uns ist für alle etwas dabei. Unsere Kursangebote richten sich
		an Eltern, Kinder und Interessierte aus Kaufungen und Umgebung. Hier auf der Webseite findet ihr
		eine Übersicht unserer regelmäßigen Veranstaltungen. Aktuelle Infos gibt es auch auf Instagram
		unter <a class="text-primary underline" href={config.links.insta}>@familienzentrum_kaufungen</a
		>. Für Fragen oder Anregungen steht euch unser Vorstand jederzeit gerne zur Verfügung – wir
		freuen uns auf euch!
	</p>
	{#if data.nextUpcomingEvent}
		<section class="bg-primary/20 md:bg-off-white -mx-4 mt-12 px-4 py-8 md:py-0">
			<h2 class="mb-4 text-center text-2xl font-medium md:text-4xl">Nächste Veranstaltung</h2>
			<UpcomingEvent event={data.nextUpcomingEvent} />
		</section>
	{/if}
	{#if data.todaysCourses && data.todaysCourses.length > 0}
		<section class="mt-12 md:mt-24">
			<h2 class="text-center text-2xl font-medium md:text-4xl">Heute im Familienzentrum</h2>
			<p class="mt-4 text-center text-base md:text-lg">
				Hier findet ihr die Kurse und Veranstaltungen, die heute im Familienzentrum stattfinden:
			</p>
			<table class="mx-auto mt-6 w-full table-auto text-left md:w-2/3">
				<thead>
					<tr class="border-grayish bg-grayish/10 border-b-2">
						<th class="w-2/3 py-2 pl-2 text-left text-xl md:text-lg">Kurs</th>
						<th class="w-1/6 text-center text-xl md:text-lg">Von</th>
						<th class="w-1/6 text-center text-xl md:text-lg">Bis</th>
					</tr>
				</thead>
				<tbody>
					{#each data.todaysCourses as course (course.id)}
						<tr class="even:bg-grayish/10">
							<td class="py-2 pl-2 text-left text-lg">
								<a href="/kurse#{course.id}" class="text-primary underline"
									>{course.title}{#if course.paid}*{/if}</a
								></td
							>
							<td class="text-center text-lg">{toShortTime(course.start)}</td>
							<td class="text-center text-lg">{toShortTime(course.end)}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</section>
	{/if}
	{#if data.boardMembers}
		<section class="bg-primary/20 md:bg-off-white -mx-4 mt-12 px-4 py-8 md:py-0">
			<h2 class="text-center text-2xl font-medium md:text-4xl">Vorstand</h2>
			<p class="mt-4 text-center text-base md:text-lg">
				Der Vorstand des Familienzentrums setzt sich zusammen aus:
			</p>
			<ul class="text-center text-base md:text-lg">
				{#each data.boardMembers as member (member.id)}
					<li class="text-grayish my-4">
						{member.name}
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</main>
