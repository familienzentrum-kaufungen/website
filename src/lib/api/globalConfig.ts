import { graphql } from '../../graphql';
import { execute, type FetchFunction } from './utils';

export async function getGlobalConfig(fetch: FetchFunction, isDev = false) {
	const query = graphql(`
		query GetGlobalConfig {
			config {
				id
				club_name
				address
				club_email
			}
		}
	`);
	const res = await execute(fetch, query);
	return res.data?.config ?? null;
}
