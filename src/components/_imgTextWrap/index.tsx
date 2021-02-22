import React from 'react';
import _ from 'utility';
import './index.css'

// 컴포넌트
import ListImg from './img/index';
import ListContent from './content/index';

export default ({
  backSrc,
  src,
  grade,
  textA,
  textB,
} : {
  backSrc?,
  src?,
  grade?,
  textA?,
  textB?,
}) => {
  return(
    <div className="imgTextList">
      <ListImg 
        backSrc={backSrc}
        src={src}
        grade={grade}
      />
      <ListContent 
        textA={textA}
        textB={textB}
        grade={grade}
      />
    </div>
  )
};