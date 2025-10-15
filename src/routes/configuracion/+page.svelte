<script lang="ts">
	import { Navigation } from "$states";
	import { fade } from "svelte/transition";

    Navigation.navigateTo('Configuracion');
</script>

<h1 in:fade={{ duration: 150 }}>Configuración</h1>