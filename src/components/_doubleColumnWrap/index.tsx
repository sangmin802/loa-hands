import React from 'react';
import './index.css';
import ColumnWrap from 'components/_columnWrap/index';

export default ({
  left, right, leftTitle, rightTitle, children
} : {
  left, right, leftTitle?, rightTitle?, children?
}) => {
  return (
    <div className='doubleColumnWrap'>
      <ColumnWrap title={leftTitle} arr={left} side="left">
        {children}
      </ColumnWrap>
      <ColumnWrap title={rightTitle} arr={right} side="right">
        {children}
      </ColumnWrap>
    </div>
  )
}
