import React from "react";
import _ from "utility/utility";
import { useTab } from "hooks/useTab";
import TabWrap from "components/_tabWrap/index";
import UserCollection from "components/userInfo-collectionNav/index";
import "./index.css";

const Index = ({ data }) => {
  const { tab: subTab, setTab } = useTab("sub");
  const { tab: mainTab } = useTab("main");
  const subTabWrapArray = [
    ["착용 아이템", "착용 아바타", "특성·각인"],
    ["전투스킬", "생활스킬"],
    UserCollection(data.collectionInfo.collectionMini),
  ];

  const memoTab = React.useMemo(() => mainTab, [mainTab]);

  return (
    <nav className="subTabWraps">
      {subTabWrapArray.map((arr, index) => {
        const isActive = memoTab === index;
        return (
          <TabWrap
            key={arr}
            arr={arr}
            tabClass="sub"
            isActive={isActive}
            selectedTab={subTab}
            setTab={setTab}
          />
        );
      })}
    </nav>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
