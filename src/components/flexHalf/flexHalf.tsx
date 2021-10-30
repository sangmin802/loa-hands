import React, { ReactNode } from "react";
import * as Styled from "./flexHalf.style";

interface FlexHalfProps {
  left: ReactNode;
  right: ReactNode;
}

function FlexHalf({ left, right, ...props }: FlexHalfProps) {
  return (
    <Styled.FlexContainer {...props}>
      <Styled.HalfContainer>{left}</Styled.HalfContainer>
      <Styled.HalfContainer>{right}</Styled.HalfContainer>
    </Styled.FlexContainer>
  );
}

export default React.memo(FlexHalf);
