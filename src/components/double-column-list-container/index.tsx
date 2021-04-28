import React from "react";
import "./index.css";
import ColumnListContainer from "components/column-list-container/index";
import _ from "utility/utility";

const DoubleColumnListContainer = ({
  data,
  type,
  lt = null,
  rt = null,
  children = null,
}) => {
  const [left, right] = _.arrayReducer(data, type);
  return (
    <div className="doubleColumnWrap">
      <ColumnListContainer title={lt} arr={left} side="left">
        {children}
      </ColumnListContainer>
      <ColumnListContainer title={rt} arr={right} side="right">
        {children}
      </ColumnListContainer>
    </div>
  );
};

export default React.memo(DoubleColumnListContainer, (left, right) =>
  _.compareObj(left, right)
);
