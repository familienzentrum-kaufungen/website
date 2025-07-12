<script lang="ts">
	import { CalendarPlus } from '@lucide/svelte';
	import Markdown from 'svelte-exmarkdown';

	const { event } = $props();
</script>

<!-- bold, italic, link -->
<h2 class="text-center text-xl font-medium">{event.title}</h2>
{#if event.description}
	<div class="mt-4 text-center text-base md:text-lg">
		<Markdown md={event.description}>
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
				<a target="_blank" class="text-primary underline" {href}>{@render children?.()}</a>
			{/snippet}
			{#snippet p(props)}
				{@const { children } = props}
				<p class="mb-2">{@render children?.()}</p>
			{/snippet}
		</Markdown>
	</div>
{/if}
<div class="mt-6 flex justify-center text-base md:text-lg">
	<a
		href={`/veranstaltung/${event.id}`}
		class="bg-primary text-off-white inline-flex items-center gap-2 rounded-md p-2"
	>
		<CalendarPlus size="24" />
		Veranstaltung zum Kalender hinzufügen
	</a>
</div>
