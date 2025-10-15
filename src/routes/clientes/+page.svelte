<script lang="ts">
	// import { Navigation } from '$states';
	import { fade } from 'svelte/transition';

	// Navigation.navigateTo('Clientes');

	let { data } = $props();
	let { clients } = data;

	$inspect('clients', clients);
</script>

<h1 in:fade={{ duration: 150 }}>Clientes</h1>


<div class="clients-container">
	<table>
		<thead>
			<tr>
				<th>Id</th>
				<th>Nombre</th>
				<th>Dirección</th>
				<th>Zona</th>
			</tr>
		</thead>
		<tbody>
			<!-- Table rows will go here -->
		</tbody>
	</table>
</div>
