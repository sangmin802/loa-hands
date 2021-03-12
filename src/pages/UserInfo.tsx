import React, { useEffect } from "react";
import "style/UserInfo.css";
import UserInfoBlank from "template/userInfoBlank";
import { UserInfoTab } from "hooks/userInfoTab";
import UserExpeditionPop from "components/userInfo-expeditionPop/index";
import UserBasicInfo from "components/userInfo-basic/index";
import UserExpeditionChars from "components/userInfo-expeditionChars/index";
import UserDataHook from "hooks/userDataHook";
import ExpeditionPopHook from "hooks/expeditionPopHook";
import SubTab from "components/userInfo-subTab/index";
import MainTab from "components/userInfo-mainTab/index";
import TabContent from "components/userInfo-tabContents/index";

const Index = ({
  match: {
    params: { name },
  },
}) => {
  const { userData, setUserData } = UserDataHook();
  const { expeditionPop, setExpeditionPop } = ExpeditionPopHook();

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
            <MainTab />
            <SubTab data={userData} />
            <TabContent data={userData} />
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Index, () => true);
