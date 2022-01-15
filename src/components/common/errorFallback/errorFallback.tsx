import React from "react";
import Text from "components/text/text";
import * as Styled from "./errorFallback.style";

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
      <Styled.RetryButton data-testid="retry-button" onClick={resetBoundary}>
        <Text>재시도</Text>
      </Styled.RetryButton>
      <Styled.ErrorImage src={`${process.env.PUBLIC_URL}/img/emoticon_3.gif`} />
    </Styled.ErrorFallback>
  );
}

export default ErrorFallback;
