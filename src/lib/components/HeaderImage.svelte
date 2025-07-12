<script>
	const { bg } = $props();
</script>

<div class="relative">
	<img
		src={bg}
		alt=""
		role="presentation"
		class="aspect-ultrawide max-h-[820px] w-full object-cover"
	/>
	<img role="presentation" alt="" src="/waves.svg" class="absolute bottom-0 left-0 w-full" />
</div>
