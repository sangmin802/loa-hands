import React from "react";
import ColumnList from "components/column-list/index";

const ColumnListContainer = ({
  title,
  arr,
  side,
  children,
}: {
  title;
  arr;
  side;
  children?;
}) => {
  return (
    <div className={`column${side}`}>
      <div className="columnTitle rem09 textCenter">{title}</div>
      <div className="columnContent">
        {arr.map((res, index) => {
          return (
            <ColumnList key={`columnList${side}${index}`} data={res}>
              {children}
            </ColumnList>
          );
        })}
      </div>
    </div>
  );
};

export default ColumnListContainer;
