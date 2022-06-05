import React, { forwardRef, InputHTMLAttributes } from 'react';

import * as Styled from '@/components/common/input/input.style';

export type InputType = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputType>(({ ...props }, ref?) => (
	<Styled.Input
		ref={ref}
		{...props}
	/>
));

Input.displayName = 'Input';

export default Input;
