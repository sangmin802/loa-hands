import React, { Children } from "react";
import _ from "utility/utility";
import "./index.css";

const NavContent = ({ children, selected, cn }) => {
  return (
    <article className={cn}>
      {Children.map(children, (component, index) => (
        <article className={selected === index ? "" : "displayNone"}>
          {component}
        </article>
      ))}
    </article>
  );
};

export default React.memo(NavContent, (left, right) =>
  _.compareObj(left, right)
);
