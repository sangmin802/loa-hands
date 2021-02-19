import React from 'react';
import {Selector} from 'store/controller/selector';
import _ from 'utility';
import DoubleColumnList from 'components/userInfo-doubleColumnWrap/index';

import CreateQualityGraph from 'components/userInfo-qualityGraph/index';

const Index = () => {
  const {userData} = Selector(['userData']);
  const {abilityInfo : {equipInfo}} = userData;
  const [equipArr, avaterArr] = _.divideEquipInfo(equipInfo);

  const [equip, acc] = arrayReducer(equipArr, 'Equip');
  const [inner, outer] = arrayReducer(avaterArr, 'InnerAv');
  return (
    <div className="abilityWrap">
      <DoubleColumnList left={equip} right={acc} leftTitle="장비" rightTitle="악세서리" type="EQUIP">
        <CreateQualityGraph />
      </DoubleColumnList>
      <DoubleColumnList left={inner} right={outer} leftTitle="아바타 슬롯" rightTitle="덧입기 슬롯" type="AVATAR" />
    </div>
  )
};

function arrayReducer(arr, type){
  return arr.reduce((prev, cur) => {
    if(cur.equipGroupType === type){
      prev[0].push(cur);
    }else{
      prev[1].push(cur);
    }
    return prev;
  }, [[],[]])
}


export default React.memo(Index, () => true);