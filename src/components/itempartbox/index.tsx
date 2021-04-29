import React from "react";
import _ from "utility/utility";
import "./index.scss";
import TextContainer from "components/text-container/index";

const ItemPartBox = ({ data }) => {
  return (
    <div className="itemPartBoxes">
      {data.map(({ title, desc }, index) => {
        const text = typeof desc === "string" ? [desc] : desc;
        return (
          <div key={index}>
            <div className="rem09">{title}</div>
            <TextContainer text={text} />
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ItemPartBox, (left, right) =>
  _.compareObj(left, right)
);
