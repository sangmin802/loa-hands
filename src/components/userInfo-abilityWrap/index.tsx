// function SetContent(userData : UserData, mainTab : number, subTab : number){
//   const {abilityInfo : {equipInfo, skillInfo}, collectionDetail} = userData;
//   const [equipArr, avaterArr] = _.divideEquipInfo(equipInfo);
  
//   if(mainTab === 0 && subTab === 0) return [...equipArr].map((equip : IEquip, index) => (<UserEquipList data={equip} key={`userEquipList${index}`} />))
//   if(mainTab === 0 && subTab === 1) return <UserAvatarList data={avaterArr} />;
//   if(mainTab === 1 && subTab === 0) return skillInfo ? <UserBattleSkillList data = {skillInfo.battleSkill}/> : <div className="noBattleSkillInfo">설정된 스킬이 없습니다.</div>
//   if(mainTab === 1 && subTab === 1) return skillInfo ? <UserLifeSkillList data = {skillInfo.lifeSkill} /> : <div className="noBattleSkillInfo">생활스킬이 활성화되지 않았습니다.</div>
//   if(mainTab === 2) return <UserCollectionList data={collectionDetail[subTab]}/>
// }
import React from 'react';
import {Selector} from 'store/controller/selector';
import _ from 'utility';

const Index = () => {
  const {userData} = Selector(['userData']);
  const {abilityInfo : {equipInfo}} = userData;
  const [equipArr, avaterArr] = _.divideEquipInfo(equipInfo);

  const [equip, acc] = arrayReducer(equipArr, 'Equip');
  const [inner, outer] = arrayReducer(avaterArr, 'InnerAv');

  console.log(equip, acc, inner, outer)

  return (
    <>

    </>
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