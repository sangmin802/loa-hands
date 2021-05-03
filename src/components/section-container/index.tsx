import React from "react";
import Lodash from "lodash";
import "./index.scss";

const HomeSection = ({ children, title, cn = "" }) => {
  return (
    <section className={`section ${cn}`}>
      <div className="sectionTitle rem1 textCenter">{title}</div>
      <div className="sectionContent">{children}</div>
    </section>
  );
};

export default React.memo(HomeSection, (left, right) =>
  Lodash.isEqual(left, right)
);
