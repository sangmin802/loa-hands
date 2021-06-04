import React from "react";
import Lodash from "lodash";
import "./index.css";

const Collection = ({ size, index }) => {
  let position = "720px";
  switch (index) {
    case 0:
      break;
    case 1:
      position = "673px";
      break;
    case 2:
      position = "767px";
      break;
    case 3:
      position = "787px";
      break;
    case 4:
      position = "652px";
      break;
    case 5:
      position = "627px";
      break;
    case 6:
      position = "741px";
      break;
    case 7:
      position = "696px";
      break;
    default:
      return null;
  }

  return (
    <div className="collection-mini">
      <div
        className="collection-mini-bg"
        style={{ backgroundPosition: ` ${position} 50px` }}
      ></div>
      <div className="collection-mini-size">{size}</div>
    </div>
  );
};

export default React.memo(Collection, (left, right) =>
  Lodash.isEqual(left, right)
);
