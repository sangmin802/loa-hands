import React, { ReactNode } from "react";
import * as Styled from "./index.style";

interface Props {
  children: ReactNode;
  type?: string;
  color?: string;
}

const Text = ({ children, ...props }: Props) => (
  <Styled.Text {...props}>{children}</Styled.Text>
);

export default Text;
