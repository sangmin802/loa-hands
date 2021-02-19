import React from 'react';
import CreateQualityGraph from 'components/userInfo-qualityGraph/index';
import ItemPartBox from 'template/ItemPartBox';
import SingleTextBox from 'template/SingleTextBox';
import TripodSkillCustom from 'template/TripodSkillCustom';
import _ from 'utility';

export default ({data} : {data?}) => {
  return (
    <>
      <CreateQualityGraph data={data} />
      <div className="listDetailBottom">
        <ItemPartBox data={data.detail}/>
        <SingleTextBox data={data.detail}/>
        <TripodSkillCustom data={data.detail}>
          <AccGems />
        </TripodSkillCustom>
      </div>
    </>
  )
}


function AccGems({data} : {data?}){
  const {desc} = data;
  const bool = desc !== '보석 장착 필요';
  return (
    <div className="tripodSkillCustom">
      <div
        className="GemImg"
        style={bool ? {border : '1px solid #999'} : null}
      >
        {bool ? <img className={`gradient${data.slotData.iconGrade} imgWidth`} src={`//cdn-lostark.game.onstove.com/${data.slotData.iconPath}`} alt="보석"/> : null}
      </div>
      <div className="GemInfo">
        <div 
          className={`
          GemName 
          overflowDot 
          rem09 
          ${bool ? `color${data.slotData.iconGrade}` : ''}
          `}
        >
          {bool ? _.getOnlyText(data.name) : desc}
        </div>
        <div className="GemStat rem08 overflowDot">
          {bool ? desc : null}
        </div>
      </div>
    </div>
  )
}