import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import * as Styled from '@/components/common/button/button.style';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: PropsWithChildren<ButtonProps>) {
	return <Styled.Button {...props}>{children}</Styled.Button>;
}

export default Button;
