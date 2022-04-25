import { HTMLAttributes } from 'react';

import * as Styled from '@/components/common/text/text.style';

export interface IText extends HTMLAttributes<HTMLDivElement> {
	size: string;
	color: string;
}

const Text = ({
	color = 'white',
	size = '1',
	children,
	...props
}: Partial<IText>) => {
	return (
		<Styled.Text
			color={color}
			size={size}
			{...props}
		>
			{children}
		</Styled.Text>
	);
};

export default Text;
