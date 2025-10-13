<script lang="ts">
	import { navigation } from "$states";
	import { fade } from "svelte/transition";

    navigation.navigateTo('Clientes');
</script>

<h1 in:fade={{ duration: 150 }}>Clientes</h1>