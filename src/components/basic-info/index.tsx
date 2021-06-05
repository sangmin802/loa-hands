import React from "react";
import Lodash from "lodash";
import "./index.scss";
import Thumbnail from "components/thumbnail";
import TextContainer from "components/text-container";
import Image from "components/image/index";

const basicInfo = ({ userData, collection }) => {
  const { basicInfo, expeditionInfo } = userData;
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
    reachSmallLv,
    title,
  } = basicInfo;
  const { name, server, Lv } = expeditionInfo;

  return (
    <div className="searched-user-info">
      <div className="basic-info class-info">
        <TextContainer text={["클래스"]} />
        <Thumbnail>
          <Image args={{ src: classSrc }} />
          <TextContainer text={[className]} />
        </Thumbnail>
      </div>
      <div className="basic-info name-info">
        <TextContainer text={["이름", `${Lv} ${name}`]} />
        <TextContainer text={["원정대 레벨", `${server} Lv ${expeditionLv}`]} />
      </div>
      <div className="basic-info level-info">
        <TextContainer text={["현재 아이템 레벨", curBigLv, curSmallLv]} />
        <TextContainer text={["달성 아이템 레벨", reachBigLv, reachSmallLv]} />
      </div>
      <div className="basic-info sub1-info">
        <TextContainer text={["영지", garden]} />
        <TextContainer text={["PVP", pvp]} />
      </div>
      <div className="basic-info sub2-info">
        <TextContainer text={["칭호", title]} />
        <TextContainer text={["길드", guild]} />
      </div>
      <div className="user-info-collection collection-info">{collection}</div>
    </div>
  );
};

export default React.memo(basicInfo, (left, right) =>
  Lodash.isEqual(left, right)
);
