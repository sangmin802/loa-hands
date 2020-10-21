import React from 'react';
import Factory from '../factory.js'
import EquipList from './EquipList.js';
import AvatarList from './AvatarList.js';
import BattleSkillList from './BattleSkillList.js';

function BottomContent(redux){
  const 
    {userData, userInfoSubTab, changeUserInfoSubTab, userInfoMainTab} = redux,
    {abilityInfo : {equipInfo, skillInfo}} = userData,
    [equipArr, avaterArr] = Factory.devideEquipInfo(equipInfo)
  let 
    content = null,
    subTabArr = [];
  
  switch(userInfoMainTab){
    case 0 :
      subTabArr = ['장비', '아바타'];
      switch(userInfoSubTab){
        case 0 : 
          content = 
            [...equipArr].map((equip, index) => {
              return <EquipList data={equip} key={`equipList${index}`}/>
            })
        break;
        case 1 :
          content = <AvatarList data={avaterArr}/>;
        break;
        default : return null;
      }
    break;
    case 1 : 
      subTabArr = ['전투스킬', '생활스킬'];
      switch(userInfoSubTab){
        case 0 :
          if(skillInfo){
            content = <BattleSkillList data = {skillInfo.battleSkill}/>
          }else{
            content = <div className="noBattleSkillInfo">설정된 스킬이 없습니다.</div>
          }
        break;
        case 1 :
          if(skillInfo){
            content = 
              <div className="userLifeSkillWrap">
                {skillInfo.lifeSkill.map((skill, index) => {
                  return(
                    <div className="lifeSkillList" key={`lifeSkillList${index}`}>
                      <div className="lifeSkillLv">{skill.lv}</div>
                      <div className="lifeSkillName">{skill.name}</div>
                    </div>
                  )
                })}
              </div>
          }else{
            content = <div className="noBattleSkillInfo">생활스킬이 활성화되지 않았습니다.</div>
          }
        break;
        default : return null;
      }
    break;
    case 2 :
      subTabArr = userData.collectionMini.map(res => res.name);
      const 
        targetCollection = userData.collectionDetail[userInfoSubTab],
        {detail, getCount, title, totalCount} = targetCollection;
      content = 
      <div className="userCollectionWrap">
        <div className="userCollectionTitle textCenter">{title}</div>
        <div className="userCollectionCount textCenter rem09">
          {getCount} / {totalCount}
        </div>
        <div className="userCollectionDetailWrap">
        {detail.reduce((prev, cur) => {
          if(cur.isGet){
            prev[0].push(cur)
          }else{
            prev[1].push(cur)
          }
          return prev;
        }, [[],[]])
        .map((arr, index) => {
          const side = index === 0 ? 'Right' : 'Left';
          return (
            <div className={`userCollectionSide userCollection${side}`} key={`userCollectionSide${side}`}>
              <div className="userCollectionIsGet">
                {index === 0 ? '획득' : '미획득'}
              </div>
              {arr.map((col, index) => {
                return (
                  <div className="userCollection" key={`userCollection${index}`}>
                    <div className="userCollectionNo">{col.no}.</div>
                    <div className="userCollectionName overflowDot">{col.name}</div>
                  </div>
                )
              })}
            </div>
          )
        })}
        </div>
      </div>
    break;
    default : return null;
  }

  return(
    <div className="userInfoBottomMainTabContent">
      <div className="userInfoBottomSubTabWrap">
        {subTabArr.map((tab, index) => {
          let target = null;
          if(index===userInfoSubTab) target = "tabTarget"
          return (
            <div className={`userInfoBottomSubTab ${target} textCenter`}
              key={`userInfoBottomSubTab${index}`}
              onClick={() => {
                  changeUserInfoSubTab(index)
                }
              }
            >
              {tab}
            </div>
          )
        })}
      </div>
      {content}
    </div>
  )
}

export default BottomContent;