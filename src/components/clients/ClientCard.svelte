<script lang="ts">
	import type { ClientsMainView } from '$lib/Models';

	let { ...client }: ClientsMainView = $props();
</script>

<form id={'form' + client.id} action="" class="card-container">
	<div class="fields">
		<div class="form-field">
			<label for={'name' + client.id}>Nombre</label>
			<input id={'name' + client.id} type="text" value={client.name} disabled />
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
			<textarea id={'address' + client.id} rows="3" cols="40">{client.address}</textarea>
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

			padding: 0 0.3rem;
			color: #333;
			width: fit-content;

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
			border: 1px solid #ddd;
			border-radius: 4px;
			background-color: #f9f9f9;

			padding: 10px 12px;
			font-size: 1rem;
			font-family: inherit;
			color: #333;
			width: 100%;
			box-sizing: border-box; /* Ensures padding is included in the element's total width */
			min-height: 100px; /* Provides a clear initial height for the textarea */

			/* Remove the default resize handle for a cleaner look */
			resize: none;

			/* Add a smooth transition for interactive effects */
			transition:
				border-color 0.2s,
				box-shadow 0.2s;
		}

		textarea:focus {
			outline: none; /* Removes the default focus ring */
			border-color: #007bff;
			box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
		}

		textarea:disabled {
			/* Muted colors to indicate it's not interactive */
			background-color: #f1f1f1;
			color: #a0a0a0;
			border-color: #e0e0e0;

			/* Remove interactive effects */
			box-shadow: none;
			cursor: not-allowed;
		}
	}

	.form-field {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	/* @media (max-width: 991px) {
		.card-container {
			font-size: medium;
		}
	} */

	@media (max-width: 991px) {
		.fields {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
	}
</style>
