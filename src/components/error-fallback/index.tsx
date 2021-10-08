import React from "react";
import Text from "components/text";
import * as Styled from "./index.style";

interface IErrorFallback {
  error: Error;
  resetBoundary: () => void;
}

const ErrorFallback = ({ error, resetBoundary }: Partial<IErrorFallback>) => {
  return (
    <Styled.ErrorFallback>
      <Styled.ErrorText data-testid="error-message">
        {error.message}
      </Styled.ErrorText>
      <Styled.RetryButton data-testid="retry-button" onClick={resetBoundary}>
        <Text>재시도</Text>
      </Styled.RetryButton>
      <Styled.ErrorImage src={`${process.env.PUBLIC_URL}/img/emoticon_3.gif`} />
    </Styled.ErrorFallback>
  );
};

export default ErrorFallback;
