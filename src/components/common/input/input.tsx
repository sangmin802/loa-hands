import React, { forwardRef, InputHTMLAttributes } from 'react';

import * as Styled from '@/components/common/input/input.style';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref?) => (
	<Styled.Input ref={ref} {...props} />
));

Input.displayName = 'Input';

export default Input;
