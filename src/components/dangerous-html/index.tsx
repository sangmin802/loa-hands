import React from "react";

const DangerousHTML = ({ html }) => {
  return (
    <div
      className="dangerous-html"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default DangerousHTML;
