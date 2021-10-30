import React, { HTMLAttributes } from "react";
import * as Styled from "./loadingSpinner.style";

export interface LoadingSpinnerProps extends HTMLAttributes<HTMLElement> {}

function LoadingSpinner({ ...props }: LoadingSpinnerProps) {
  return (
    <Styled.Content {...props}>
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
  );
}

export default LoadingSpinner;
