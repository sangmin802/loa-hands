import React, { ReactElement } from "react";
import * as Styled from "./list.style";

interface IList {
  data: any[];
  item: (...args: any[]) => ReactElement;
  dispatcher?:
    | { [key: string]: (...args: any[]) => void }
    | ((...args: any[]) => void);
}

function List({ data, item: Item, dispatcher, ...props }: IList) {
  return (
    <Styled.List {...props}>
      {data.map((data, index) => (
        <Item data={data} index={index} key={index} dispatcher={dispatcher} />
      ))}
    </Styled.List>
  );
}

export default React.memo(List);
