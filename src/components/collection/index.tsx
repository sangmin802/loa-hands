import React from "react";
import Lodash from "lodash";
import * as Styled from "./index.style";
import { Text } from "components/";

const Collection = ({ size, index }) => {
  return (
    <Styled.Container>
      <Styled.Background position={index} />
      <Styled.Size>
        <Text>{size}</Text>
      </Styled.Size>
    </Styled.Container>
  );
};

export default React.memo(Collection, (left, right) =>
  Lodash.isEqual(left, right)
);
