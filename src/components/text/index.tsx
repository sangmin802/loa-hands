import React, { HTMLAttributes, PropsWithChildren } from "react";
import * as Styled from "./index.style";

export interface IText extends HTMLAttributes<HTMLDivElement> {
  size: string;
  color: string;
}

const Text = ({
  color = "white",
  size = "1",
  children,
  ...props
}: PropsWithChildren<Partial<IText>>) => (
  <Styled.Text color={color} size={size} {...props}>
    {children}
  </Styled.Text>
);

export default Text;
