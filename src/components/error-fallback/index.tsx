import React from "react";
import { Text, Button, Image } from "components/";
import * as Styled from "./index.style";

interface IErrorFallback {
  error: Error;
  resetBoundary: () => void;
}

const ErrorFallback = ({ error, resetBoundary }: Partial<IErrorFallback>) => {
  return (
    <Styled.ErrorFallback>
      <Styled.TextContainer data-testid="error-message">
        <Text>{error.message}</Text>
      </Styled.TextContainer>
      <Styled.ButtonContainer>
        <Button data-testid="retry-button" onClick={resetBoundary}>
          <Text>재시도</Text>
        </Button>
      </Styled.ButtonContainer>
      <Styled.ImageContainer>
        <Image src={`${process.env.PUBLIC_URL}/img/emoticon_3.gif`} />
      </Styled.ImageContainer>
    </Styled.ErrorFallback>
  );
};

export default ErrorFallback;
