import type { ExecutionResult } from 'graphql';
import type { TypedDocumentString } from '../../graphql/graphql';
import { env } from '$env/dynamic/private';
export async function execute<TResult, TVariables>(
	fetch: FetchFunction,
	query: TypedDocumentString<TResult, TVariables>,
	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
	const body = JSON.stringify({
		query,
		variables
	});
	try {
		const response = await fetch(env.API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/graphql-response+json',
				Authorization: `Bearer ${env.API_TOKEN}`
			},
			body
		});
		if (!response.ok) {
			const errorText = await response.json();
			console.error('Error fetching data', {
				status: response.status,
				statusText: response.statusText,
				error: errorText
			});
			return { data: null };
		}
		return response.json() as Promise<ExecutionResult<TResult>>;
	} catch (e) {
		console.error('Network error while fetching data', {
			query,
			variables,
			error: e
		});
		return { data: null };
	}
}

export type FetchFunction = typeof globalThis.fetch;
