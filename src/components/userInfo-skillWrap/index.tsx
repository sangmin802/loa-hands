import React from "react";
import _ from "utility/utility";
import "./index.css";
import DoubleColumnWrap from "components/_doubleColumnWrap/index";
import Rune from "template/rune";

const Index = ({ skillInfo, sub, isTarget = null }) => {
  const { battleSkill, lifeSkill } = skillInfo;
  const contentsArr = [
    <DoubleColumnWrap
      data={battleSkill.skills}
      lt={`사용 : ${battleSkill.usePoint}`}
      rt={`획득 : ${battleSkill.getPoint}`}
      type="Left"
    >
      <Rune />
    </DoubleColumnWrap>,
    <DoubleColumnWrap data={lifeSkill} type="Left" />,
  ];

  return (
    <div className={`skillWrap tabContent1 ${isTarget ? "" : "displayNone"}`}>
      {contentsArr.map((res, index) => (
        <div
          className={`${sub === index ? "" : "displayNone"}`}
          key={`subContentWrap${index}`}
        >
          {res}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
