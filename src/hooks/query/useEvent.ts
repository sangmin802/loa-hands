import { useQuery } from 'react-query';

import EventData from '@/models/eventData';
import { getEventData } from '@/service/loaHands';

export function useEvent(queryKey: string): EventData {
	const { data: eventData } = useQuery(queryKey, () => getEventData(), {
		refetchOnWindowFocus: false,
	});

	return eventData as EventData;
}
