import React from "react";

const DangerousHTML = ({ html }) => (
  <div className="dangerous-html" dangerouslySetInnerHTML={{ __html: html }} />
);

export default DangerousHTML;
