import React from 'react';
import _ from 'utility';
import './index.css';
import ImgTextWrap from 'components/_imgTextWrap/index';

const Index = ({
  backSrc, src, grade,hoverTextA,hoverTextB,hoverTextC,children,
} : {
  backSrc?,src?,grade?,hoverTextA?,hoverTextB?,hoverTextC?,children?,
}) => {
  return(
    <div className='hoverDetail hoverContent zIndex10'>
      <div className="hoverDetailTop">
        <ImgTextWrap 
          backSrc={backSrc}
          src={src}
          grade={grade}
          text={[hoverTextA,hoverTextB,hoverTextC]}
        />
      </div>
      {children}
    </div>
  )
}

export default Index;