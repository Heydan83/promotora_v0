<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$assets/logo.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div>
	<img src={logo} alt="logo casa 30-30" class="logo">
</div>

<style>
	.logo {
		max-width: 240px;
		height: 100%;
		width: 100%;
		padding-left: 1rem;
	}

	@media (max-width: 991px) {
		.logo {
			max-height: 50px;
			max-width: 100px;
		}
	}
</style>

{@render children?.()}
