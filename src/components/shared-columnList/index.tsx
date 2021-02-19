import React from 'react';
import _ from 'utility';
import './index.css'

// 컴포넌트
import ListHover from './list-hover/index';
import ListImg from './list-img/index';
import ListContent from './list-content/index';

export default ({
  children,
  backSrc,
  src,
  grade,
  textA,
  textB,
  hoverTextA,
  hoverTextB,
  hoverTextC,
  data
} : {
  children
  backSrc?,
  src?,
  grade?,
  textA?,
  textB?,
  hoverTextA?,
  hoverTextB?,
  hoverTextC?,
  data?
}) => {
  return(
    <div className="columnList hoverTarget">
      {data &&
        <ListHover
          backSrc={backSrc}
          src={src}
          grade={grade}
          hoverTextA={hoverTextA}
          hoverTextB={hoverTextB}
          hoverTextC={hoverTextC}
        >
          {children}
        </ListHover>
      }
      <ListImg 
        backSrc={backSrc}
        src={src}
        grade={grade}
      />
      {data &&        
        <ListContent 
          textA={textA}
          textB={textB}
          grade={grade}
        />
      }
    </div>
  )
};