<script lang="ts">
    import { navigation } from '$states';
	import { fade, slide } from 'svelte/transition';
</script>

<nav class="menu" in:slide={{ duration: 150, axis: 'x' }}>
	<li class="menu-item" class:menu-item-selected={navigation.getCurrentPage() === 'Calendario'}>
		<a href="/calendario"><h3>Calendario</h3></a>
	</li>
	<li class="menu-item" class:menu-item-selected={navigation.getCurrentPage() === 'Clientes'}>
		<a href="/clientes"><h3>Clientes</h3></a>
	</li>
	<li class="menu-item" class:menu-item-selected={navigation.getCurrentPage() === 'Promotoras'}>
		<a href="/promotoras"><h3>Promotoras</h3></a>
	</li>
	<li class="menu-item" class:menu-item-selected={navigation.getCurrentPage() === 'Configuracion'}>
		<a href="/configuracion"><h3>Configuración</h3></a>
	</li>
</nav>

<style>
    .menu {
        background-color: white;
        position: absolute;
		display: flex;
		justify-content: space-evenly;
        flex-direction: column;
        flex-wrap: wrap;
		width: 40vh;
        height: 100vh;
        right: 0;
        border: 1px solid black;
        box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.5);
	}

	.menu-item {
		width: 10rem;
		padding-bottom: 0.5rem;
		text-align: center;
	}
</style>
