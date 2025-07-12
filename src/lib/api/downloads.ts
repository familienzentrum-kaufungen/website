import { graphql } from '../../graphql';
import { execute, type FetchFunction } from './utils';

export async function listDownloads(fetch: FetchFunction, isDev = false) {
	const query = graphql(`
		query ListDownloads($filter: downloads_filter) {
			downloads(filter: $filter) {
				id
				title
				file {
					id
					type
				}
			}
		}
	`);
	const filter = isDev
		? { status: { _neq: 'archived' } }
		: {
				status: { _eq: 'published' }
			};
	const response = await execute(fetch, query, { filter });
	return response.data?.downloads ?? [];
}
