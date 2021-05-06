import React from "react";
import Lodash from "lodash";
import Item from "./item/index";
import "./index.scss";

const Chararteristic = ({ data }) => {
  return (
    <div className="characteristic-container">
      {data.map(({ title, content }) => {
        return (
          <div className="characteristics" key={title}>
            <div className="title textCenter">{title}</div>
            <Item content={content} />
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Chararteristic, (left, right) =>
  Lodash.isEqual(left, right)
);
