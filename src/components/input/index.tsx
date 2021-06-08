import React, { forwardRef, InputHTMLAttributes } from "react";
import * as Styled from "./index.style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, Props>(({ ...props }, ref?) => (
  <Styled.Input ref={ref} {...props} />
));

export default Input;
