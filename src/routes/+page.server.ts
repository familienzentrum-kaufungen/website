import { building } from '$app/environment';
import { isDev } from '$lib';
import { getBoardMemberNames } from '$lib/api';
import { getCoursesOnDay } from '$lib/api/courses';
import { getNextUpcomingEvent } from '$lib/api/events';
import { getCurrentDay } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, url }) => {
	if (building) {
		return {
			boardMembers: [],
			nextUpcomingEvent: null,
			todaysCourses: null
		};
	}
	const isDevEnv = isDev(url);
	const boardMembers = await getBoardMemberNames(fetch, isDevEnv);
	const nextUpcomingEvent = await getNextUpcomingEvent(fetch, isDevEnv);
	const today = getCurrentDay(new Date().getDay());
	const todaysCourses = await getCoursesOnDay(fetch, isDevEnv, today);
	return {
		boardMembers: boardMembers,
		nextUpcomingEvent: nextUpcomingEvent,
		todaysCourses: todaysCourses.sort((a, b) => a.start.localeCompare(b.start))
	};
};
