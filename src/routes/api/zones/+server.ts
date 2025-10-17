import { supabase } from '$lib/supabaseClient';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Zones } from '$lib/Models';

export const GET: RequestHandler = async () => {
    const { data } = await supabase.from('zones').select();
    
	return json({
		zones: (data ?? []) as Zones[]
	});
};