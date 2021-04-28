import React from "react";
import Tab from "./tab/index";
import _ from "utility/utility";
import "./index.css";

const Index = ({ tabClass, arr, isShow, selectedTab, setTab }) => {
  return (
    <article
      className={`${tabClass}TabWrap tabWrap ${isShow ? "" : "displayNone"}`}
    >
      {arr.map((tab, index) => {
        const active = isShow && selectedTab === index ? true : false;
        return (
          <Tab
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

export default React.memo(Index, (left, right) => _.compareObj(left, right));
