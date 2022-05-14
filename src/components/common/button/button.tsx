import { ButtonHTMLAttributes } from 'react';

import * as Styled from '@/components/common/button/button.style';

export type ButtonType = 'default' | 'black' | 'gray' | 'submit';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	buttonType?: ButtonType;
}

const Button = ({ buttonType = 'default', children, ...props }: IButton) => {
	return (
		<Styled.Button
			buttonType={buttonType}
			{...props}
		>
			{children}
		</Styled.Button>
	);
};

export default Button;
