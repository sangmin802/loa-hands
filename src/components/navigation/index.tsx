import React, { useCallback } from "react";
import _ from "utility/utility";
import "./index.css";

const Navigation = ({ tabClass, arr, isShow, selectedTab, setTab }) => {
  return (
    <article
      className={`${tabClass}TabWrap tabWrap ${isShow ? "" : "displayNone"}`}
    >
      {arr.map((tab, index) => {
        const active = isShow && selectedTab === index ? true : false;
        return (
          <Item
            key={`${tabClass}Tab${index}`}
            tabName={tab}
            setTab={setTab}
            selected={active}
            index={index}
          />
        );
      })}
    </article>
  );
};

const Item = ({ tabName, setTab, selected, index }) => {
  const tabClickEvent = useCallback(() => {
    setTab({ tab: index });
  }, [index, setTab]);

  return (
    <nav
      className={`tab textCenter ${selected ? "white" : ""}`}
      onClick={tabClickEvent}
    >
      {tabName}
    </nav>
  );
};

export default React.memo(Navigation, (left, right) =>
  _.compareObj(left, right)
);
