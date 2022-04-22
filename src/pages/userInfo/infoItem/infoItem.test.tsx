import React from 'react';

import { fireEvent, render, screen } from '@/utils/test';

import InfoItem from './infoItem';

const initialData = {
	backSrc: '',
	type: '',
	detail: {
		src: '',
		grade: '3',
		subTitle: ['서브타이틀1', '서브타이틀2'],
		title: '타이틀',
		hover: true,
	},
};

describe('InfoItem', () => {
	it('아이템 상세보기 다이얼로그 활성화', () => {
		render(<InfoItem data={initialData} />);

		fireEvent.click(screen.getByTestId('list-item'));
	});
});
