import React from 'react';

import * as Styled from '@/components/home/event/event.style';
import { useEvent } from '@/hooks/query/useEvent';

interface EventProps {
	queryKey: string;
}

function Event({ queryKey }: EventProps) {
	const eventData = useEvent(queryKey);

	return (
		<Styled.EventList
			data={eventData.events}
			item={Styled.EventItem}
		/>
	);
}

export default React.memo(Event);
