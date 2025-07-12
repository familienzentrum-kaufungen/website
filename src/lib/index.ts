import { env } from '$env/dynamic/public';
import slugify from 'slugify';

// place files you want to import through the `$lib` alias in this folder.
export function fileUrl(id: string | number, name: string) {
	if (!id || !name) {
		return '';
	}
	return `${env.PUBLIC_ASSET_URL}/${id}/${slugify(name, { locale: 'de' })}`;
}

export function avatarUrl(id: string | number, name: string) {
	const url = fileUrl(id, name);
	return `${url}?width=200&height=200&quality=80&format=webp`;
}

export function isDev(url: URL) {
	return url.hostname === 'localhost' || url.searchParams.get('dev') === 'true';
}

export function clsx(...classes: (string | boolean | undefined)[]) {
	return classes.filter(Boolean).join(' ');
}

export const config = {
	links: {
		insta: 'https://www.instagram.com/familienzentrum_kaufungen/'
	}
};

export function toShortTime(time: string): string {
	const [hours, minutes] = time.split(':');
	return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
}
