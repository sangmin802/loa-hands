import React from 'react';
import CreateQualityGraph from 'components/userInfo-wrapAbility/qualityGraph/index';
import ItemPartBox from 'template/ItemPartBox';
import SingleTextBox from 'template/SingleTextBox';
import TripodSkillCustom from 'template/TripodSkillCustom';
import ImgTextWrap from 'components/_imgTextWrap/index';
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
  const cn = bool ? 'yesGems' : 'noGems'
  return (
    <div className={`${cn}`}>
      <ImgTextWrap 
        backSrc={bool ? `//cdn-lostark.game.onstove.com/${data.slotData.iconPath}` : null}
        grade={bool ? data.slotData.iconGrade : null}
        textA={bool ? _.getOnlyText(data.name) : desc}
        textB={bool ? desc : null}
      />
    </div>
  )
}