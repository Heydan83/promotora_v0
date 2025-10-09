<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$assets/logo.png';
	import { hamburger } from '$assets';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="header">
	<img src={logo} alt="logo casa 30-30" class="logo" />
	<button>
		<img src={hamburger} alt="" class="hamburger" />
	</button>
</div>

{@render children?.()}

<style>
	.header {
		display: flex;
		justify-content: space-between;
		height: 5rem;
		align-items: center;
		border-bottom: 1px solid rgb(218, 218, 219);
	}

	.logo {
		max-width: 14rem;
		max-height: 10rem;
		margin: 1rem;
		margin-left: 4rem;
	}

	.hamburger {
		max-width: 2rem;
		max-height: 2rem;
		margin: 1rem;
		margin-right: 4rem;
	}

	@media (max-width: 991px) {
		.header {
			height: 3.5rem;
		}

		.logo {
			max-height: 3.125rem;
			max-width: 6.25rem;
			margin: 0.5rem;
			margin-left: 2rem;
		}

		.hamburger {
			max-width: 1.5rem;
			max-height: 1.5rem;
			margin: 2rem;
			margin-right: 2.5rem;
		}
	}
</style>
