import React from 'react';

import * as Styled from '@/components/home/eventList/eventList.style';
import { useEventQuery } from '@/hooks/query/useLoaHandsQuery';
import EventData from '@/models/eventData';

const EventList = () => {
	const { data: eventData } = useEventQuery();

	return (
		<Styled.EventList
			data={(eventData as EventData).events}
			item={Styled.EventItem}
		/>
	);
};

export default React.memo(EventList);
