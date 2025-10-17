<script lang="ts">
	import ClientCard from '$components/clients/ClientCard.svelte';
	import { Navigation } from '$states';
	import { fade } from 'svelte/transition';

	Navigation.navigateTo('Clientes');

	let { data } = $props();
	let { clients, zones, business_types } = data;
</script>

<div class="clients-container" in:fade={{ duration: 150 }}>
	{#each clients as client }
		<ClientCard client={client} zones={zones} business_types={business_types} />
	{/each}
</div>

<style>
	
</style>
