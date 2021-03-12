import React from "react";
import _ from "utility";
import TabWrap from "components/_tabWrap/index";
import UserCollection from "components/userInfo-collectionNav/index";

const Index = ({ data }) => {
  const subTabWrapArray = [
    ["착용 아이템", "착용 아바타", "특성·각인"],
    ["전투스킬", "생활스킬"],
    UserCollection(data.collectionInfo.collectionMini),
  ];

  return (
    <div className="subTabWraps">
      {subTabWrapArray.map(res => {
        return <TabWrap arr={res} tabClass="sub" key={res} />;
      })}
    </div>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
