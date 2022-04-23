import styled, { css } from 'styled-components';

import { BACKGROUND } from '@/constants/index';

const positionX = [
	'718px',
	'673px',
	'767px',
	'787px',
	'652px',
	'627px',
	'741px',
	'696px',
];

const Navigation = styled.section`
	display: flex;
	padding: 0.3rem;
	background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

const NavButton = styled.div<{ selected: boolean }>`
	cursor: pointer;
	padding: 0.5rem;
	background: ${({ theme }) => theme.backgroundColor.darkDeep};
	flex-grow: 1;
	height: 24px;
	position: relative;
	padding: 0;
	border-radius: 3px;

	&:after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 20px;
		height: 24px;
		background: url('${BACKGROUND}');
		background-size: 1250px 1209px;
	}
	background-color: ${({ selected }) => (selected ? '#222' : 'transparent')};

	${() => {
		let styles = '';
		positionX.forEach(
			(p, i) =>
				(styles += `&:nth-of-type(${
					i + 1
				}):after {background-position: ${p} 50px;};`),
		);
		return css`
			${styles}
		`;
	}}
	&:hover {
		background-color: #222;
	}
`;

const NAVContent = styled.section`
	margin-top: 0.5rem;
`;

export { NavButton, NAVContent, Navigation };
