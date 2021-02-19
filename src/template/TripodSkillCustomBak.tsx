import React from 'react';
import _ from 'utility';

const TripodSkillCustom = ({
  val,
  type
}) => {
  if(!val) return null;
  const onlyValues = Object.values(val.value);
  return(
    <>
      {
        onlyValues.map((tri, index) => {
          if(type === 'equip') return <Equip key={`tripodCustom${type}${index}`} tri={tri}/>;
          if(type === 'skill') return <Skill key={`tripodCustom${type}${index}`} tri={tri}/>;
        })
      }
    </>
  )
}

export default TripodSkillCustom;

const Equip = ({tri}) => {
  const {
    desc,
    iconGrade,
    iconPath,
    name,
  } = tri;
  const bool = desc !== '보석 장착 필요';
  return (
    <div className="tripodSkillCustom">
      <div
        className="GemImg"
        style={bool ? {border : '1px solid #999'} : null}
      >
        {bool ? <img className={`gradient${iconGrade} imgWidth`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt="보석"/> : null}
      </div>
      <div className="GemInfo">
        <div 
          className={`
          GemName 
          overflowDot 
          rem09 
          ${bool ? `color${iconGrade}` : ''}
          `}
        >
          {bool ? _.getOnlyText(name) : desc}
        </div>
        <div className="GemStat rem08 overflowDot">
          {bool ? desc : null}
        </div>
      </div>
    </div>
  )
}

const Skill = ({
  tri
}) => {
  const {
    name, 
    desc, 
    tier, 
    slotData : {
      iconPath
    }
  } = tri;
  if(name === '') return null;
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