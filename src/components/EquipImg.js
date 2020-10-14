import React from 'react';

function EquipImg({data}){
  const {partImg, detail} = data;
  let returnTag = 
    <div className="EquipImg">
      <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
    </div>
  if(detail){
    const {ItemTitle0 : {value : {slotData : {iconPath, iconGrade}}}} = detail;
    returnTag = 
      <div className="EquipImg">
        <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
        <img className={`equipMainImg absolute imgWidth gradient${iconGrade}`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={iconPath} />
      </div>
  }
  return returnTag;
}

export default EquipImg