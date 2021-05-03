import React from "react";
import Lodash from "lodash";
import "./index.css";
import Image from "../image/index";

const Thumbnail = ({
  backSrc,
  src,
  grade,
  children,
}: {
  backSrc?;
  src?;
  grade?;
  children;
}) => {
  return (
    <div className="imgTextWrap">
      <Image backSrc={backSrc} src={src} grade={grade} />
      {children}
    </div>
  );
};

export default React.memo(Thumbnail, (left, right) =>
  Lodash.isEqual(left, right)
);
