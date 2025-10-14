<script lang="ts">
    import { navigation } from '$states';
	import { slide } from 'svelte/transition';

    interface HamburgerMenu {
        openCloseHamburgerMenu: Function;
    }

    let { openCloseHamburgerMenu } : HamburgerMenu = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<nav class="menu" in:slide={{ duration: 150, axis: 'x' }} onclick={() => openCloseHamburgerMenu()}>
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
		/* justify-content: space-between; */
        flex-direction: column;
        flex-wrap: wrap;
        row-gap: 1rem;
		width: 35vh;
        height: 100vh;
        right: 0;
        border: 1px solid black;
        box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        align-items: center;
	}

	.menu-item {
		width: 10rem;
		padding-bottom: 0.5rem;
		text-align: center;
        padding: 2rem;
	}

    .menu-item-selected {
		border-bottom: 3px solid black;
	}
</style>
