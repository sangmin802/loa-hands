import React from 'react';
import {Selector} from 'store/controller/selector';
import _ from 'utility';
import './index.css'

import DoubleColumnList from 'components/_doubleColumnWrap/index';
import BattleSkill from './battleSkill/index';
import LifeSkill from './lifeSkill/index';

const Index = () => {
  const {userData} = Selector(['userData']);
  const battleSkill = userData.abilityInfo?.skillInfo?.battleSkill ?? null;
  const lifeSkill = userData.abilityInfo?.skillInfo?.lifeSkill ?? null;

  const [bLeft, bRight] = battleSkill ? arrayReducer(battleSkill.skillDetail) : [null, null];
  const [lLeft, lRight] = lifeSkill ? arrayReducer(lifeSkill) : [null, null];
  return (
    <div className="skillWrap">
      {battleSkill &&
        <DoubleColumnList left={bLeft} right={bRight} leftTitle={`사용 : ${battleSkill.usePoint}`} rightTitle={`획득 : ${battleSkill.getPoint}`}>
          <BattleSkill />
        </DoubleColumnList>
      }
      {!battleSkill && <div>지정된 전투스킬이 존재하지 않습니다.</div>}
      {battleSkill &&
        <DoubleColumnList left={lLeft} right={lRight}>
          <LifeSkill />
        </DoubleColumnList>
      }
      {!lifeSkill && <div>지정된 생활스킬이 존재하지 않습니다.</div>}
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