import React, { ImgHTMLAttributes } from "react";
import * as Styled from "./index.style";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  color?: string;
}

const Image = ({ color, ...props }: Props) => (
  <Styled.Image color={color} {...props} />
);
export default Image;
