import React, { Children } from "react";
import _ from "utility/utility";
import styled from "styled-components";

const NavContent = ({ sub = null, isShow = null, children, type }) => {
  return (
    <IsShowContainer
      className={`${type} nav-content-container`}
      isShow={isShow}
    >
      {Children.map(children, (res, index) => {
        return (
          <IsShowContainer
            isShow={sub === index}
            key={`subContentWrap${index}`}
          >
            {res}
          </IsShowContainer>
        );
      })}
    </IsShowContainer>
  );
};

const IsShowContainer = styled.div<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? "" : "none")};
`;

export default React.memo(NavContent, (left, right) =>
  _.compareObj(left, right)
);
