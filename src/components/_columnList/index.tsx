import React from 'react';
import ImgTextWrap from 'components/_imgTextWrap/index';
import HoverDetail from 'components/_hoverDetail/index';

import './index.css'

export default ({data, children} : {data, children?}) => {
  // 자식은 hoverDetail
  const {backSrc, detail} = data;
  return (
    <div className="columnList hoverTarget">
      {detail?.hover &&
        <HoverDetail data={data}>
          {children}
        </HoverDetail>
      }
      <ImgTextWrap
        backSrc={backSrc}
        grade={detail?.grade}
        src={detail?.src}
        text={detail ? [...detail.subTitle, detail.title] : []}
      />
    </div>

  )
};