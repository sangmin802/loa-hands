import React from 'react';
import {Selector} from 'store/controller/selector';
import _ from 'utility';
import './index.css'

import DoubleColumnList from 'components/_doubleColumnWrap/index';

const Index = () => {
  const {userData} = Selector(['userData']);
  const {abilityInfo : {skillInfo : {battleSkill, lifeSkill}}} = userData;

  const [bLeft, bRight] = arrayReducer(battleSkill.skillDetail);
  const [lLeft, lRight] = arrayReducer(lifeSkill);

  return (
    <div className="abilityWrap displayNone">
      <DoubleColumnList left={bLeft} right={bRight} leftTitle={`사용 : ${battleSkill.usePoint}`} rightTitle={`획득 : ${battleSkill.getPoint}`} style="displayNone">
      </DoubleColumnList>
      <DoubleColumnList left={lLeft} right={lRight} style="displayNone">
      </DoubleColumnList>
    </div>
  )
};

function arrayReducer(arr){
  const half = Math.ceil(arr.length / 2);
  const a = arr.slice(0, half);
  const b = arr.slice(half, arr.length);
  return [a,b];
}

export default React.memo(Index, () => true);