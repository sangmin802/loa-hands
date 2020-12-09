import React from 'react';
import _ from '../../../Utility.js';

function UserDetailInfo({
  changeUserInfoSubTab, 
  userData, 
  userInfoSubTab, 
  userInfoMainTab,
  EquipList,
  AvatarList,
  LifeSkillList,
  BattleSkillList,
  UserCollectionList,
  Tab
}){

  const {content, subTabArr} = SetContent(userData, userInfoMainTab, userInfoSubTab, {EquipList, AvatarList, LifeSkillList, BattleSkillList, UserCollectionList});

  return(
    <div className="userInfoBottomMainTabContent">
      <div className="userInfoBottomSubTabWrap">
        {subTabArr.map((tab, index) => {
          return <Tab 
              key={`userInfoBottomSubTab${index}`}
              index={index}
              tab={userInfoSubTab}
              tabName={tab}
              tabDispatcher={changeUserInfoSubTab}
          />
        })}
      </div>
      {content}
    </div>
  )
}

function SetContent(userData, mainTab, subTab, comps){
  const {EquipList, AvatarList, LifeSkillList, BattleSkillList, UserCollectionList} = comps;
  const {abilityInfo : {equipInfo, skillInfo}, collectionDetail, collectionMini} = userData;
  const [equipArr, avaterArr] = _.divideEquipInfo(equipInfo);
  
  let content = null;
  let subTabArr = [];

  if(mainTab === 0) subTabArr = ['장비', '아바타'];
  if(mainTab === 1) subTabArr = ['전투스킬', '생활스킬'];
  if(mainTab === 2) {
    subTabArr = collectionMini.map(res => res.name)
    content = <UserCollectionList data={collectionDetail[subTab]}/>
  };
  if(mainTab === 0 && subTab === 0) content = [...equipArr].map((equip, index) => (<EquipList data={equip} key={`equipList${index}`}/>))
  if(mainTab === 0 && subTab === 1) content = <AvatarList data={avaterArr}/>;
  if(mainTab === 1 && subTab === 0) content = skillInfo.battleSkill ? <BattleSkillList data = {skillInfo.battleSkill}/> : <div className="noBattleSkillInfo">설정된 스킬이 없습니다.</div>
  if(mainTab === 1 && subTab === 1) content = skillInfo.lifeSkill ? <LifeSkillList data = {skillInfo.lifeSkill} /> : <div className="noBattleSkillInfo">생활스킬이 활성화되지 않았습니다.</div>

  return {content, subTabArr};
}

export default UserDetailInfo;