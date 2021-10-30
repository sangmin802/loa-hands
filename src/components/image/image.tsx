import React, { ImgHTMLAttributes } from "react";
import * as Styled from "./image.style";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

function Image({ ...props }: ImageProps) {
  return <Styled.Image {...props} />;
}
export default Image;
