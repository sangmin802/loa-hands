import { Story } from '@storybook/react';
import React from 'react';

import App from './app';

export default {
	title: 'App',
	component: App,
};

const Template: Story = (args) => <App {...args} />;

export const Default = Template.bind({});

Default.args = {};
