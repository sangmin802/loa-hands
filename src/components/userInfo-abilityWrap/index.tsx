import React from "react";
import _ from "utility";
import "./index.css";
import DoubleColumnWrap from "components/_doubleColumnWrap/index";
import Quality from "template/quality";

const Index = ({ abilityInfo }) => {
  const { equipInfo } = abilityInfo;
  const [av, equip] = _.arrayReducer(Object.values(equipInfo), "Av");

  return (
    <div className="abilityWrap tabContent1">
      <DoubleColumnWrap data={equip} type="Equip">
        <Quality />
      </DoubleColumnWrap>
      <DoubleColumnWrap data={av} type="Inner" />
    </div>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
