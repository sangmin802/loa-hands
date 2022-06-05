import { ReactNode } from 'react';

import * as Styled from '@/components/common/sectionContainer/sectionContainer.style';

export interface ISectionContainer {
	title: ReactNode;
	children: ReactNode;
}

const SectionContainer = ({ children, title, ...props }: ISectionContainer) => {
	return (
		<Styled.Section {...props}>
			{title}
			{children}
		</Styled.Section>
	);
};

export default SectionContainer;
