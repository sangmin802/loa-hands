import React, { Children } from "react";
import Lodash from "lodash";
import * as Styled from "./index.style";

const NavContent = ({ children, selected, type = "sub" }) => {
  return (
    <>
      {Children.map(children, (component, index) => (
        <Styled.Content role={`${type}-content`} isShow={selected === index}>
          {component}
        </Styled.Content>
      ))}
    </>
  );
};

export default React.memo(NavContent, (left, right) =>
  Lodash.isEqual(left, right)
);
