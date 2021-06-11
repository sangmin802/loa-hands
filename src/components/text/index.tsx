import React, { HTMLAttributes, ReactNode } from "react";
import * as Styled from "./index.style";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type?: string;
  color?: string;
}

const Text = ({ children, ...props }: Props) => (
  <Styled.Text {...props}>{children}</Styled.Text>
);

export default Text;
