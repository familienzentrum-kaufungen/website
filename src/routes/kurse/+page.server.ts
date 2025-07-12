import { building } from '$app/environment';
import { isDev } from '$lib';
import { getCourses, mapCourses } from '$lib/api/courses.js';
import type { Course, WeekdayEnum } from '$lib/types.js';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async ({ fetch, url }) => {
	if (building) {
		return {
			mappedCourses: new Map<WeekdayEnum, Course[]>()
		};
	}
	const courses = await getCourses(fetch, isDev(url));
	const mappedCourses = mapCourses(courses as Course[]);
	return {
		mappedCourses: mappedCourses
	};
};
