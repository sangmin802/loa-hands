import React from "react";
import _ from "utility";
import "./index.css";
import DoubleColumnWrap from "components/_doubleColumnWrap/index";
import Rune from "template/rune";

const Index = ({ skillInfo }) => {
  const { battleSkill, lifeSkill } = skillInfo;

  return (
    <div className="skillWrap tabContent1">
      <DoubleColumnWrap
        data={battleSkill.skills}
        lt={`사용 : ${battleSkill.usePoint}`}
        rt={`획득 : ${battleSkill.getPoint}`}
        type="Left"
      >
        <Rune />
      </DoubleColumnWrap>
      <DoubleColumnWrap data={lifeSkill} type="Left" />
    </div>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
