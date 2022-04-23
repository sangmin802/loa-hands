import React from 'react';

import { useCalendar } from '@/hooks/useCalendar';
import TimerList from '@/pages/home/timerList/timerList';

interface CalendarProps {
	queryKey: (string | number)[];
	isMidnight: Date;
	notification: (...args: any[]) => void;
	isWeek: boolean;
}

function Calendar({
	queryKey,
	isMidnight,
	isWeek,
	notification,
}: CalendarProps) {
	const calendarData = useCalendar(queryKey);

	return (
		<TimerList
			data={isWeek ? calendarData.calendar[0] : calendarData.calendar[1] ?? []}
			rerenderKey={isMidnight}
			notification={notification}
		/>
	);
}

export default React.memo(Calendar);
