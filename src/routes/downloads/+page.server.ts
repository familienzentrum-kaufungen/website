import { fileUrl, isDev } from '$lib';
import { listDownloads } from '$lib/api/downloads';
import { extension } from 'mime-types';
import type { PageServerLoad } from './$types';
import { building } from '$app/environment';

export const load: PageServerLoad = async ({ fetch, url }) => {
	if (building) {
		return {
			downloads: []
		};
	}
	const downloads = await listDownloads(fetch, isDev(url));
	return {
		downloads: downloads.map((file) => ({
			id: file.id,
			title: file.title,
			url: `${fileUrl(file.file!.id!, file.title || 'download')}.${extension(file.file!.type!)}?download`
		}))
	};
};
