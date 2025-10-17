import type { ClientsMainView } from '$lib/Models';
import { supabase } from '$lib/supabaseClient';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const { data } = await supabase.from('clients_main_view').select();
	return json({
		clients: (data ?? []) as ClientsMainView[]
	});
};