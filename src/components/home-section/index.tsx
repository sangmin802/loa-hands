import React from "react";
import _ from "utility/utility";
import "./index.scss";

const HomeSection = ({ children, title }) => {
  return (
    <section className="section">
      <div className="sectionTitle rem1 textCenter">{title}</div>
      <div className="sectionContent">{children}</div>
    </section>
  );
};

export default React.memo(HomeSection, (left, right) =>
  _.compareObj(left, right)
);
