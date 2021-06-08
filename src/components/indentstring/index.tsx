import React from "react";
import Lodash from "lodash";
import { DangerousHTML } from "../";
import * as Styled from "./index.style";

const IntentString = ({ data }: { data? }) => {
  return (
    <>
      {data.map(({ title: { val }, desc }, index) => {
        return (
          <Styled.Content key={index}>
            <DangerousHTML html={val} />
            {desc.map(({ val }, index) => (
              <DangerousHTML key={index} html={val} />
            ))}
          </Styled.Content>
        );
      })}
    </>
  );
};

export default React.memo(IntentString, (left, right) =>
  Lodash.isEqual(left, right)
);
