import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import * as Styled from "./button.style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, ...props }: PropsWithChildren<ButtonProps>) {
  return <Styled.Button {...props}>{children}</Styled.Button>;
}

export default Button;
