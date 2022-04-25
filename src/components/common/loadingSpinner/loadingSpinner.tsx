import { HTMLAttributes } from 'react';

import * as Styled from '@/components/common/loadingSpinner/loadingSpinner.style';

export type LoadingSpinnerType = HTMLAttributes<HTMLElement>;

const LoadingSpinner = ({ ...props }: LoadingSpinnerType) => {
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
};

export default LoadingSpinner;
