export enum WeekdayEnum {
	SUNDAY = 'SUNDAY',
	MONDAY = 'MONDAY',
	TUESDAY = 'TUESDAY',
	WEDNESDAY = 'WEDNESDAY',
	THURSDAY = 'THURSDAY',
	FRIDAY = 'FRIDAY',
	SATURDAY = 'SATURDAY'
}

export type Course = {
	id: string;
	title: string;
	subtitle?: string;
	description?: string;
	weekday: WeekdayEnum;
	start: string; // ISO date string
	end: string; // ISO date string
	paid: boolean;
};

export function getCurrentDay(dayIndex: number): WeekdayEnum {
	switch (dayIndex) {
		case 0:
			return WeekdayEnum.SUNDAY;
		case 1:
			return WeekdayEnum.MONDAY;
		case 2:
			return WeekdayEnum.TUESDAY;
		case 3:
			return WeekdayEnum.WEDNESDAY;
		case 4:
			return WeekdayEnum.THURSDAY;
		case 5:
			return WeekdayEnum.FRIDAY;
		case 6:
			return WeekdayEnum.SATURDAY;
		default:
			throw new Error('Invalid day index');
	}
}
