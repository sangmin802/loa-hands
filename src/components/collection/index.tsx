import React from "react";
import * as Styled from "./index.style";
import { Text } from "components/";

const Collection = ({ collection }) =>
  collection.map((col, index) => (
    <Item key={`collectionMini${index}`} index={index} size={col.size} />
  ));

export const Item = ({ size, index }) => {
  return (
    <Styled.Item>
      <Styled.Background position={index} />
      <Styled.Size>
        <Text>{size}</Text>
      </Styled.Size>
    </Styled.Item>
  );
};

export default Collection;
