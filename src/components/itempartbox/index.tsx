import React from "react";
import Lodash from "lodash";
import "./index.scss";
import TextContainer from "components/text-container/index";

const ItemPartBox = ({ data }) => {
  return (
    <div className="item-part-box">
      {data.map(({ title, desc }, index) => {
        const text = typeof desc === "string" ? [desc] : desc;
        return (
          <div key={index}>
            <div className="title">{title}</div>
            <TextContainer text={text} />
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ItemPartBox, (left, right) =>
  Lodash.isEqual(left, right)
);
