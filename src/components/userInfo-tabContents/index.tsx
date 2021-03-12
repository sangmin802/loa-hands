import React from "react";
import _ from "utility";
import AbilityWrap from "components/userInfo-abilityWrap/index";
import SkillWrap from "components/userInfo-skillWrap/index";
import CollectionWrap from "components/userInfo-collectionWrap/index";

const Index = ({ data }) => {
  return (
    <div className="tabContentWrap">
      <AbilityWrap abilityInfo={data.abilityInfo} />
      <SkillWrap skillInfo={data.skillInfo} />
      <CollectionWrap collectionInfo={data.collectionInfo} />
    </div>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
