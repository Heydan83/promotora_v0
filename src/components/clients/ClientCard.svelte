<script lang="ts">
	import type { ClientsMainView } from '$lib/Models';

	let { ...client }: ClientsMainView = $props();
</script>

<form id={'form' + client.id} action="" class="card-container">
	<div class="fields">
		<div class="form-field">
			<label for={'name' + client.id}>Nombre</label>
			<input id={'name' + client.id} type="text" value={client.name} />
		</div>
		<div class="form-field">
			<label for={'zone' + client.id}>Zona</label>
			<input id={'zone' + client.id} type="text" value={client.zone} />
		</div>
		<div class="form-field">
			<label for={'business_type' + client.id}>Tipo de Negocio</label>
			<input id={'business_type' + client.id} type="text" value={client.business_type} />
		</div>
		<div class="form-field">
			<label for={'address' + client.id}>Dirección</label>
			<textarea  id={'address' + client.id} rows="3" cols="40">{client.address}</textarea>
		</div>
	</div>
    <div class="actions">
        <button>Editar</button>
        <button>Borrar</button>
    </div>
</form>

<style>
	.card-container {
		background-color: var(--bg-grey-color);
		margin: 1rem;
		padding: 0.7rem;
		font-size: small;
        border-radius: 10px;
        box-shadow: 1px 1px 2.5px rgba(0, 0, 0, 0.5);
	}

	.fields {
        display: grid;
        grid-template-columns: 0.8fr 1.2fr;
		grid-template-rows: 0.8fr 1.2fr;
    }

    @media (max-width: 991px) {
        textarea {
            width: 8.5rem;
        }
    }
</style>
