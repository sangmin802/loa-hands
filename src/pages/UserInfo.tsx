import React, { useEffect } from "react";
import "style/UserInfo.css";
import UserInfoBlank from "template/userInfoBlank";
import UserExpeditionPop from "components/userInfo-expeditionPop/index";
import UserBasicInfo from "components/userInfo-basic/index";
import UserExpeditionChars from "components/userInfo-expeditionChars/index";
import TabWrap from "components/_tabWrap/index";
import { useUser } from "hooks/useUser";
import { useExpedition } from "hooks/useExpedition";
import { useTab } from "hooks/useTab";
import NavContentContainer from "components/userInfo-navContentContainer/index";
import UserCollection from "components/userInfo-collectionNav/index";

const Index = ({
  match: {
    params: { name },
  },
}) => {
  const { userData, setUserData } = useUser();
  const { expeditionPop, setExpeditionPop } = useExpedition();
  const { tab: subTab, setTab: setSubTab } = useTab("sub");
  const { tab: mainTab, setTab: setMainTab } = useTab("main");

  useEffect(() => {
    if (!userData) setUserData(name);
  }, [name, setUserData, userData]);
  if (!userData) return <UserInfoBlank />;

  const subTabs = [
    ["착용 아이템", "착용 아바타", "특성·각인"],
    ["전투스킬", "생활스킬"],
    UserCollection(userData.collectionInfo.collectionMini),
  ];
  const mainTabs = ["능력치", "스킬", "수집형포인트"];

  return (
    <>
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
          <TabWrap
            arr={mainTabs}
            isShow={true}
            selectedTab={mainTab}
            setTab={setMainTab}
            tabClass="main"
          />
          {subTabs.map((tab, index) => (
            <TabWrap
              arr={tab}
              key={tab}
              isShow={mainTab === index}
              selectedTab={subTab}
              setTab={setSubTab}
              tabClass="sub"
            />
          ))}
          <NavContentContainer data={userData} />
        </section>
      </section>
    </>
  );
};

export default React.memo(Index, () => true);
