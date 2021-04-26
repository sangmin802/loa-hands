import React, { cloneElement } from "react";
import _ from "utility/utility";
import AbilityWrap from "components/userInfo-abilityWrap/index";
import SkillWrap from "components/userInfo-skillWrap/index";
import CollectionWrap from "components/userInfo-collectionWrap/index";
import { useTab } from "hooks/useTab";

const Index = ({ data }) => {
  const { tab: mainTab } = useTab("main");
  const { tab: subTab } = useTab("sub");
  const contentsArr = [
    <AbilityWrap abilityInfo={data.abilityInfo} sub={subTab} />,
    <SkillWrap skillInfo={data.skillInfo} sub={subTab} />,
    <CollectionWrap collectionInfo={data.collectionInfo} sub={subTab} />,
  ];

  return (
    <div className="tabContentWrap">
      {contentsArr.map((res, index) =>
        cloneElement(res, { isTarget: mainTab === index, key: index })
      )}
    </div>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
