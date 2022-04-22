import styled from 'styled-components';

import Button from '@/components/common/button/button';

const Char = styled.article`
	padding: 0.5rem;
	border-radius: 3px;
	cursor: pointer;

	&:hover {
		background: ${({ theme }) => theme.backgroundColor.darkLow};
	}
`;

const CharButton = styled(Button)`
	width: 100%;
	text-align: left;
`;

export { Char, CharButton };
