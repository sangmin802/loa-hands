import React from 'react';
import Factory from '../factory.js';

function AccGem({data}){
  const {desc} = data;
  let returnValue = 
    <div className="tripodSkillCustom">
      <div className="GemImg"></div>
      <div className="GemInfo">
        <div className="GemName overflowDot rem1">{desc}</div>
        <div className="GemStat"></div>
      </div>
    </div>
  if(desc !== '보석 장착 필요'){
    const {name, slotData : {iconGrade, iconPath}} = data;
    returnValue = 
      <div className="tripodSkillCustom">
        <div className='GemImg'>
          <img className={`gradient${iconGrade} imgWidth`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt="보석"/>
        </div>
        <div className="GemInfo">
          <div className={`GemName rem1 overflowDot color${iconGrade}`}>{Factory.getOnlyText(name)}</div>
          <div className="GemStat rem09 overflowDot">{desc}</div>
        </div>
      </div>
  }

  return returnValue;
}

export default AccGem;