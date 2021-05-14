import React from "react";
import Lodash from "lodash";
import "./index.scss";
import DangerousHTML from "components/dangerous-html/index";

const ItemPartBox = ({ data }) => {
  return (
    <div className="item-part-box">
      {data.map(({ title, desc }, index) => {
        return (
          <div key={index}>
            <DangerousHTML html={title} />
            <DangerousHTML html={desc} />
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ItemPartBox, (left, right) =>
  Lodash.isEqual(left, right)
);
