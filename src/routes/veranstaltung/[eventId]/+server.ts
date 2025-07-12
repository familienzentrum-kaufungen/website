import { getEventForIcal } from '$lib/api/events';
import ical, { ICalCalendarMethod } from 'ical-generator';

export async function GET({ fetch, params }) {
	const eventId = params.eventId.replace(/\.ics$/, '');
	if (!eventId) {
		return new Response('Event ID is required', { status: 400 });
	}
	const { event, config } = await getEventForIcal(fetch, eventId);
	if (!config || !event) {
		return new Response('Event not found', { status: 404 });
	}
	const calendar = ical({
		name: config.club_name
	});
	calendar.method(ICalCalendarMethod.REQUEST);
	calendar.createEvent({
		start: new Date(event.start),
		end: new Date(event.end),
		summary: event.title || '',
		location: event.location
	});
	return new Response(calendar.toString(), {
		headers: {
			'Content-Type': 'text/calendar; charset=utf-8',
			'Content-Disposition': `attachment; filename="${event.title || 'event'}.ics"`
		}
	});
}
