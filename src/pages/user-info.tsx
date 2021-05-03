import React, { useEffect } from "react";
import "style/userInfo.scss";
import UserBasicInfo from "components/userInfo-basic/index";
import UserExpeditionChars from "components/userInfo-expeditionchars/index";
import Nav from "components/nav/index";
import { useUser } from "hooks/use-user";
import { useExpedition } from "hooks/use-expedition";
import { useNav } from "hooks/use-nav";
import UserCollection from "components/userInfo-collection-nav/index";
import NavContent from "components/nav-content/index";
import DoubleListContainer from "components/double-list-container/index";
import Quality from "components/quality/index";
import Rune from "components/rune/index";
import CharacteristicWrap from "components/userInfo-characteristic/index";
import { arrayReducer } from "utility/utility";

const Index = ({
  match: {
    params: { name },
  },
}) => {
  const { userData, setUserData } = useUser();
  const { expeditionPop, setExpeditionPop } = useExpedition();
  const { nav: subNav, setNav: setSubNav } = useNav("sub");
  const { nav: mainNav, setNav: setMainNav } = useNav("main");

  useEffect(() => {
    if (!userData) setUserData(name);
  }, [name, setUserData, userData]);
  if (!userData) return null;

  const subNavs = [
    ["착용 아이템", "착용 아바타", "특성·각인"],
    ["전투스킬", "생활스킬"],
    UserCollection(userData.collectionInfo.collectionMini),
  ];
  const mainNavs = ["능력치", "스킬", "수집형포인트"];

  const { equipInfo, characteristicInfo } = userData.abilityInfo;
  const { battleSkill, lifeSkill } = userData.skillInfo;
  const { collectionDetail } = userData.collectionInfo;
  const [av, equip] = arrayReducer(Object.values(equipInfo), "Av");
  const { battle, basic, engrave } = characteristicInfo;

  return (
    <>
      <section className="userInfo">
        <section className="userInfoTop">
          <div className="showExpeditionWrap" onClick={setExpeditionPop}>
            원정대 캐릭터 보기
          </div>
          <UserExpeditionChars
            userData={userData}
            setUserData={setUserData}
            expeditionPop={expeditionPop}
            setExpeditionPop={setExpeditionPop}
          />
          <UserBasicInfo userData={userData} />
        </section>
        <section className="userInfoBottom">
          <Nav
            arr={mainNavs}
            isShow={true}
            selectedNav={mainNav}
            setNav={setMainNav}
            navType="main"
          />
          {subNavs.map((tab, index) => (
            <Nav
              arr={tab}
              key={tab}
              isShow={mainNav === index}
              selectedNav={subNav}
              setNav={setSubNav}
              navType="sub"
            />
          ))}
          <NavContent selected={mainNav} cn="tabContentWrap">
            <NavContent
              selected={subNav}
              cn="ability-container nav-content-container"
            >
              <DoubleListContainer data={equip} type="Equip">
                <Quality />
              </DoubleListContainer>
              <DoubleListContainer data={av} type="Inner" />
              <CharacteristicWrap data={[basic, battle, engrave]} />
            </NavContent>
            <NavContent
              selected={subNav}
              cn="skill-container nav-content-container"
            >
              <DoubleListContainer
                data={battleSkill.skills}
                lt={`사용 : ${battleSkill.usePoint}`}
                rt={`획득 : ${battleSkill.getPoint}`}
                type="Left"
              >
                <Rune />
              </DoubleListContainer>
              <DoubleListContainer data={lifeSkill} type="Left" />
            </NavContent>
            <NavContent
              selected={subNav}
              cn="collection-container nav-content-container"
            >
              {collectionDetail.map((res, index) => (
                <DoubleListContainer
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
