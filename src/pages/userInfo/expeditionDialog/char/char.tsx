import React from "react";
import Text from "components/text";
import * as Styled from "./char.style";

interface IData {
  lv: string;
  name: string;
}

interface IChar<T> {
  data?: T;
}

const Char = ({ data, ...props }: IChar<IData>) => (
  <Styled.Char {...props}>
    <Styled.CharButton aria-label="expedition-char">
      <Text size="0.9" data-name={data.name}>
        {data.lv} {data.name}
      </Text>
    </Styled.CharButton>
  </Styled.Char>
);

export default Char;
