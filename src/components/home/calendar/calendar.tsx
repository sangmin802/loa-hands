import React from 'react';

import TimerList from '@/components/home/timerList/timerList';
import { useCalendarQuery } from '@/hooks/query/useLoaHandsQuery';
import CalendarData from '@/models/calendarData';

interface ICalendar {
	queryKey: number;
	isMidnight: Date;
	notification: (...args: any[]) => void;
	isWeek: boolean;
}

const Calendar = ({
	queryKey,
	isMidnight,
	isWeek,
	notification,
}: ICalendar) => {
	const { data: calendarData } = useCalendarQuery(queryKey);

	return (
		<TimerList
			data={
				isWeek
					? (calendarData as CalendarData).calendar[0]
					: (calendarData as CalendarData).calendar[1] ?? []
			}
			rerenderKey={isMidnight}
			notification={notification}
		/>
	);
};

export default React.memo(Calendar);
