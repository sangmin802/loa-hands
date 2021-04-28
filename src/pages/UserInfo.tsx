import React, { useEffect } from "react";
import "style/userInfo.scss";
import UserExpeditionPop from "components/userInfo-expeditionPop/index";
import UserBasicInfo from "components/userInfo-basic/index";
import UserExpeditionChars from "components/userInfo-expeditionChars/index";
import Navigation from "components/navigation/index";
import { useUser } from "hooks/useUser";
import { useExpedition } from "hooks/useExpedition";
import { useTab } from "hooks/useTab";
import UserCollection from "components/userInfo-collectionNav/index";
import NavContent from "components/userInfo-navContent/index";
import DoubleColumnWrap from "components/double-column-list-container/index";
import Quality from "template/quality";
import Rune from "template/rune";
import CharacteristicWrap from "components/userInfo-characteristic/index";
import _ from "utility/utility";

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
  if (!userData) return null;

  const subTabs = [
    ["착용 아이템", "착용 아바타", "특성·각인"],
    ["전투스킬", "생활스킬"],
    UserCollection(userData.collectionInfo.collectionMini),
  ];
  const mainTabs = ["능력치", "스킬", "수집형포인트"];

  const { equipInfo, characteristicInfo } = userData.abilityInfo;
  const { battleSkill, lifeSkill } = userData.skillInfo;
  const { collectionDetail } = userData.collectionInfo;
  const [av, equip] = _.arrayReducer(Object.values(equipInfo), "Av");
  const { battle, basic, engrave } = characteristicInfo;

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
          <Navigation
            arr={mainTabs}
            isShow={true}
            selectedTab={mainTab}
            setTab={setMainTab}
            tabClass="main"
          />
          {subTabs.map((tab, index) => (
            <Navigation
              arr={tab}
              key={tab}
              isShow={mainTab === index}
              selectedTab={subTab}
              setTab={setSubTab}
              tabClass="sub"
            />
          ))}
          <NavContent selected={mainTab} cn="tabContentWrap">
            <NavContent
              selected={subTab}
              cn="ability-container nav-content-container"
            >
              <DoubleColumnWrap data={equip} type="Equip">
                <Quality />
              </DoubleColumnWrap>
              <DoubleColumnWrap data={av} type="Inner" />
              <CharacteristicWrap data={[basic, battle, engrave]} />
            </NavContent>
            <NavContent
              selected={subTab}
              cn="skill-container nav-content-container"
            >
              <DoubleColumnWrap
                data={battleSkill.skills}
                lt={`사용 : ${battleSkill.usePoint}`}
                rt={`획득 : ${battleSkill.getPoint}`}
                type="Left"
              >
                <Rune />
              </DoubleColumnWrap>
              <DoubleColumnWrap data={lifeSkill} type="Left" />
            </NavContent>
            <NavContent
              selected={subTab}
              cn="collection-container nav-content-container"
            >
              {collectionDetail.map((res, index) => (
                <DoubleColumnWrap
                  key={index}
                  data={res.collection}
                  type="True"
                  lt={res.title}
                  rt={`획득 : ${res.getCount} 미획득 : ${res.totalCount}`}
                />
              ))}
            </NavContent>
          </NavContent>
        </section>
      </section>
    </>
  );
};

export default React.memo(Index, () => true);
