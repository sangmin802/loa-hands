import React, { PropsWithChildren, ReactNode } from 'react';

import * as Styled from '@/components/common/sectionContainer/sectionContainer.style';

export interface SectionContainerProps {
	title: ReactNode;
}

function SectionContainer({
	children,
	title,
	...props
}: PropsWithChildren<SectionContainerProps>) {
	return (
		<Styled.Section {...props}>
			{title}
			{children}
		</Styled.Section>
	);
}

export default SectionContainer;
