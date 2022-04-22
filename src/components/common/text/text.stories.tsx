import { Story } from '@storybook/react';
import React from 'react';

import Text, { TextProps } from '@/components/common/text/text';

export default {
	title: 'Text',
	component: Text,
};

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Title = Template.bind({});
export const Normal = Template.bind({});
export const Desc = Template.bind({});
export const SubTitle = Template.bind({});
export const Small = Template.bind({});

Title.args = {
	color: 'color0',
};
Normal.args = {
	color: 'color1',
};
Desc.args = {
	color: 'color2',
};
SubTitle.args = {
	color: 'color3',
};
Small.args = {
	color: 'color4',
};
