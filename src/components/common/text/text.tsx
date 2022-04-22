import React, { HTMLAttributes, PropsWithChildren } from 'react';

import * as Styled from '@/components/common/text/text.style';

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
	size: string;
	color: string;
}

function Text({
	color = 'white',
	size = '1',
	children,
	...props
}: PropsWithChildren<Partial<TextProps>>) {
	return (
		<Styled.Text color={color} size={size} {...props}>
			{children}
		</Styled.Text>
	);
}

export default Text;
