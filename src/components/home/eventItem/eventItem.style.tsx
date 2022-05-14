import styled from 'styled-components';

const Container = styled.article`
	cursor: pointer;
	flex-direction: column;

	background: ${({ theme }) => theme.backgroundColor.darkDeep};
	${({ theme }) => theme.contentBox}
`;

const Desc = styled.div`
	padding: 0.5rem;
	text-align: center;
`;

export { Container, Desc };
