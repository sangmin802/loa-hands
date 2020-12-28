import React from 'react';
import _ from '../../../Utility';

// 컴포넌트
import Tab from '../../@Shared/Tab';
import UserCollectionList from './UserCollectionList';
import UserEquipList from './UserEquipList';
import UserAvatarList from './UserAvatarList';
import UserBattleSkillList from './UserBattleSkillList';
import UserLifeSkillList from './UserLifeSkillList';
import CollectionImg from '../../@Shared/CollectionImg';


function UserDetailInfo({
  changeUserInfoSubTab, 
  userData, 
  userInfoSubTab, 
  userInfoMainTab
}){

  const subTabArr = SetSubTabArr(userInfoMainTab, userData);
  const content = SetContent(userData, userInfoMainTab, userInfoSubTab);
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

function SetSubTabArr(mainTab, userData){
  const {collectionMini} = userData;
  let subTabArr = [];
  if(mainTab === 0) subTabArr = ['장비', '아바타'];
  if(mainTab === 1) subTabArr = ['전투스킬', '생활스킬'];
  if(mainTab === 2) {
    subTabArr = collectionMini.map((col, index) => {
      return <CollectionImg 
                key={`collectionMini${index}`}
                index={index}
                size={col.size}
             />
    })
  };
  return subTabArr
}

function SetContent(userData, mainTab, subTab){
  const {abilityInfo : {equipInfo, skillInfo}, collectionDetail} = userData;
  const [equipArr, avaterArr] = _.divideEquipInfo(equipInfo);
  
  if(mainTab === 0 && subTab === 0) return [...equipArr].map((equip, index) => (<UserEquipList data={equip} key={`userEquipList${index}`} />))
  if(mainTab === 0 && subTab === 1) return <UserAvatarList data={avaterArr} />;
  if(mainTab === 1 && subTab === 0) return skillInfo ? <UserBattleSkillList data = {skillInfo.battleSkill}/> : <div className="noBattleSkillInfo">설정된 스킬이 없습니다.</div>
  if(mainTab === 1 && subTab === 1) return skillInfo ? <UserLifeSkillList data = {skillInfo.lifeSkill} /> : <div className="noBattleSkillInfo">생활스킬이 활성화되지 않았습니다.</div>
  if(mainTab === 2) return <UserCollectionList data={collectionDetail[subTab]}/>
}

export default UserDetailInfo;