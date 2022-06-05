import { useQuery } from 'react-query';

import { getCalendarData } from '@/service/loaHands';
import { getEventData } from '@/service/loaHands';
import { getUserData } from '@/service/loaHands';
import { getUserCollection } from '@/service/loaHands';

export const CALENDAR_QUERY_KEY = 'CALENDAR_QUERY_KEY';
export const EVENT_QUERY_KEY = 'EVENT_QUERY_KEY';
export const USER_QUERY_KEY = 'USER_QUERY_KEY';
export const USER_COLLECTION_QUERY_KEY = 'USER_COLLECTION_QUERY_KEY';

export const useCalendarQuery = (param: number, options = {}) =>
	useQuery([CALENDAR_QUERY_KEY, param], () => getCalendarData(), {
		...options,
	});

export const useEventQuery = (options = {}) =>
	useQuery([EVENT_QUERY_KEY], () => getEventData(), {
		...options,
	});

export const useUserQuery = (name: string, options = {}) =>
	useQuery([USER_QUERY_KEY, name], () => getUserData(name), {
		...options,
	});

export const useUserCollectionQuery = (
	name: string,
	member: string[],
	options = {},
) =>
	useQuery([USER_COLLECTION_QUERY_KEY, name], () => getUserCollection(member), {
		...options,
	});
