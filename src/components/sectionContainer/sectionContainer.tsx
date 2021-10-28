import React, { PropsWithChildren, ReactNode } from "react";
import * as Styled from "./sectionContainer.style";

interface ISectionContainer {
  title: ReactNode;
}

const SectionContainer = ({
  children,
  title,
  ...props
}: PropsWithChildren<ISectionContainer>) => {
  return (
    <Styled.Section {...props}>
      {title}
      {children}
    </Styled.Section>
  );
};

export default React.memo(SectionContainer);
