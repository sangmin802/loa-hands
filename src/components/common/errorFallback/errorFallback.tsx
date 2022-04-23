import React from 'react';

import * as Styled from '@/components/common/errorFallback/errorFallback.style';
import Text from '@/components/common/text/text';
import { URL } from '@/constants/env';

interface ErrorFallbackProps {
	error: Error;
	resetBoundary: () => void;
}

function ErrorFallback({ error, resetBoundary }: ErrorFallbackProps) {
	return (
		<Styled.ErrorFallback>
			<Styled.ErrorText data-testid="error-message">
				{error?.message}
			</Styled.ErrorText>
			<Styled.RetryButton
				buttonType="black"
				data-testid="retry-button"
				onClick={resetBoundary}
			>
				<Text>재시도</Text>
			</Styled.RetryButton>
			<Styled.ErrorImage src={`${URL}src/assets/img/emoticon_3.gif`} />
		</Styled.ErrorFallback>
	);
}

export default ErrorFallback;
