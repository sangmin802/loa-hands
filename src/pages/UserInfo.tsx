import React, { useEffect } from "react";
import "style/UserInfo.css";
import UserInfoBlank from "template/userInfoBlank";
import UserExpeditionPop from "components/userInfo-expeditionPop/index";
import UserBasicInfo from "components/userInfo-basic/index";
import UserExpeditionChars from "components/userInfo-expeditionChars/index";
import { useUser } from "hooks/useUser";
import { useExpedition } from "hooks/useExpedition";
import SubTab from "components/userInfo-subTab/index";
import MainTab from "components/userInfo-mainTab/index";
import TabContent from "components/userInfo-tabContents/index";

const Index = ({
  match: {
    params: { name },
  },
}) => {
  const { userData, setUserData } = useUser();
  const { expeditionPop, setExpeditionPop } = useExpedition();

  useEffect(() => {
    if (!userData) setUserData(name);
  }, [name, setUserData, userData]);

  return (
    <>
      {!userData && <UserInfoBlank />}
      {userData && (
        <section className="userInfo">
          <section className="userInfoTop">
            <UserExpeditionPop expeditionPopToggle={setExpeditionPop} />
            <UserExpeditionChars
              userData={userData}
              setUserData={setUserData}
              expeditionPop={expeditionPop}
              setExpeditionPop={setExpeditionPop}
            />
            <UserBasicInfo userData={userData} />
          </section>
          <section className="userInfoBottom">
            <MainTab />
            <SubTab data={userData} />
            <TabContent data={userData} />
          </section>
        </section>
      )}
    </>
  );
};

export default React.memo(Index, () => true);
