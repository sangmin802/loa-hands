import React from "react";
import Lodash from "lodash";
import "./index.scss";

const Thumbnail = ({ children }: { children }) => {
  return <div className="thumbnail">{children}</div>;
};

export default React.memo(Thumbnail, (left, right) =>
  Lodash.isEqual(left, right)
);
