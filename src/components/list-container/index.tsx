import React from "react";
import List from "components/list/index";

const ListContainer = ({
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
            <List key={`columnList${side}${index}`} data={res}>
              {children}
            </List>
          );
        })}
      </div>
    </div>
  );
};

export default ListContainer;
