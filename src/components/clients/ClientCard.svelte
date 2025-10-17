<script lang="ts">
	import type { ClientsMainView } from '$lib/Models';

	let { ...client }: ClientsMainView = $props();
</script>

<form action="" class="card-container">
    <label for={'name' + client.id}>Nombre</label>
	<input id={'name' + client.id} type="text" value={client.name} />
    <label for={'zone' + client.id}>Zona</label>
	<input id={'zone' + client.id} type="text" value={client.zone} />
    <label for={'business_type' + client.id}>Tipo de Negocio</label>
	<input id={'business_type' + client.id} type="text" value={client.business_type} />
    <label for={'address' + client.id}>Dirección</label>
	<input id={'address' + client.id} type="text" value={client.address} />
</form>

<style>
	.card-container {
		/* display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr; */
		/* align-items: center;
		padding: 0.5rem;
		gap: 5px;
		text-align: center; */
	}
</style>
