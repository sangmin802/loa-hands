import React, { HTMLAttributes } from "react";
import * as Styled from "./index.style";

interface Props extends HTMLAttributes<HTMLElement> {
  back?: boolean;
}

const LoadingSpinner = ({ back = true, ...props }: Props) => {
  return (
    <Styled.Container {...props} type={back ? "spinner-wrap" : "default"}>
      <Styled.Content type={back ? "absolute" : "default"}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Styled.Content>
    </Styled.Container>
  );
};

export default LoadingSpinner;
