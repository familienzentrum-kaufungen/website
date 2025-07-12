import { graphql } from '../../graphql/gql';
import type { Board_Members_Filter } from '../../graphql/graphql';
import { execute, type FetchFunction } from './utils';

export async function getBoardMemberNames(fetch: FetchFunction, isDev = false) {
	const query = graphql(`
		query GetBoardMemberNames($filter: board_members_filter) {
			board_members(filter: $filter) {
				id
				name
			}
		}
	`);
	const filter: Board_Members_Filter = isDev
		? { official: { _eq: true } }
		: {
				status: { _eq: 'published' },
				official: { _eq: true }
			};
	const response = await execute(fetch, query, { filter });
	return response.data?.board_members ?? [];
}

export async function getAllBoardMembers(fetch: FetchFunction, isDev = false) {
	const query = graphql(`
		query GetAllBoardMembers($filter: board_members_filter) {
			board_members(filter: $filter) {
				id
				name
				email
				role
				description
				picture {
					id
				}
			}
		}
	`);
	const filter: Board_Members_Filter = isDev
		? {}
		: {
				status: { _eq: 'published' }
			};
	const response = await execute(fetch, query, { filter });
	return response.data?.board_members ?? [];
}
