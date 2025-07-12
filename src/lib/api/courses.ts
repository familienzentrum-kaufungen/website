import { WeekdayEnum, type Course } from '$lib/types';
import { graphql } from '../../graphql';
import type { Courses_Filter } from '../../graphql/graphql';
import { execute, type FetchFunction } from './utils';

export async function getCourses(fetch: FetchFunction, isDev = false) {
	const query = graphql(`
		query GetCourses($filter: courses_filter) {
			courses(filter: $filter) {
				id
				weekday
				start
				end
				title
				subtitle
				description
				paid
			}
		}
	`);
	const filter: Courses_Filter = isDev
		? { status: { _neq: 'archived' } }
		: { status: { _eq: 'published' } };
	const response = await execute(fetch, query, { filter });
	return response.data?.courses ?? [];
}

export async function getCourse(fetch: FetchFunction, courseId: string, isDev = false) {
	const query = graphql(`
		query GetCourse($filter: courses_filter) {
			courses(filter: $filter, limit: 1) {
				id
				weekday
				start
				end
				title
				subtitle
				description
				paid
			}
		}
	`);
	const filter: Courses_Filter = isDev
		? { id: { _eq: courseId }, status: { _neq: 'archived' } }
		: { id: { _eq: courseId }, status: { _eq: 'published' } };
	const response = await execute(fetch, query, { id: courseId, filter });
	return response.data?.courses?.[0] ?? null;
}

export function mapCourses(courses: Course[]) {
	const coursesMap = new Map<WeekdayEnum, Course[]>();
	coursesMap.set(WeekdayEnum.MONDAY, []);
	coursesMap.set(WeekdayEnum.TUESDAY, []);
	coursesMap.set(WeekdayEnum.WEDNESDAY, []);
	coursesMap.set(WeekdayEnum.THURSDAY, []);
	coursesMap.set(WeekdayEnum.FRIDAY, []);
	coursesMap.set(WeekdayEnum.SATURDAY, []);
	coursesMap.set(WeekdayEnum.SUNDAY, []);
	courses.forEach((course) => {
		const weekday = course.weekday;
		if (!coursesMap.has(weekday)) {
			coursesMap.set(weekday, []);
		}
		coursesMap.get(weekday)?.push(course);
	});
	// filter out empty arrays
	coursesMap.forEach((value, key) => {
		if (value.length === 0) {
			coursesMap.delete(key);
		}
		// sort courses by start time (format is HH:mm)
		value.sort((a, b) => {
			return a.start.localeCompare(b.start);
		});
	});
	return coursesMap;
}

export async function getCoursesOnDay(fetch: FetchFunction, isDev = false, day: WeekdayEnum) {
	const query = graphql(`
		query GetCoursesOnDay($filter: courses_filter) {
			courses(filter: $filter) {
				id
				start
				end
				title
				paid
			}
		}
	`);
	const filter: Courses_Filter = isDev
		? { weekday: { _eq: day }, status: { _neq: 'archived' } }
		: { weekday: { _eq: day }, status: { _eq: 'published' } };
	const response = await execute(fetch, query, { filter });
	return response.data?.courses ?? [];
}
