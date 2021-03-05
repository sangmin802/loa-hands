import React from 'react';
import _ from 'utility';
import './index.css';
import ImgTextWrap from 'components/_imgTextWrap/index';
import ItemPartBox from 'template/ItemPartBox';
import IndentString from 'template/IndentString';
import TripodSkillCustom from 'template/TripodSkillCustom';

const Index = ({data}) => {
  const {backSrc, detail} = data;
  const {src, grade, title, subTitle, itemPartBox, indentStringGroup, tripodSkillCustom} = detail;
  
  return(
    <div className='hoverDetail hoverContent zIndex10'>
      <div className="hoverDetailTop">
        <ImgTextWrap 
          backSrc={backSrc}
          src={src}
          grade={grade}
          text={[...subTitle, title]}
        />
      </div>
      <div className="hoverDetailBottom">
        {itemPartBox && <ItemPartBox data={itemPartBox} />}
        {indentStringGroup && <IndentString data={indentStringGroup}/>}
        {tripodSkillCustom && <TripodSkillCustom data={tripodSkillCustom} />}
      </div>
    </div>
  )
}

export default Index;