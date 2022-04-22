import React, { HTMLAttributes } from 'react';

import * as Styled from '@/components/common/loadingSpinner/loadingSpinner.style';

export type LoadingSpinnerProps = HTMLAttributes<HTMLElement>;

function LoadingSpinner({ ...props }: LoadingSpinnerProps) {
	return (
		<Styled.Content {...props}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</Styled.Content>
	);
}

export default LoadingSpinner;
