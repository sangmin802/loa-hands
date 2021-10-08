import React from "react";
import * as Styled from "./index.style";

interface IDangerousHTML {
  html?: string;
}

const DangerousHTML = ({ html, ...props }: IDangerousHTML) => (
  <Styled.Container {...props} dangerouslySetInnerHTML={{ __html: html }} />
);
export default DangerousHTML;
