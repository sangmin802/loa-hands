import React from "react";
import * as Styled from "./index.style";

const DangerousHTML = ({ html }) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
};

export default DangerousHTML;
