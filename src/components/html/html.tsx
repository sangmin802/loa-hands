import React from "react";
import * as Styled from "./html.style";

interface IHTML {
  html?: string;
}

const HTML = ({ html, ...props }: IHTML) => (
  <Styled.Container {...props} dangerouslySetInnerHTML={{ __html: html }} />
);
export default HTML;
