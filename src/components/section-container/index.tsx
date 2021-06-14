import React from "react";
import Lodash from "lodash";
import * as Styled from "./index.style";
import { Text } from "components/";

const SectionContainer = ({ children, title }) => {
  return (
    <article>
      <Styled.Title>
        <Text>{title}</Text>
      </Styled.Title>
      <>{children}</>
    </article>
  );
};

export default React.memo(SectionContainer, (left, right) =>
  Lodash.isEqual(left, right)
);
