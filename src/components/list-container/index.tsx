import React, { ReactElement } from "react";
import * as Styled from "./index.style";

interface IListContainer {
  title: string;
  arr: any[];
  children: ReactElement;
}

const ListContainer = ({ title, arr, children, ...props }: IListContainer) => {
  return (
    <article {...props}>
      <Styled.ListTitle>{title}</Styled.ListTitle>
      <Styled.ListContent data={arr}>{children}</Styled.ListContent>
    </article>
  );
};

export default React.memo(ListContainer);
