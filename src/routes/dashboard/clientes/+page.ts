import type { PageLoad } from './$types';
import type { BasicClient, RouteResponse } from './types';

// FETCH FUNCTION
export const load: PageLoad = async ({ fetch }) => {
	const url = `http://localhost:8080/clients`;
	const res = await fetch(url);
	const data: RouteResponse<BasicClient[]> = await res.json();

	return {
		clientData: data
	};
};
