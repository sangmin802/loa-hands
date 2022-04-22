import { Story } from '@storybook/react';
import React from 'react';

import TimerItem, {
	TimerProps,
} from '@/pages/home/timerList/timerItem/timerItem';

export default {
	title: 'TimerItem',
	component: TimerItem,
};

const Template: Story<TimerProps> = (args) => <TimerItem {...args} />;

export const Default = Template.bind({});

Default.args = {
	data: {
		name: '무릉도원',
		src: '/img/island/island_04.png',
		time: ['18:00'],
		endTime: '18:00',
		lv: '400',
		position: '대항해',
		endPosition: '무릉도원',
	},
	dispatcher: {
		setTime: () => null,
		notification: () => null,
	},
};
