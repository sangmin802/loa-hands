import React from 'react';
import _ from '../../Utility.js';

function TripodSkillCustom({val, type}){
  if(!val) return null;
  const onlyValues = Object.values(val.value);
  // const onlyValues = arr.map(tripod => {
  //   const {value} = tripod;
  //   return Object.values(val);
  // });
  return(
    <>
      {
        onlyValues.map((res, index) => {
          if(type === 'equip') return <Equip key={`tripodCustom${type}${index}`} res={res}/>;
          if(type === 'skill') return <Skill key={`tripodCustom${type}${index}`} res={res}/>;
        })
      }
    </>
  )
}

export default TripodSkillCustom;

function Equip({res}){
  const {desc} = res;
  const bool = desc !== '보석 장착 필요';
  return (
    <div className="tripodSkillCustom">
      <div
        className="GemImg"
        style={bool ? {border : '1px solid #999'} : null}
      >
        {bool ? <img className={`gradient${res.iconGrade} imgWidth`} src={`//cdn-lostark.game.onstove.com/${res.iconPath}`} alt="보석"/> : null}
      </div>
      <div className="GemInfo">
        <div 
          className={`
          GemName 
          overflowDot 
          rem09 
          ${bool ? `color${res.iconGrade}` : ''}
          `}
        >
          {bool ? _.getOnlyText(res.name) : desc}
        </div>
        <div className="GemStat rem08 overflowDot">
          {bool ? desc : null}
        </div>
      </div>
    </div>
  )
}

function Skill({res}){
  if(res.name === '') return null;
  const {name, desc, tier, slotData : {iconPath}} = res;
  return (
    <div className="skillTripod">
      <div className="skillTripodImg">
        <img className="imgWidth" src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={name} />
      </div>
      <div className="skillTripodContent">
        <div className="skillTripodNameLv rem09">
          {_.getOnlyText(tier)} {_.getOnlyText(name)}
        </div>
        <div className="skillTripodDesc rem08">
          {_.getOnlyText(desc)}
        </div>
      </div>
    </div>
  )
}