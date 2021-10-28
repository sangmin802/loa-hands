import React from "react";
import List from "components/list/list";
import Text from "components/text/index";
import * as Styled from "./characteristic.style";

interface IItem {
  data: { title: string[]; desc: string };
}

interface ICharacteristic<T> {
  data: T;
}

function Characterastic<
  T extends {
    title: string;
    content: IItem[];
  }
>({ data }: ICharacteristic<T>) {
  return (
    <Styled.Characteristic title={<Text>{data.title}</Text>}>
      <List data={data.content} item={Item} />
    </Styled.Characteristic>
  );
}

const Item = ({ data }: IItem) => {
  return (
    <Styled.ColumnLabel
      title={
        <Styled.Label>
          {data.title[0]} {data.title[1]}
        </Styled.Label>
      }
    >
      <Styled.DecorationBatch html={data.desc} />
    </Styled.ColumnLabel>
  );
};

export default React.memo(Characterastic);
