import { Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import Button, { ButtonProps } from './button';

const Text = styled.div`
	color: white;
`;

export default {
	title: 'Button',
	component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: <Text>Text</Text>,
};
