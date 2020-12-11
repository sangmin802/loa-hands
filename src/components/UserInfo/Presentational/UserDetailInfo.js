import React from 'react';
import _ from '../../../Utility.js';

// 컴포넌트
import Tab from '../../@Shared/Tab.js';
import UserCollectionList from './UserCollectionList.js';
import UserEquipList from './UserEquipList.js';
import UserAvatarList from './UserAvatarList.js';
import UserBattleSkillList from './UserBattleSkillList.js';
import UserLifeSkillList from './UserLifeSkillList.js';


function UserDetailInfo({
  changeUserInfoSubTab, 
  userData, 
  userInfoSubTab, 
  userInfoMainTab
}){

  const {content, subTabArr} = SetContent(userData, userInfoMainTab, userInfoSubTab);

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

function SetContent(userData, mainTab, subTab){
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
  if(mainTab === 0 && subTab === 0) content = [...equipArr].map((equip, index) => (<UserEquipList data={equip} key={`userEquipList${index}`} />))
  if(mainTab === 0 && subTab === 1) content = <UserAvatarList data={avaterArr} />;
  if(mainTab === 1 && subTab === 0) content = skillInfo ? <UserBattleSkillList data = {skillInfo.battleSkill}/> : <div className="noBattleSkillInfo">설정된 스킬이 없습니다.</div>
  if(mainTab === 1 && subTab === 1) content = skillInfo ? <UserLifeSkillList data = {skillInfo.lifeSkill} /> : <div className="noBattleSkillInfo">생활스킬이 활성화되지 않았습니다.</div>

  return {content, subTabArr};
}

export default UserDetailInfo;