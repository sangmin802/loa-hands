import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from './button';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		buttonType: {
			description: '타입별 버튼입니다.<br> `default` `black` `gray` `submit`',
			defaultValue: 'default',
			control: { type: 'radio' },
			options: ['default', 'black', 'gray', 'submit'],
		},
		children: {
			description: '버튼의 컨텐츠 입니다',
			control: { type: 'text' },
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
	const handleOnClick = () => {
		alert('click');
	};

	return (
		<Button
			onClick={handleOnClick}
			{...args}
		>
			{args.children}
		</Button>
	);
};

export const DefaultButton = Template.bind({});
DefaultButton.args = {
	children: '버튼',
};

export const BlackButton = Template.bind({});
BlackButton.args = {
	...DefaultButton.args,
	buttonType: 'black',
};

export const GrayButton = Template.bind({});
GrayButton.args = {
	...DefaultButton.args,
	buttonType: 'gray',
};

export const SubmitButton = Template.bind({});
SubmitButton.args = {
	...DefaultButton.args,
	buttonType: 'submit',
};
