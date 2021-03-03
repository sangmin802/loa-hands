import React from 'react';
import _ from 'utility';
import AbilityDetail from '../abilityDetail/index';
import ImgTextWrap from 'components/_imgTextWrap/index';
import HoverDetail from 'components/_hoverDetail/index';

export default ({
  data, 
} : {
  data?,
}) => {
  const {detail, partImg} = data;

  const hoverTextA = detail ? _.getOnlyText(detail.NameTagBox0.value) : null;
  const hoverTextB = detail ? _.multipleValues(detail.ItemTitle0.value)[0] : null;
  const hoverTextC = detail ? _.multipleValues(detail.ItemTitle0.value)[2] : null;
  const src = detail ? `//cdn-lostark.game.onstove.com/${detail.ItemTitle0.value.slotData.iconPath}` : null;
  const grade = detail ? detail.ItemTitle0.value.slotData.iconGrade : null;
  const textA = detail ? equipTextA(_.multipleValues(detail.ItemTitle0.value)) : null;
  const textB = detail ? _.getOnlyText(detail.NameTagBox0.value) : null;
  const backSrc= `//cdn-lostark.game.onstove.com${partImg}`;
  
  return (
    <>
      {detail &&      
        <HoverDetail
          backSrc={backSrc}
          src={src}
          grade={grade}
          hoverTextA={hoverTextA}
          hoverTextB={hoverTextB}
          hoverTextC={hoverTextC === -1 ? null : hoverTextC}
        >
          <AbilityDetail data={data}/>
        </HoverDetail>
      }
      <ImgTextWrap 
        backSrc={backSrc}
        src={src}
        grade={grade}
        text={[textA, textB]}
      />
    </>
  )
}

function equipTextA(arr){
  const [first,,third] = arr;
  let desc = third;
  if(third === '장착중' || third === -1) desc = `${first}`;
  if(third === '') desc = `아이템 티어 0`;

  return desc;
}