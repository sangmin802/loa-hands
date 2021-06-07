import React from "react";
import * as Styled from "./index.style";

const Text = ({ children, ...props }) => (
  <Styled.Text {...props}>{children}</Styled.Text>
);

export default Text;
