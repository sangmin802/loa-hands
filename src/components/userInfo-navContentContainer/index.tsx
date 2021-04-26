import React, { cloneElement } from "react";
import _ from "utility/utility";
import NavContent from "components/userInfo-navContent/index";
import DoubleColumnWrap from "components/_doubleColumnWrap/index";
import Quality from "template/quality";
import Rune from "template/rune";
import CharacteristicWrap from "components/userInfo-characteristic/index";
import { useTab } from "hooks/useTab";
import "./index.css";

const NavContentContainer = ({ data }) => {
  const { tab: mainTab } = useTab("main");
  const { tab: subTab } = useTab("sub");
  const { equipInfo, characteristicInfo } = data.abilityInfo;
  const { battleSkill, lifeSkill } = data.skillInfo;
  const { collectionDetail } = data.collectionInfo;
  const [av, equip] = _.arrayReducer(Object.values(equipInfo), "Av");
  const { battle, basic, engrave } = characteristicInfo;
  const contentsArr = [
    <NavContent type="ability-container">
      <DoubleColumnWrap data={equip} type="Equip">
        <Quality />
      </DoubleColumnWrap>
      <DoubleColumnWrap data={av} type="Inner" />
      <CharacteristicWrap data={[basic, battle, engrave]} />
    </NavContent>,
    <NavContent type="skill-container">
      <DoubleColumnWrap
        data={battleSkill.skills}
        lt={`사용 : ${battleSkill.usePoint}`}
        rt={`획득 : ${battleSkill.getPoint}`}
        type="Left"
      >
        <Rune />
      </DoubleColumnWrap>
      <DoubleColumnWrap data={lifeSkill} type="Left" />
    </NavContent>,
    <NavContent type="collection-container">
      {collectionDetail.map((res, index) => (
        <DoubleColumnWrap
          key={index}
          data={res.collection}
          type="True"
          lt={res.title}
          rt={`획득 : ${res.getCount} 미획득 : ${res.totalCount}`}
        />
      ))}
    </NavContent>,
  ];

  return (
    <div className="tabContentWrap">
      {contentsArr.map((res, index) =>
        cloneElement(res, {
          isShow: mainTab === index,
          sub: subTab,
          key: index,
        })
      )}
    </div>
  );
};

export default React.memo(NavContentContainer, (left, right) =>
  _.compareObj(left, right)
);
