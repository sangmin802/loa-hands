import React from 'react';
import Factory from '../factory.js'
import EquipList from './EquipList.js';
import AvatarList from './AvatarList.js';

function Ability(redux){
  const 
    {userData, userInfoSubTab, changeUserInfoSubTab} = redux,
    {equipInfo} = userData,
    [equipArr, avaterArr] = Factory.devideEquipInfo(equipInfo)
  let abilityContent = null;

  switch(userInfoSubTab){
    case 0 : 
      abilityContent = 
        [...equipArr].map((equip, index) => {
          return <EquipList data={equip} key={`equipList${index}`}/>
        })
    break;
    case 1 :
      abilityContent = <AvatarList data={avaterArr}/>;
    break;
    default : return null;
  }

  return(
    <div className="bottomContent">
      <div className="userInfoBottomSubTabWrap">
        {['장비', '아바타'].map((tab, index) => {
          let target = null;
          if(index===userInfoSubTab) target = "tabTarget"
          return (
            <div className={`userInfoBottomSubTab ${target}`}
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
      {abilityContent}
    </div>
  )
}

export default Ability;