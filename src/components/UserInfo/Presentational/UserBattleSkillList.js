import React from 'react';
import _ from '../../../Utility.js';

function BattleSkillList({data}){
  const {getPoint, usePoint, skillDetail} = data;

  return(
    <div className="userSkillWrap">
      <div className="userSkillPoint">
        <span className="userUseSkill">{usePoint} / </span>
        <span className="userGetSkill">{getPoint}</span>
      </div>
      <div className="userSkillListWrap">
        {
          skillDetail.map((skill, index) => {
            return <BattleSkill 
                      key={`userSkillList${index}`}
                      skill={skill}
                   />
          })
        }
      </div>
    </div>
  )
}

function BattleSkill({skill}){
  const {rune, skillImg, skillLv, skillName, skillTripod, skillType} = skill;
  const skillNameLv = skillLv === '각성기' ? skillLv : 'Lv'+skillLv;

  return (
    <div className="userSkillList hoverTarget">
      <div className="hoverContent listDetail zIndex11">
        <div className="listDetailTop">
          <div className="listDetailImg">
            <img className="imgWidth" src={skillImg} alt={skillName}/>
          </div>
          <div className="listDetailMainInfo">
            <div className='listDetailGrade overflowDot rem09'>
              {skillType}
            </div>
            <div className='listDetailName overflowDot rem11'>
              {skillNameLv} {skillName} 
            </div>
          </div>
        </div>
        <Rune rune={rune}/>
        <Skill skillTripod={skillTripod}/>
      </div>
      <div className="userSkillImg">
        <img src={skillImg} className="imgWidth" alt={skillName}/>
      </div>
      <div className="userSkillContent">
        <div className="userSkillType rem09">
          {skillType}
        </div>
        <div className="userSkillNameLv">
          <div className="rem09">{skillNameLv}</div>
          <div className="rem09">{skillName}</div>
        </div>
      </div>
    </div>
  )
}

function Rune({rune}){
  if(!rune) return null;
  let {runeGrade, runeImg, runeInfo} = rune;
  runeGrade = _.getOnlyText(runeGrade);
  runeInfo = _.getOnlyText(runeInfo.value.Element_001)

  return (
    <div className="skillRuneContent">
      <div className="runeImg">
        <img className="imgWidth" src={runeImg} alt={runeInfo}/>
      </div>
      <div className="runeMainInfo">
        <div className="runeGrade rem09">{runeGrade}</div>
        <div className="runeInfo rem08">{runeInfo}</div>
      </div>
    </div>
  )
}

function Skill({skillTripod}){
  if(!skillTripod) return null;
  const tripodValues = Object.values(skillTripod.value);
  return (
    <>
      {
        tripodValues.map((res, index) => {
          if(res.name === '') return null;
          const {name, desc, tier, slotData : {iconPath}} = res;
          return (
            <div className="skillTripod" key={`skillTripod${name}${index}`}>
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
        })
      }
    </>
  )
}

export default BattleSkillList;