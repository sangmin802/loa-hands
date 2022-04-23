import { Story } from '@storybook/react';
import React from 'react';

import LoadingSpinner, {
	LoadingSpinnerProps,
} from '@/components/common/loadingSpinner/loadingSpinner';

export default {
	title: 'LoadingSpinner',
	component: LoadingSpinner,
};

const Template: Story<LoadingSpinnerProps> = (args) => (
	<LoadingSpinner {...args} />
);

export const Back = Template.bind({});
export const NoBack = Template.bind({});
