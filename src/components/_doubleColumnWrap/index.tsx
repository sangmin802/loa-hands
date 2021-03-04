import React from 'react';
import './index.css';
import ColumnWrap from 'components/_columnWrap/index';
import _ from 'utility';

export default ({
  data, type, leftTitle, rightTitle
} : {
  data, type, leftTitle?, rightTitle?
}) => {
  const [left, right] = _.arrayReducer(data, type)

  return (
    <div className='doubleColumnWrap'>
      <ColumnWrap title={leftTitle} arr={left} side="left" />
      <ColumnWrap title={rightTitle} arr={right} side="right" />
    </div>
  )
}
