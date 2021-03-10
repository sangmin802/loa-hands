import React, { useEffect } from "react";
import "css/UserInfo.css";
import _ from "utility";

import UserInfoBlank from "template/userInfoBlank";
import { UserInfoTab } from "hooks/userInfoTab";

import UserExpeditionPop from "components/userInfo-expeditionPop/index";
import UserBasicInfo from "components/userInfo-basic/index";
import UserExpeditionChars from "components/userInfo-expeditionChars/index";
import TabWrap from "components/_tabWrap/index";
import UserCollection from "components/userInfo-collectionNav/index";
import DoubleColumnWrap from "components/_doubleColumnWrap/index";

import Quality from "template/quality";
import Rune from "template/rune";
import UserDataHooks from "hooks/userDataHooks";
import ExpeditionPopHooks from "hooks/expeditionPopHooks";

const Index = ({
  match: {
    params: { name },
  },
}) => {
  const { userData, setUserData } = UserDataHooks();
  const { expeditionPop, setExpeditionPop } = ExpeditionPopHooks();

  UserInfoTab(userData);

  useEffect(() => {
    if (!userData) setUserData(name);
  }, [name]);

  if (!userData) {
    return <UserInfoBlank />;
  }

  const { abilityInfo, collectionInfo, skillInfo } = userData;

  // 어빌리티 관련
  const { equipInfo } = abilityInfo;
  const [av, equip] = _.arrayReducer(Object.values(equipInfo), "Av");

  // 스킬 관련
  const { battleSkill, lifeSkill } = skillInfo;

  // 수집품 관련
  const { collectionDetail } = collectionInfo;

  return (
    <div className="userInfo">
      <div className="userInfoTop">
        <UserExpeditionPop expeditionPopToggle={setExpeditionPop} />
        <UserExpeditionChars
          userData={userData}
          setUserData={setUserData}
          expeditionPop={expeditionPop}
          setExpeditionPop={setExpeditionPop}
        />
        <UserBasicInfo userData={userData} />
      </div>
      <div className="userInfoBottom">
        <TabWrap arr={["능력치", "스킬", "수집형포인트"]} tabClass="main" />
        <TabWrap arr={["착용 아이템", "착용 아바타"]} tabClass="sub" />
        <TabWrap arr={["전투스킬", "생활스킬"]} tabClass="sub" />
        <TabWrap
          arr={UserCollection(collectionInfo.collectionMini)}
          tabClass="sub"
        />
        <div className="tabContentWrap">
          <div className="abilityWrap tabContent1">
            <DoubleColumnWrap data={equip} type="Equip">
              <Quality />
            </DoubleColumnWrap>
            <DoubleColumnWrap data={av} type="Inner" />
          </div>
          <div className="skillWrap tabContent1">
            <DoubleColumnWrap
              data={battleSkill.skills}
              lt={`사용 : ${battleSkill.usePoint}`}
              rt={`획득 : ${battleSkill.getPoint}`}
              type="Left"
            >
              <Rune />
            </DoubleColumnWrap>
            <DoubleColumnWrap data={lifeSkill} type="Left" />
          </div>
          <div className="collectionWrap">
            {collectionDetail.map((res, index) => (
              <DoubleColumnWrap
                key={index}
                data={res.collection}
                type="True"
                lt={res.title}
                rt={`획득 : ${res.getCount} 미획득 : ${res.totalCount}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Index, () => true);
