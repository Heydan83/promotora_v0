import type { Menu } from '$lib/types/types';

class Navigation {
    private static instance: Navigation;
    private page: Menu = $state<Menu>('');

    private constructor(page: Menu) {
        this.page = page;
    }

    public static getInstance(): Navigation {
        if (!Navigation.instance) Navigation.instance = new Navigation('Calendario');

        return Navigation.instance;
    }

    public getCurrentPage(): Menu {
        return this.page;
    }

    public navigateTo(page: Menu) {
        this.page = page;
    }
}

const navigation = Navigation.getInstance();

export default navigation;