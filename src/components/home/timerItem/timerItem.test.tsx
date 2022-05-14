import React from 'react';

import Timer from '@/components/home/timerItem/timerItem';
import { render } from '@/utils/test';

const initialData = {
	name: '기에나',
	contType: 'CO_OCEAN',
	lv: '-',
	src: '/img/ocean/ocean_01.png',
	position: '애니츠',
	endPosition: '애니츠',
	time: ['00:20'],
	endTime: '00:20',
};

// normal 타입
// start 타입
// ready 타입

const cachedClose = new Date(2021, 5, 11, 0, 23);

describe('Timer1', () => {
	const setTime = jest.fn();
	const notification = jest.fn();

	afterEach(() => {
		jest.restoreAllMocks();
		jest.clearAllMocks();
	});

	it('normal', () => {
		const cachedNow = new Date(2021, 5, 11, 0, 9);

		jest
			.spyOn(global, 'Date')
			.mockImplementationOnce(() => cachedNow as unknown as string)
			.mockImplementationOnce(() => cachedNow as unknown as string)
			.mockImplementationOnce(() => cachedClose as unknown as string);

		const { getByTestId } = render(
			<Timer
				data={initialData}
				dispatcher={{ setTime, notification }}
			/>,
		);

		expect(getByTestId('NORMAL')).toBeTruthy();

		jest.advanceTimersByTime(840000);

		console.log(setTime.mock);
	});

	it('ready', () => {
		const cachedNow = new Date(2021, 5, 11, 0, 15);

		jest
			.spyOn(global, 'Date')
			.mockImplementationOnce(() => cachedNow as unknown as string)
			.mockImplementationOnce(() => cachedNow as unknown as string)
			.mockImplementationOnce(() => cachedClose as unknown as string);

		const { getByTestId } = render(
			<Timer
				data={initialData}
				dispatcher={{ setTime, notification }}
			/>,
		);

		expect(getByTestId('READY')).toBeTruthy();
	});

	it('start', () => {
		const cachedNow = new Date(2021, 5, 11, 0, 21);

		jest
			.spyOn(global, 'Date')
			.mockImplementationOnce(() => cachedNow as unknown as string)
			.mockImplementationOnce(() => cachedNow as unknown as string)
			.mockImplementationOnce(() => cachedClose as unknown as string);

		const { getByTestId } = render(
			<Timer
				data={initialData}
				dispatcher={{ setTime, notification }}
			/>,
		);

		expect(getByTestId('START')).toBeTruthy();
	});

	it('close', () => {
		const cachedNow = new Date(2021, 5, 11, 0, 23, 1);

		jest
			.spyOn(global, 'Date')
			.mockImplementationOnce(() => cachedNow as unknown as string)
			.mockImplementationOnce(() => cachedNow as unknown as string)
			.mockImplementationOnce(() => cachedClose as unknown as string);

		render(
			<Timer
				data={initialData}
				dispatcher={{ setTime, notification }}
			/>,
		);

		expect(setTime).toBeCalled();
	});
});
