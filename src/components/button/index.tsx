import React, { ButtonHTMLAttributes, ReactNode } from "react";
import * as Styled from "./index.style";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: Props) => (
  <Styled.Button {...props}>{children}</Styled.Button>
);

export default Button;
