import React from "react";
import Lodash from "lodash";
import { DangerousHTML } from "../";
import * as Styled from "./index.style";

const ItemPartBox = ({ data }) => {
  return (
    <>
      {data.map(({ title, desc }, index) => {
        return (
          <Styled.Content key={index}>
            <DangerousHTML html={title} />
            <DangerousHTML html={desc} />
          </Styled.Content>
        );
      })}
    </>
  );
};

export default React.memo(ItemPartBox, (left, right) =>
  Lodash.isEqual(left, right)
);
