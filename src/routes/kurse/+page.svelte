<script lang="ts">
	import { config, toShortTime } from '$lib';
	import '@fontsource/roboto-mono';
	import HeaderImage from '$lib/components/HeaderImage.svelte';
	import { translate } from '$lib/translate';
	import Markdown from 'svelte-exmarkdown';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Kursübersicht | Familienzentrum Kaufungen e.V.</title>
	<meta
		name="description"
		content="Entdecken Sie unser vielfältiges Kursangebot für Familien in Kaufungen. Von Spielkreisen für Kinder bis zu Yoga und Bewegungskursen für Erwachsene."
	/>
	<meta property="og:title" content="Kursübersicht | Familienzentrum Kaufungen e.V." />
	<meta
		property="og:description"
		content="Vielfältige Kurse und Veranstaltungen für die ganze Familie im Familienzentrum Kaufungen."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<HeaderImage bg="/titelbilder/Kind-bei-Malkurs.avif" />
<main class="container mx-auto mb-12 max-w-max px-4 md:max-w-5xl">
	<h1 class="mt-8 mb-2 text-center text-2xl font-medium md:text-4xl">Kursübersicht</h1>
	<span class="text-grayish mb-4 block text-center text-base md:text-lg">Stand Juli 2025</span>
	<p class="text-justify text-base md:text-lg">
		Hier erhaltet ihr eine Übersicht der Kurse und Veranstaltungen des Familienzentrums. Aktuelle
		Informationen findet ihr ebenfalls auf Instagram <a
			class="text-primary underline"
			href={config.links.insta}>@familienzentrum_kaufungen</a
		>. Für allgemeine Fragen und Anregungen könnt ihr euch gerne an den Vorstand unter
		<a href="mailto:familienzentrum-kaufungen@web.de" class="text-primary underline"
			>familienzentrum-kaufungen@web.de</a
		> wenden.
	</p>
	<small class="text-grayish mt-4 block text-center text-base"
		>Mit * gekennzeichnete Kurse sind ggf. kostenpflichtig</small
	>
	<h2 class="mt-12 text-center text-2xl md:text-4xl">Direkt zum Wochentag</h2>
	<ol class="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
		{#each data.mappedCourses as [weekday] (weekday)}
			<li class="text-lg md:text-xl">
				<a class="text-primary underline" href={`#${weekday}`}>{translate(`weekdays.${weekday}`)}</a
				>
			</li>
		{/each}
	</ol>
	<div class="mt-12">
		{#each data.mappedCourses as [weekday, courses] (weekday)}
			<h2 class="text-xl md:text-2xl" id={weekday}>{translate(`weekdays.${weekday}`)}</h2>
			<ol class="my-6 grid gap-y-4">
				{#each courses as course (course.id)}
					<li id={course.id} class="rounded-md bg-white p-4 shadow-md">
						<div class="flex">
							<div>
								<h3 class="text-lg md:text-xl" title={course.paid ? 'Kostenpflichtig' : ''}>
									{course.title}{#if course.paid}<span class="text-grayish">*</span>{/if}
								</h3>
								{#if course.subtitle}
									<Markdown md={course.subtitle}>
										{#snippet p(props)}
											{@const { children } = props}
											<p class="text-grayish mb-2">{@render children?.()}</p>
										{/snippet}
										{#snippet a(props)}
											{@const { href, children } = props}
											<a target="_blank" {href} class="text-primary underline"
												>{@render children?.()}</a
											>
										{/snippet}
									</Markdown>
								{/if}
							</div>
							<div class="mr-0 ml-auto max-w-1/2">
								<div
									class="bg-primary flex items-center gap-2 rounded-tl-md rounded-br-md p-2 text-base text-white md:text-lg"
								>
									<time class="border-r-1 border-white pr-2 font-mono!" datetime={course.start}
										>{toShortTime(course.start)}</time
									>
									<time class="font-mono!" datetime={course.end}>{toShortTime(course.end)}</time>
								</div>
							</div>
						</div>
						{#if course.description}
							<Markdown md={course.description}>
								{#snippet p(props)}
									{@const { children } = props}
									<p class="text-grayish mb-2">{@render children?.()}</p>
								{/snippet}
								{#snippet strong(props)}
									{@const { children } = props}
									<strong class="font-bold">{@render children?.()}</strong>
								{/snippet}
								{#snippet em(props)}
									{@const { children } = props}
									<i class="italic">{@render children?.()}</i>
								{/snippet}
								{#snippet a(props)}
									{@const { href, children } = props}
									<a target="_blank" {href} class="text-primary underline">{@render children?.()}</a
									>
								{/snippet}
							</Markdown>
						{/if}
					</li>
				{/each}
			</ol>
		{/each}
	</div>
</main>
