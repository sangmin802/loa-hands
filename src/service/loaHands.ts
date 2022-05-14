import axios, { Canceler } from 'axios';

import CalenderData from '@/models/calendarData';
import UserCollectionInfo from '@/models/collectionInfo';
import EventData from '@/models/eventData';
import UserInfo from '@/models/userInfo';
import { customAxios } from '@/service/axios';

const CancelToken = axios.CancelToken;

let cancelFetchEvent: Canceler;
let cancelFetchCalendar: Canceler;
let cancelFetchUserCollection: Canceler;

export const getUserData = async (name: string): Promise<UserInfo> => {
	cancelFetchEvent?.();
	cancelFetchCalendar?.();
	cancelFetchUserCollection?.();

	try {
		const { data } = await customAxios.post('/userInfo', { name });

		const user: UserInfo = new UserInfo(data);
		return user;
	} catch (err: ReturnType<Error>) {
		const message = err?.response?.data?.message ?? '네트워크 에러입니다.';
		throw new Error(message);
	}
};

export const getUserCollection = async (
	member: string[],
): Promise<UserCollectionInfo> => {
	try {
		const { data } = await customAxios.post(
			'/userCollection',
			{
				member,
			},
			{
				cancelToken: new CancelToken((c) => (cancelFetchUserCollection = c)),
			},
		);
		const userCollectionInfo: UserCollectionInfo = new UserCollectionInfo(data);
		return userCollectionInfo;
	} catch (err: ReturnType<Error>) {
		const message = err?.response?.data?.message ?? '네트워크 에러입니다.';
		throw new Error(message);
	}
};

export const getEventData = async (): Promise<EventData> => {
	try {
		const { data } = await customAxios.get('/event', {
			cancelToken: new CancelToken((c) => (cancelFetchEvent = c)),
		});

		return new EventData(data);
	} catch (err: ReturnType<Error>) {
		const message = err?.response?.data?.message ?? '네트워크 에러입니다.';
		throw new Error(message);
	}
};

export const getCalendarData = async (): Promise<CalenderData> => {
	try {
		const { data } = await customAxios.get('/calendar', {
			cancelToken: new CancelToken((c) => (cancelFetchCalendar = c)),
		});
		return new CalenderData(data);
	} catch (err: ReturnType<Error>) {
		if (err?.request) throw new Error('네트워크 에러입니다.');
		throw new Error();
	}
};
