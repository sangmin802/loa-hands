import React from "react";
import Text from "components/text";
import * as Styled from "./index.style";

interface IData {
  lv: string;
  name: string;
}

interface IChar<T> {
  data?: T;
}

const Char = ({ data }: IChar<IData>) => (
  <Styled.Char>
    <Styled.CharButton aria-label="expedition-char">
      <Text type="desc" data-name={data.name}>
        {data.lv} {data.name}
      </Text>
    </Styled.CharButton>
  </Styled.Char>
);

export default Char;
