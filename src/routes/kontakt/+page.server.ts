import { building } from '$app/environment';
import { isDev } from '$lib';
import { getGlobalConfig } from '$lib/api/globalConfig';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, url }) => {
	if (building) {
		return {
			globalConfig: null
		};
	}
	const globalConfig = await getGlobalConfig(fetch, isDev(url));
	return {
		globalConfig
	};
};
