import React from 'react';
import Factory from '../factory.js';

function EquipList({data}){
  const {partImg, detail} = data;
  let equipListDetail = null;
  if(detail){
    equipListDetail = Factory.createEquipListDetail(partImg, detail, null, 'EQUIP')
  }
  const equipListImg = createEquipListImg(partImg, detail);
  const equipListContent = createEquipListContent(partImg, detail);

  return(
    <div className="equipList hoverTarget">
      {equipListDetail}
      {equipListImg}
      {equipListContent}
    </div>
  )
};

function createEquipListImg(partImg, detail){
  let result = 
    <div className="equipListImg">
      <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
    </div>;
  if(detail){
    const {ItemTitle0 : {value : {slotData : {iconPath, iconGrade}}}} = detail;
    result = 
      <div className="equipListImg">
        <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
        <img className={`equipMainImg absolute imgWidth gradient${iconGrade}`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={iconPath} />
      </div>
  }
  return result;
};

function createEquipListContent(partImg, detail){
  let result =
    <div className="equipListContent"></div>
  if(detail){
    const {NameTagBox0, ItemTitle0} = detail;
    const itemName = Factory.getOnlyText(NameTagBox0.value);
    const [equipGrade,,tier] = Factory.multipleValues(ItemTitle0.value);
    
    result = 
      <div className="equipListContent">
        <div className="equipListGrade rem09">{equipGrade}</div>
        <div className="equipListTier rem09">{tier}</div>
        <div className="equipListName rem09">{itemName}</div>
      </div>
  }
  return result;
}

export default EquipList;