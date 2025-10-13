<script lang="ts">
	import { navigation } from "$states";
	import { fade } from "svelte/transition";

    navigation.navigateTo('Promotoras');
</script>

<h1 in:fade={{ duration: 150 }}>Promotoras</h1>