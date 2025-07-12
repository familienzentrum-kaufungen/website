<script lang="ts">
	import { clsx } from '$lib';
	import { Menu, X } from '@lucide/svelte';

	const links = [
		{ href: '/', text: 'Home' },
		{ href: '/kurse', text: 'Kurse' },
		{ href: '/team', text: 'Team' },
		{ href: '/kontakt', text: 'Kontakt & Anfahrt' },
		{ href: '/downloads', text: 'Downloads' }
	];
	let navOpen = $state(false);
</script>

<div class="bg-primary fixed top-0 z-50 w-full p-4 shadow-md">
	<nav
		aria-label="Hauptnavigation"
		class="container mx-auto grid grid-cols-2 justify-between md:flex md:items-center"
	>
		<a href="/" title="Home" class="mr-auto ml-0"
			><img src="/Familienzentrum_Logo.avif" alt="Logo" class="h-12" /></a
		>
		<button
			title={navOpen ? 'Navigation schließen' : 'Navigation öffnen'}
			onclick={() => (navOpen = !navOpen)}
			class="text-off-white mr-0 ml-auto block md:hidden"
		>
			{#if !navOpen}
				<Menu size="32" />
			{:else}
				<X size="32" />
			{/if}
		</button>
		<menu
			class={clsx(
				'max-height-transition -mx-4 hidden items-center gap-4 overflow-hidden pt-4 transition-all md:flex md:max-h-max md:pt-0 ',
				navOpen ? 'col-span-2 block!' : 'max-h-0'
			)}
			role="navigation"
		>
			{#each links as link (link.href)}
				<li
					class="border-off-white border-b-1 px-4 py-2 first-of-type:border-t-1 last-of-type:border-b-0 last-of-type:pb-0 md:border-0 md:p-0 md:first-of-type:border-t-0"
				>
					<a onclick={() => (navOpen = false)} class="text-off-white py-1 text-lg" href={link.href}
						>{link.text}</a
					>
				</li>
			{/each}
		</menu>
	</nav>
</div>
<div class="bg-primary h-20 w-full"></div>
