import { supabase } from '$lib/supabaseClient';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Business_Types } from '$lib/Models';

export const GET: RequestHandler = async () => {
    const { data } = await supabase.from('business_types').select();
    
	return json({
		business_types: (data ?? []) as Business_Types[]
	});
};