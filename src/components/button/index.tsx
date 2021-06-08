import React, { ButtonHTMLAttributes, ReactNode } from "react";
import * as Styled from "./index.style";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...args }: Props) => (
  <Styled.Button {...args}>{children}</Styled.Button>
);

export default Button;
