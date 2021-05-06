import React from "react";
import List from "components/list/index";
import "./index.scss";

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
    <div className={`list-${side} list-container`}>
      <div className="title textCenter">{title}</div>
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
