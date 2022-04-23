import { Story } from '@storybook/react';
import React from 'react';

import Home from '@/pages/home/home';

export default {
	title: 'Home',
	component: Home,
};

const Template: Story = (args) => <Home {...args} />;

export const Default = Template.bind({});

Default.args = {};
