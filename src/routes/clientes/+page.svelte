<script lang="ts">
	import ClientCard from '$components/clients/ClientCard.svelte';
	import { Navigation } from '$states';
	import { fade } from 'svelte/transition';

	Navigation.navigateTo('Clientes');

	let { data } = $props();
	let { clients } = data;
</script>

<div class="clients-container" in:fade={{ duration: 150 }}>
	{#each clients as client }
		<ClientCard {...client} />
	{/each}
</div>

<style>
	/* .hide-column {
		display: none;
	} */
</style>
