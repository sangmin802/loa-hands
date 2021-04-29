import React from "react";

const DangerousHTML = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default DangerousHTML;
