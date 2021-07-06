import React from "react";
import { Text, Button, Image } from "components/";
import * as Styled from "./index.style";

interface Props {
  error: Error;
  resetBoundary: () => void;
}

const ErrorFallback = ({ error, resetBoundary }: Partial<Props>) => {
  return (
    <>
      <Styled.TextContainer>
        <Text>{error.message}</Text>
      </Styled.TextContainer>
      <Styled.ButtonContainer>
        <Button onClick={resetBoundary}>
          <Text>재시도</Text>
        </Button>
      </Styled.ButtonContainer>
      <Styled.ImageContainer>
        <Image src={`${process.env.PUBLIC_URL}/img/emoticon_3.gif`} />
      </Styled.ImageContainer>
    </>
  );
};

export default ErrorFallback;
