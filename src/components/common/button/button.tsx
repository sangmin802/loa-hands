import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import * as Styled from "./button.style";

export type ButtonType = "normal" | "black" | "gray" | "submit";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
}

function Button({
  buttonType = "normal",
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <Styled.Button buttonType={buttonType} {...props}>
      {children}
    </Styled.Button>
  );
}

export default Button;
