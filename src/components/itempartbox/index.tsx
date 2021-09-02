import React, { PropsWithChildren } from "react";
import { DangerousHTML } from "../";
import * as Styled from "./index.style";

interface IData {
  title: string;
  desc: string;
}

interface IItemPartBox<T> {
  data?: T;
}

const ItemPartBox = ({ data }: PropsWithChildren<IItemPartBox<IData>>) => {
  return (
    <Styled.Content>
      <DangerousHTML html={data.title} />
      <DangerousHTML html={data.desc} />
    </Styled.Content>
  );
};

export default React.memo(ItemPartBox);
