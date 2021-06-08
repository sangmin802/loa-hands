import React, { Children } from "react";
import Lodash from "lodash";
import * as Styled from "./index.style";

const NavContent = ({ children, selected, cn }) => {
  return (
    <article>
      {Children.map(children, (component, index) => (
        <Styled.Content isShow={selected === index}>{component}</Styled.Content>
      ))}
    </article>
  );
};

export default React.memo(NavContent, (left, right) =>
  Lodash.isEqual(left, right)
);
