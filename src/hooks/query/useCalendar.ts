import { useQuery } from 'react-query';

import CalendarData from '@/models/calendarData';
import { getCalendarData } from '@/service/loaHands';

export function useCalendar(queryKey: (number | string)[]): CalendarData {
	const { data: calendarData } = useQuery(queryKey, () => getCalendarData(), {
		refetchOnWindowFocus: false,
	});

	return calendarData as CalendarData;
}
