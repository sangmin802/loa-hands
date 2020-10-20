import React from 'react';
import Factory from '../factory.js';

function BattleSkill({data}){
  const 
    {getPoint, usePoint, skillDetail} = data,
    userSkillList = createUserSkillList(skillDetail);

  return(
    <div className="userSkillWrap">
      <div className="userSkillPoint">
        <span className="userUseSkill">{usePoint} / </span>
        <span className="userGetSkill">{getPoint}</span>
      </div>
      <div className="userSkillListWrap">
        {userSkillList}
      </div>
    </div>
  )
}

function createUserSkillList(skillDetail){
  return skillDetail.map((skill, index) => {
    const {rune, skillImg, skillLv, skillName, skillTripod, skillType} = skill;

    let 
      skillNameLv = 'Lv'+skillLv,
      runeCont = null,
      skillTripodCont = null;

    if(skillLv === '각성기'){
      skillNameLv = skillLv;
    }
    if(rune){
      runeCont = createRune(rune);
    }
    if(skillTripod){
      skillTripodCont = createSkillTripod(skillTripod)
    }

    return (
      <div className="userSkillList hoverTarget" key={`userSkillList${index}`}>
        <div className="hoverContent listDetail zIndex11">
          <div className="listDetailTop">
            <div className="listDetailImg">
              <img className="imgWidth" src={skillImg} alt={skillName}/>
            </div>
            <div className="listDetailMainInfo">
              <div className='listDetailGrade overflowDot rem1'>
                {skillType}
              </div>
              <div className='listDetailName overflowDot rem13'>
                {skillNameLv} {skillName} 
              </div>
            </div>
          </div>
          {runeCont}
          {skillTripodCont}
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
  })
}

function createSkillTripod(skillTripod){
  return Object
  .values(skillTripod.value)
  .filter(res => res.name)
  .map((tri, index) => {
    const {name, desc, tier, slotData : {iconPath}} = tri;
    return (
      <div className="skillTripod" key={`skillTripod${index}`}>
        <div className="skillTripodImg">
          <img className="imgWidth" src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={name} />
        </div>
        <div className="skillTripodContent">
          <div className="skillTripodNameLv">
            {Factory.getOnlyText(tier)} {Factory.getOnlyText(name)}
          </div>
          <div className="skillTripodDesc">
            {Factory.getOnlyText(desc)}
          </div>
        </div>
      </div>
    )
  })
}

function createRune(rune){
  let {runeGrade, runeImg, runeInfo} = rune;
  runeGrade = Factory.getOnlyText(runeGrade);
  runeInfo = Factory.getOnlyText(runeInfo.value.Element_001)

  return (
    <div className="skillRuneContent">
      <div className="runeImg">
        <img className="imgWidth" src={runeImg} alt={runeInfo}/>
      </div>
      <div className="runeMainInfo">
        <div className="runeGrade">{runeGrade}</div>
        <div className="runeInfo">{runeInfo}</div>
      </div>
    </div>
  )
}

export default BattleSkill;