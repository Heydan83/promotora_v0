import type ClientsMainView from '$lib/Models/ClientsMainView.js';
import type { PageLoad } from './$types';

export const load: PageLoad = (async ({ fetch, url }) => {
    const response = await fetch(`${url.origin}/api/clients`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      return { clients: data.clients as ClientsMainView[] };
});