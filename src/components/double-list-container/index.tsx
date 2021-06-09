import React, { useMemo } from "react";
import { ListContainer } from "../";
import Lodash from "lodash";
import * as Styled from "./index.style";

const DoubleListContainer = ({
  data,
  divideType,
  lt = null,
  rt = null,
  children,
}) => {
  const [left, right] = useMemo(() => {
    return data.reduce(
      (prev, cur) => {
        if (cur.divideType.includes(divideType)) {
          prev[0].push(cur);
        } else {
          prev[1].push(cur);
        }
        return prev;
      },
      [[], []]
    );
  }, [data, divideType]);

  return (
    <Styled.Container>
      <Styled.Content type="left">
        <ListContainer title={lt} arr={left}>
          {children}
        </ListContainer>
      </Styled.Content>
      <Styled.Content type="right">
        <ListContainer title={rt} arr={right}>
          {children}
        </ListContainer>
      </Styled.Content>
    </Styled.Container>
  );
};

export default React.memo(DoubleListContainer, (left, right) =>
  Lodash.isEqual(left, right)
);
