import React from 'react';
import Factory from '../factory.js';
import EquipDetailActive from './EquipDetailActive.js';

function EquipList({data}){
  const {partImg, detail} = data;
  let equipListDetail = null;
  if(detail){
    equipListDetail = createEquipListDetail(partImg, detail)
  }
  const equipListImg = createEquipListImg(partImg, detail);
  const equipListContent = createEquipListContent(partImg, detail);

  return(
    <div className="equipList">
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

function createEquipListDetail(partImg, detail){
  let result = 
    <div className="equipListDetail"></div>
  if(detail){
    const {ItemTitle0, NameTagBox0, equipGroupType} = detail;
    const {value : {slotData : {iconPath, iconGrade}}} = ItemTitle0;
    const [equipGrade,,tier, qualityValue] = Factory.multipleValues(ItemTitle0.value);
    const itemName = Factory.getOnlyText(NameTagBox0.value);

    let qualityColor = -1;
    if(qualityValue >= 10 && qualityValue < 70){
      qualityColor = 1;
    }else if(qualityValue >= 70 && qualityValue < 90){
      qualityColor = 2;
    }else if(qualityValue >= 90){
      qualityColor = 3;
    }

    let qualityWrap = 
      <div className='equipListDetailQuality'>
        <div className={`qualityValue gradient${qualityColor}`} style={{width : `${qualityValue}%`}}/>
      </div>;
    if(equipGroupType==="Stone"){
      qualityWrap = null;
    }

    result = 
      <div className="equipListDetail zIndex10">
        <div className="equipLilstDetailTop">
          <div className="equipListDetailImg">
            <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
            <img className={`equipMainImg absolute imgWidth gradient${iconGrade}`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={iconPath} />
          </div>
          <div className="equipListMainInfo">
            <div className={`equipListDetailName overflowDot color${iconGrade} rem13`}>
              {itemName}
            </div>
            <div className={`equipListDetailGrade overflowDot color${iconGrade} rem1`}>
              {equipGrade}
            </div>
            <div className='equipListDetailTier overflowDot rem09'>
              {tier}
            </div>
            {qualityWrap}
          </div>
        </div>
        <EquipDetailActive data={detail}/>
      </div>
  }
  return result;
}

export default EquipList;