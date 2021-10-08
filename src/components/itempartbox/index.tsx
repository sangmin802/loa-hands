import React from "react";
import DangerousHTML from "components/dangerous-html";
import * as Styled from "./index.style";

interface IItemPartBox {
  data?: {
    title: string;
    desc: string;
  };
}

const ItemPartBox = ({ data }: IItemPartBox) => {
  return (
    <Styled.ItemPartBox>
      <DangerousHTML html={data.title} />
      <DangerousHTML html={data.desc} />
    </Styled.ItemPartBox>
  );
};

export default React.memo(ItemPartBox);
