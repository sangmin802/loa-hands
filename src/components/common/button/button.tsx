import React, { ButtonHTMLAttributes } from "react";
import * as Styled from "./button.style";

export type ButtonType = "default" | "black" | "gray" | "submit";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
}

const Button: React.FC<ButtonProps> = ({
  buttonType = "default",
  children,
  ...props
}) => {
  return (
    <Styled.Button buttonType={buttonType} {...props}>
      {children}
    </Styled.Button>
  );
};

export default Button;
