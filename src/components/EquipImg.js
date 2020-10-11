import React from 'react';
import '../index.css';

function EquipImg({data}){
  const {partImg, detail} = data;
  let returnTag = 
    <div className="EquipImg">
      <img className="equipPartImg" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
    </div>
  if(detail){
    const {Element_001 : {value : {slotData : {iconPath, iconGrade}}}} = detail;
    returnTag = 
      <div className="EquipImg">
        <img className="equipPartImg absolute" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
        <img className={`equipMainImg gradient${iconGrade}`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={iconPath} />
      </div>
  }
  return returnTag;
}

export default EquipImg