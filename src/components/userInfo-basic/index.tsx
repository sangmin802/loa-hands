import React from "react";
import _ from "utility/utility";
import "./index.scss";
import Thumbnail from "components/thumbnail";
import TextContainer from "components/text-container";
import UserCollection from "components/userInfo-collection-nav/index";

const Index = ({ userData }) => {
  const { basicInfo, expeditionInfo, collectionInfo } = userData;
  const {
    className,
    classSrc,
    curBigLv,
    curSmallLv,
    expeditionLv,
    garden,
    guild,
    pvp,
    reachBigLv,
    reachSamllLv,
    title,
  } = basicInfo;
  const { name, server, Lv } = expeditionInfo;
  const { collectionMini } = collectionInfo;

  return (
    <div className="searchedUserInfo">
      <div className="basicInfo">
        <TextContainer text={["클래스"]} />
        <Thumbnail backSrc={classSrc}>
          <TextContainer text={[className]} />
        </Thumbnail>
      </div>
      <div className="basicInfo">
        <TextContainer text={["이름", `${Lv} ${name}`]} />
        <TextContainer text={["원정대 레벨", `${server} Lv ${expeditionLv}`]} />
      </div>
      <div className="basicInfo">
        <TextContainer text={["현재 아이템 레벨", curBigLv, curSmallLv]} />
        <TextContainer text={["달성 아이템 레벨", reachBigLv, reachSamllLv]} />
      </div>
      <div className="basicInfo">
        <TextContainer text={["영지", garden]} />
        <TextContainer text={["PVP", pvp]} />
      </div>
      <div className="basicInfo">
        <TextContainer text={["칭호", title]} />
        <TextContainer text={["길드", guild]} />
      </div>
      <div className="userInfoCollection">{UserCollection(collectionMini)}</div>
    </div>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
