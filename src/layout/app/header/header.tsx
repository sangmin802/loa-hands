import React, { FormEvent, MouseEvent, useCallback, useRef } from 'react';
import { useQueryErrorResetBoundary } from 'react-query';
import { useNavigate } from 'react-router-dom';

import Text from '@/components/common/text/text';

import * as Styled from './header.style';

function Header({ ...props }) {
	const { reset } = useQueryErrorResetBoundary();
	const textInput = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			const { current } = textInput;

			if (!current) return;
			const name = current.value;
			const isEmpty = name?.replace(/ /gi, '') === '';

			if (isEmpty) return;
			reset();
			(e.target as HTMLFormElement).search.disabled = true;
			(e.target as HTMLFormElement).search.value = null;
			navigate(`/userInfo/${name}?test=userInfo`, { replace: true });
		},
		[textInput, navigate, reset],
	);

	const handleGoHome = useCallback(
		(e: MouseEvent) => {
			e.preventDefault();
			reset();
			navigate(`/?test=home`, { replace: true });
		},
		[navigate, reset],
	);

	const handleUnDisabled = useCallback((e: MouseEvent) => {
		if (!(e.target as HTMLInputElement).disabled) return;
		(e.target as HTMLInputElement).disabled = false;
	}, []);

	return (
		<Styled.Container {...props}>
			<Styled.Logo onClick={handleGoHome}>
				<Styled.Background data-testid="go-home" />
			</Styled.Logo>
			<Styled.Form
				data-testid="submit-form"
				onSubmit={handleSubmit}
			>
				<Styled.InputText
					onMouseOverCapture={handleUnDisabled}
					data-testid="search-area"
					type="text"
					name="search"
					ref={textInput}
					autoComplete="off"
				/>
				<Styled.InputSubmit
					type="submit"
					buttonType="submit"
				>
					<Text>검색</Text>
				</Styled.InputSubmit>
			</Styled.Form>
		</Styled.Container>
	);
}

export default React.memo(Header);
