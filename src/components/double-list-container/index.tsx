import React, { useMemo } from "react";
import "./index.css";
import { ListContainer } from "../";
import Lodash from "lodash";

const DoubleListContainer = ({
  data,
  type,
  lt = null,
  rt = null,
  children = null,
}) => {
  const [left, right] = useMemo(() => {
    return data.reduce(
      (prev, cur) => {
        if (cur.type.includes(type)) {
          prev[0].push(cur);
        } else {
          prev[1].push(cur);
        }
        return prev;
      },
      [[], []]
    );
  }, [data, type]);

  return (
    <div className="double-column-wrap">
      <ListContainer title={lt} arr={left} side="left">
        {children}
      </ListContainer>
      <ListContainer title={rt} arr={right} side="right">
        {children}
      </ListContainer>
    </div>
  );
};

export default React.memo(DoubleListContainer, (left, right) =>
  Lodash.isEqual(left, right)
);
