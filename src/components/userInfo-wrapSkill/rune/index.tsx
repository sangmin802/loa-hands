import React from 'react';

import ImgTextWrap from 'components/_imgTextWrap/index';
import _ from 'utility';

export default ({
  rune
}) => {
  const {runeGrade, runeImg, runeInfo} = rune;
  const _runeGrade = _.getOnlyText(runeGrade) as string;
  const _runeInfo = _.getOnlyText(runeInfo.value.Element_001)

  let gradeColor = 0;
  if(_runeGrade.includes('고급')) gradeColor = 1;
  if(_runeGrade.includes('희귀')) gradeColor = 2;
  if(_runeGrade.includes('영웅')) gradeColor = 3;
  if(_runeGrade.includes('전설')) gradeColor = 4;
  if(_runeGrade.includes('유물')) gradeColor = 5;

  return <ImgTextWrap backSrc={runeImg} textA={_runeGrade} textB={_runeInfo} grade={gradeColor}/>
}