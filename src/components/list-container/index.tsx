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
        {arr.map((res, index) => (
          <Styled.Content key={`item${index}`}>
            {cloneElement(children, { data: res })}
          </Styled.Content>
        ))}
      </>
    </>
  );
};

export default ListContainer;
