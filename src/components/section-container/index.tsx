import React, { PropsWithChildren } from "react";
import * as Styled from "./index.style";

interface ISectionContainer {
  title: string;
}

const SectionContainer = ({
  children,
  title,
}: PropsWithChildren<ISectionContainer>) => {
  return (
    <article>
      <Styled.Title>{title}</Styled.Title>
      <>{children}</>
    </article>
  );
};

export default React.memo(SectionContainer);
