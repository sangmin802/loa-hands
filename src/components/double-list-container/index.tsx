import React from "react";
import "./index.css";
import ListContainer from "components/list-container/index";
import Lodash from "lodash";
import { arrayReducer } from "utility/utility";

const DoubleListContainer = ({
  data,
  type,
  lt = null,
  rt = null,
  children = null,
}) => {
  const [left, right] = arrayReducer(data, type);
  return (
    <div className="doubleColumnWrap">
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
