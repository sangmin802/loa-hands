import { Story } from '@storybook/react';
import React from 'react';

import { URL } from '@/constants/env';

import Image, { ImageProps } from './image';

export default {
	title: 'Image',
	component: Image,
};

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {
	src: `/img/event.jpg`,
};
