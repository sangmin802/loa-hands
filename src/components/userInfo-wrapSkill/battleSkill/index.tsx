import React from 'react';
import _ from 'utility';
import ColumnList from 'components/_columnList/index';
import ImgTextWrap from 'components/_imgTextWrap/index';
import HoverDetail from 'components/_hoverDetail/index';
import Rune from '../rune/index';
import SkillTripod from '../skillTripod/index';

export default ({
  data, 
} : {
  data?,
}) => {
  const {rune, skillImg, skillLv, skillName, skillTripod, skillType} = data;
  const skillNameLv = skillLv === '각성기' ? skillLv : 'Lv'+skillLv;

  const hoverTextA = data ? skillType : null;
  const hoverTextB = data ? `${skillNameLv} ${skillName}` : null;
  const backSrc = data ? skillImg : null;
  const textA = data ? `${skillNameLv} ${skillType}` : null;
  const textB = data ? `${skillName}` : null;

  return (
    <>
      <HoverDetail
        backSrc={backSrc}
        hoverTextA={hoverTextA}
        hoverTextB={hoverTextB}
      >
        {rune && <div className="batteSkillRune"><Rune rune={rune}/></div>}
        {skillTripod && <SkillTripod skillTripod={skillTripod}/>}
      </HoverDetail>
      <ImgTextWrap 
        backSrc={backSrc}
        textA={textA}
        textB={textB}
      />
    </>
  )
}