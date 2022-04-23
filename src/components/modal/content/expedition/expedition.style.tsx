import styled from 'styled-components';

import Button from '@/components/common/button/button';

const Container = styled.section``;

const CloseButton = styled(Button)`
	width: 100%;
	margin-bottom: 10px;
	display: flex;
	justify-content: flex-end;

	button {
		width: fit-content;
		padding: 0.3rem;
	}
`;

export { CloseButton, Container };
