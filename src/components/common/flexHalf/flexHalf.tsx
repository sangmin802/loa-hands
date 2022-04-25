import React, { ReactNode } from 'react';

import * as Styled from '@/components/common/flexHalf/flexHalf.style';

interface IFlexHalf {
	left: ReactNode;
	right: ReactNode;
}

const FlexHalf = ({ left, right, ...props }: IFlexHalf) => {
	return (
		<Styled.FlexContainer {...props}>
			<Styled.HalfContainer>{left}</Styled.HalfContainer>
			<Styled.HalfContainer>{right}</Styled.HalfContainer>
		</Styled.FlexContainer>
	);
};

export default React.memo(FlexHalf);
