import React from 'react';
import _ from 'utility';
import './index.css';
import ImgTextWrap from 'components/_imgTextWrap/index';
import TextWrap from 'components/_textWrap/index';
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
        <ItemPartBox data={itemPartBox} />
        <IndentString data={indentStringGroup}/>
        <TripodSkillCustom data={tripodSkillCustom} />
      </div>
    </div>
  )
}

export default Index;