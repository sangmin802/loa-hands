import React, { useEffect } from "react";
import "style/UserInfo.css";
import UserInfoBlank from "template/userInfoBlank";
import { UserInfoTab } from "hooks/userInfoTab";
import UserExpeditionPop from "components/userInfo-expeditionPop/index";
import UserBasicInfo from "components/userInfo-basic/index";
import UserExpeditionChars from "components/userInfo-expeditionChars/index";
import TabWrap from "components/_tabWrap/index";
import UserCollection from "components/userInfo-collectionNav/index";
import UserDataHooks from "hooks/userDataHooks";
import ExpeditionPopHooks from "hooks/expeditionPopHooks";
import AbilityWrap from "components/userInfo-abilityWrap/index";
import SkillWrap from "components/userInfo-skillWrap/index";
import CollectionWrap from "components/userInfo-collectionWrap/index";

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
  }, [name, setUserData, userData]);

  return (
    <>
      {!userData && <UserInfoBlank />}
      {userData && (
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
            <TabWrap
              arr={["착용 아이템", "착용 아바타", "특성·각인"]}
              tabClass="sub"
            />
            <TabWrap arr={["전투스킬", "생활스킬"]} tabClass="sub" />
            <TabWrap
              arr={UserCollection(userData.collectionInfo.collectionMini)}
              tabClass="sub"
            />
            <div className="tabContentWrap">
              <AbilityWrap abilityInfo={userData.abilityInfo} />
              <SkillWrap skillInfo={userData.skillInfo} />
              <CollectionWrap collectionInfo={userData.collectionInfo} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Index, () => true);
