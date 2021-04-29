import React, { useCallback } from "react";
import _ from "utility/utility";
import "./index.scss";

const Navigation = ({ navType, arr, isShow, selectedNav, setNav }) => {
  return (
    <article
      className={`${navType}-nav-container nav-container ${
        isShow ? "" : "displayNone"
      }`}
    >
      {arr.map((tab, index) => {
        const active = isShow && selectedNav === index ? true : false;
        return (
          <Item
            key={`${navType}Nav${index}`}
            NavName={tab}
            setNav={setNav}
            selected={active}
            index={index}
          />
        );
      })}
    </article>
  );
};

const Item = ({ NavName, setNav, selected, index }) => {
  const navClickHandler = useCallback(() => {
    setNav({ nav: index });
  }, [index, setNav]);

  return (
    <nav
      className={`nav textCenter ${selected ? "white" : ""}`}
      onClick={navClickHandler}
    >
      {NavName}
    </nav>
  );
};

export default React.memo(Navigation, (left, right) =>
  _.compareObj(left, right)
);
