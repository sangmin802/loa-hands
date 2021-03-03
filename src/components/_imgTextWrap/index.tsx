import React from 'react';
import _ from 'utility';
import './index.css'

// 컴포넌트
import ImgWrap from '../_imgWrap/index';
import TextWrap from '../_textWrap/index';

export default ({
  backSrc, src, grade, text
} : {
  backSrc?, src?, grade?, text
}) => {
  return(
    <div className="imgTextWrap">
      <ImgWrap 
        backSrc={backSrc}
        src={src}
        grade={grade}
      />
      <TextWrap 
        text={text}
        grade={grade}
      />
    </div>
  )
};