<script lang="ts">
	import { avatarUrl } from '$lib';
	import HeaderImage from '$lib/components/HeaderImage.svelte';
	import Markdown from 'svelte-exmarkdown';
	import type { PageProps } from './$types';
	import type { Plugin } from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';

	const { data }: PageProps = $props();
	const plugins: Plugin[] = [gfmPlugin()];
</script>

<svelte:head>
	<title>Unser Team | Familienzentrum Kaufungen e.V.</title>
	<meta
		name="description"
		content="Lernen Sie unser engagiertes Team im Familienzentrum Kaufungen kennen. Wir sind für Ihre Fragen, Anregungen und Feedback da."
	/>
	<meta property="og:title" content="Unser Team | Familienzentrum Kaufungen e.V." />
	<meta
		property="og:description"
		content="Das Team des Familienzentrum Kaufungen steht Ihnen für alle Anliegen zur Verfügung."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<HeaderImage bg="/titelbilder/Aufenthaltsbereich.avif" />
<main class="container mx-auto mb-12 max-w-max px-4 md:max-w-5xl">
	<h1 class="mt-8 mb-4 text-center text-2xl font-medium md:text-4xl">Wir für euch</h1>
	<p class="text-justify text-base md:text-lg">
		Wenn ihr Fragen oder Feedback für uns habt meldet euch gerne. Wenn ihr nicht genau wisst welcher
		Person ihr schreiben sollt dann schreibt einfach an
		<a href="mailto:familienzentrum-kaufungen@web.de" class="text-primary underline"
			>familienzentrum-kaufungen@web.de</a
		>.
	</p>
	{#if data.boardMembers}
		<section>
			<ul class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each data.boardMembers as boardMember (boardMember.id)}
					<li
						id={boardMember.id}
						class="mx-auto my-4 flex w-full flex-col items-center rounded-md bg-white p-4 shadow-md"
					>
						<div class="relative mx-auto inline-block">
							{#if boardMember.picture?.id}
								<img
									class="mx-auto w-[160px] rounded-full object-cover"
									src={avatarUrl(boardMember.picture.id, boardMember.name)}
									alt="Bild von {boardMember.name}"
								/>
							{:else}
								<img
									role="presentation"
									src="/Platzhalter-Avatar.png"
									class="w-[160px] rounded-full object-cover"
									alt="Standard Avatar"
								/>
							{/if}
							<div
								class="border-primary/25 absolute right-0 bottom-0 left-0 h-full w-full rounded-full border-8"
							></div>
						</div>
						<h3 class="mt-2 text-lg md:text-xl">{boardMember.name}</h3>
						<p class="text-grayish text-center text-base md:text-lg">{boardMember.role}</p>
						{#if boardMember.email}
							<a href={`mailto:${boardMember.email}`} class="text-primary text-center underline"
								>{boardMember.email}</a
							>
						{/if}
						{#if boardMember.description}
							<div class="text-grayish mt-4 mr-auto ml-0 text-left text-sm md:text-base">
								<Markdown {plugins} md={boardMember.description}>
									{#snippet strong(props)}
										<strong class="font-medium">{@render props.children?.()}</strong>
									{/snippet}
									{#snippet del(props)}
										<span class="line-through">{@render props.children?.()}</span>
									{/snippet}
									{#snippet em(props)}
										<i class="italic">{@render props.children?.()}</i>
									{/snippet}
									{#snippet a(props)}
										<a target="_blank" class="text-primary underline" href={props.href}
											>{@render props.children?.()}</a
										>
									{/snippet}
									{#snippet p(props)}
										<p class="mb-1">{@render props.children?.()}</p>
									{/snippet}
									{#snippet ul(props)}
										<ul class="list-disc pl-6">
											{@render props.children?.()}
										</ul>
									{/snippet}
									{#snippet li(props)}
										<li>{@render props.children?.()}</li>
									{/snippet}
								</Markdown>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</main>
