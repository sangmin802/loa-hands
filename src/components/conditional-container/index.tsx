import { PropsWithChildren, ReactElement } from "react";

interface IConditionalContainer {
  isRender: boolean;
  children: ReactElement;
}

const ConditionalContainer = ({
  isRender,
  children,
}: PropsWithChildren<IConditionalContainer>) => {
  if (!isRender) return null;

  return children;
};

export default ConditionalContainer;
