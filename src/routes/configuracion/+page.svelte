<script lang="ts">
	import { navigation } from "$states";
	import { fade } from "svelte/transition";

    navigation.navigateTo('Configuracion');
</script>

<h1 in:fade={{ duration: 150 }}>Configuración</h1>