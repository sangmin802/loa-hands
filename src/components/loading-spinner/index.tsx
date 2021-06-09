import React from "react";
import * as Styled from "./index.style";

const LoadingSpinner = ({ back = true }) => {
  return (
    <Styled.Container type={back ? "spinner-wrap" : "default"}>
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
