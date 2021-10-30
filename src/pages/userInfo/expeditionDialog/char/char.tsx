import React from "react";
import Text from "components/text/text";
import * as Styled from "./char.style";

interface CharProps<T> {
  data: T;
}

function Char({
  data,
  ...props
}: CharProps<{
  lv: string;
  name: string;
}>) {
  return (
    <Styled.Char {...props}>
      <Styled.CharButton aria-label="expedition-char">
        <Text size="0.9" data-name={data.name}>
          {data.lv} {data.name}
        </Text>
      </Styled.CharButton>
    </Styled.Char>
  );
}

export default Char;
