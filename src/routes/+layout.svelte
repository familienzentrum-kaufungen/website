<script lang="ts">
	import '@fontsource/outfit'; // Defaults to weight 400
	import '@fontsource/outfit/500'; // For bold text
	import Footer from '$lib/components/Footer.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<NavBar />
{@render children()}
<Footer />
