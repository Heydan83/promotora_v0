import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';
import type { ClientsMainView } from '$lib/Models';

export const load: PageServerLoad = async () => {
	await new Promise((resolve) => setTimeout(resolve, 5000));

	const { data } = await supabase.from('clients_main_view').select();
	return {
		clients: (data ?? []) as ClientsMainView[]
	};
};
