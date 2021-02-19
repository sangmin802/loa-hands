import React from 'react';
import _ from 'utility';
import './index.css'

// 컴포넌트
import ListHover from './list-hover/index';
import ListImg from './list-img/index';
import ListContent from './list-content/index';
import ItemPartBox from 'template/ItemPartBox';
import SingleTextBox from 'template/SingleTextBox';
import TripodSkillCustom from 'template/TripodSkillCustom';

// AccGems부분, LisgImg, ListContent로 대체할 수 있도록 해보기
export default ({
  data, children
} : {
  data, children?
}) => {
  const {partImg, detail} = data;

  return(
    <div className="columnList hoverTarget">
      <ListHover
        partImg={partImg}
        detail={detail}
      >
        {children && {...children, props : {data}}}
        <div className="listDetailBottom">
          <ItemPartBox data={detail}/>
          <SingleTextBox data={detail}/>
          <TripodSkillCustom data={detail}>
            <AccGems />
          </TripodSkillCustom>
        </div>
      </ListHover>
      <ListImg 
        partImg={partImg}
        detail={detail}
      />
      {
        detail &&
        <ListContent 
          textA={equipTextA(_.multipleValues(detail.ItemTitle0.value))}
          textB={_.getOnlyText(detail.NameTagBox0.value)}
          itemGrade={detail.ItemTitle0.value.slotData.iconGrade}
        />
      }
    </div>
  )
};

function equipTextA(arr){
  const [first,,third] = arr;
  let desc = third;
  if(third === '장착중') desc = `${first}`;
  if(third === '') desc = `아이템 티어 0`;

  return desc;
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