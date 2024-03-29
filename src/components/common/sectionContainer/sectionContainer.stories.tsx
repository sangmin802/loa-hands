import { Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import SectionContainer, {
	SectionContainerProps,
} from '@/components/common/sectionContainer/sectionContainer';

const Content = styled.div`
	color: #fff;
	text-align: center;
`;

export default {
	title: 'SectionContainer',
	component: SectionContainer,
};

const Template: Story<PropsWithChildren<SectionContainerProps>> = (args) => (
	<SectionContainer {...args} />
);

export const Default = Template.bind({});

Default.args = {
	title: 'Title',
	children: <Content>Content</Content>,
};
