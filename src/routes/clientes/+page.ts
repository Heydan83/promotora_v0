import type ClientsMainView from '$lib/Models/ClientsMainView.js';
import type Zones from '$lib/Models/Zones';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, url }) => {
	const response = await fetch(`${url.origin}/api/clients`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const response2 = await fetch(`${url.origin}/api/zones`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

    const response3 = await fetch(`${url.origin}/api/business_types`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const data = await response.json();
	const data2 = await response2.json();
    const data3 = await response3.json();

    console.log(data3);

	return { clients: data.clients as ClientsMainView[], zones: data2.zones as Zones[] };
};
