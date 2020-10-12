import React from 'react';
import Factory from '../factory.js';

function AccGem({data}){
  const {desc} = data;
  console.log(desc)
  let returnValue = 
    <div className="accGem">
      <div className="GemImg"></div>
      <div className="GemInfo">
        <div className="GemName">{desc}</div>
        <div className="GemStat"></div>
      </div>
    </div>
  if(desc !== '보석 장착 필요'){
    const {name, slotData : {iconGrade, iconPath}} = data;
    returnValue = 
      <div className="accGem">
        <div className="GemImg">
          <img src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt="보석"/>
        </div>
        <div className="GemInfo">
          <div className={`GemName color${iconGrade}`}>{Factory.getOnlyText(Factory.convertElement(name))}</div>
          <div className="GemStat">{desc}</div>
        </div>
      </div>
  }

  return returnValue;
}

export default AccGem;