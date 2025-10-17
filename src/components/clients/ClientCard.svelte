<script lang="ts">
	import type { Business_Types, ClientsMainView, Zones } from '$lib/Models';
	import { ClientCard } from '$lib/states';

	interface ClientCardComponent {
		client: ClientsMainView;
		zones: Zones[];
		business_types: Business_Types[];
	}

	let { client, zones, business_types }: ClientCardComponent = $props();
    const state = new ClientCard(client);
</script>

<form id={'form' + state.client.id} action="" class="card-container">
	<div class="fields">
		<div class="form-field">
			<label for={'name' + state.client.id}>Nombre</label>
			<input id={'name' + state.client.id} type="text" value={state.client.name} disabled />
		</div>
		<div class="form-field">
			<label for={'zone' + state.client.id}>Zona</label>
			<select id={'zone' + state.client.id}>
				{#each zones as zone}
					<option
						id={'zone' + zone.id_zone}
						selected={state.client.id_zone === zone.id_zone}
						value={zone.zone}>{zone.zone}</option
					>
				{/each}
			</select>
		</div>
		<div class="form-field">
			<label for={'business_type' + state.client.id}>Tipo de Negocio</label>
			<select id={'business_type' + state.client.id} disabled>
				{#each business_types as business_type}
					<option
						id={'zone' + business_type.id_business_type}
						selected={state.client.id_business_type === business_type.id_business_type}
						value={business_type.business_type}>{business_type.business_type}</option
					>
				{/each}
			</select>
		</div>
		<div class="form-field">
			<label for={'address' + state.client.id}>Dirección</label>
			<textarea id={'address' + state.client.id} rows="2" cols="40">{state.client.address}</textarea>
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
		border-radius: 10px;
		box-shadow: 1px 1px 2.5px rgba(0, 0, 0, 0.5);
		font-size: large;
	}

	.fields {
		display: grid;
		grid-template-columns: 3fr 4fr;
		grid-template-rows: 1fr 1fr;
		justify-content: space-around;
		width: 100%;
		gap: 0 0.5rem;

		label {
			font-size: medium;
			color: #888;
			transition: all 0.2s ease;
			pointer-events: none;
			width: fit-content;
		}

		input {
			border: 1px solid #ddd;
			border-radius: 4px;
			background-color: #f9f9f9;
			font-size: medium;
			padding: 0 0.4rem;
			color: #333;
			width: 80%;

			transition:
				border-color 0.2s,
				box-shadow 0.2s;
		}

		input:focus {
			outline: none;
			border-color: #007bff;
			box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
		}

		input:disabled {
			background-color: #f1f1f1;
			color: #a0a0a0;
			border-color: #e0e0e0;
			box-shadow: none;
			cursor: not-allowed;
		}

		textarea {
			padding: 0.4rem 0.4rem;
			border: 1px solid #ddd;
			border-radius: 4px;
			background-color: #f9f9f9;
			font-size: medium;
			font-family: inherit;
			color: #333;
			width: 100%;
			box-sizing: border-box; /* Ensures padding is included in the element's total width */
			/* min-height: 100px; Provides a clear initial height for the textarea */

			/* Remove the default resize handle for a cleaner look */
			resize: none;

			/* Add a smooth transition for interactive effects */
			transition:
				border-color 0.2s,
				box-shadow 0.2s;
		}

		textarea:focus {
			outline: none;
			border-color: #007bff;
			box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
		}

		textarea:disabled {
			background-color: #f1f1f1;
			color: #a0a0a0;
			border-color: #e0e0e0;
			box-shadow: none;
			cursor: not-allowed;
		}

		select {
			background-color: #f9f9f9;
			font-size: medium;
			width: 40%;

			option {
				font-size: medium;
			}
		}

		select:focus {
			outline: none;
			border-color: #007bff;
			box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
		}

        select:disabled {
            background-color: #f1f1f1;
			color: #a0a0a0;
			border-color: #e0e0e0;
			box-shadow: none;
			cursor: not-allowed;
        }
	}

    .actions {
        margin: 1rem 0;
        right: 0;
    }

	.form-field {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 991px) {
		.fields {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
	}
</style>
