import React, { useCallback, useEffect, useMemo, useState } from "react";
import "style/userInfo.scss";
import {
  BasicInfo,
  Expedition,
  Nav,
  Collection,
  NavContent,
  DoubleListContainer,
  Quality,
  Rune,
  Characteristic,
  Detail,
  ListItem,
  Dialog,
} from "components/";
import { useUser } from "hooks/use-user";

const UserInfo = ({
  match: {
    params: { name },
  },
}) => {
  const { userData, setUserData } = useUser();
  const [expeditionPop, setExpeditionPop] = useState(false);
  const [subNav, setSubNav] = useState(0);
  const [mainNav, setMainNav] = useState(0);
  const [dialog, setDialog] = useState(null);

  const collectionNav = useMemo(() => {
    if (!userData) return;
    return userData.collectionInfo.collectionMini.map((col, index) => (
      <Collection
        key={`collectionMini${index}`}
        index={index}
        size={col.size}
      />
    ));
  }, [userData]);

  const toggleExpedition = useCallback(() => {
    setExpeditionPop(!expeditionPop);
  }, [setExpeditionPop, expeditionPop]);

  const setMainNavHandler = useCallback(
    index => {
      setMainNav(index);
      setSubNav(0);
    },
    [setMainNav, setSubNav]
  );

  const setDialogHandler = useCallback(
    dialog => {
      setDialog(dialog);
    },
    [setDialog]
  );
  useEffect(() => {
    return () => {
      setMainNav(0);
      setSubNav(0);
      setExpeditionPop(false);
      setDialogHandler(null);
    };
  }, [userData, setMainNav, setSubNav, setExpeditionPop, setDialogHandler]);

  useEffect(() => {
    if (!userData) setUserData(name);
  }, [name, setUserData, userData]);
  if (!userData) return null;

  const subNavs = [
    ["착용 아이템", "착용 아바타", "특성·각인"],
    ["전투스킬", "생활스킬"],
    collectionNav,
  ];
  const mainNavs = ["능력치", "스킬", "수집형포인트"];
  const {
    characteristicInfo,
    equipInfo: { equipment, avatar },
  } = userData.abilityInfo;
  const { battleSkill, lifeSkill } = userData.skillInfo;
  const { collectionDetail } = userData.collectionInfo;
  const { battle, basic, engrave } = characteristicInfo;

  return (
    <>
      <Dialog dialog={dialog} setDialog={setDialogHandler} />
      <section className="user-info">
        <section className="user-info-top">
          <div className="show-expedition-wrap" onClick={toggleExpedition}>
            원정대 캐릭터 보기
          </div>
          <Expedition
            userData={userData}
            setUserData={setUserData}
            expeditionPop={expeditionPop}
            toggleExpedition={toggleExpedition}
          />
          <BasicInfo userData={userData} collection={collectionNav} />
        </section>
        <section className="user-info-bottom">
          <Nav
            arr={mainNavs}
            isShow={true}
            selectedNav={mainNav}
            setNav={setMainNavHandler}
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
          <NavContent selected={mainNav} cn="tab-content-wrap">
            <NavContent
              selected={subNav}
              cn="ability-container nav-content-container"
            >
              <DoubleListContainer data={Object.values(equipment)} type="Equip">
                <Quality />
              </DoubleListContainer>
              <DoubleListContainer data={Object.values(avatar)} type="Inner" />
              <Characteristic data={[basic, battle, engrave]} />
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

export default React.memo(UserInfo, () => true);
