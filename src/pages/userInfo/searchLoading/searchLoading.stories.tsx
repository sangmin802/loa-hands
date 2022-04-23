import { Story } from '@storybook/react';
import React from 'react';

import SearchLoading from '@/pages/userInfo/searchLoading/searchLoading';

export default {
	title: 'SearchLoading',
	component: SearchLoading,
};

const Template: Story = (args) => <SearchLoading {...args} />;

export const Default = Template.bind({});

Default.args = {};
