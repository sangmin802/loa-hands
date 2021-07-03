import React, { HTMLAttributes } from "react";
import * as Styled from "./index.style";

interface Props extends HTMLAttributes<HTMLElement> {}

const LoadingSpinner = ({ ...props }: Props) => {
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
};

export default LoadingSpinner;
