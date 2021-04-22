import React from "react";
import _ from "utility/utility";
import { useTab } from "hooks/useTab";
import TabWrap from "components/_tabWrap/index";
import "./index.css";

const Index = () => {
  const mainTabs = ["능력치", "스킬", "수집형포인트"];
  const { tab, setTab } = useTab("main");

  return (
    <TabWrap
      arr={mainTabs}
      isActive={true}
      selectedTab={tab}
      setTab={setTab}
      tabClass="main"
    />
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
