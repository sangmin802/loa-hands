import React from "react";
import Lodash from "lodash";
import "./index.scss";

const SectionContainer = ({ children, title, cn = "" }) => {
  return (
    <section className={`section ${cn}`}>
      <div className="section-title text-center">{title}</div>
      <div className="section-content">{children}</div>
    </section>
  );
};

export default React.memo(SectionContainer, (left, right) =>
  Lodash.isEqual(left, right)
);
