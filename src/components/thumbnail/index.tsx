import React from "react";
import _ from "utility/utility";
import "./index.css";

// 컴포넌트
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
  _.compareObj(left, right)
);
