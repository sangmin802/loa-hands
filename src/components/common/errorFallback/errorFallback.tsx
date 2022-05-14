import * as Styled from '@/components/common/errorFallback/errorFallback.style';
import Text from '@/components/common/text/text';
import { URL } from '@/constants/env';

interface IErrorFallback {
	error: Error;
	resetBoundary: () => void;
}

const ErrorFallback = ({ error, resetBoundary }: IErrorFallback) => {
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
			<Styled.ErrorImage src={`${URL}/img/emoticon_3.gif`} />
		</Styled.ErrorFallback>
	);
};

export default ErrorFallback;
