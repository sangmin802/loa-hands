import { Story } from '@storybook/react';
import React from 'react';

import InfoItem, { InfoItemProps } from '@/pages/userInfo/infoItem/infoItem';

export default {
	title: 'InfoItem',
	component: InfoItem,
};

const Template: Story<InfoItemProps> = (args) => <InfoItem {...args} />;

export const DetailNormal = Template.bind({});
export const NoDetailNormal = Template.bind({});
export const GetCollection = Template.bind({});
export const NoGetCollection = Template.bind({});
