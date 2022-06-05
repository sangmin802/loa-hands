import styled, { css } from 'styled-components';

import { ButtonType } from './button';

const borderRadius = css`
	border-radius: 3px;
	border: 1px solid #f0f4f5;
`;

const buttonTypes = {
	default: css``,
	black: css`
		background: #000000;
		${borderRadius}
	`,
	gray: css`
		background: #1f222a;
		${borderRadius}
	`,
	submit: css`
		${borderRadius}
		border-radius: 3px 3px 3px 0;
		background: transparent;
	`,
};

const Button = styled.button<{ buttonType: ButtonType }>`
	cursor: pointer;
	outline: none;
	border: 0;
	background: none;
	padding: 0.3rem 0.6rem;
	color: white;

	${({ buttonType }) => buttonTypes[buttonType]}
`;

export { Button };
