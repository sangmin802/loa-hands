import React, { cloneElement } from "react";
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
        {arr.map((res, index) =>
          cloneElement(children, { data: res, key: `item${index}` })
        )}
      </div>
    </div>
  );
};

export default ListContainer;
