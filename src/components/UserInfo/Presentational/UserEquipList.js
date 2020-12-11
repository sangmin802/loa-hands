import React from 'react';
import _ from '../../../Utility.js';

// 컴포넌트
import UserItemHover from './UserItemHover.js';

function UserEquipList({
  data,
}){
  const {partImg, detail} = data;

  return(
    <div className="equipList hoverTarget">
      <UserItemHover 
        partImg={partImg}
        detail={detail}
        type='EQUIP'
      />
      <EquipImg 
        partImg={partImg}
        detail={detail}
      />
      <EquipContent 
        detail={detail}
      />
    </div>
  )
};

function EquipImg({partImg, detail}){
  if(!detail) return (
    <div className="equipListImg">
      <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
    </div>
  )
  const {ItemTitle0 : {value : {slotData : {iconPath, iconGrade}}}} = detail;
  return (
    <div className="equipListImg">
      <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
      <img className={`equipMainImg absolute imgWidth gradient${iconGrade}`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={iconPath} />
    </div>
  )
};

function EquipContent({detail}){
  if(!detail) return <div className="equipListContent"></div>;
  const {NameTagBox0, ItemTitle0} = detail;
  const itemName = _.getOnlyText(NameTagBox0.value);
  const [equipGrade,,tier] = _.multipleValues(ItemTitle0.value);
  
  return(
    <div className="equipListContent">
      <div className="equipListGrade rem09">{equipGrade}</div>
      <div className="equipListTier rem09">{tier}</div>
      <div className="equipListName rem09">{itemName}</div>
    </div>
  )
}

export default UserEquipList;