import React, { ReactElement, MemoExoticComponent } from "react";
import * as Styled from "./list.style";

export interface ListProps {
  data: any[];
  item:
    | ((...args: any[]) => ReactElement)
    | MemoExoticComponent<(...args: any[]) => ReactElement>;
  dispatcher?:
    | { [key: string]: (...args: any[]) => void }
    | ((...args: any[]) => void);
}

function List({ data, item: Item, dispatcher, ...props }: ListProps) {
  return (
    <Styled.List {...props}>
      {data.map((data, index) => (
        <Item
          data={data}
          index={index}
          key={data.id ?? index}
          dispatcher={dispatcher}
        />
      ))}
    </Styled.List>
  );
}

export default React.memo(List);
