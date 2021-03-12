import React from "react";
import _ from "utility";
import TabWrap from "components/_tabWrap/index";

const Index = () => {
  const mainTabs = ["능력치", "스킬", "수집형포인트"];

  return (
    <>
      <TabWrap arr={mainTabs} tabClass="main" />
    </>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
