import React, { useCallback } from "react";
import Lodash from "lodash";
import "./index.scss";

const Navigation = ({ navType, arr, isShow, selectedNav, setNav }) => {
  return (
    <article
      className={`${navType}-nav-container nav-container ${
        isShow ? "" : "display-none"
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
    setNav(index);
  }, [index, setNav]);

  return (
    <nav
      className={`nav text-center ${selected ? "white" : ""}`}
      onClick={navClickHandler}
    >
      {NavName}
    </nav>
  );
};

export default React.memo(Navigation, (left, right) =>
  Lodash.isEqual(left, right)
);
