import styled from 'styled-components';

import Button from '@/components/common/button/button';
import Image from '@/components/common/image/image';
import SectionContainer from '@/components/common/sectionContainer/sectionContainer';
import Text from '@/components/common/text/text';

const UserInfo = styled.section`
	padding: 0.5rem;
`;

const Top = styled.section`
	position: relative;
	border-radius: 3px;
	padding: 1rem 0.5rem 1rem;

	background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

const Bottom = styled.section`
	margin-top: 1rem;
`;

const ExpeditionButton = styled(Button)`
  margin-left: auto;
  display: block;
`;

const NAVContent = styled.section`
	padding: 0.5rem;
	border-radius: 0 0 5px 5px;

	background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

const Navigation = styled.section`
	width: fit-content;
	border-radius: 5px 5px 0 0;
	overflow: hidden;
`;

const NAVButton = styled.div<{ selected: boolean; isCollection?: boolean }>`
  display: inline-block;
  cursor: pointer;
  padding: 0.5rem;
  width: fit-content;

	background: ${({ theme }) => theme.backgroundColor.darkDeep};
	color: ${({ selected }) => (selected ? '#fff' : '#666')};
`;

const BasicInfoLabel = styled(SectionContainer)`
	align-items: center;
	height: 30px;
	overflow: hidden;
	margin-top: 0.5rem;
`;

const Label = styled(Text)`
	display: flex;
	width: fit-content;
	align-items: center;
	padding: 0.2rem 0.6rem;
	overflow: initial;

	${({ theme }) => theme.contentBox}
	background : ${({ theme }) => theme.backgroundColor.darkLow};
`;

const ClassThumbnail = styled(Image)`
	width: 30px;
	height: inherit;
`;

export {
	BasicInfoLabel,
	Bottom,
	ClassThumbnail,
	ExpeditionButton,
	Label,
	NAVButton,
	NAVContent,
	Navigation,
	Top,
	UserInfo,
};
