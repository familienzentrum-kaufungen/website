import { graphql } from '../../graphql';
import type { Events_Filter } from '../../graphql/graphql';
import { execute, type FetchFunction } from './utils';

export async function getNextUpcomingEvent(fetch: FetchFunction, isDev = false) {
	const query = graphql(`
		query GetNextUpcomingEvent($filter: events_filter) {
			events(filter: $filter, limit: 1, sort: ["start"]) {
				id
				title
				description
				start
				end
			}
		}
	`);
	const filter: Events_Filter = isDev
		? { start: { _gte: new Date().toISOString() } }
		: {
				start: { _gte: new Date().toISOString() },
				status: { _eq: 'published' }
			};
	const response = await execute(fetch, query, { filter });
	return response.data?.events?.[0] ?? null;
}
export async function getEventForIcal(fetch: FetchFunction, eventId: string) {
	const query = graphql(`
		query GetEventForIcal($eventId: ID!) {
			events(filter: { id: { _eq: $eventId } }) {
				id
				title
				start
				end
				location
			}
			config {
				club_name
			}
		}
	`);
	const response = await execute(fetch, query, { eventId });
	return {
		event: response.data?.events?.[0] ?? null,
		config: response.data?.config ?? null
	};
}
