import React from "react";
import _ from "utility";
import "./index.css";
import DoubleColumnWrap from "components/_doubleColumnWrap/index";
import Quality from "template/quality";
import CharacteristicWrap from "components/userInfo-characteristic/index";

const Index = ({ abilityInfo }) => {
  const { equipInfo, characteristicInfo } = abilityInfo;
  const [av, equip] = _.arrayReducer(Object.values(equipInfo), "Av");
  const { battle, basic, engrave } = characteristicInfo;

  return (
    <div className="abilityWrap tabContent1">
      <DoubleColumnWrap data={equip} type="Equip">
        <Quality />
      </DoubleColumnWrap>
      <DoubleColumnWrap data={av} type="Inner" />
      <CharacteristicWrap data={[basic, battle, engrave]} />
    </div>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
