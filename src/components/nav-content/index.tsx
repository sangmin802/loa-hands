import React, { Children, PropsWithChildren, ReactElement } from "react";
import Lodash from "lodash";
import * as Styled from "./index.style";

interface INavContent {
  children: ReactElement | ReactElement[];
  selected: number;
  type?: string;
}

const NavContent = ({
  children,
  selected,
  type = "sub",
}: PropsWithChildren<INavContent>) => {
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
