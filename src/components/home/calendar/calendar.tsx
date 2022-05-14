import React from 'react';

import TimerList from '@/components/home/timerList/timerList';
import { useCalendar } from '@/hooks/query/useCalendar';

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
