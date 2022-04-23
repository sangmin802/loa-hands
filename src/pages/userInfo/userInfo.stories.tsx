import { Story } from '@storybook/react';
import React from 'react';

import AsyncBoundary from '@/components/common/asyncBoundary/asyncBoundary';
import ErrorFallback from '@/components/common/errorFallback/errorFallback';
import SearchLoading from '@/pages/userInfo/searchLoading/searchLoading';
import UserInfo, { UserInfoProps } from '@/pages/userInfo/userInfo';

export default {
	title: 'UserInfo',
	component: UserInfo,
};

const Template: Story<UserInfoProps> = (args) => (
	<AsyncBoundary
		suspenseFallback={<SearchLoading />}
		errorFallback={ErrorFallback}
	>
		<UserInfo {...args} />
	</AsyncBoundary>
);

export const Default = Template.bind({});

Default.args = {};
