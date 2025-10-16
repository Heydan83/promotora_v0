<script lang="ts">
    import { Navigation } from '$states';
	import { slide } from 'svelte/transition';

    interface HamburgerMenu {
        openCloseHamburgerMenu: Function;
    }

    let { openCloseHamburgerMenu } : HamburgerMenu = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<nav class="menu" in:slide={{ duration: 150, axis: 'x' }} onclick={() => openCloseHamburgerMenu()}>
	<li class="menu-item" class:menu-item-selected={Navigation.getCurrentPage() === 'Calendario'}>
		<a href="/calendario"><h3>Calendario</h3></a>
	</li>
	<li class="menu-item" class:menu-item-selected={Navigation.getCurrentPage() === 'Clientes'}>
		<a href="/clientes"><h3>Clientes</h3></a>
	</li>
	<li class="menu-item" class:menu-item-selected={Navigation.getCurrentPage() === 'Promotoras'}>
		<a href="/promotoras"><h3>Promotoras</h3></a>
	</li>
	<li class="menu-item" class:menu-item-selected={Navigation.getCurrentPage() === 'Configuracion'}>
		<a href="/configuracion"><h3>Configuración</h3></a>
	</li>
</nav>

<style>
    .menu {
        background-color: white;
        position: absolute;
		display: flex;
        flex-direction: column;
        flex-wrap: wrap;
		width: 32vh;
        height: 100vh;
        right: 0;
        border: 1px solid black;
        box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.5);
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        align-items: center;
	}

	.menu-item {
		width: 10rem;
		padding-bottom: 0.5rem;
		text-align: center;
        padding: 1.5rem;
	}

    .menu-item-selected {
		border-bottom: 3px solid black;
	}
</style>
