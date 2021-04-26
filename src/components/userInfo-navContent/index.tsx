import React, { Children } from "react";
import styled from "styled-components";
import _ from "utility/utility";
import "./index.css";

const NavContent = ({ children, selected, cn }) => {
  return (
    <article className={cn}>
      {Children.map(children, (component, index) => (
        <IsShowContainer isShow={selected === index}>
          {component}
        </IsShowContainer>
      ))}
    </article>
  );
};

const IsShowContainer = styled.div<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? "" : "none")};
`;

export default React.memo(NavContent, (left, right) =>
  _.compareObj(left, right)
);
