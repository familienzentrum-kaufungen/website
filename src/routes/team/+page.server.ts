import { building } from '$app/environment';
import { isDev } from '$lib';
import { getAllBoardMembers } from '$lib/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, url }) => {
	if (building) {
		return {
			boardMembers: []
		};
	}
	const boardMembers = await getAllBoardMembers(fetch, isDev(url));
	return {
		boardMembers: boardMembers
	};
};
