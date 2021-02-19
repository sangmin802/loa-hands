import React from 'react';

export default ({
  partImg,detail
} : {partImg?,detail?}) => {
  if(!detail) return (
    <div className="columnListImg">
      <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
    </div>
  )
  const {ItemTitle0 : {value : {slotData : {iconPath, iconGrade}}}} = detail;
  return (
    <div className="columnListImg">
      <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
      <img className={`equipMainImg absolute imgWidth gradient${iconGrade}`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={iconPath} />
    </div>
  )
};
