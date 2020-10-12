import React from 'react';
import '../index.css';
import Factory from '../factory.js';
import EquipDetailActive from './EquipDetailActive.js';

function EquipList({data}){
  const {partImg, detail} = data;
  const {ItemTitle0 : {value : {slotData : {iconPath, iconGrade}}}} = detail;

  const createEquipListImg = function(){
    let result = 
      <div className="equipListImg">
        <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
      </div>;
    if(detail){
      result = 
        <div className="equipListImg">
          <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
          <img className={`equipMainImg absolute imgWidth gradient${iconGrade}`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={iconPath} />
        </div>
    }
    return result;
  };

  const createEquipListContent = function(){
    let result =
      <div className="equipListContent"></div>
    if(detail){
      const {NameTagBox0, ItemTitle0} = detail;
      const itemName = Factory.getOnlyText(NameTagBox0.value);
      const [equipGrade,,tier] = Factory.multipleValues(ItemTitle0.value);
      
      result = 
        <div className="equipListContent">
          <div className="equipListGrade">{equipGrade}</div>
          <div className="equipListTier">{tier}</div>
          <div className="equipListName">{itemName}</div>
        </div>
    }
    return result;
  }

  const createEquipListDetail = function(){
    let result = 
      <div className="equipListDetail"></div>
    if(detail){
      let equipComp = null;
      switch(detail.equipGroupType){
        case 'Equip' : equipComp = <EquipDetailActive data={detail}/>
        break;
        // case 'Acc' : equipComp = <>
        default : return null;
      }
      result = 
        <div className="equipListDetail zIndex10">
          <div className="equipListImg">
            <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
            <img className={`equipMainImg absolute imgWidth gradient${iconGrade}`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={iconPath} />
          </div>
          {equipComp}
        </div>
    }
    return result;
  }

  const equipListDetail = createEquipListDetail()
  const equipListImg = createEquipListImg();
  const equipListContent = createEquipListContent();

  return(
    <div className="equipList">
      {equipListDetail}
      {equipListImg}
      {equipListContent}
    </div>
  )
};

export default EquipList;