import React from "react";
import { List } from "../";
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
      <div className="title text-center">{title}</div>
      <div className="column-content">
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
