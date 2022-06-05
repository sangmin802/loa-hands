import React from 'react';

import TimerContainer from '@/pages/home/timerList/timerList';
import { render } from '@/utils/test';

const initialData = [
	{
		name: '무릉도원',
		src: '/img/island/island_04.png',
		time: ['00:00', '06:00', '12:00', '18:00'],
		endTime: '18:00',
		lv: 400,
		position: '대항해',
		contType: 'ISLAND',
	},
	{
		name: '기에나',
		contType: 'CO_OCEAN',
		lv: '-',
		src: '/img/ocean/ocean_01.png',
		position: ['아르데타인', '베른', '애니츠'],
		endPosition: '애니츠',
		time: ['00:00', '12:00', '18:00'],
		endTime: '18:00',
	},
];

const expectData = [
	{
		name: '무릉도원',
		src: '/img/island/island_04.png',
		time: ['18:00'],
		endTime: '18:00',
		lv: 400,
		position: '대항해',
		contType: 'ISLAND',
	},
	{
		name: '기에나',
		contType: 'CO_OCEAN',
		lv: '-',
		src: '/img/ocean/ocean_01.png',
		position: ['애니츠'],
		endPosition: '애니츠',
		time: ['18:00'],
		endTime: '18:00',
	},
];

// 호이스팅됨
// jest.mock('components/list/list.tsx', () => (props: any) => (
// 	<div data-testid={JSON.stringify(props.data)} />
// ));

describe('TimerContainer', () => {
	afterEach(() => {
		jest.clearAllMocks();
		jest.restoreAllMocks();
	});

	it('컨텐츠에서 종료되지 않은 시간대만 유지 및 빠른순으로 정렬', () => {
		const notification = jest.fn((arg) => arg);
		// notification.mockImplementation(arg => arg);
		// notification.mockRejectedValue(7)
		// console.log(notification(1));

		// mock 함수가 되기 전에 date 캐싱
		// mockImplementation은 각각의 테스트마다 초기화되는것 같음. 그래서 전역으로 설정해주었을 때, spyOn으로 Mock 인스턴스가 되긴 하지만, 지정해준 mockImplementation는 초기화되서 없음
		const mockDateObject = new Date(2021, 1, 1, 17);
		jest
			.spyOn(global, 'Date')
			.mockImplementation(() => mockDateObject as unknown as string);

		const { getByTestId } = render(
			<TimerContainer data={initialData} notification={notification} />,
		);

		expect(getByTestId(JSON.stringify(expectData))).toBeTruthy();
	});
});

// jest.fn : 껍데기의 모의 함수를 만듬
// jest.mock : 모듈을 통째로 복제함 혹은,requireActual을 통해 기본을 보전하고 일부분만 변경 가능
// jest.spyOn : 모듈의 일부분만을 복제하는 용도가 짖은것같음

// const module = {
//   add: (num: number) => num + 1,
//   minus: (num: number) => num - 1,
// };

// jest.spyOn(module, "minus").mockImplementation(num => num + 1);

// console.log(module.minus(1)); // 2
// console.log(module.add(1)); // 2
