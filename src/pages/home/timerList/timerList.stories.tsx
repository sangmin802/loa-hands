import { Story } from '@storybook/react';
import React from 'react';

import { DAILY_ISLAND } from '@/json/timer';
import TimerList, { TimerListProps } from '@/pages/home/timerList/timerList';

export default {
	title: 'TimerList',
	component: TimerList,
};

const Template: Story<TimerListProps> = (args) => <TimerList {...args} />;

export const Default = Template.bind({});

Default.args = {
	data: DAILY_ISLAND,
};
