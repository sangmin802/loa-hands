import styled from 'styled-components';

import Button from '@/components/common/button/button';
import SectionContainer from '@/components/common/sectionContainer/sectionContainer';
import Text from '@/components/common/text/text';

const Home = styled.section`
	padding: 0.5rem;
`;

const Section = styled(SectionContainer)`
	flex-direction: column;
	margin-top: 0.7rem;
`;

const SectionTitle = styled(Text)`
	background: ${({ theme }) => theme.backgroundColor.darkDeep};
	border-radius: 3px 3px 0 0;
	text-align: center;
	padding: 0.3rem 0;
`;

const SectionSmallTitle = styled.small`
	margin-left: 0.5rem;
`;

const Notification = styled(Button)`
	width: fit-content;
	margin: 5px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.2rem 0.4rem;

	${({ theme }) => theme.contentBox};
	background: ${({ theme }) => theme.backgroundColor.darkDeep};
	border-radius: 3px 3px 3px 0;
`;

export { Home, Notification, Section, SectionSmallTitle, SectionTitle };
