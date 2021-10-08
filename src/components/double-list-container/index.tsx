import React, { ReactElement, useMemo } from "react";
import * as Styled from "./index.style";

interface IDoubleListContainer {
  data?: {
    divideType: string;
  }[];
  divideType?: string;
  lt?: null | string;
  rt?: null | string;
  children: ReactElement;
}

const DoubleListContainer = ({
  data,
  divideType = null,
  lt = null,
  rt = null,
  children,
  ...props
}: IDoubleListContainer) => {
  const [left, right] = useMemo(() => {
    return data.reduce(
      (prev, cur, i) => {
        const condition = divideType
          ? cur.divideType.includes(divideType)
          : i % 2 === 0;

        if (condition) {
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
    <Styled.DoubleListContainer {...props}>
      <Styled.ListContainer
        type="left"
        data-testid="left"
        data-size={left.length}
        title={lt}
        arr={left}
      >
        {children}
      </Styled.ListContainer>
      <Styled.ListContainer
        type="right"
        data-testid="right"
        data-size={right.length}
        title={rt}
        arr={right}
      >
        {children}
      </Styled.ListContainer>
    </Styled.DoubleListContainer>
  );
};

export default React.memo(DoubleListContainer);
