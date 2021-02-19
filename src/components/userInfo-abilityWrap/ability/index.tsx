import React from 'react';
import _ from 'utility';
import ColumnList from 'components/shared-columnList/index';
import AbilityDetail from '../abilityDetail/index';

export default ({
  data, 
} : {
  data?,
}) => {
  const {detail, partImg} = data;

  const hoverTextB = detail ? _.multipleValues(detail.ItemTitle0.value)[0] : null;
  const hoverTextC = detail ? _.multipleValues(detail.ItemTitle0.value)[2] : null;
  const src = detail ? `//cdn-lostark.game.onstove.com/${detail.ItemTitle0.value.slotData.iconPath}` : null;
  const grade = detail ? detail.ItemTitle0.value.slotData.iconGrade : null;
  const textA = detail ? equipTextA(_.multipleValues(detail.ItemTitle0.value)) : null;
  const textB = detail ? _.getOnlyText(detail.NameTagBox0.value) : null;
  const hoverTextA = detail ? _.getOnlyText(detail.NameTagBox0.value) : null;

  return (
    <ColumnList
      backSrc={`//cdn-lostark.game.onstove.com${partImg}`}
      src={src}
      grade={grade}
      textA={textA}
      textB={textB}
      hoverTextA={hoverTextA}
      hoverTextB={hoverTextB}
      hoverTextC={hoverTextC}
      data={data.detail}
    >
      <AbilityDetail data={data}/>
    </ColumnList>
  )
}

function equipTextA(arr){
  const [first,,third] = arr;
  let desc = third;
  if(third === '장착중') desc = `${first}`;
  if(third === '') desc = `아이템 티어 0`;

  return desc;
}