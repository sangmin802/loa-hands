import React, { ImgHTMLAttributes } from "react";
import * as Styled from "./index.style";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  grade?: number;
}

const Image = ({ grade, ...props }: Props) => {
  return (
    <div className="img-container">
      <Styled.Image as="img" grade={grade} {...props} />
    </div>
  );
};

export default Image;
