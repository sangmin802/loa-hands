import React, { cloneElement } from "react";
import { Text } from "components/";
import * as Styled from "./index.style";

const ListContainer = ({ title, arr, children }: { title; arr; children? }) => {
  return (
    <>
      <Styled.Title>
        <Text>{title}</Text>
      </Styled.Title>
      <>
        {arr.map((res, index) =>
          cloneElement(children, { data: res, key: `item${index}` })
        )}
      </>
    </>
  );
};

export default ListContainer;
